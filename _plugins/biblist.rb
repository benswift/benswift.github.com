require 'fileutils'
require 'bibtex'

module Jekyll
  class BibListPubsTag < Liquid::Tag

    def initialize(tag_name, bib_file, tokens)
      super
      # Seriously, don't ever ask me how long it took me to figure out that the
      # bib_file argument was ending up with whitespace attached to it and that
      # the .strip method was required... If you do I'll start to cry.
      @bib = BibTeX.open("_data/#{bib_file.strip}")

      @baseurl = Jekyll.configuration({})['baseurl']

      # NOTE: only need to uncomment this block when the pdfs have changed
      # needs to be run on Ben's machine. Oh well.
      # @bib.each do |b|
      #   copy_preprint_pdf b
      # end
    end

    def copy_preprint_pdf(b)
      pdf_filename = b[:file]
      if pdf_filename and pdf_filename.end_with?(".pdf")
        FileUtils.cp(pdf_filename, "assets/documents/preprints/#{File.basename(pdf_filename)}")
      end
    end

    def demunge_better_bibtex(str)
      str.gsub! "{{", ""
      str.gsub! "}}", ""
      str
    end

    def author_span(b)
      "<span class='author'>#{b[:author]}</span>".gsub "Swift, Ben", "<strong>Swift, Ben</strong>"
    end

    def bib_year(b)
      # a bit gross, but it'll do until I figure out how to get better BibLaTeX
      # to output dates consistently
      Date.strptime(b[:date], "%Y").year
    end

    def venue_span(b)
      venue_title = case b.type
      when :article
        "#{b[:journaltitle]} #{b[:volume]}(#{b[:number]})"
      when :inproceedings
        b[:booktitle]
      when :incollection
        "#{b[:booktitle]} (#{b[:publisher]})"
      else
        raise "Unknown type #{b.type}"
      end
      "<span class='venue'>#{demunge_better_bibtex(venue_title)}</span>"
    end

    def doi_a(b)
      doi = b[:doi]

      if doi
        "(<a href='https://doi.org/#{doi}'>doi</a>)"
      else
        ""
      end
    end

    def preprint_a(b)
      pdf_filename = b[:file]

      if pdf_filename
        "(<a href='#{@baseurl}/assets/documents/preprints/#{File.basename(pdf_filename)}'>pdf</a>)"
      else
        ""
      end
    end

    def render_bibitem(b)
      "<div id='#{b.key}'>

<p class='title'><a href='#{b[:url]}'>#{demunge_better_bibtex(b[:title])}</a> (#{bib_year(b)})</p>

<p>by #{author_span(b)}</p>

<p>in #{venue_span(b)} #{preprint_a(b)} #{doi_a(b)}</p>

</div>
"
    end

    def render_bib_year(year)
      output = @bib.query("@entry[year=#{year}]").map { |b| render_bibitem b }
      "<h3 id='#{year}-pubs'>#{year}</h3><div class='bibliography'>#{output.join(' ')}</div>"
    end

    def render(context)
      years = @bib.map { |b| bib_year b }.uniq.sort.reverse!
      year_links = years.map do |year|
        "<a href='##{year}-pubs'>#{year}</a>"
      end.join(" | ")
      "<p>#{year_links}</p>" + years.map { |year| render_bib_year year }.join("\n")
    end

  end

  class BibListGigsTag < Liquid::Tag

    def initialize(tag_name, bib_file, tokens)
      super
      @gigs = Jekyll.sites.first.collections["livecoding"].docs.map { |gig| gig.data }.select { |gig| gig["type"] == "curated" and not gig["hidden"] }
      @baseurl = Jekyll.configuration({})['baseurl']

    end

    def title_span(g)
      event_url = g["event_url"]
      if event_url
        "<span class='title'><a href='#{event_url}'>#{g['title']}</a></span>"
      else
        "<span class='title'>#{g['title']}</span>"
      end
    end

    def artist_p(g)
      artists = g["artists"].join(", ").gsub "Ben Swift", "<strong>Ben Swift</strong>"
      curators = g["curator"]

      if curators
        "<p>featuring <span class='author'>#{artists}</span>, curated by <span class='author'>#{curators}</span></p>"
      else
        "<p>featuring <span class='author'>#{artists}</span></p>"
      end

    end

    def venue_span(g)
      pretty_date = g["date"].strftime("%d %b '%y")
      "<span class='venue'>#{pretty_date} @ <a href='#{g['venue_url']}'>#{g['venue']}</a></span>"
    end

    def video_a(g)
      video = g["video_url"]

      if video
        "(<a href='#{video}'>video</a>)"
      else
        ""
      end
    end

    def render_gigitem(g)
      "<div>

<p class='title'>#{title_span(g)} (#{g['date'].year})</p>

#{artist_p(g)}

<p>#{venue_span(g)} #{video_a(g)}</p>

</div>
"
    end

    def render_gig_year(year)
      output = @gigs.select { |g| g["date"].year == year}.map { |g| render_gigitem g }
      "<h3 id='#{year}-gigs'>#{year}</h3><div class='bibliography'>#{output.join(' ')}</div>"
    end

    def render(context)
      years = @gigs.map { |g| g["date"].year }.uniq.sort.reverse!
      year_links = years.map do |year|
        "<a href='##{year}-gigs'>#{year}</a>"
      end.join(" | ")
      "<p>#{year_links}</p>" + years.map { |year| render_gig_year year }.join("\n")
    end

  end
end

Liquid::Template.register_tag('bib_list_pubs', Jekyll::BibListPubsTag)

Liquid::Template.register_tag('bib_list_gigs', Jekyll::BibListGigsTag)

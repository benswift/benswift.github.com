require 'fileutils'
require 'bibtex'

module Jekyll
  class BibListTag < Liquid::Tag

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

    def author_p(b)
      "<p class='author'>#{b[:author]}</p>".gsub "Swift, Ben", "<strong>Swift, Ben</strong>"
    end

    def bib_year(b)
      # a bit gross, but it'll do until I figure out how to get better BibLaTeX
      # to output dates consistently
      Date.strptime(b[:date], "%Y").year
    end

    def venue_span(b)
      venue_title = case b.type
      when :article
        b[:journaltitle]
      when :inproceedings, :incollection
        b[:booktitle]
      else
        raise "Unknown type #{b.type}"
      end
      "<span>#{demunge_better_bibtex(venue_title)}</span>"
    end

    def preprint_a(b)
      pdf_filename = b[:file]

      if pdf_filename
        "<a href='#{@baseurl}/assets/documents/preprints/#{File.basename(pdf_filename)}'>(preprint)</a>"
      else
        ""
      end
    end

    def render_bibitem(b)
      "<div id='#{b.key}'>

<p class='title'><a href='#{b[:url]}'>#{demunge_better_bibtex(b[:title])}</a></p>

#{author_p(b)}

<p><span class='date'>#{bib_year(b)}</span>, #{venue_span(b)}</p>

#{preprint_a(b)}

</div>
"
    end

    def render_bib_year(year)
      output = @bib.query("@entry[year=#{year}]").map { |b| render_bibitem b }
      "<h3>#{year}</h3><div class='bibliography'>#{output.join(' ')}</div>"
    end

    def render(context)
      years = @bib.map { |b| bib_year b }.uniq.sort.reverse!
      years.map { |year| render_bib_year year }.join("\n")
    end

  end
end

Liquid::Template.register_tag('bib_list', Jekyll::BibListTag)

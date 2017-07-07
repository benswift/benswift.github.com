---
title: Projects
layout: page
hidden: true
permalink: /projects/
---

I am a multidisciplinary researcher in the Research School of Computer Science
at
the [Australian National University](http://people.cecs.anu.edu.au/user/4919).
I'm interested in computational art, data visualisation, human-computer
interaction, and the socio-cultural aspects of the whole "machine learning"
thing. One thing I'm particularly excited about in these areas is the potential
of *liveness* (real-time human-in-the-loop interactivity) in programming tools
and workflows.

I have made
significant [open-source code contributions](https://github.com/benswift) to the
international research and livecoding communities, especially through my work
on [Extempore](https://github.com/digego/extempore): the state-of-the-art in
livecoding languages.

I am also an internationally-recognised digital artist, and have performed at
both local and international arts festivals---you can find examples of
my [livecoding on vimeo](https://vimeo.com/benswift/videos).

If you want to get in touch, email is best---you can reach me on
<ben.swift@anu.edu.au>.

Here are some of the things I'm working on.

{% assign sorted_projects = site.projects | sort: 'display_order' %}
{% for project in sorted_projects %}

{% unless project.hidden %}
<h2>{{ project.title }}</h2>
<article class="post-content">
{{ project.content | markdownify }}
</article>


{% assign related_posts = site.posts | where_exp:"post", "post.tags contains project.title" %}
<h3>Related blog posts</h3>
<ul class="list-reset" >
{% for post in related_posts limit:5 %}
<li>
<p class="post-meta">{{ post.date | date: site.date_format }}</p>
<a href="{{ post.url | prepend: "/blog" | absoluteurl }}" class="post-link"><h3 class="post-title">{{ post.title }}</h3></a>
</li>
{% endfor %}
</ul>
{% endunless %}

{% endfor %}

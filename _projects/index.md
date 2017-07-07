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

{% for project in site.projects %}
  {% unless project.hidden %}
  <h2>{{ project.title }}</h2>
  <article class="post-content">
    {{ project.content }}
  </article>
  {% endunless %}
{% endfor %}

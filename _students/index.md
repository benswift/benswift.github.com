---
title: Students
layout: page
hidden: true
permalink: /students/
---

I've been lucky to work with some amazing students.

{% for student in site.students %}
{% unless student.hidden %}
<h2>{{ student.name }}</h2>
<article class="post-content">
{{ student.content | markdownify }}
</article>
{% include related_posts.html tag=name_slug %}
{% endunless %}
{% endfor %}

## Potential students

If you're interested in doing Honours/Masters/PhD research with
me, [send me an email](mailto:ben.swift@anu.edu.au). I always have a few project
ideas kicking around, but I'm also open to hearing about the project/big idea
that excites *you*. Send me a one-paragraph description of what you're
interested in, and also a link to something you've made: a livecoding video, a
project on GitHub, an academic paper---even an interesting blog post.

## Teaching

<!-- Computers are just so *useful* in all domains of human endeavour, and giving -->
<!-- people the skills to do interesting things with them is really important work. -->
<!-- Because of this, I put a lot of effort into teaching undergraduate and -->
<!-- masters-level Computer Science in my current job in the Research School of -->
<!-- Computer Science at the Australian National University. -->

I'm currently teaching two courses:

- in **Semester 1 (Feb-Jun)** I teach *COMP2300: Computer Organisation and
  Program Execution*

- in **Semester 2 (Jul-Nov)** I teach *COMP1720: Art & Interaction in New
  Media*

If you're a student at the ANU, then I encourage you to take one (or both!) of
these courses---I think they're pretty great :)

In addition to this, I also give regular guest lectures & run workshops on
various topics in my areas of expertise.

---
title: Students
layout: page
permalink: /students/
---

I've been lucky to work with some amazing students. In the future, I'll
highlight some of their work here (or link to their own blogs).

{% for student in site.students %}
{% unless student.hidden %}
<h2>{{ student.name }}</h2>
<article class="post-content">
{{ student.content | markdownify }}
</article>
{% include related_posts.html tag=name_slug %}
{% endunless %}
{% endfor %}

## Come study with me

If you're interested in doing Honours/Masters/PhD research with me, [send me an
email](mailto:ben.swift@anu.edu.au). I always have a few project ideas kicking
around, but I'm also open to hearing about the project/big idea that excites
*you*. Send me

1. a **one-paragraph** description of what you're interested in, and
2. a link to something you've made: a livecoding video, a project on GitHub, an
   academic paper---even a blog post

Here are a few recent posts from my blog tagged "student projects".

{% include related_posts.html tag="student-projects" %}

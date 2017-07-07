---
title: Projects
layout: page
hidden: true
permalink: /projects/
---

Here are some of the things I'm working on.

{% for project in site.projects %}
  {% unless project.hidden %}
  <h2>{{ project.title }}</h2>
  <article class="post-content">
    {{ project.content }}
  </article>
  {% endunless %}
{% endfor %}

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
    {{ student.content }}
  </article>
  {% endunless %}
{% endfor %}

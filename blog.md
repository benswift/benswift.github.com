---
layout: default
pagination:
  enabled: true
permalink: /blog/
---

{% for post in paginator.posts %}
<section class="post">
  <p class="post-date">{{ post.date | date: "%d %b '%y" }}</p>
  <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
</section>
{% endfor %}

{% if paginator.total_pages > 1 %}
<ul>
  {% if paginator.previous_page %}
  <li>
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Newer</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li>
    <a href="{{ paginator.next_page_path | prepend: site.baseurl }}">Older</a>
  </li>
  {% endif %}
</ul>
{% endif %}
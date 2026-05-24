---
layout: page
title: Personal Projects
---

## My GitHub Projects

These projects are part of an ongoing learning practice where I explore ideas, experiment with technologies, and rebuild fundamentals through hands-on development.

They are intentionally not “finished products” in a production sense, but working spaces for trying approaches, documenting learnings, and understanding where there are opportunities to improve or go deeper in future work.

---

## Recent Projects


{% for project in site.projects %}
### [{{ project.title }}]({{ project.github_link }})

**What**: {{ project.what }}

**Purpose**: {{ project.purpose }}


**Key Learnings**: 
{% for item in project.learnings %}
- {{ item }}
{% endfor %}

**Challenges**: 
{% for item in project.challenges %}
- {{ item }}
{% endfor %}

**Future Directions**: 
{% for item in project.futures %}
- {{ item }}
{% endfor %}

---

{% endfor %}

## Explore My GitHub

For more projects and contributions, visit my [GitHub profile](https://github.com/yourusername).


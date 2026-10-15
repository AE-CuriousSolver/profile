# Anna-Marie Edeleanu: portfolio

Personal portfolio site, live at **https://ae-curioussolver.github.io/profile/**.

A reference page that sits behind my CV: where I've worked, how I work, the tools I use and what I'm building. Built with Jekyll and published by GitHub Pages, which builds the site automatically whenever `main` is pushed.

## Pages

| Page | URL | Built from |
|---|---|---|
| Home | `/profile/` | `_data/home.yml` + `_layouts/home.html` |
| Experience | `/profile/employment` | `_employment/`, `_projects/`, `_data/experience.yml` + `_layouts/employment.html` |
| About | `/profile/about` | `_data/about.yml` + `_layouts/about.html` |

Old addresses (`/profile/profile`, `/profile/experience`, `/profile/projects` and `/profile/cv`) redirect to the new pages, so existing links keep working.

## Editing content

Words live in data files, separate from the layout, so content changes never touch HTML.

- **Homepage, About, Experience page headings:** edit `_data/home.yml`, `_data/about.yml` or `_data/experience.yml`.
- **A role:** each role is one file in `_employment/`.
  - Technical roles: `type: "technical"` and `featured: true`. They appear on the timeline; the Markdown under the front matter is the "Read more" detail.
  - Other roles: `featured: false` and a `type` of `customer-service`, `entertainer` or `childcare`. They appear under "Beyond tech".
  - Every role needs a `sort_key` in `"YYYY-MM"` form (its start date). Roles are listed newest first by this key.
- **A project:** one file in `_projects/`, with `title`, `github_link`, `what`, `purpose`, `learnings`, `challenges` and `futures`.
- **Name, email, links and CV:** `_config.yml`. If the CV PDF is renamed, also update the path in `cv.md`.

Never add phone numbers: the site and this repository are public.

## Design

Three layers, all in `assets/css/site.css`:

- **Paper:** clean text sections that carry the proof (experience, facts).
- **Whiteboard:** dot-grid panels with hand-drawn diagrams (how I work, skills, projects).
- **Ink:** coral and teal accents, a highlighter mark and handwritten notes for personality.

Fonts are Fraunces (headings), Figtree (body) and Caveat (handwriting), loaded from Google Fonts. Colours are defined once as variables at the top of `site.css`.

`assets/js/site.js` makes the whiteboard sketches draw themselves and the headline numbers count up as they scroll into view. Without JavaScript, or with reduced motion turned on, everything shows in its finished state.

## Running it locally

Needs Ruby and Bundler.

```bash
bundle install
LC_ALL=en_US.UTF-8 bundle exec jekyll serve --livereload
```

Then open http://localhost:4000/profile/. Changes to `_config.yml` need a restart; everything else reloads automatically.

## Publishing

Push to `main`. GitHub Pages rebuilds the site within a few minutes.

GitHub Pages only runs [its supported plugins](https://pages.github.com/versions/), so the site doesn't rely on custom Ruby plugins. `theme: minima` stays in `_config.yml` even though every layout is overridden: without it, GitHub Pages falls back to its default theme and the build breaks.

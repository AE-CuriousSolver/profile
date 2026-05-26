# Professional Portfolio

A Jekyll-based portfolio website showcasing professional experience, technical skills, and personal projects. Built with Ruby, Jekyll, JavaScript, and modern CSS with a responsive sidebar layout and interactive employment filtering.

**Status:** Functional prototype. All core features working. In active development for content updates.

---

## 🎯 What This Portfolio Does

- **Profile:** Presents professional overview and key strengths
- **Employment:** Displays tech excperence and full work history
- **Skills Showcase:** Organized view of technical and professional capabilities
- **Project Portfolio:** Links to your GitHub projects with detailed descriptions
- **CV Download:** Provides access to your resume/CV PDF
- **Responsive Design:** Optimized for desktop, tablet, and mobile viewing

---

## 🛠️ Tech Stack

### Core Technologies
- **Jekyll** (v4+) — Static site generator for Ruby projects
- **Ruby** — Dependency management and site building
- **Markdown** — Content authoring for pages and collections
- **HTML5** — Semantic page templates
- **CSS3** — Responsive styling with CSS Grid and Flexbox
- **JavaScript (Vanilla)** — Client-side filtering logic

### Project Structure
- **Collections:** `_employment/` and `_projects/` for dynamic content management
- **Layouts:** Templated pages (`default.html`, `home.html`, `page.html`, `employment.html`)
- **Assets:** Modular CSS files, JavaScript filters, images, and downloadable files
- **Configuration:** `_config.yml` centralizes site metadata and Jekyll settings

### Dependencies
See `Gemfile` for complete list (includes Jekyll, Github Pages compatibility, plugins)

---

## 📁 Directory Structure

See `STRUCTURE.txt` for the complete file tree and navigation guide.

**Quick reference:**
```
portfolio/
├── _config.yml              ← Site configuration (start here)
├── index.md                 ← Homepage
├── employment.md            ← Employment page with filters
├── experience.md            ← Skills page
├── projects.md              ← Projects page
├── _layouts/                ← HTML templates
├── _employment/             ← Employment history (collection)
├── _projects/               ← Personal projects (collection)
└── assets/                  ← CSS, JavaScript, images, files
```

---

## 🚀 Getting Started

### Prerequisites
- Ruby 2.7+
- Bundler (`gem install bundler`)
- Git

### Installation & Setup

1. **Install dependencies:**
   ```bash
   cd portfolio
   bundle install
   ```

2. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` in your browser

3. **Customize configuration:**
   Edit `_config.yml` with your name, email, phone, job title, and GitHub username

4. **Update content:**
   - Edit `index.md` for your homepage summary
   - Edit `experience.md` for your skills
   - Edit `projects.md` for project descriptions
   - Replace sample files in `_employment/` with your actual work history
   - Replace sample files in `_projects/` with your GitHub projects

---

## 📝 How to Add & Edit Content

### Adding Employment History

1. Create a new file in `_employment/` (e.g., `05-my-role.md`)
2. Use this template:

```markdown
---
title: "Job Title"
company: "Company Name"
location: "City, State"
start_date: "Jan 2023"
end_date: "Present"
type: "technical"              # technical | customer-service | childcare
featured: true
overview: "Job description"
skills: "Skills learnt on the job"
detail: "Detail of expereince"
---

## Responsibilities
- Bullet point describing your role
- Another achievement or responsibility

## What I Gained
- Key learning or skill developed
- Technology or methodology learned
```

### Adding Projects

1. Create a new file in `_projects/` (e.g., `04-my-project.md`)
2. Use this template:

```markdown
---
title: "Project Name"
github_url: "https://github.com/yourusername/project-name"
technologies: ["JavaScript", "React", "Node.js"]
---

## What It Is
Brief description of what the project does.

## Why I Built It
Context and motivation.

## What I Learned
Key takeaways and skills gained.

## Future Improvements
Ideas for enhancement or expansion.
```

### Editing Pages

**Homepage** (`index.md`): Update your professional summary and introduction

**Experience** (`experience.md`): List your technical and professional skills

**Projects** (`projects.md`): Describe your personal projects

**CV** (`cv.md`): Provide your CV information and resume download

---

## 🎨 Customizing Appearance

### Change Color Scheme

Edit `assets/css/style.css`:

```css
:root {
  --primary-color: #2c3e50;      /* Headers, main text */
  --secondary-color: #3498db;    /* Links, buttons, badges */
  --accent-color: #e74c3c;       /* Hover effects, highlights */
}
```

### Adjust Sidebar Width

Edit `assets/css/sidebar.css`:

```css
.profile-sidebar {
  flex: 0 0 300px;  /* Change 300px to your desired width */
}
```

### Customize Fonts

In `assets/css/style.css`, modify font families:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1, h2, h3 {
  font-family: 'Trebuchet MS', sans-serif;
}
```

---

## 🧪 Testing & Deployment

### Test Locally

```bash
cd portfolio
bundle install
bundle exec jekyll serve
```

Then test:
- All pages load correctly
- Employment filters work (type and period filters)
- Links are functional
- Mobile responsiveness (test at different screen sizes)

### Responsive Design Breakpoints

- **Desktop** (1200px+): Sidebar on left, wide content area
- **Tablet** (768px–1199px): Sidebar visible, narrower layout
- **Mobile** (<768px): Stacked layout, full-width content
- All filters and links work on touch devices

### Publish to GitHub Pages

Generic loction of GitHub Pages can be found at `https://yourusername.github.io`. Updates can take a few minutes to display

---

## 🔧 Troubleshooting

### Issue: Site doesn't build locally

**Symptoms:** `bundle exec jekyll serve` fails with errors

**Check:**
1. You have Ruby 2.7+ installed: `ruby --version`
2. Bundler is installed: `bundle --version`
3. Dependencies are installed: `bundle install` (run this in the portfolio directory)
4. No syntax errors in `_config.yml` or frontmatter in Markdown files

**Solution:** Delete `Gemfile.lock` and run `bundle install` again

---

### Issue: Styling or colors not correct

**Symptoms:** CSS changes don't appear, colors are wrong

**Check:**
1. You edited the correct CSS file:
   - `assets/css/style.css` for global colors and fonts
   - `assets/css/sidebar.css` for sidebar-specific styling
2. CSS variables are correct in `_config.yml` or `style.css`
3. Browser cache: Hard refresh (`Ctrl+Shift+R` or `Cmd+Shift+R`)
4. No syntax errors in CSS (missing semicolons, brackets)

**Solution:** Check browser developer tools (F12) for CSS parsing errors; ensure Jekyll rebuilds after your edits

---

### Issue: Text not displaying or layout broken

**Symptoms:** Content missing, strange layout, overlapping elements

**Check:**
1. Markdown frontmatter is valid (three dashes above and below)
2. YAML syntax is correct (proper indentation, no special characters)
3. File is saved in the correct location with correct naming
4. No missing or mismatched HTML tags in layout files

**Solution:** Verify frontmatter formatting; check `_config.yml` for typos

---

### Issue: Employment filters not working

**Symptoms:** Filter buttons don't respond, employment items don't hide/show

**Check:**
1. JavaScript is enabled in browser
2. Filter buttons have correct attributes in `_layouts/employment.html`
3. Employment files have correct `type` and `period` values in frontmatter
4. Browser console (F12) for JavaScript errors

**Solution:** Check that employment YAML matches filter values exactly (case-sensitive)

---

### Issue: Page not found or links not working

**Symptoms:** 404 errors, broken links between pages

**Check:**
1. File paths match Jekyll's routing (e.g., `index.md` → `/`, `about.md` → `/about`)
2. Links use correct relative paths (`/experience` not `/experience.md`)
3. Filename matches in links (no typos)
4. Files are in the correct directory and not in `_site/`

**Solution:** Check `_config.yml` for `baseurl` setting; ensure files are committed to Git

---

### Issue: Images not showing

**Symptoms:** Broken image icons, missing profile photo

**Check:**
1. Image file exists in `assets/images/`
2. Image path in Markdown is correct (`/assets/images/filename.jpg`)
3. File permissions allow reading (not 000)
4. Image format is supported (JPG, PNG, SVG, GIF)

**Solution:** Check browser developer tools for actual image path being requested; ensure file exists at that location

---

## 📚 Helpful Resources

- **[Jekyll Official Documentation](https://jekyllrb.com/docs/)** — Complete guide to Jekyll features, collections, and theming
- **[GitHub Pages Guide](https://docs.github.com/en/pages)** — How to deploy Jekyll sites with GitHub Pages
- **[Markdown Reference](https://www.markdownguide.org/)** — Markdown syntax for content authoring
- **[CSS Grid & Flexbox Guide](https://web.dev/learn/css/)** — Layout techniques used in this portfolio
- **[YAML Syntax](https://yaml.org/)** — Understanding frontmatter and configuration files

---

## 📋 Customization Checklist

### Essential (Do First)
- [ ] Edit `_config.yml` with your name, email, phone, job title
- [ ] Add your profile photo at `assets/images/profile.jpg`
- [ ] Update `index.md` with your professional summary

### High Priority
- [ ] Replace employment history in `_employment/` directory
- [ ] Update `experience.md` with your actual skills
- [ ] Add your projects to `_projects/` directory
- [ ] Update `projects.md` page content

### Medium Priority
- [ ] Add resume PDF to `assets/files/resume.pdf`
- [ ] Update `cv.md` with full CV details
- [ ] Customize color scheme in `assets/css/style.css`

### Optional Enhancements
- [ ] Adjust sidebar width in `assets/css/sidebar.css`
- [ ] Customize fonts in CSS
- [ ] Add additional employment types or filters
- [ ] Expand project details with more sections

---

## 🔄 Ongoing Maintenance

- **Review regularly:** Update portfolio every 6 months
- **Add new roles:** Update `_employment/` as you change jobs or take on new projects
- **Keep skills current:** Regularly update `experience.md` with new technologies learned
- **Showcase new work:** Add personal projects as you build them
- **PDF updates:** Keep `assets/files/resume.pdf` current
- **Simple updates:** Edit Markdown files and push to GitHub — changes appear within minutes

---

## 📝 Known Issues

- Employment timeline dates: Verify date formatting is consistent across all entries

---

## ❓ Questions?

Refer to `STRUCTURE.txt` for a detailed walkthrough of every file and what it does. For Jekyll-specific questions, consult the [official Jekyll documentation](https://jekyllrb.com/docs/).

Happy building! 🚀

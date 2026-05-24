# Professional Portfolio 

- a ruby project with JS, jerkl 
- assited with VS AI agent 
- go into detail about my technical experience and recent employment in other areas and what i gained 
- idea to exoand on this for personal projects as well as personal learnigns 
- opportinity to build more of a portolfio for my achievements, my interests and work / porjoct potential 
- not tested and not robust, like a playground 

What this does:
- name, contact details 
- overview of my professional ability and interests and working styles 
- what tech stack is used 


Known bugs:
Employment timeline - incorrect date


Still to do:
- add CV PDF
### 7. Create CV (`cv.md`)
- Update professional summary
- List experience, education, skills
- Add link to resume PDF

### 8. Add Resume PDF
- Generate your resume and save as: `assets/files/resume.pdf`

- add professional photo 
-   Place your photo at: `assets/images/profile.jpg`
-   Recommended: 400x400px square image, professional headshot
## Step 2: Add Your Profile Photo (2 minutes)
- Save your photo as `assets/images/profile.jpg`
- Recommended: 400x400px, square, professional headshot
- Portrait mode or face-centered compositions work best

- add drop down option in projects for lots of detail 
- tech expereince is long, format better so not long scrolling page 
---

## 📁 Directory Structure

```
portfolio/
├── _config.yml              # Updated with employment collection
├── _employment/             # Employment history
│   ├── 01-senior-engineer.md
│   ├── 02-fullstack-dev.md
│   ├── 03-support-specialist.md
│   └── 04-activity-coordinator.md
├── _projects/               # Personal projects
│   ├── 01-task-cli.md
│   ├── 02-data-dashboard.md
│   └── 03-web-scraper.md
├── _layouts/
│   ├── default.html        # Base layout
│   ├── home.html           # Homepage with sidebar
│   ├── page.html           # Standard pages
│   └── employment.html     # Employment with filters
├── assets/
│   ├── css/
│   │   ├── style.css       # Base styling
│   │   └── sidebar.css     # Sidebar & filter styles
│   ├── js/
│   │   └── filters.js      # Client-side filtering
│   ├── images/             # Profile photo, screenshots
│   └── files/              # CV PDF
├── index.md                # Homepage
├── employment.md           # Employment page
├── experience.md           # Skills & expertise
├── projects.md             # Personal projects
└── cv.md                   # CV/Resume download
```

---

How to add things:

- adding a new employment ... 
- adding a new github project ... 


## 🎨 Customization Options

### Change Colors
Edit `assets/css/style.css`:
```css
:root {
  --primary-color: #2c3e50;      /* Main text, headers */
  --secondary-color: #3498db;    /* Links, buttons, badges */
  --accent-color: #e74c3c;       /* Hover effects, alerts */
}
```
- drop downs 
- modal edits
- adding more layouts, markdown vs html 

### Customize Sidebar
Edit `assets/css/sidebar.css` to adjust:
- Sidebar width (default 300px)
- Colors and gradients
- Font sizes
- Spacing

---

## 🧪 Testing Locally

```bash
cd portfolio
bundle install
bundle exec jekyll serve
```
Then visit `http://localhost:4000` and test:


## Step 7: Test Locally (5 minutes)
```bash
cd /Users/annabanana/demo/portfolio

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Open browser to http://localhost:4000
# Test all pages and employment filters
```

## 📱 Mobile Testing

Test on different screen sizes:
- **Desktop** (1200px+): Sidebar on left, wide content area
- **Tablet** (768px-1024px): Sidebar still visible but narrower
- **Mobile** (<768px): Stacked layout, full-width content
- All filters and links work on touch devices

---

## 🔧 Troubleshooting

overview of where things can be found ie.
- styling/colour issue ? look here ...

- Text not displaying correctly ... look into this .. 

- page not found or link not working .. 


---

## 📚 helpful Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Markdown Reference](https://www.markdownguide.org/)
- [CSS Grid & Flexbox](https://web.dev/learn/)

---

## 🎨 Customization Tips

### Change Color Scheme
Edit `assets/css/style.css`, update:
```css
:root {
  --primary-color: #2c3e50;      /* Headers, main text */
  --secondary-color: #3498db;    /* Links, buttons, badges */
  --accent-color: #e74c3c;       /* Hover effects */
}
```

### Adjust Sidebar Width
Edit `assets/css/sidebar.css`:
```css
.profile-sidebar {
  flex: 0 0 300px;  /* Change 300px to desired width */
}
```

### Customize Fonts
Edit `assets/css/style.css`, change font families in `body` and `h1, h2, h3` rules


## Phase 9: Final Polish (Optional)

### Color Customization
- [ ] Edit `assets/css/style.css`
- [ ] Change `--primary-color`, `--secondary-color`, `--accent-color`
- [ ] Test locally and redeploy

### Font/Spacing Adjustments
- [ ] Edit `assets/css/sidebar.css` for sidebar width
- [ ] Edit `assets/css/style.css` for font changes
- [ ] Test responsive layout

### Additional Customization
- [ ] Add more employment types (edit `_layouts/employment.html`)
- [ ] Add custom sections to pages
- [ ] Link to social profiles beyond GitHub/LinkedIn

---

Your professional portfolio is now live at:
## https://yourusername.github.io

### Keep it Updated
- Add new employment as you progress in careers
- Update skills as you learn new technologies
- Add personal projects as you build them
- Just edit files and push to GitHub - changes appear in minutes!

### Maintenance
- Review portfolio every 6 months
- Add recent projects and experience
- Update employment filters as needed
- Keep CV/resume PDF current

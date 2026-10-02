# Maisha Farzana — Portfolio

Personal portfolio for machine learning, data and automation work.
Plain HTML, CSS and JavaScript. No build step, no dependencies.

**Live site:** https://YOUR-GITHUB-USERNAME.github.io/maisha-portfolio/

## Folder structure

```
maisha-portfolio/
├── index.html            Page content
├── 404.html              "Page not found" page
├── .nojekyll             Tells GitHub Pages to serve files as they are
└── assets/
    ├── css/style.css     All styles (colours are at the top, in :root)
    ├── js/data.js        ← Edit links and project cards here
    ├── js/main.js        Carousel, filters, card drawing
    └── img/favicon.svg   Browser tab icon
```

## Update links and projects

Open `assets/js/data.js`:

- `fiverr` – your Fiverr profile URL
- `githubUser` – your GitHub username
- `repo` on each card – the GitHub repository name for that project
- Add a new card by copying one `{ ... }` block inside `PROJECTS`

## Run locally

Double-click `index.html`, or run a small server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Deploy

| Host | How |
|---|---|
| GitHub Pages | Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` |
| Netlify | app.netlify.com/drop → drag the project folder |
| Vercel | New Project → import this repo → Framework: *Other* → Deploy |
| Render | New → Static Site → connect repo → Publish directory: `.` |
| Cloudflare Pages | Create project → connect repo → no build command, output `/` |

## License

© 2026 Maisha Farzana. All rights reserved.

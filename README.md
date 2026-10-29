# Pradeep Vempati — Portfolio

Personal portfolio of **Pradeep Vempati**, an entry-level software developer (front-end) from Hyderabad.
Built with **React 18, Vite and Framer Motion**. Black theme with a coffee-brown→caramel accent and Plus Jakarta Sans type; visitors can switch to a light theme (their choice is remembered). All colours are tokens in `src/styles/variables.css`.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

## Updating content

All content lives in `src/data/` — components never need editing to change text.

| What | Where |
|---|---|
| Name, role, headline, intro, email, phone, social links, About text, quick facts, stats | `src/data/site.js` |
| Technical skills | `src/data/skills.js` |
| Work experience / internships | `src/data/experience.js` |
| Projects (challenge, solution, role, contributions, links) | `src/data/projects.js` |
| Education timeline and certifications | `src/data/education.js` |
| "How I build" steps | `src/data/process.js` |
| Page title, description, social preview | `index.html` |

Empty values are hidden, so there are never dead links:

- **Résumé** — save the PDF as `public/resume.pdf`. The "Download résumé" buttons (hero and About) appear automatically once the file exists.
- **GitHub / LinkedIn** — fill `site.social.github` / `site.social.linkedin`.
- **Phone** — fill `site.phone` to show it in the Contact section.
- **Project links** — fill `github` / `live` per project to show "Source code" / "Live demo" buttons.
- **Project screenshots** — save 1600×1000 `.webp` files in `public/projects/` and set `image: 'projects/name.webp'`. Without one, a generated cover is shown.
- **Certificate links** — fill `url` on a certification to make its card link to the verification page.
- **Photos** — `public/portrait.webp` (4:5, hero) and `public/avatar.webp` (square, About card), set via `site.portrait` / `site.avatar`. Clear either to show the PV monogram instead.

`reference-assets/` holds photos from the original reference template. They are not imported or deployed and are git-ignored.

## Contact form

Without configuration the form validates input and opens the visitor's email app with the message pre-filled.
To send directly, create a free form at <https://formspree.io> and add to `.env`:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Add the same variable in your hosting provider's settings.

## Deploy

**Live site:** <https://vempatipradeepchowdary.github.io/pradeep-vempati-portfolio/>

The site deploys to **GitHub Pages** automatically: every push to `main` runs
`.github/workflows/deploy.yml`, which builds the site and publishes `dist/`.
Progress is visible in the repository's **Actions** tab.

One-time setup (already needed only once per repository): **Settings → Pages → Build and deployment → Source: GitHub Actions**.

To update the site after editing:

```bash
git add .
git commit -m "Describe the change"
git push
```

To enable direct contact-form sending in production, add a repository variable
`VITE_FORM_ENDPOINT` (Settings → Secrets and variables → Actions → Variables) and push again.

`vite.config.js` uses `base: './'`, so the same build also works on Vercel or Netlify
(build `npm run build`, output `dist`).

## Accessibility & performance

Skip link, semantic landmarks, one `h1`, visible focus rings, native `<dialog>` for project details (focus trap + Escape),
`aria-current` navigation, labelled form fields with announced errors, and `prefers-reduced-motion` respected throughout.
Initial JS ≈ 100 KB gzipped; no images are loaded until you add them.

# portfolio

Personal site for **allenzhangsg.com** — built with [Astro](https://astro.build), deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

## Structure

```
public/
  cv.html        Print-ready resume (A4)
  favicon.svg
  _redirects     www → apex
src/
  layouts/Base.astro
  components/    Hero, About, Experience, Skills, Projects, Footer, ThemeToggle, SectionLabel
  pages/index.astro
  styles/global.css
astro.config.mjs
```

## Deploy

Cloudflare Pages is wired to this repo via Git integration:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 20

Pushing to `main` triggers a production deploy. PRs get preview URLs.

The custom domain `allenzhangsg.com` is attached in the CF Pages → Custom domains panel.

# portfolio

Personal site for **allenzhangsg.com** — built on the [webrating/starfolio](https://github.com/webrating/starfolio) Astro template, deployed to Cloudflare Workers via Wrangler.

## Stack

Astro v6 (server output) · React · Tailwind v4 · shadcn/ui · `@astrojs/cloudflare` adapter.

## Develop

Requires Node ≥ 22.12.

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # → dist/
npm run preview      # build + wrangler dev (Worker preview)
npm run deploy       # build + wrangler deploy (production)
```

## Edit your data

| File | Controls |
| --- | --- |
| `src/data/resume.tsx` | Name, bio, experience, projects, skills, education, contact |
| `src/data/config.ts` | Site URL, theme colors, font size |
| `src/content/blog/*.mdx` | Blog posts (none yet — drop an `.mdx` file to publish) |

## Notable customizations vs. upstream Starfolio

- Fonts: Inter (sans) + Geist Mono (mono).
- `sections.hackathons` and `sections.photos` set to `enabled: false`.
- Blog kept but intentionally not linked from the navbar.
- Original A4 résumé preserved at `public/cv.html`.

## Deploy

The repo is wired to Cloudflare via `wrangler.jsonc`:
- Production routes: `allenzhangsg.com` and `www.allenzhangsg.com`.
- `nodejs_compat` is enabled (required by `@astrojs/cloudflare`).
- Run `npm run deploy` locally — that builds and runs `wrangler deploy`. CF builds aren't needed.

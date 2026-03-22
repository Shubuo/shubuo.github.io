# burakyoruk.com.tr

Personal site for `burakyoruk.com.tr`.

Current stack:
- `Astro`
- `Tailwind CSS v4`
- static publish on GitHub Pages

## Structure

This repository currently serves the site from the `gh-pages` branch root.

Source files live under:
- `src/`
- `public/`

Published static files also live at the repository root:
- `index.html`
- `tr/index.html`
- `_astro/`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`

This is intentional because GitHub Pages is configured to publish from:
- branch: `gh-pages`
- folder: `/ (root)`

## Pages

Current implemented pages:
- `/`
- `/tr/`

Planned next phases:
- `/cv/`
- `/blog/`

## Design Direction

The current homepage is a rebuilt Astro implementation with:
- a left profile rail
- a compact editorial homepage layout
- a three-card content band
- a separate contact panel
- light/dark theme support

Design note:
- the previous WordPress `Resume X` structure influenced the information architecture and overall composition
- the current implementation is not a WordPress export and does not depend on the old `resume-x` codebase

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Publishing

Build output is generated into:

```bash
dist/
```

Because GitHub Pages publishes from the repository root on `gh-pages`, updated build output must be synced to the root before publishing.

## Content

Primary content is managed from:

```text
src/data/site.ts
```

Layout and page structure are mainly in:

```text
src/layouts/BaseLayout.astro
src/pages/index.astro
src/pages/tr/index.astro
```

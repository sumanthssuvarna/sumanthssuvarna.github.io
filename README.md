# Sumanth Suvarna Portfolio

Personal portfolio website for `sumanthssuvarna.github.io`, built with Next.js and exported as a static site for GitHub Pages.

## Project Structure

- `src/pages/` - Next.js pages.
- `src/components/` - Reusable portfolio sections.
- `src/styles/` - Global Tailwind CSS.
- `public/images/` - Static image assets.
- `next.config.mjs` - Static export configuration.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is exported to `out/`. Do not commit `node_modules/`, `.next/`, or `out/`.

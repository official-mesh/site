# officialmesh-site

The marketing site for the Official Mesh suite. Built with [Astro](https://astro.build/) + Tailwind, deployed to <https://officialmesh.org>.

## Develop

```bash
npm install
npm run dev               # localhost only
npm run dev:network       # listen on 0.0.0.0 (LAN preview)
```

## Build

```bash
npm run build             # runs astro check, then astro build → ./dist
npm run preview           # serve ./dist locally
```

## Lint

```bash
npm run lint
npm run lint:fix
```

## Content

Component cards (one per suite product) live in `src/content/components/` as
MDX files. Each card has frontmatter validated against the schema in
`src/content/config.ts` (`name`, `tagline`, `order`, `languages`,
`platforms`, `repo`, `install`, `highlights`) and a short body paragraph.

Pages live in `src/pages/`; the dynamic `[slug].astro` route renders any
component card by slug.

Reusable components live in `src/components/` and the shared layout in
`src/layouts/PageLayout.astro`.

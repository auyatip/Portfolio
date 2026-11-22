# Athip Thumakul — Software Engineer portfolio

A responsive React / Vite portfolio with a navy and electric-blue design system, self-hosted Geist, persistent light/dark themes, and reduced-motion-aware Framer Motion interactions.

## Development

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run typecheck` — strict TypeScript checking of the active JavaScript/JSX application through JSDoc.
- `npm run build` — builds assets and prerenders the homepage, five case studies, and a 404 page.
- `npm run verify:build` — verifies generated content, metadata, headings, anchor targets, and local assets.
- `npm run preview` — previews the production output.

## Structure

- `src/pages/`: homepage and shared case-study page layout.
- `src/ui/`: navigation, contact form, and reusable project/media/button components.
- `src/projects.js`: project content, links, stacks, and case studies.
- `src/experience.js`: original professional experience and achievements.
- `src/profile.js`: contact email.
- `src/index.css`: theme tokens, responsive layouts, component styles, and motion preferences.
- `scripts/prerender.mjs`: generates complete HTML for each route with individual SEO metadata.
- `src/Components/`: retained original source for content provenance; no longer mounted by the app.

## Content and functionality

The redesign preserves the original four featured projects, employers, dates, education, CV, social links, and EmailJS service/template configuration. The 40% query improvement and 500-record payment operation come from the original experience content. The reference mockup's projects and metrics are not used as factual claims. Case studies describe documented capabilities and explicitly note when project-specific measurements are unavailable.

The original footer display email differs from the original working mailto links. This implementation consistently preserves the mailto address (`atipthummakul@gmail.com`) in `src/profile.js`; verify it before changing it. The contact form retains the original EmailJS template field names. No live message was sent during validation.

## Hosting

Serve `dist/` on a static host that supports directory index files, including `/projects/eduflow/`, `/projects/athip-house/`, `/projects/doctor-schedule/`, `/projects/web-ordering/`, and `/projects/nestjs-postgresql/`. Use `dist/404.html` for unknown routes. No new hosting account or deployment is required for this repository redesign. Add canonical URLs, an absolute social preview image, and a sitemap once the production domain is confirmed.

Browser-based visual and interaction QA could not run because the browser access host was unavailable. Before publishing, review at 360px, 768px, and 1440px; check mobile navigation, keyboard focus, both themes and persistence, reduced motion, direct case-study refreshes, CV download, and contact success/error states.

## English / Thai

The header language switch preserves the current project and section. English routes use `/`; Thai routes use `/th/`, including `/th/projects/<slug>/`. The language choice is stored locally; a fresh visit to `/` restores a saved Thai preference. Explicit project URLs determine their own language. Language navigation continues to work when storage is unavailable.

`src/th.json` contains the Thai translations; original English copy remains the translation key. `src/language.js` and `src/LanguageProvider.jsx` supply language context and localized internal links. Thai uses self-hosted Noto Sans Thai alongside Geist. Project names, technology names, company names, metrics, and the existing CV file are preserved.

The production build now prerenders 12 localized pages plus the 404 page, with localized document language and SEO descriptions and alternate-language links. `npm run verify:build` checks both language variants, project-preserving language switches, localized navigation, route assets, metadata, and anchors. Browser interaction and visual verification remain unavailable in this session.

EDUFLOW is included as a fifth project in English and Thai, using Next.js and MySQL. Its description is based on the supplied interface previews. The supplied login and permission screenshots and Railway demo link are included. Contribution details and source link remain pending.

# Georgia Plaster &amp; Tile — Luxury Website

A bespoke, interactive redesign for **Georgia Plaster &amp; Tile** (East Cobb / Greater Atlanta luxury pool tile, plaster &amp; renovation).

**Live preview:** https://gabip3.github.io/georgia-plaster-tile/

## Highlights
- Cinematic animated-water hero, custom water-drop cursor and click ripples
- "Living Tiles" that morph between real materials on hover
- Filterable portfolio with before/after slider
- Horizontal-scroll material library, animated process timeline
- Pool-edge section dividers (coping + waterline tile + water)
- Full SEO: metadata, Open Graph, JSON-LD (LocalBusiness, Service, FAQ, Breadcrumb), sitemap, robots
- Fully static, accessible, responsive, reduced-motion aware

## Tech
Next.js 15 (App Router, static export) · React 19 · Tailwind CSS · Framer Motion · Lenis · Lucide.

## Develop
```bash
npm install
npm run dev
```

## Build (static site -> ./out)
```bash
# Root-served (Netlify, custom domain):
npm run build

# GitHub Pages project site (served at /georgia-plaster-tile/):
NEXT_PUBLIC_BASE_PATH=/georgia-plaster-tile npm run build
```

## Notes
- Photos are premium placeholders (Unsplash); swap the ids in `lib/content.ts` for the client's own photography.
- The brand logo lives at `public/logo.png` (transparent); it renders white on the dark UI.

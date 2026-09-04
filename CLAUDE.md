# Abrain Smart Lock — Website

Recreation of abrain.com.my (Abrain / AHD Distributions (M) Sdn. Bhd., SSM 1180073-M),
a Malaysian 304 stainless steel smart-lock brand, in a new **industrial / professional**
theme. Built from the FastEV `build-business-website` scaffold.

## Brand
- Value prop: "Keyless entry, engineered in stainless steel" — Malaysia's own smart lock since 2018.
- Products: 13 models in 3 door families (see `lib/products.ts`): wooden/security (M/X series),
  grille (XC/G/R), glass (011D/R9S/GL7).
- Contact: peninsular hotline 016-416 8243, East Malaysia 013-303 3100, WhatsApp 60164168243.
  3 branches: Penang (HQ), Seri Kembangan (Selangor), Kuching (Sarawak). See `lib/siteData.ts`.

## Design system (industrial steel)
- Palette (`app/globals.css` @theme): gunmetal/graphite darks (#15181C/#1E2329), cool steel
  neutrals, **bronze accent #C88A3D**. Primary buttons = graphite; accent = bronze.
- Type: **Archivo** (display/headings) + **Inter** (body), via `next/font/google`.
- Motifs: blueprint `.grid-overlay`, bronze `.rule-accent`, `.spec-row`.

## Stack & commands
- Next.js 16 (App Router, Turbopack) + Tailwind v4 + Framer Motion + Lucide. Node 22, npm.
- Dev: `npm run dev -- -p 3102` (port 3102; 3000/3100/3101 taken). Build: `npm run build`.
- `next.config.ts` has `allowedDevOrigins` for Tailscale (100.114.88.104).

## Pages
- `/` home, `/products`, `/why-abrain`, `/support`, `/contact`. Sitemap + robots + JSON-LD done.

## Images (`public/images/`)
- Gemini-generated: `categories/{wooden,grille,glass}-door.png`, `why-craft.png`.
- ChatGPT-generated: `hero-lock.png`, `steel-macro.png`.
- Regenerate via `gemini-image` / `chatgpt-image` skills over CDP Chrome :9222.

## Deployment
- **Tailscale (LAN):** http://100.114.88.104:3102/ — static `out/` served over the tailnet.
- **Netlify (public):** https://abrain-smart-lock.netlify.app/ — Git-connected continuous
  deploy from GitHub `juliusting/abrain-website` (push to `main` → auto build+publish).
- Static export (`output: "export"`, `out/`), images unoptimized.

## Status / TODO
- [x] Full rebuild in industrial theme, all 5 pages, AI imagery (ChatGPT + Gemini).
- [x] Deployed to Tailscale + Netlify, all routes verified 200.
- [ ] Replace FastEV-branded `public/og-image.png` with an Abrain OG image.
- [ ] This is an unofficial RECREATION/demo — confirm consent with Abrain before promoting the
      public link, and point the domain only with their agreement.

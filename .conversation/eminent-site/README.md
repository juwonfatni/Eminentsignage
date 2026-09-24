# Eminent Signs & Craft Services — Website

React + Vite + TypeScript + Tailwind CSS + React Router. Fully static,
no backend — deploys as-is to Vercel or Netlify.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```
Outputs static files to `dist/`. Deploy that folder (or connect the repo)
to Vercel/Netlify as normal.

## Structure

- `src/data/content.ts` — **all site copy and lists live here.** Company
  info, services, projects, about text, quote form service types. Update
  this file as the client sends real content; the pages themselves
  shouldn't need to change.
- `src/pages/` — one file per page (Home, Services, Gallery, About, Contact)
- `src/components/` — Navbar, Footer, LogoMark
- `public/projects/` — project images. Currently placeholder SVGs —
  swap in real photos with the same filenames, or update the `image` path
  in `content.ts`.

## Outstanding from client

- **Logo files**: the brand PDF only contained angled product mockups
  (t-shirt, letterhead, business card, storefront) — no flat vector or
  transparent PNG logo. `src/components/LogoMark.tsx` is a stylized
  placeholder built from the brand colors and mark description (eagle
  wings + pen nib). Replace it with the real logo file as soon as the
  client (or original designer) provides one.
- **Fonts**: brand kit specifies "Gamerock" for display type, which isn't
  a free/Google font. Currently using **Rajdhani** (similar angular,
  technical feel) + **Exo 2** (body, as specified) via Google Fonts. If
  the client owns a Gamerock license/font file, drop it into `public/fonts/`
  and update `tailwind.config.js` + `index.html`.
- **Pricing**: client left this blank — site currently routes everything
  to "Get a Quote" rather than showing prices.
- **Real project photos/videos**: client said these are coming — swap
  into `public/projects/`.
- **Our Process page**: not built — no workflow info was provided yet.
  Easy to add as a page or a section on About once you have it.
- **Contact form**: wired to submit via Formspree but needs a real
  endpoint. Sign up at formspree.io, point a form at
  eminentsignsandcraft@gmail.com, and replace `FORM_ENDPOINT` in
  `src/pages/Contact.tsx`.
- **Domain**: client wants one registered — not yet chosen.

## Brand tokens (already wired into Tailwind)

- Blue `#0171CE` / Blue dark `#054C8A` / Blue deep `#062F52`
- Gold `#FCB61A`
- Charcoal `#373435`

# Publish this site on Vercel

This site is a static React + Vite app and does not need a server or database to deploy.

## Vercel project settings

Connect the Git repository that contains this project and use these settings:

- **Root Directory:** repository root (`.`)
- **Install Command:** `pnpm install --frozen-lockfile`
- **Build Command:** `pnpm --filter @workspace/eminent-signs run build`
- **Output Directory:** `artifacts/eminent-signs/dist/public`

The root `vercel.json` contains these settings and an SPA rewrite so `/services`, `/gallery`, `/about`, and `/contact` also load when opened directly.

## Before launch

- Replace the portfolio photo placeholders with approved project photos.
- The quote form opens a prepared WhatsApp message; the visitor must press Send in WhatsApp. Add a Formspree endpoint later if you want submissions delivered by email without leaving the website.
- Set the real domain in Vercel after the first deployment, then add that domain to the sitemap and canonical URLs. The site does not assume a domain before deployment.
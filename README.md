# Rush Fox Security – website

Marketing website for **Rush Fox Security and CCTV (Pty) Ltd** (Reg. 2021/629748/07, PSiRA 5062671).
Content is taken from the approved Company Profile 2026/27; branding was approved by MF Banda on 21/11/2026.

Built with [Astro](https://astro.build): fast static pages, no database, low-cost hosting.

## Pages

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| About | `src/pages/about.astro` |
| Services | `src/pages/services.astro` |
| Compliance & Accreditation | `src/pages/compliance.astro` |
| Insights (blog) | `src/pages/insights/` + posts in `src/content/insights/` |
| Contact / quote form | `src/pages/contact.astro` |
| Privacy (POPIA) | `src/pages/privacy.astro` |

**All company facts** (phone numbers, email, address, registration numbers, services, clients) live in one file:
`src/data/company.ts`. Change them there only.

## Publishing Insights posts (daily or weekly)

1. Copy `src/content/insights/_TEMPLATE.md` and rename it, e.g. `alarm-maintenance-tips.md`.
2. Fill in the title, description, category and **date**.
3. Write the article in plain Markdown below the `---` lines.
4. Keep `draft: true` until MF Banda approves it, then change it to `draft: false`.
5. Commit to `main`. The site rebuilds and goes live within a few minutes.

**Scheduling:** give a post a future `date` (with `draft: false`). The site rebuilds every morning at 05:00 SAST
and publishes any post whose date has arrived. You can load a month of posts in advance.

Categories: Security Tips · CCTV & Technology · Access Control · Business Security · Compliance · Company News.
See `CONTENT_CALENDAR.md` for planned topics.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deployment (GitHub → Hostinger)

1. Push this project to the GitHub repository `rushfox-website` (branch `main`).
2. The GitHub Action `.github/workflows/build-and-publish.yml` builds the site and pushes the finished files
   to the `deploy` branch, on every push and daily at 05:00 SAST.
3. Hostinger (account u549082618, website rushfox.co.za) serves the **`deploy` branch** as a static site.
   It is currently cloned from the public HTTPS URL, so updates need a pull (hPanel → Websites → rushfox.co.za →
   Advanced → Git → Deploy). To make updates automatic, give the Hostinger GitHub app access to this repository
   (GitHub → Settings → Applications → Hostinger → Repository access), then switch the site to auto-deployment.
4. In GitHub, go to Settings → Secrets and variables → Actions → Variables and add `SITE_URL`
   (e.g. `https://www.rushfox.co.za`).

## Open items before launch

- Domain: rushfox.co.za (registered 21/11/2026). Create mailboxes info@, accounts@ and compliance@.
- Optional: add photos of officers on duty and CCTV installations to `public/img/`.
- The quote form opens the visitor's email app. A server-side form (Hostinger PHP mail or a form service) can be added later.

# Skipper & Co.

Next.js rebuild of [skipper-co.com](https://skipper-co.com) for Vercel. The live WordPress site on Hostinger is unchanged by this repository. Do not point DNS here until the Vercel deployment has been checked.

## Setup

Requirements: Node.js 20.9 or newer (Node.js 22 or 24 is fine).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

Production deploys with the Vercel Next.js preset. No extra build command.

## Environment variables

Set these in `.env.local` and in the Vercel project. Do not commit keys.

| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_POSTHOG_KEY` | For analytics | PostHog project API key. If it is empty, the site does not load PostHog. |
| `NEXT_PUBLIC_POSTHOG_HOST` | With the key | Ingestion host from the PostHog project (`https://us.i.posthog.com` or `https://eu.i.posthog.com`). |

There is no email provider and no secret for a contact form. The live site does not publish a contact form. Booking is the HubSpot meetings embed already on the homepage (`https://meetings-eu1.hubspot.com/scheepers/20-minute-call`).

## Brand

Colours, the wordmark, booking URLs, and company details live in [`src/config/brand.ts`](src/config/brand.ts). The root layout writes those colours onto CSS variables, and Tailwind maps them in [`src/app/globals.css`](src/app/globals.css). The typeface is Inter, loaded with `next/font`.

The interface mark is an SVG that reads those tokens. Original favicon files downloaded from WordPress are in `public/images/brand/` and are not used for the page chrome. `src/app/icon.svg` repeats `colors.ink` (`#1a1a1a`) and `colors.logoHub` (`#737373`); change that file if those two values change.

## Pages

Slugs match the public WordPress URLs. `trailingSlash: true` redirects `/about` to `/about/`.

| Live URL | Route | Notes |
| --- | --- | --- |
| https://skipper-co.com/ | `/` | Homepage copy, case study, guarantees, HubSpot meetings embed |
| https://skipper-co.com/about/ | `/about/` | About page |
| https://skipper-co.com/privacy-policy/ | `/privacy-policy/` | Privacy Policy |
| https://skipper-co.com/terms/ | `/terms/` | Terms of Service |
| https://skipper-co.com/hello-world/ | `/hello-world/` | Default WordPress post. The live theme returns 200 with an empty body; this route serves the published post text. |
| https://skipper-co.com/category/uncategorized/ | `/category/uncategorized/` | Category archive. The live theme body is empty; this route lists the only post in that category. |
| https://skipper-co.com/author/gscheepersb2b-launch-co-za/ | `/author/gscheepersb2b-launch-co-za/` | Author archive for the WordPress display name `gscheepers@b2b-launch.co.za`. The live theme body is empty; this route lists that author’s post. |

There is no separate service URL. The audit is the homepage.

WordPress shortlinks redirect to those routes:

| Shortlink | Destination |
| --- | --- |
| `/?p=5` and `/index.php?p=5` | `/` |
| `/?p=36` and `/index.php?p=36` | `/about/` |
| `/?p=3` and `/index.php?p=3` | `/privacy-policy/` |
| `/?p=34` and `/index.php?p=34` | `/terms/` |
| `/?p=1` and `/index.php?p=1` | `/hello-world/` |

Also redirected: `/index.php`, post and archive feeds, `/wp-sitemap.xml`, and `/wp-sitemap-*.xml` (to `/sitemap.xml`).

## Analytics events

PostHog is loaded with `posthog-js` only when `NEXT_PUBLIC_POSTHOG_KEY` is set. Pageviews are captured manually because the App Router does not reload the document on navigation.

| Event | When | Properties |
| --- | --- | --- |
| `$pageview` | Each client-side route render | `$current_url` |
| `booking_link_click` | Click on a booking call to action: “Book a call”, “Book a 20-min call”, or “Check availability” | `placement` (`nav`, `hero`, `guarantee`), `href`, `label` |

There is no `contact_form_submit` event. The crawled site has no contact form to submit. Hostinger Reach’s script is included on some WordPress templates, but no form container or form id is in the HTML. The conversion on the page is the booking link, which opens the in-page HubSpot scheduler.

## DNS cutover (Hostinger)

Do this only after the Vercel project is deployed and you have added `skipper-co.com` and `www.skipper-co.com` under **Settings → Domains**. Copy the record values from that screen. Do not change nameservers. They stay on Hostinger (`nova.dns-parking.com`, `cosmos.dns-parking.com`).

In Hostinger DNS, change only these two records:

1. **Apex A record** (`@` / `skipper-co.com`). It currently points at Hostinger (`141.136.39.251`). Replace the address with the IPv4 address Vercel shows for this project. That is often `76.76.21.21`, but use the project value, not a copied address from another project.
2. **www CNAME**. It currently points at `skipper-co.com`. Replace the target with the CNAME hostname Vercel shows for this project (a name ending in `vercel-dns.com`).

Leave every other record as it is. In particular, do not edit or delete:

- **MX** for Google Workspace: priority `1`, value `SMTP.GOOGLE.COM`.
- **DKIM TXT** at `google._domainkey`.
- **Apex TXT** records: the Google site-verification record (`google-site-verification=04lcUv57e_rFFilwqhJoHnW9NCeB0dXS4uucVIYQirE`) and the SPF record (`v=spf1 include:_spf.google.com ~all`).

After the change:

- Wait for DNS, then refresh the domain status in Vercel.
- Open `https://skipper-co.com/` and `https://www.skipper-co.com/` and confirm both serve this site.
- Send a test email to `gerhard@skipper-co.com` and confirm Google still receives it.
- Do not delete the Hostinger WordPress site until mail and the site both look right. This repo never changes that install.

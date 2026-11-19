export type PublicRoute = {
  /** Path on this site, with the trailing slash the live site uses. */
  path: string;
  /** Absolute URL on the current WordPress site. */
  liveUrl: string;
  /** Document title, without the shared site suffix. */
  title: string;
  description: string;
};

export const publicRoutes: readonly PublicRoute[] = [
  {
    path: "/",
    liveUrl: "https://skipper-co.com/",
    title: "B2B Sales Funnel Audit: Find the Revenue Leaks | Skipper & Co.",
    description:
      "Skipper & Co. runs a structured B2B sales funnel audit that pinpoints where your pipeline leaks revenue, then hands you a costed plan to close each gap. Book a 20-min call.",
  },
  {
    path: "/about/",
    liveUrl: "https://skipper-co.com/about/",
    title: "About",
    description:
      "Skipper & Co is a B2B sales-systems consultancy run by Gerhard Scheepers in Cape Town, South Africa. We help B2B businesses stop losing deals they should be winning, by finding where leads leak out of the sales process and building the systems that close the gaps.",
  },
  {
    path: "/privacy-policy/",
    liveUrl: "https://skipper-co.com/privacy-policy/",
    title: "Privacy Policy",
    description:
      "This Privacy Policy explains how SKIPPER-CO (Pty) Ltd, trading as Skipper & Co (“Skipper & Co”, “we”, “us”, “our”), collects, uses, stores, shares and deletes personal information when you visit skipper-co.com, contact us, or engage us for consulting services, including when you grant us access to your Google accounts through the Skipper & Co Google API application.",
  },
  {
    path: "/terms/",
    liveUrl: "https://skipper-co.com/terms/",
    title: "Terms of Service",
    description:
      "These Terms govern your use of skipper-co.com and of the Skipper & Co Google API application, and form the general terms for consulting services provided by Skipper & Co.",
  },
] as const;

/** WordPress `?p=` shortlinks published in the page source. */
export const wordpressPostIds: Record<string, string> = {
  "1": "/",
  "3": "/privacy-policy/",
  "5": "/",
  "34": "/terms/",
  "36": "/about/",
};

/** Former WordPress post and archive URLs. Each 301s to the homepage. */
export const retiredPaths = [
  "/hello-world",
  "/hello-world/",
  "/hello-world/feed",
  "/hello-world/feed/",
  "/category/uncategorized",
  "/category/uncategorized/",
  "/category/uncategorized/feed",
  "/category/uncategorized/feed/",
  "/author/gscheepersb2b-launch-co-za",
  "/author/gscheepersb2b-launch-co-za/",
  "/author/gscheepersb2b-launch-co-za/feed",
  "/author/gscheepersb2b-launch-co-za/feed/",
] as const;

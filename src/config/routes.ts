export type PublicRoute = {
  /** Path on this site, with the trailing slash the live site uses. */
  path: string;
  /** Absolute URL on the current WordPress site. */
  liveUrl: string;
  /** Document title, without the shared site suffix. */
  title: string;
  /** Whether the live URL is a real content page or a WordPress archive. */
  kind: "page" | "archive";
};

export const publicRoutes: readonly PublicRoute[] = [
  {
    path: "/",
    liveUrl: "https://skipper-co.com/",
    title: "Home",
    kind: "page",
  },
  {
    path: "/about/",
    liveUrl: "https://skipper-co.com/about/",
    title: "About",
    kind: "page",
  },
  {
    path: "/privacy-policy/",
    liveUrl: "https://skipper-co.com/privacy-policy/",
    title: "Privacy Policy",
    kind: "page",
  },
  {
    path: "/terms/",
    liveUrl: "https://skipper-co.com/terms/",
    title: "Terms of Service",
    kind: "page",
  },
  {
    path: "/hello-world/",
    liveUrl: "https://skipper-co.com/hello-world/",
    title: "Hello world!",
    kind: "page",
  },
  {
    path: "/category/uncategorized/",
    liveUrl: "https://skipper-co.com/category/uncategorized/",
    title: "Uncategorized",
    kind: "archive",
  },
  {
    path: "/author/gscheepersb2b-launch-co-za/",
    liveUrl: "https://skipper-co.com/author/gscheepersb2b-launch-co-za/",
    title: "gscheepers@b2b-launch.co.za",
    kind: "archive",
  },
] as const;

/** WordPress `?p=` shortlinks published in the page source. */
export const wordpressPostIds: Record<string, string> = {
  "1": "/hello-world/",
  "3": "/privacy-policy/",
  "5": "/",
  "34": "/terms/",
  "36": "/about/",
};

import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import jsonLd from "@/content/home-jsonld.json";
import { brand } from "@/config/brand";

const title = "B2B Sales Funnel Audit: Find the Revenue Leaks | Skipper & Co.";
const description =
  "Skipper & Co. runs a structured B2B sales funnel audit that pinpoints where your pipeline leaks revenue, then hands you a costed plan to close each gap. Book a 20-min call.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: brand.siteUrl,
    images: [
      {
        url: "/images/gerhard-scheepers-profile.jpg",
        alt: "Gerhard Scheepers — Skipper & Co.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/gerhard-scheepers-profile.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}

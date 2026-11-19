import type { Metadata } from "next";
import { brand } from "@/config/brand";

const shareImage = {
  url: "/images/gerhard-scheepers-profile.jpg",
  alt: "Gerhard Scheepers, Skipper & Co.",
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
}): Metadata {
  const url = new URL(path, brand.siteUrl).toString();
  const socialTitle = absoluteTitle ?? `${title} – ${brand.name}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: brand.name,
      locale: "en_ZA",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [shareImage.url],
    },
  };
}

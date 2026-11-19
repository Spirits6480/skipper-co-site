import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PostHogProvider } from "@/components/posthog-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand, brandCssVars } from "@/config/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: "B2B Sales Funnel Audit: Find the Revenue Leaks | Skipper & Co.",
    template: "%s – Skipper & Co.",
  },
  description:
    "Skipper & Co. runs a structured B2B sales funnel audit that pinpoints where your pipeline leaks revenue, then hands you a costed plan to close each gap. Book a 20-min call.",
  openGraph: {
    siteName: brand.name,
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
      style={brandCssVars()}
    >
      <body className="flex min-h-full flex-col font-sans">
        <PostHogProvider />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

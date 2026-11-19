"use client";

import Script from "next/script";
import { brand } from "@/config/brand";

export function MeetingsEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div
        className="meetings-iframe-container min-h-[640px]"
        data-src={brand.bookingEmbedUrl}
      />
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

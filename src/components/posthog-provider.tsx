"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { capture, initPostHog } from "@/lib/posthog";

function Pageviews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initPostHog();
    if (!pathname) {
      return;
    }
    const query = searchParams.toString();
    const url = `${window.location.origin}${pathname}${query ? `?${query}` : ""}`;
    capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider() {
  return (
    <Suspense fallback={null}>
      <Pageviews />
    </Suspense>
  );
}

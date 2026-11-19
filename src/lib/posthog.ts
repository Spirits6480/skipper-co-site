"use client";

import posthog from "posthog-js";

let started = false;

export function posthogKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  return key && key.length > 0 ? key : undefined;
}

export function initPostHog(): void {
  const key = posthogKey();
  if (!key || started || typeof window === "undefined") {
    return;
  }
  posthog.init(key, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    person_profiles: "identified_only",
  });
  started = true;
}

export function capture(
  event: string,
  properties?: Record<string, string>,
): void {
  if (!posthogKey()) {
    return;
  }
  initPostHog();
  posthog.capture(event, properties);
}

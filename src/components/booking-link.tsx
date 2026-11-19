"use client";

import type { ReactNode } from "react";
import { capture } from "@/lib/posthog";

type BookingLinkProps = {
  href: string;
  placement: string;
  className?: string;
  children: ReactNode;
};

export function BookingLink({
  href,
  placement,
  className,
  children,
}: BookingLinkProps) {
  const label = typeof children === "string" ? children : placement;
  return (
    <a
      href={href}
      className={className}
      onClick={() =>
        capture("booking_link_click", {
          placement,
          href,
          label,
        })
      }
    >
      {children}
    </a>
  );
}

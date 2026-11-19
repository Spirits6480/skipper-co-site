import Link from "next/link";
import { brand } from "@/config/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-ink">{brand.name}</p>
        <p>Custom sales systems · Predictable revenue · © 2026</p>
      </div>
      <div className="border-t border-line px-6 py-6 text-center text-sm leading-6 text-muted">
        <p>
          © 2026 {brand.legalName}, trading as {brand.tradingAs} · Reg.{" "}
          {brand.registration}
          <br />
          <a className="underline underline-offset-4" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
        </p>
        <p className="mt-2">
          <Link className="underline underline-offset-4" href="/about/">
            About
          </Link>
          {" · "}
          <Link className="underline underline-offset-4" href="/privacy-policy/">
            Privacy Policy
          </Link>
          {" · "}
          <Link className="underline underline-offset-4" href="/terms/">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

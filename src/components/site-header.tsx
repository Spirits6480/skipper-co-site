import Link from "next/link";
import { BookingLink } from "@/components/booking-link";
import { Logo } from "@/components/logo";
import { brand } from "@/config/brand";

const buttonClass =
  "inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-80";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 text-ink" aria-label={brand.name}>
          <Logo />
          <span className="text-sm font-semibold tracking-tight">{brand.logo.wordmark}</span>
        </Link>
        <BookingLink href="/#book" placement="nav" className={buttonClass}>
          Book a call →
        </BookingLink>
      </div>
    </header>
  );
}

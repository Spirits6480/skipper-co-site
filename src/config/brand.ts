/**
 * Single source of truth for the Skipper & Co. brand.
 * Swap colours, the wordmark, or the logo mark here. Tailwind reads the
 * CSS variables that `brandCssVars()` writes onto the document.
 *
 * The on-site mark uses these tokens. Original downloaded favicon files
 * live in /public/images/brand and are not the colours of the interface.
 * app/icon.svg uses `colors.ink` and `colors.logoHub` — update that file
 * if those two values change.
 */
export const brand = {
  name: "Skipper & Co.",
  legalName: "SKIPPER-CO (Pty) Ltd",
  tradingAs: "Skipper & Co",
  email: "gerhard@skipper-co.com",
  domain: "skipper-co.com",
  siteUrl: "https://skipper-co.com",
  registration: "2022/427376/07",
  location: "Cape Town, South Africa",
  linkedIn: "https://www.linkedin.com/company/skipperandco",
  bookingUrl: "https://meetings-eu1.hubspot.com/scheepers/20-minute-call",
  bookingEmbedUrl:
    "https://meetings-eu1.hubspot.com/scheepers/20-minute-call?embed=true",
  fonts: {
    sans: "Inter",
  },
  colors: {
    background: "#f6f5f2",
    surface: "#ffffff",
    ink: "#1a1a1a",
    muted: "#5f5e5a",
    line: "#e2e0da",
    accent: "#1a1a1a",
    accentForeground: "#f6f5f2",
    subtle: "#efeee9",
    logoHub: "#737373",
  },
  logo: {
    wordmark: "Skipper & Co.",
  },
} as const;

export function brandCssVars(): Record<string, string> {
  return {
    "--background": brand.colors.background,
    "--surface": brand.colors.surface,
    "--ink": brand.colors.ink,
    "--muted": brand.colors.muted,
    "--line": brand.colors.line,
    "--accent": brand.colors.accent,
    "--accent-foreground": brand.colors.accentForeground,
    "--subtle": brand.colors.subtle,
  };
}

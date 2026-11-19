import { brand } from "@/config/brand";

export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      className={className}
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      >
        <circle cx="48" cy="42" r="22" />
        <line x1="48" y1="20" x2="48" y2="64" />
        <line x1="26" y1="42" x2="70" y2="42" />
        <line x1="32.5" y1="26.5" x2="63.5" y2="57.5" />
        <line x1="32.5" y1="57.5" x2="63.5" y2="26.5" />
        <line x1="48" y1="14" x2="48" y2="20" />
        <line x1="48" y1="64" x2="48" y2="70" />
        <line x1="20" y1="42" x2="26" y2="42" />
        <line x1="70" y1="42" x2="76" y2="42" />
      </g>
      <line
        x1="8"
        y1="86"
        x2="88"
        y2="86"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <polygon points="48,72 40,82 56,82" fill="currentColor" />
      <circle cx="48" cy="42" r="3" fill={brand.colors.logoHub} />
    </svg>
  );
}

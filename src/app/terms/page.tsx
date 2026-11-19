import type { Metadata } from "next";
import { RichHtml } from "@/components/rich-html";
import { html } from "@/content/terms-html";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <RichHtml html={html} />
    </article>
  );
}

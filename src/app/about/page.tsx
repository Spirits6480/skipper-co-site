import type { Metadata } from "next";
import { RichHtml } from "@/components/rich-html";
import { html } from "@/content/about-html";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <RichHtml html={html} />
    </article>
  );
}

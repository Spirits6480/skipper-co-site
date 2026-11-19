import type { Metadata } from "next";
import { RichHtml } from "@/components/rich-html";
import { html } from "@/content/privacy-html";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <RichHtml html={html} />
    </article>
  );
}

import type { Metadata } from "next";
import { RichHtml } from "@/components/rich-html";
import { html } from "@/content/hello-html";

export const metadata: Metadata = {
  title: "Hello world!",
};

export default function HelloWorldPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Hello world!</h1>
      <RichHtml html={html} />
    </article>
  );
}

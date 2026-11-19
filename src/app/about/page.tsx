import { RichHtml } from "@/components/rich-html";
import { html } from "@/content/about-html";
import { publicRoutes } from "@/config/routes";
import { pageMetadata } from "@/lib/metadata";

const about = publicRoutes[1];

export const metadata = pageMetadata({
  title: about.title,
  description: about.description,
  path: about.path,
});

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <RichHtml html={html} />
    </article>
  );
}

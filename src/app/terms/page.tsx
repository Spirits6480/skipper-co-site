import { RichHtml } from "@/components/rich-html";
import { html } from "@/content/terms-html";
import { publicRoutes } from "@/config/routes";
import { pageMetadata } from "@/lib/metadata";

const terms = publicRoutes[3];

export const metadata = pageMetadata({
  title: terms.title,
  description: terms.description,
  path: terms.path,
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <RichHtml html={html} />
    </article>
  );
}

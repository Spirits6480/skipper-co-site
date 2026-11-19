import { RichHtml } from "@/components/rich-html";
import { html } from "@/content/privacy-html";
import { publicRoutes } from "@/config/routes";
import { pageMetadata } from "@/lib/metadata";

const privacy = publicRoutes[2];

export const metadata = pageMetadata({
  title: privacy.title,
  description: privacy.description,
  path: privacy.path,
});

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <RichHtml html={html} />
    </article>
  );
}

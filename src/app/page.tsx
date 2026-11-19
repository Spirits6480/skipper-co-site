import { HomePage } from "@/components/home-page";
import jsonLd from "@/content/home-jsonld.json";
import { publicRoutes } from "@/config/routes";
import { pageMetadata } from "@/lib/metadata";

const home = publicRoutes[0];

export const metadata = pageMetadata({
  title: "Home",
  absoluteTitle: home.title,
  description: home.description,
  path: home.path,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}

import type { Metadata } from "next";
import { ArchiveList } from "@/components/archive-list";

export const metadata: Metadata = {
  title: "Uncategorized",
};

export default function UncategorizedPage() {
  return (
    <ArchiveList
      title="Uncategorized"
      posts={[
        {
          href: "/hello-world/",
          title: "Hello world!",
          excerpt:
            "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
        },
      ]}
    />
  );
}

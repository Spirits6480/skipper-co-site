import type { Metadata } from "next";
import { ArchiveList } from "@/components/archive-list";

const title = "gscheepers@b2b-launch.co.za";

export const metadata: Metadata = {
  title,
};

export default function AuthorPage() {
  return (
    <ArchiveList
      title={title}
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

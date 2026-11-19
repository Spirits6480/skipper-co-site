import Link from "next/link";

export function ArchiveList({
  title,
  posts,
}: {
  title: string;
  posts: { href: string; title: string; excerpt: string }[];
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.href} className="py-6">
            <h2 className="text-xl font-semibold">
              <Link className="underline underline-offset-4" href={post.href}>
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 leading-7 text-muted">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

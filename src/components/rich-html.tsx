export function RichHtml({ html }: { html: string }) {
  return (
    <div
      className="prose-legal"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

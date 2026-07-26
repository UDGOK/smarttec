/**
 * Structured-data helpers.
 *
 * Rule for this file: only ever assert things that are true and verifiable.
 * Schema that claims a rating, a review, an award, or an identity we cannot
 * evidence is a manual-action risk, not a ranking shortcut.
 */

const BASE = "https://smarttec.dev";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * BreadcrumbList for nested routes. Google uses this to render the path
 * instead of a raw URL in the result, and it reinforces site hierarchy.
 * Pass the trail excluding Home, which is added automatically.
 */
export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${BASE}${it.path === "/" ? "" : it.path}`,
        })),
      }}
    />
  );
}

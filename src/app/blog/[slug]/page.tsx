import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { posts, getPostBySlug, getAllSlugs } from "@/lib/posts";
import type { Metadata } from "next";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found · SmartTec" };
  return {
    title: `${post.title} · SmartTec Blog`,
    description: post.excerpt,
  };
}

function PostBody({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  return (
    <div className="space-y-6">
      {post.body.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-lg text-slate/80 leading-relaxed">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight pt-4">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-xl font-anybody font-bold text-slate pt-2">
                {block.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-greptile-green pl-5 py-2 my-6">
                <p className="text-xl md:text-2xl font-anybody font-bold text-slate italic leading-snug">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.cite && (
                  <cite className="block mt-2 font-space-mono text-xs uppercase tracking-wider text-slate/60 not-italic">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-lg text-slate/80 leading-relaxed">
                    <span className="text-greptile-green shrink-0 mt-1">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div key={i} className="border-2 border-greptile-green bg-greptile-green/10 p-6 md:p-8 my-8">
                <div className="font-anybody font-extrabold text-xl text-slate mb-2">{block.title}</div>
                <p className="text-slate/80 leading-relaxed">{block.body}</p>
              </div>
            );
          case "stat":
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 border border-dashed border-slate/30 bg-fog/30 p-6">
                {block.items.map((s, j) => (
                  <div key={j} className="text-center">
                    <div className="font-anybody text-3xl md:text-4xl font-extrabold text-slate">{s.value}</div>
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Related: same category, exclude self, max 3
  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  // Fall back to recent if no same-category posts
  const relatedFinal = related.length > 0
    ? related
    : posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell>
      <article className="bg-background">
        {/* Hero */}
        <header className="relative bg-paper-plus-ruled border-b border-dashed border-slate/30">
          <div className="relative mx-auto w-full max-w-3xl px-6 md:px-12 py-16 md:py-24">
            <div className="mb-6 flex items-center gap-3 flex-wrap">
              <Link href="/blog" className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 hover:text-greptile-green inline-flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="h-3 w-3">
                  <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32-11.32L188.69,144H40a8,8,0,0,1,0-16H188.69L122.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,205.66,149.66Z" transform="rotate(180 128 128)" />
                </svg>
                All posts
              </Link>
              <span className="text-slate/30">·</span>
              <span className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green">
                [ {post.category} ]
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-slate/70 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-dashed border-slate/30">
              <div className="w-10 h-10 bg-greptile-green/20 border border-dashed border-greptile-green/40 flex items-center justify-center font-anybody font-bold text-slate shrink-0">
                {post.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="font-space-mono text-xs">
                <div className="font-bold text-slate">{post.author}</div>
                {post.authorTitle && (
                  <div className="text-slate/60">{post.authorTitle}</div>
                )}
              </div>
              <div className="font-space-mono text-xs text-slate/60 ml-auto text-right">
                <div>{post.date}</div>
                <div>{post.readTime}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto w-full max-w-3xl px-6 md:px-12 py-16 md:py-20">
          <PostBody post={post} />
        </div>

        <hr className="border-border w-full opacity-30 max-w-3xl mx-auto" />

        {/* Related */}
        <section className="bg-fog border-t border-dashed border-silver">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ KEEP READING ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                More from the blog.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedFinal.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col border border-dashed border-slate/30 bg-background p-5 hover:bg-greptile-green/10 transition-colors"
                >
                  <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2">
                    [ {r.category.toUpperCase()} ]
                  </span>
                  <h3 className="text-lg font-anybody font-bold text-slate leading-tight mb-3 group-hover:text-slate flex-1">
                    {r.title}
                  </h3>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 pt-3 border-t border-dashed border-slate/20 mt-auto">
                    {r.date} · {r.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
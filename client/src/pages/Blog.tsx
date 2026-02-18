import { usePosts } from "@/hooks/use-content";
import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { format } from "date-fns";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { data: posts, isLoading } = usePosts();

  return (
    <PageTransition>
      <div className="py-16 md:py-40 space-y-12 max-w-2xl mx-auto">
        <header className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Writing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Thoughts on <span className="text-foreground font-medium">software, design, and building products</span> that matter.
          </p>
        </header>

        {isLoading ? (
          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4 py-8 border-b border-border/20">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {posts?.map((post) => (
              <article
                key={post.id}
                className="group py-8 border-b border-border/20 last:border-0 hover:bg-white/30 dark:hover:bg-white/5 transition-colors rounded-lg px-4 -mx-4"
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground font-mono"
                >
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-4 group-hover:text-accent transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-base font-medium text-accent hover:text-accent/80 transition-colors group/link"
                >
                  Read article <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </article>
            ))}

            {(!posts || posts.length === 0) && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No posts yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

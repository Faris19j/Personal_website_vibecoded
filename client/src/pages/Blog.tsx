import { usePosts } from "@/hooks/use-content";
import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { data: posts, isLoading } = usePosts();

  return (
    <PageTransition>
      <div className="py-12 md:py-24 space-y-12 max-w-3xl mx-auto">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on software, design, and building products.
          </p>
        </header>

        {isLoading ? (
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-6 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {posts?.map((post) => (
              <article key={post.id} className="group relative flex flex-col items-start border-b border-border/50 pb-12 last:border-0">
                <time 
                  dateTime={post.date} 
                  className="text-sm text-muted-foreground mb-4 font-mono"
                >
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-semibold mt-0 mb-4 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-foreground hover:gap-2 transition-all group/link"
                >
                  Read full article <span className="ml-1 transition-all group-hover/link:translate-x-1">→</span>
                </Link>
              </article>
            ))}
            
            {(!posts || posts.length === 0) && (
              <div className="py-12 text-center border rounded-xl border-dashed">
                <p className="text-muted-foreground">No posts yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

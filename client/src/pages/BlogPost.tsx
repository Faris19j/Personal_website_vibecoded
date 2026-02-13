import { usePost } from "@/hooks/use-content";
import { PageTransition } from "@/components/layout/PageTransition";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading, error } = usePost(slug);

  if (isLoading) {
    return (
      <div className="py-24 max-w-2xl mx-auto space-y-8">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-32" />
        <div className="space-y-4 pt-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="py-12 md:py-20 max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
        </Link>

        <article>
          <header className="mb-10">
            <time className="text-sm text-muted-foreground font-mono block mb-4">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map(tag => (
                <Badge key={tag} className="bg-secondary/50 hover:bg-secondary text-secondary-foreground border-border/50">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            {/* 
              In a real app, this would likely be Markdown rendered via react-markdown.
              Here we assume HTML or plain text with newlines for simplicity 
            */}
            <div className="whitespace-pre-line leading-relaxed text-muted-foreground text-lg">
              {post.content}
            </div>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <span className="text-muted-foreground text-sm">Thanks for reading.</span>
          <div className="flex gap-4">
            <Link href="/" className="text-sm hover:underline">Home</Link>
            <Link href="/work" className="text-sm hover:underline">Work</Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

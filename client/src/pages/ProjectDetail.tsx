import { useProject } from "@/hooks/use-content";
import { PageTransition } from "@/components/layout/PageTransition";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetail() {
  const [match, params] = useRoute("/work/:slug");
  const slug = params?.slug || "";
  const { data: project, isLoading, error } = useProject(slug);

  if (isLoading) {
    return (
      <div className="py-24 max-w-3xl mx-auto space-y-8">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <div className="space-y-4 pt-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link href="/work" className="text-primary hover:underline">Back to Work</Link>
      </div>
    );
  }

  const content = project.content;

  return (
    <PageTransition>
      <div className="py-12 md:py-20 max-w-3xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Initiatives
        </Link>

        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">{project.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 leading-relaxed">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          {/* We render specific sections manually for design control rather than a generic JSON dump */}
          
          <section className="mb-12">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-4">Context</h3>
            <p className="text-foreground leading-relaxed">{content.context}</p>
          </section>

          <section className="mb-12">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-4">The Problem</h3>
            <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
              <p className="text-foreground leading-relaxed m-0">{content.problem}</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-4">Approach</h3>
            <p className="text-foreground leading-relaxed whitespace-pre-line">{content.approach}</p>
          </section>

          <section className="mb-12">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-4">Outcome</h3>
            <p className="text-foreground leading-relaxed">{content.outcome}</p>
          </section>

          {content.future && (
            <section className="mb-12 pt-8 border-t border-dashed border-border">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-4">Next Steps</h3>
              <p className="text-muted-foreground italic leading-relaxed">{content.future}</p>
            </section>
          )}
        </article>

        <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
          <span className="text-muted-foreground">Like what you see?</span>
          <Link href="/contact" className="font-medium hover:underline">Let's talk</Link>
        </div>
      </div>
    </PageTransition>
  );
}

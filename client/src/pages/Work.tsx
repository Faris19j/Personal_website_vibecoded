import { useProjects } from "@/hooks/use-content";
import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/Button";

export default function Work() {
  const { data: projects, isLoading } = useProjects();

  return (
    <PageTransition>
      <div className="py-12 md:py-24 space-y-12">
        <header className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Initiatives</h1>
          <p className="text-xl text-muted-foreground">
            A selection of projects that define my approach to problem-solving.
          </p>
        </header>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {projects?.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group block p-6 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1 text-primary font-mono font-bold text-lg group-hover:text-accent transition-colors">
                    {">_"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                          ))}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline inline-flex items-center gap-1 ml-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {(!projects || projects.length === 0) && (
              <div className="py-24 text-center border rounded-lg border-dashed">
                <p className="text-muted-foreground">No projects published yet.</p>
              </div>
            )}
          </div>
        )}

        <section className="py-24 border-t border-border/50 flex flex-col items-center text-center gap-6 mt-12">
          <h2 className="text-3xl font-bold tracking-tight">Do you have a challenge for me?</h2>
          <p className="text-muted-foreground text-lg max-w-md">
            I'm always looking for interesting problems to solve. Let's build something together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-12">Let's talk</Button>
          </Link>
        </section>
      </div>
    </PageTransition>
  );
}

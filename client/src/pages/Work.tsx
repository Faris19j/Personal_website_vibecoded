import { useProjects } from "@/hooks/use-content";
import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Work() {
  const { data: projects, isLoading } = useProjects();

  return (
    <PageTransition>
      <div className="py-16 md:py-40 space-y-16">
        <header className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Selected work
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A selection of projects that define my approach to <span className="text-foreground font-medium">problem-solving and product design</span>.
          </p>
        </header>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {projects?.map((project, idx) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group block space-y-6 cursor-pointer py-8 border-b border-border/20 last:border-0 hover:bg-white/30 dark:hover:bg-white/5 transition-colors rounded-lg px-4 -mx-4"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}

            {(!projects || projects.length === 0) && (
              <div className="py-24 text-center">
                <p className="text-muted-foreground">No projects published yet.</p>
              </div>
            )}
          </div>
        )}

        <section className="py-24 border-t border-border/20 flex flex-col items-center text-center gap-6 mt-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Let's create something</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md">
              I'm always looking for interesting challenges. If you have a problem in mind, I'd love to hear about it.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-12 bg-accent hover:bg-accent/90 text-accent-foreground">Get in touch</Button>
          </Link>
        </section>
      </div>
    </PageTransition>
  );
}

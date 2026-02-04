import { useProjects } from "@/hooks/use-content";
import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects?.map((project) => (
              <Link key={project.id} href={`/work/${project.slug}`} className="group block space-y-4 cursor-pointer">
                <div className="aspect-[16/10] bg-secondary rounded-xl overflow-hidden border border-border/50 transition-colors group-hover:border-border/80 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl select-none">
                    {project.title.substring(0, 2)}
                  </div>
                  {/* If we had images, they would go here */}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold mt-0 group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground line-clamp-2">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} className="bg-secondary hover:bg-secondary-foreground/5 text-secondary-foreground border-transparent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            
            {(!projects || projects.length === 0) && (
              <div className="col-span-full py-24 text-center border rounded-xl border-dashed">
                <p className="text-muted-foreground">No projects published yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

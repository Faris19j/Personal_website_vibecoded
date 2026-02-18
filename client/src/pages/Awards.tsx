import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Award, ArrowRight } from "lucide-react";

const awards = [
  {
    id: 1,
    slug: "best-product-design",
    title: "Best Product Design",
    organization: "Tech Innovation Awards 2024",
    year: 2024,
    description: "Recognition for outstanding UI/UX design in product development.",
    details: "This award recognized my work on designing intuitive and beautiful user interfaces that improved user engagement by 40%. The project focused on creating a seamless design system that could scale across multiple products.",
  },
  {
    id: 2,
    slug: "developer-of-the-year",
    title: "Developer of the Year",
    organization: "Dev Community Recognition",
    year: 2023,
    description: "Awarded for significant contributions to open source and community.",
    details: "Recognized for building and maintaining open source projects used by thousands of developers worldwide. This includes contributions to multiple libraries and active participation in the developer community.",
  },
  {
    id: 3,
    slug: "rising-star-tech",
    title: "Rising Star in Tech",
    organization: "Future Leaders Summit",
    year: 2023,
    description: "Selected among top emerging talents in software engineering.",
    details: "Selected as one of 50 emerging talents in tech for demonstrating innovative problem-solving, leadership potential, and commitment to building better tools for developers.",
  },
  {
    id: 4,
    slug: "best-open-source",
    title: "Best Open Source Project",
    organization: "GitHub Community Awards",
    year: 2022,
    description: "Recognition for the UI Library project reaching 10k stars.",
    details: "The open source UI component library achieved 10,000+ GitHub stars and became a go-to resource for developers. It demonstrates the power of building tools that solve real problems for the community.",
  },
];

export default function Awards() {
  return (
    <PageTransition>
      <div className="py-12 md:py-24 space-y-12 max-w-3xl mx-auto">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Awards & Recognition</h1>
          <p className="text-xl text-muted-foreground">
            Recognition from the community and industry for work and contributions.
          </p>
        </header>

        <div className="space-y-6">
          {awards.map((award) => (
            <Link
              key={award.id}
              href={`/awards/${award.slug}`}
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
                        {award.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {award.organization}
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">
                        {award.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                        {award.year}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {awards.length === 0 && (
          <div className="py-12 text-center border rounded-xl border-dashed">
            <p className="text-4xl font-mono text-muted-foreground/30 mb-4">{">_"}</p>
            <p className="text-muted-foreground">No awards yet. Stay tuned!</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

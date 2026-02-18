import { PageTransition } from "@/components/layout/PageTransition";
import { Award, Trophy } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Best Product Design",
    organization: "Tech Innovation Awards 2024",
    year: 2024,
    description: "Recognition for outstanding UI/UX design in product development.",
  },
  {
    id: 2,
    title: "Developer of the Year",
    organization: "Dev Community Recognition",
    year: 2023,
    description: "Awarded for significant contributions to open source and community.",
  },
  {
    id: 3,
    title: "Rising Star in Tech",
    organization: "Future Leaders Summit",
    year: 2023,
    description: "Selected among top emerging talents in software engineering.",
  },
  {
    id: 4,
    title: "Best Open Source Project",
    organization: "GitHub Community Awards",
    year: 2022,
    description: "Recognition for the UI Library project reaching 10k stars.",
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

        <div className="space-y-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="group p-6 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Trophy className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {award.organization}
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-sm font-mono text-muted-foreground whitespace-nowrap">
                      {award.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {awards.length === 0 && (
          <div className="py-12 text-center border rounded-xl border-dashed">
            <Award className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">No awards yet. Stay tuned!</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

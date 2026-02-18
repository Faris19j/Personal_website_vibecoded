import { PageTransition } from "@/components/layout/PageTransition";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

const awardsData = [
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

export default function AwardDetail() {
  const [match, params] = useRoute("/awards/:slug");
  const slug = params?.slug || "";

  const award = awardsData.find((a) => a.slug === slug);

  if (!award) {
    return (
      <PageTransition>
        <div className="py-24 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Award not found</h2>
          <Link href="/awards" className="text-primary hover:underline">
            Back to Awards
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="py-12 md:py-20 max-w-3xl mx-auto">
        <Link href="/awards" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Awards
        </Link>

        <article className="space-y-8">
          <header className="space-y-4 border-b border-border/50 pb-8">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="text-primary font-mono font-bold text-2xl">{">_"}</div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {award.title}
                </h1>
              </div>
              <span className="text-lg font-mono text-muted-foreground flex-shrink-0">
                {award.year}
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-foreground">
                {award.organization}
              </p>
              <p className="text-base text-muted-foreground">
                {award.description}
              </p>
            </div>
          </header>

          <section className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-3">About This Award</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {award.details}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Why This Matters</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Recognition from peers and industry leaders validates the work and dedication put into creating meaningful projects. This award represents not just personal achievement, but the impact on the broader community and industry.
                  </p>
                  <p>
                    Each award motivates continued innovation and commitment to excellence in building products, contributing to open source, and helping other developers succeed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col items-center text-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Interested in collaborating?
              </h2>
              <p className="text-muted-foreground">
                Let's work on something great together.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-12">
                Get in touch
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </PageTransition>
  );
}

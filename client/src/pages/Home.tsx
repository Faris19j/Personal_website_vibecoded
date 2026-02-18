import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-32 py-16 md:py-40">
        {/* HERO */}
        <section className="space-y-8 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Hi, I'm Faris.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I build digital products that are <span className="text-foreground font-medium">clean, accessible, and performant</span>. I believe great software shares the same principles as great architecture: it should be functional, durable, and beautiful.
          </p>
          <div className="flex gap-3 pt-8">
            <Link href="/work">
              <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                View Work
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Read Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* WHO AM I */}
        <section className="space-y-8 max-w-3xl border-t border-border/20 pt-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Who am I
          </h2>
          <div className="space-y-6 text-base md:text-lg text-muted-foreground">
            <p>
              I'm a multidisciplinary builder with a background in Design Systems and Product Engineering. My philosophy is simple: <span className="text-foreground font-medium">technology should be invisible</span>, enabling users to achieve their goals without friction.
            </p>
            <p>
              Currently, I'm exploring the intersection of AI and human-computer interaction, trying to find patterns that make generative interfaces feel natural and reliable.
            </p>
          </div>
        </section>

        {/* WHAT I'VE DONE */}
        <section className="space-y-8 max-w-3xl border-t border-border/20 pt-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            What I've done
          </h2>
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-3">
                Senior Frontend Engineer @ TechCorp
              </h3>
              <p className="text-base text-muted-foreground">
                Led the migration of a legacy monolithic frontend to a modern Next.js architecture, improving build times by 60%.
              </p>
            </div>
            <div className="group">
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-3">
                Product Designer @ StudioOne
              </h3>
              <p className="text-base text-muted-foreground">
                Designed and shipped the design system used by 5+ product teams, defining brand consistency and developer experience.
              </p>
            </div>
          </div>
          <div className="pt-4">
            <Link
              href="/work"
              className="inline-flex items-center text-base font-medium text-accent hover:text-accent/80 transition-colors"
            >
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* INTERESTS */}
        <section className="space-y-8 max-w-3xl border-t border-border/20 pt-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Beyond code
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            When I'm not building, I'm exploring urban planning, shooting with analog cameras, and perfecting the art of coffee. I believe great software and great architecture follow the same principles: they should be <span className="text-foreground font-medium">functional, durable, and beautiful</span>.
          </p>
        </section>

        {/* CTA */}
        <section className="space-y-8 border-t border-border/20 pt-24 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Let's create something
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              I'm always looking for interesting challenges to solve. If you have a problem in mind, I'd love to hear about it.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-12 bg-accent hover:bg-accent/90 text-accent-foreground">
              Get in touch
            </Button>
          </Link>
        </section>
      </div>
    </PageTransition>
  );
}

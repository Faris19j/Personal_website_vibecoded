import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Terminal, User, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-24 py-12 md:py-24">
        {/* HERO */}
        <section className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Hi, I'm Alex. <br />
            <span className="text-muted-foreground font-light">I build digital products.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            I'm a frontend engineer and designer focused on building clean, accessible, and performant web applications.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/work">
              <Button size="lg" className="rounded-full px-8">View Work</Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-full px-8">Read Blog</Button>
            </Link>
          </div>
        </section>

        {/* WHO AM I */}
        <section className="space-y-8 max-w-3xl border-t border-border/50 pt-16">
          <div className="flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
            <User className="w-4 h-4" />
            <span>Who am I</span>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              I am a multidisciplinary builder with a background in Design Systems and Product Engineering. 
              My philosophy is simple: technology should be invisible, enabling users to achieve their goals without friction.
            </p>
            <p>
              Currently, I'm exploring the intersection of AI and human-computer interaction, trying to find 
              patterns that make generative interfaces feel natural and reliable.
            </p>
          </div>
        </section>

        {/* WHAT I'VE DONE */}
        <section className="space-y-8 max-w-3xl border-t border-border/50 pt-16">
          <div className="flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
            <Terminal className="w-4 h-4" />
            <span>What I've Done</span>
          </div>
          <div className="grid gap-6">
            <div className="group space-y-2">
              <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mt-0">
                Senior Frontend Engineer @ TechCorp
              </h3>
              <p className="text-base text-muted-foreground">
                Led the migration of a legacy monolithic frontend to a modern Next.js architecture, improving build times by 60%.
              </p>
            </div>
            <div className="group space-y-2">
              <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mt-0">
                Product Designer @ StudioOne
              </h3>
              <p className="text-base text-muted-foreground">
                Designed and shipped the design system used by 5+ product teams.
              </p>
            </div>
          </div>
          <div>
            <Link href="/work" className="inline-flex items-center text-sm font-semibold hover:underline">
              View all case studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* INTERESTS */}
        <section className="space-y-8 max-w-3xl border-t border-border/50 pt-16">
          <div className="flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
            <BookOpen className="w-4 h-4" />
            <span>Interests</span>
          </div>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, I'm deeply interested in urban planning, analog photography, and making the perfect cup of coffee. 
            I believe that great software shares the same principles as great architecture: it should be functional, durable, and beautiful.
          </p>
        </section>
      </div>
    </PageTransition>
  );
}

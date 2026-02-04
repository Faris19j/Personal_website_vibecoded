import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="py-12 md:py-24 max-w-2xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Get in touch</h1>
          <p className="text-xl text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </header>

        <div className="grid gap-6">
          <div className="p-6 rounded-2xl border border-border bg-secondary/20">
            <h3 className="font-semibold text-lg mb-2">Email me</h3>
            <p className="text-muted-foreground mb-4">
              The best way to reach me is via email. I usually respond within 24 hours.
            </p>
            <a href="mailto:hello@example.com">
              <Button className="gap-2">
                <Mail className="w-4 h-4" /> hello@example.com
              </Button>
            </a>
          </div>

          <div className="space-y-4 pt-8">
            <h3 className="font-semibold text-lg">Socials</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <Twitter className="w-5 h-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Index", href: "/" },
  { label: "Initiative", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 dark:bg-black/40 backdrop-blur-2xl border-b border-white/20 dark:border-white/10">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Faris
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                location === item.href ||
                (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

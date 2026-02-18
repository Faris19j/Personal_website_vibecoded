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
    <nav className="sticky top-0 z-50 w-full flex justify-center items-center py-3">
      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl px-8 py-3 flex items-center justify-between gap-8 w-full max-w-xl mx-4 md:mx-auto">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          Faris
        </Link>

        <div className="flex items-center gap-8 flex-1 justify-end">
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

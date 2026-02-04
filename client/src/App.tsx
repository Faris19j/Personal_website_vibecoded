import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import ProjectDetail from "@/pages/ProjectDetail";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/work/:slug" component={ProjectDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-black/10 selection:text-black">
          <Navbar />
          <main className="container max-w-5xl mx-auto px-4 sm:px-6">
            <Router />
          </main>
          
          <footer className="border-t border-border/40 mt-24 py-12 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-4">
              <p>&copy; {new Date().getFullYear()} Alex Doe. Built with perfection.</p>
            </div>
          </footer>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

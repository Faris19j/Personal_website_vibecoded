import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // In a real app, you'd send this to a backend/email service
    console.log("Subscribe:", email);
    setSubmitted(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="p-6 rounded-lg border border-border/50 bg-secondary/20">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Get the latest blog posts and updates delivered to your inbox.
        </p>

        {submitted ? (
          <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary text-center">
            ✓ Thanks for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="text-sm"
            />
            {error && (
              <p className="text-xs text-red-500">{error}</p>
            )}
            <Button
              type="submit"
              size="sm"
              className="w-full"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

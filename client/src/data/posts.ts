import type { Post } from "@shared/schema";

export const posts: Post[] = [
  {
    id: 1,
    slug: "hello-world",
    title: "Hello World",
    date: new Date().toISOString().split('T')[0],
    excerpt: "My first post on this new minimal blog.",
    content: "This is the start of something new. Keeping it simple, readable, and focused on the content. Just like PG said.",
  },
  {
    id: 2,
    slug: "why-minimalism",
    title: "Why Minimalism Matters",
    date: "2023-10-15",
    excerpt: "Removing the noise to focus on the signal.",
    content: "In a world full of distractions, minimalism isn't just an aesthetic choice; it's a cognitive one. By reducing visual clutter, we allow our minds to focus on the ideas presented.",
  },
];

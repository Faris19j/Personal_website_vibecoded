import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // --- API Routes ---

  // Posts
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProjectBySlug(req.params.slug);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  // --- Seeding ---
  await seed();

  return httpServer;
}

async function seed() {
  const existingPosts = await storage.getPosts();
  if (existingPosts.length === 0) {
    console.log("Seeding posts...");
    await storage.createPost({
      slug: "hello-world",
      title: "Hello World",
      date: new Date().toISOString().split('T')[0],
      excerpt: "My first post on this new minimal blog.",
      content: "This is the start of something new. Keeping it simple, readable, and focused on the content. Just like PG said.",
    });
    await storage.createPost({
      slug: "why-minimalism",
      title: "Why Minimalism Matters",
      date: "2023-10-15",
      excerpt: "Removing the noise to focus on the signal.",
      content: "In a world full of distractions, minimalism isn't just an aesthetic choice; it's a cognitive one. By reducing visual clutter, we allow our minds to focus on the ideas presented.",
    });
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    console.log("Seeding projects...");
    await storage.createProject({
      slug: "project-alpha",
      title: "Project Alpha",
      summary: "A revolutionary way to manage tasks.",
      tags: ["React", "TypeScript", "Productivity"],
      content: {
        context: "Task management apps are often too complex.",
        problem: "Users spend more time managing tasks than doing them.",
        approach: "We stripped everything back to a single list.",
        outcome: "User retention increased by 40%.",
        future: "Adding collaborative features next.",
      },
    });
    await storage.createProject({
      slug: "ecommerce-redesign",
      title: "E-commerce Redesign",
      summary: "Boosting conversion for a major retailer.",
      tags: ["UX/UI", "Design System", "Conversion"],
      content: {
        context: "Client was seeing high cart abandonment.",
        problem: "Checkout flow was 5 steps long and confusing.",
        approach: "Simplified to a single-page checkout.",
        outcome: "Conversion rate jumped from 1.5% to 3.2%.",
        future: "Implementing personalization engine.",
      },
    });
    await storage.createProject({
      slug: "personal-finance-dashboard",
      title: "Finance Dashboard",
      summary: "Visualizing spending habits in real-time.",
      tags: ["Data Viz", "D3.js", "Finance"],
      content: {
        context: "Most bank interfaces are text-heavy tables.",
        problem: "Users couldn't intuitively understand their spending.",
        approach: "Built interactive charts and spending categories.",
        outcome: "Users engaged with the app 3x more often.",
        future: "Adding predictive budgeting AI.",
      },
    });
    await storage.createProject({
      slug: "open-source-library",
      title: "Open Source UI Lib",
      summary: "A lightweight component library for rapid prototyping.",
      tags: ["Open Source", "npm", "Community"],
      content: {
        context: "Existing libraries were too heavy.",
        problem: "Developers needed something quick and unopinionated.",
        approach: "Created a headless component system.",
        outcome: "10k stars on GitHub in first month.",
        future: "Expanding accessibility support.",
      },
    });
  }
}

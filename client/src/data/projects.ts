import type { Project } from "@shared/schema";

export const projects: Project[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
];

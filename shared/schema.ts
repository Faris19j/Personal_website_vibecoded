import { pgTable, text, serial, jsonb, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  date: date("date").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  tags: text("tags").array().notNull(),
  // Storing structured content for the case study sections
  content: jsonb("content").$type<{
    context: string;
    problem: string;
    approach: string;
    outcome: string;
    future: string; // What I'd improve next
  }>().notNull(),
});

// === SCHEMAS ===

export const insertPostSchema = createInsertSchema(posts).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

// === EXPLICIT API CONTRACT TYPES ===

export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Response types
export type PostListResponse = Post[];
export type ProjectListResponse = Project[];

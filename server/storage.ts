import { db } from "./db";
import { posts, projects, type Post, type Project, type InsertPost, type InsertProject } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  
  getProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class DatabaseStorage implements IStorage {
  // Posts
  async getPosts(): Promise<Post[]> {
    return await db.select().from(posts).orderBy(posts.date);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post;
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const [post] = await db.insert(posts).values(insertPost).returning();
    return post;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.slug, slug));
    return project;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }
}

export const storage = new DatabaseStorage();

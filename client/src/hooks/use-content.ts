import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

// ============================================
// PROJECTS (INITIATIVES)
// ============================================

export function useProjects() {
  return { data: projects, isLoading: false };
}

export function useProject(slug: string) {
  return {
    data: projects.find(p => p.slug === slug),
    isLoading: false,
    error: null
  };
}

// ============================================
// BLOG POSTS
// ============================================

export function usePosts() {
  return { data: posts, isLoading: false };
}

export function usePost(slug: string) {
  return {
    data: posts.find(p => p.slug === slug),
    isLoading: false,
    error: null
  };
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { blogCategories } from "@/lib/site";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  updatedAt: string;
  readingTime: number;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
  contentMarkdown: string;
};

function parseFile(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  // Drop leading H1 — page template already renders title as H1
  const body = content.replace(/^#\s+[^\n]+\n+/, "");
  const contentHtml = marked.parse(body, { async: false }) as string;

  return {
    title: String(data.title ?? ""),
    slug: String(data.slug ?? filename.replace(/\.mdx?$/, "")),
    category: String(data.category ?? "guides"),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? "2025-01-01"),
    updatedAt: String(data.updatedAt ?? data.date ?? "2025-01-01"),
    readingTime: Number(data.readingTime ?? 5),
    seoTitle: String(data.seoTitle ?? data.title ?? ""),
    seoDescription: String(data.seoDescription ?? data.excerpt ?? ""),
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
    contentHtml,
    contentMarkdown: body,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCat = getAllPosts().filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const others = getAllPosts().filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  return [...sameCat, ...others].slice(0, limit);
}

export function getCategoryLabel(slug: string): string {
  return blogCategories.find((c) => c.slug === slug)?.label ?? slug;
}

export function categoryExists(slug: string): boolean {
  return blogCategories.some((c) => c.slug === slug);
}

import { Post } from "@/interfaces/post";
import { Event } from "@/interfaces/event";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const eventsDirectory = join(process.cwd(), "_events");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function searchPosts(query: string): Post[] {
  if (!query.trim()) {
    return [];
  }

  const allPosts = getAllPosts();
  const searchTerm = query.toLowerCase().trim();

  return allPosts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(searchTerm);
    const excerptMatch = post.excerpt.toLowerCase().includes(searchTerm);
    const contentMatch = post.content.toLowerCase().includes(searchTerm);
    const authorMatch = post.author.name.toLowerCase().includes(searchTerm);

    return titleMatch || excerptMatch || contentMatch || authorMatch;
  });
}

// Event-related functions
export function getEventSlugs() {
  return fs.readdirSync(eventsDirectory);
}

export function getEventBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(eventsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Event;
}

export function getAllEvents(): Event[] {
  const slugs = getEventSlugs();
  const events = slugs
    .map((slug) => getEventBySlug(slug))
    // sort events by date in ascending order (upcoming first)
    .sort((event1, event2) => (event1.date < event2.date ? -1 : 1));
  return events;
}

// Gallery-related functions
const galleryDirectory = join(process.cwd(), "public/assets/gallery");

export interface GalleryImage {
  filename: string;
  path: string;
  alt: string;
}

export function getGalleryImages(): GalleryImage[] {
  try {
    // Check if gallery directory exists
    if (!fs.existsSync(galleryDirectory)) {
      return [];
    }

    const files = fs.readdirSync(galleryDirectory);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

    const images = files
      .filter((file) => {
        const ext = file.toLowerCase().substring(file.lastIndexOf("."));
        return imageExtensions.includes(ext);
      })
      .map((filename) => ({
        filename,
        path: `/assets/gallery/${filename}`,
        alt: filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
      }))
      .sort((a, b) => a.filename.localeCompare(b.filename));

    return images;
  } catch (error) {
    console.error("Error reading gallery images:", error);
    return [];
  }
}

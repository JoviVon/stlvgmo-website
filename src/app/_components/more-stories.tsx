import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Link from "next/link";

type Props = {
  posts: Post[];
  showViewAll?: boolean;
};

export function MoreStories({ posts, showViewAll = false }: Props) {
  return (
    <section className="animate-fade-in">
      {/* Retro-style divider */}
      <div className="mb-12 flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-stlvgmo-blue-600 transform rotate-45"></div>
        <div className="w-2 h-2 bg-stlvgmo-orange-500 transform rotate-45"></div>
        <div className="w-2 h-2 bg-stlvgmo-blue-600 transform rotate-45"></div>
      </div>

      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          {showViewAll ? "Recent Posts" : "All Posts"}
        </h2>
        {showViewAll && (
          <Link
            href="/posts"
            className="group inline-flex items-center gap-2 text-stlvgmo-orange-400 hover:text-stlvgmo-orange-300 font-medium transition-colors duration-200"
          >
            View All Posts
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

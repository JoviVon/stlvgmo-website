import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Link from "next/link";

type Props = {
  posts: Post[];
  showViewAll?: boolean;
};

export function MoreStories({ posts, showViewAll = false }: Props) {
  return (
    <section>
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          {showViewAll ? "Recent Posts" : "All Posts"}
        </h2>
        {showViewAll && (
          <Link
            href="/posts"
            className="text-primary-400 hover:underline font-medium"
          >
            View All Posts →
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

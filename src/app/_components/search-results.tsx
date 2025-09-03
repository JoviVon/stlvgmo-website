import { Post } from "@/interfaces/post";
import { SearchResultCard } from "./search-result-card";

type Props = {
  posts: Post[];
  query: string;
};

export default function SearchResults({ posts, query }: Props) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            No posts found
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            No posts match your search for "{query}". Try different keywords.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight">
          Search Results
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Found {posts.length} {posts.length === 1 ? 'post' : 'posts'} for "{query}"
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <SearchResultCard
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
    </div>
  );
}

import { Suspense } from "react";
import { searchPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import SearchResults from "@/app/_components/search-results";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

async function SearchContent({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q || "";
  const posts = query ? searchPosts(query) : [];

  if (!query) {
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
            No search query
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Please enter a search term to find posts.
          </p>
        </div>
      </div>
    );
  }

  return <SearchResults posts={posts} query={query} />;
}

export default function SearchPage({ searchParams }: Props) {
  return (
    <Container>
      <section className="py-16 md:py-20">
        <Suspense
          fallback={
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Searching...
              </p>
            </div>
          }
        >
          <SearchContent searchParams={searchParams} />
        </Suspense>
      </section>
    </Container>
  );
}

export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q || "";

  return {
    title: query ? `Search results for "${query}"` : "Search",
    description: query
      ? `Search results for "${query}" on STLVGMO Blog`
      : "Search for posts on STLVGMO Blog",
  };
}

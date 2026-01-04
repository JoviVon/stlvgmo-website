import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts | STLVGMO",
  description: "All posts from STLVGMO.",
};

export default function Posts() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <div className="py-16">
          {allPosts.length > 0 && (
            <MoreStories posts={allPosts} showViewAll={false} />
          )}
        </div>
      </Container>
    </main>
  );
}

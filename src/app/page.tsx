import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import GalleryCarousel from "@/app/_components/gallery-carousel";
import ShopPreview from "@/app/_components/shop-preview";
import { getAllPosts, getGalleryImages } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const galleryImages = getGalleryImages();

  const recentPosts = allPosts.slice(0, 3);

  return (
    <main>
      <Container>
        <Intro />
        <GalleryCarousel images={galleryImages} />
        <ShopPreview />
        {recentPosts.length > 0 && (
          <MoreStories posts={recentPosts} showViewAll={true} />
        )}
      </Container>
    </main>
  );
}

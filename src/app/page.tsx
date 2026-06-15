import Image from "next/image";
import Link from "next/link";
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import HeroCTA from "@/app/_components/hero-cta";
import UpcomingEvents from "@/app/_components/upcoming-events";
import { MoreStories } from "@/app/_components/more-stories";
import GalleryCarousel from "@/app/_components/gallery-carousel";
import ShopPreview from "@/app/_components/shop-preview";
import DonorRecognition from "@/app/_components/donor-recognition";
import { getAllPosts, getGalleryImages } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const galleryImages = getGalleryImages();

  const recentPosts = allPosts.slice(0, 3);

  return (
    <main>
      <Container>
        <Intro />
        <HeroCTA />

        <section className="my-8 rounded-2xl border border-primary-500/40 bg-gradient-to-r from-primary-900/40 to-primary-800/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="inline-block text-xs font-semibold uppercase tracking-wide text-primary-300 bg-primary-500/20 px-2 py-1 rounded mb-3">
                Featured in November
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Trivia Night is Coming
              </h2>
              <p className="text-gray-200 max-w-2xl">
                Join us for a fun community trivia night this November. See full
                details and sign up now.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/trivia"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-colors duration-200"
              >
                View Trivia Night
              </Link>
            </div>
          </div>
        </section>

        <section className="my-8">
          <Link href="/events" className="block">
            <div className="relative w-full h-[85vh] max-h-[900px] min-h-[520px] overflow-hidden rounded-2xl">
              <Image
                src="/assets/STL_VGM_Orchestra_3.png"
                alt="Upcoming STLVGMO concert flyer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </section>

        <UpcomingEvents />
        <DonorRecognition title="Donor Recognition Wall" />
        <GalleryCarousel images={galleryImages} />
        <ShopPreview />
        {recentPosts.length > 0 && (
          <MoreStories posts={recentPosts} showViewAll={true} />
        )}
      </Container>
    </main>
  );
}

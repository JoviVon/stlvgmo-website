import Container from "@/app/_components/container";
import GalleryGrid from "@/app/_components/gallery-grid";
import { getGalleryImages } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | STLVGMO",
  description: "Photo gallery of STLVGMO performances and events.",
};

export default function Gallery() {
  const images = getGalleryImages();

  return (
    <main>
      <Container>
        <div className="py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Photos from our performances, rehearsals, and events.
            </p>
          </div>

          <GalleryGrid images={images} />
        </div>
      </Container>
    </main>
  );
}

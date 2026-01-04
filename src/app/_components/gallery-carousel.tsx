"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GalleryImage } from "@/lib/api";

interface GalleryCarouselProps {
  images: GalleryImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  if (images.length === 0) {
    return (
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            No images available yet. Add images to the gallery folder to see
            them here!
          </p>
        </div>
      </section>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
          Gallery
        </h2>
        <Link
          href="/gallery"
          className="text-primary-700 dark:text-primary-400 hover:underline font-medium"
        >
          View All Photos →
        </Link>
      </div>

      <div className="relative w-full h-[400px] md:h-[600px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex].path}
            alt={images[currentIndex].alt}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  );
}

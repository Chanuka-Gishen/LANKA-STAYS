"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  propertyName: string;
}

export default function PropertyGallery({
  images,
  propertyName,
}: PropertyGalleryProps) {
  const galleryImages = images.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  if (galleryImages.length === 0) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
        Property images are not available.
      </div>
    );
  }

  return (
    <>
      <div className="md:hidden">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
          <Image
            key={galleryImages[activeIndex].src}
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt || propertyName}
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            className="object-cover transition-opacity duration-300"
          />

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
              >
                <ChevronRight size={22} />
              </button>

              <div className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {activeIndex + 1} / {galleryImages.length}
              </div>
            </>
          )}
        </div>

        {galleryImages.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="hidden grid-cols-4 gap-3 overflow-hidden rounded-2xl md:grid">
        <div className="relative min-h-[420px] overflow-hidden md:col-span-2 md:row-span-2">
          <Image
            src={galleryImages[0].src}
            alt={galleryImages[0].alt || propertyName}
            fill
            priority
            sizes="50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {galleryImages.slice(1).map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt || `${propertyName} photo ${index + 2}`}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </>
  );
}

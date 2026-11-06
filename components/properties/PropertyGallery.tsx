import Image from "next/image";

import type { PropertyImage } from "@/types/property";

interface PropertyGalleryProps {
  images: PropertyImage[];
  propertyName: string;
}

export default function PropertyGallery({
  images,
  propertyName,
}: PropertyGalleryProps) {
  const galleryImages = images.slice(0, 5);

  if (galleryImages.length === 0) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
        Property images are not available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 overflow-hidden rounded-2xl md:grid-cols-4">
      <div className="relative aspect-[4/3] overflow-hidden md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[420px]">
        <Image
          src={galleryImages[0].src}
          alt={galleryImages[0].alt || propertyName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {galleryImages.slice(1).map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="relative hidden aspect-[4/3] overflow-hidden md:block"
        >
          <Image
            src={image.src}
            alt={image.alt || `${propertyName} photo ${index + 2}`}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

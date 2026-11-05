export type PropertyType =
  | "Hotel"
  | "Villa"
  | "Guesthouse"
  | "Resort"
  | "Apartment"
  | "Cabin";

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface Destination {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  destination: string;
  type: PropertyType;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  amenities: string[];
  images: PropertyImage[];
  checkInTime: string;
  checkOutTime: string;
}

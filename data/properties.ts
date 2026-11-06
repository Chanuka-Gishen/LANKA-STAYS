import type { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "PROP-001",
    slug: "colombo-grand-residence",
    name: "Colombo Grand Residence",
    location: "Colombo 03, Colombo",
    destination: "colombo",
    type: "Hotel",
    description:
      "Experience sophisticated city accommodation with elegant rooms, modern facilities and convenient access to Colombo's shopping and entertainment districts.",
    pricePerNight: 18500,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    amenities: [
      "Swimming Pool",
      "Free Wi-Fi",
      "Air Conditioning",
      "Restaurant",
      "Parking",
    ],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=1_5dMAcjeQtZbfPbc8AYxI0V3jqIaVrwr",
        alt: "Hotel Front",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1SV1_1rm1vyK7uEzw5uljz4hPvr94NCJb",
        alt: "Elegant Colombo hotel bedroom",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1Dy-zfTIEILC-jgKSevf5NtKr0WWZFCtH",
        alt: "Hotel luxaury bedroom",
      },
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
  {
    id: "PROP-002",
    slug: "kandy-mountain-view-villa",
    name: "Kandy Mountain View Villa",
    location: "Kandy, Central Province",
    destination: "kandy",
    type: "Villa",
    description:
      "Enjoy a peaceful villa overlooking the beautiful Kandy landscape, with spacious interiors and a relaxing atmosphere.",
    pricePerNight: 22000,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.9,
    reviewCount: 98,
    featured: true,
    amenities: [
      "Lake View",
      "Free Wi-Fi",
      "Garden",
      "Air Conditioning",
      "Breakfast",
    ],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=1s3mFMFNNRpLMnKYsi2zR0QjBUTctow45",
        alt: "Villa overlooking Kandy",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1OPJsIJCg8YgV4XvmkrXcwNPY9hqIYiBv",
        alt: "Villa bedroom",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1YNdGtNus1enoRHgkA0XSpkwUDnTJVdyL",
        alt: "Villa pool",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1OPJsIJCg8YgV4XvmkrXcwNPY9hqIYiBv",
        alt: "Villa bedroom",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1s-pKk9G_rFKSLaftJmpMTikrsyHF1ITH",
        alt: "Villa living room",
      },
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
  {
    id: "PROP-003",
    slug: "ella-heritage-villa",
    name: "Ella Heritage Villa",
    location: "Ella, Uva Province",
    destination: "ella",
    type: "Villa",
    description:
      "A welcoming guesthouse combining traditional Sri Lankan hospitality with comfortable rooms and easy access to local attractions.",
    pricePerNight: 8500,
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.5,
    reviewCount: 62,
    featured: false,
    amenities: ["Free Wi-Fi", "Breakfast", "Garden", "Parking", "Fan"],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=1I-CDAryJz5RjaGOth84AlXD61oDK6tl5",
        alt: "Traditional guesthouse exterior",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1Jm3XtEfPtMaqz2-qAwmDOwbvPCgJR48U",
        alt: "Guesthouse bedroom",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1rPkIbmvlICppa20Y36V8Fhmypi141i4v",
        alt: "Guesthouse pool area",
      },
    ],
    checkInTime: "1:00 PM",
    checkOutTime: "10:00 AM",
  },
  {
    id: "PROP-004",
    slug: "galle-fort-boutique-hotel",
    name: "Galle Fort Boutique Hotel",
    location: "Galle Fort, Galle",
    destination: "galle",
    type: "Hotel",
    description:
      "Discover historic charm and modern comfort in this boutique hotel located near the iconic streets and architecture of Galle Fort.",
    pricePerNight: 24500,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.9,
    reviewCount: 178,
    featured: true,
    amenities: [
      "Free Wi-Fi",
      "Restaurant",
      "Air Conditioning",
      "Breakfast",
      "Courtyard",
    ],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=1ri0gQv1AR8j6GBGwCI-NTArb3k23s8At",
        alt: "Boutique hotel in Galle Fort",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=15d5vUg7-ye6JbX20RUVTDEg0CzIEYxFN",
        alt: "Boutique hotel bedroom",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=185qQ5tI9SR6O93l68ahk638QVeZ8Qq3B",
        alt: "Hotel courtyard",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=183Jl4h9xx3luSHLsQ6jeiy6FlR6EDe7P",
        alt: "Hotel dinning area",
      },
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
  {
    id: "PROP-005",
    slug: "mirissa-beachfront-resort",
    name: "Mirissa Beachfront Resort",
    location: "Mirissa, Southern Province",
    destination: "mirissa",
    type: "Resort",
    description:
      "Enjoy a tropical beach escape with ocean views, relaxing spaces and easy access to the beautiful beaches of Mirissa.",
    pricePerNight: 26500,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.8,
    reviewCount: 143,
    featured: true,
    amenities: [
      "Beach Access",
      "Swimming Pool",
      "Restaurant",
      "Free Wi-Fi",
      "Air Conditioning",
    ],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=110gtmLRgZY9y6HyS7rdWIGSG2cuBPutv",
        alt: "Beachfront resort in Mirissa",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=19iJDrNRmS3BFQt-VwR7-wSfh_aMpfRUw",
        alt: "Resort reception area",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1VWNWL6dxIDLdy7bgH1a6foXU2zJqyjdz",
        alt: "Resort bar area",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1Near6jBGL6zszG4RgOB9jtR4n7wmL7DD",
        alt: "Resort cabana bedroom",
      },
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
  {
    id: "PROP-006",
    slug: "mirissa-tropical-guesthouse",
    name: "Mirissa Tropical Guesthouse",
    location: "Mirissa, Southern Province",
    destination: "mirissa",
    type: "Resort",
    description:
      "A cosy tropical guesthouse offering simple comfort, friendly hospitality and easy access to the beach.",
    pricePerNight: 7500,
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.6,
    reviewCount: 74,
    featured: false,
    amenities: [
      "Free Wi-Fi",
      "Garden",
      "Breakfast",
      "Air Conditioning",
      "Parking",
    ],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=1huvUkwjXJI0HbxikpxKdR1VRmgbTXp9B",
        alt: "Tropical guesthouse exterior",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1p7GomWAk9zvkq0-d6MEhzTTzTyCGAElb",
        alt: "Guesthouse bedroom",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1Dh7WOHabLfrtpJLrz8fmMDxn_-r4fvG1",
        alt: "Resort reception area",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1aZ83ezLJqIa2d7zaSWjGsOV20hwg42Iu",
        alt: "Resort dining area",
      },
    ],
    checkInTime: "1:00 PM",
    checkOutTime: "10:00 AM",
  },
  {
    id: "PROP-007",
    slug: "nuwara-eliya-tea-estate-hotel",
    name: "Tea Estate Hotel",
    location: "Nuwara Eliya, Central Province",
    destination: "nuwara-eliya",
    type: "Hotel",
    description:
      "Stay among rolling tea plantations in this elegant mountain villa, featuring cosy interiors and scenic countryside views.",
    pricePerNight: 21000,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.9,
    reviewCount: 112,
    featured: true,
    amenities: [
      "Tea Estate View",
      "Fireplace",
      "Free Wi-Fi",
      "Garden",
      "Breakfast",
    ],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=1fxNUGukPU0KoBZ0iJkZt_2hUVP2p6HbH",
        alt: "Villa surrounded by tea plantations",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1LNvIv3kHS447ByyBSa4j8H1WHlInow96",
        alt: "Cosy villa interior lobby",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1FcutTnFu4AmkvrfmxmspluB5_mN_qomt",
        alt: "Villa dining area",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1iwu71Z55BRGd--MMKR8y43v1PX6orH9",
        alt: "Villa pool area",
      },
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
  {
    id: "PROP-008",
    slug: "nuwara-eliya-tea-estate-guest-house",
    name: "Tea Estate Guest House",
    location: "Nuwara Eliya, Central Province",
    destination: "nuwara-eliya",
    type: "Guesthouse",
    description:
      "Stay among rolling tea plantations in this elegant mountain villa, featuring cosy interiors and scenic countryside views.",
    pricePerNight: 21000,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.9,
    reviewCount: 112,
    featured: true,
    amenities: [
      "Tea Estate View",
      "Fireplace",
      "Free Wi-Fi",
      "Garden",
      "Breakfast",
    ],
    images: [
      {
        src: "https://drive.google.com/uc?export=view&id=183OF6xBEKu3HoJc_j2T24gX3HHsZupuq",
        alt: "Villa surrounded by tea plantations",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1KNKIkagzlFSO7zMLYjcHm8iaWpsMoS5R",
        alt: "Cosy villa interior lobby",
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1uk6Lz1LD0p6gAGw7phqLg8Dbc1ytR5X0",
        alt: "Villa dining area",
      },
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
];

export const featuredProperties = properties.filter(
  (property) => property.featured,
);

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getPropertiesByDestination(destination: string) {
  return properties.filter((property) => property.destination === destination);
}

export function getPropertiesByType(type: string) {
  return properties.filter((property) => property.type === type);
}

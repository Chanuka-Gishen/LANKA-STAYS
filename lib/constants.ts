export const SITE_CONFIG = {
  name: "Lanka Stayz",
  description:
    "Discover and book beautiful stays across Sri Lanka. Find hotels, villas, guesthouses and unique accommodation for your next getaway.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_LK",
  currency: "LKR",
  currencySymbol: "Rs.",
  country: "Sri Lanka",
  contactEmail: "hello@lankastayz.lk",
  contactPhone: "+94 11 234 5678",
  address: "Colombo, Sri Lanka",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export const NAVIGATION_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore Stays",
    href: "/explore",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const PROPERTY_TYPES = [
  "Hotel",
  "Villa",
  "Guesthouse",
  "Resort",
  "Apartment",
  "Cabin",
] as const;

export const GUEST_OPTIONS = Array.from(
  { length: 10 },
  (_, index) => index + 1,
);

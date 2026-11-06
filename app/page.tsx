import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

import HeroSection from "@/components/home/HeroSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = generateSEO({
  title: "Discover Your Perfect Stay in Sri Lanka",
  description:
    "Explore hotels, villas, resorts and guesthouses across Sri Lanka. Discover beautiful accommodation in Colombo, Kandy, Ella, Galle and more.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <DestinationsSection />

      <FeaturedProperties />

      <WhyChooseUs />

      <CTASection />
    </main>
  );
}

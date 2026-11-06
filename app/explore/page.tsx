import type { Metadata } from "next";
import Link from "next/link";
import { SearchX } from "lucide-react";

import { generateSEO } from "@/lib/seo";
import { properties } from "@/data/properties";
import { destinations } from "@/data/destinations";
import { PROPERTY_TYPES } from "@/lib/constants";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/properties/PropertyCard";
import ExploreFilters from "@/components/properties/ExploreFilters";

export const metadata: Metadata = generateSEO({
  title: "Explore Stays in Sri Lanka",
  description:
    "Explore hotels, villas, resorts, apartments and guesthouses across Sri Lanka. Find your ideal accommodation.",
  path: "/explore",
});

interface ExplorePageProps {
  searchParams: Promise<{
    destination?: string;
    type?: string;
    guests?: string;
    minPrice?: string;
    maxPrice?: string;
    checkIn?: string;
    checkOut?: string;
  }>;
}

function normalizeSlug(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
}

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const params = await searchParams;

  const destination = params.destination ?? "";
  const type = params.type ?? "";
  const guests = params.guests ?? "";
  const minPrice = params.minPrice ?? "";
  const maxPrice = params.maxPrice ?? "";

  const checkIn = params.checkIn ?? "";
  const checkOut = params.checkOut ?? "";

  const guestCount = Number(guests);
  const minimumPrice = Number(minPrice);
  const maximumPrice = Number(maxPrice);

  const validType = PROPERTY_TYPES.includes(
    type as (typeof PROPERTY_TYPES)[number],
  )
    ? type
    : "";

  const filteredProperties = properties.filter((property) => {
    const matchesDestination =
      !destination || normalizeSlug(property.destination) === destination;

    const matchesType = !validType || property.type === validType;

    const matchesGuests =
      !guests ||
      (Number.isInteger(guestCount) &&
        guestCount >= 1 &&
        property.maxGuests >= guestCount);

    const matchesMinimumPrice =
      !minPrice ||
      (Number.isFinite(minimumPrice) &&
        minimumPrice >= 0 &&
        property.pricePerNight >= minimumPrice);

    const matchesMaximumPrice =
      !maxPrice ||
      (Number.isFinite(maximumPrice) &&
        maximumPrice >= 0 &&
        property.pricePerNight <= maximumPrice);

    return (
      matchesDestination &&
      matchesType &&
      matchesGuests &&
      matchesMinimumPrice &&
      matchesMaximumPrice
    );
  });

  const selectedDestination = destinations.find(
    (item) => item.slug === destination,
  );

  const initialFilters = {
    destination,
    type: validType,
    guests,
    minPrice,
    maxPrice,
    checkIn,
    checkOut,
  };

  return (
    <main>
      <section className="bg-[#f3f5f1] py-4">
        <Container>
          <SectionHeading
            eyebrow="Find your getaway"
            title={
              selectedDestination
                ? `Stays in ${selectedDestination.name}`
                : "Explore Our Stays"
            }
            description="Discover beautiful places to stay across Sri Lanka, from peaceful mountain retreats to coastal escapes."
            align="center"
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_1fr]">
            <ExploreFilters initialFilters={initialFilters} />

            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-primary">
                    Available Stays
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {filteredProperties.length}{" "}
                    {filteredProperties.length === 1
                      ? "property"
                      : "properties"}{" "}
                    found
                  </p>
                </div>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="card flex min-h-[350px] flex-col items-center justify-center px-6 py-12 text-center">
                  <div className="mb-4 rounded-full bg-gray-100 p-4">
                    <SearchX size={30} className="text-gray-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-primary">
                    No stays found
                  </h3>

                  <p className="mt-2 max-w-md text-sm text-gray-500">
                    We couldn't find any properties matching your selected
                    filters. Try changing your search criteria.
                  </p>

                  <Link href="/explore" className="btn btn-primary mt-6">
                    Clear all filters
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

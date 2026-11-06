import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import BookingForm from "@/components/booking/BookingForm";

import { getPropertyBySlug } from "@/data/properties";
import { generateSEO } from "@/lib/seo";

interface BookingPageProps {
  searchParams: Promise<{
    property?: string;
  }>;
}

export const metadata: Metadata = generateSEO({
  title: "Request a Booking",
  description: "Submit your accommodation booking request with Lanka Stayz.",
  path: "/booking",
  noIndex: true,
});

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-LK", {
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;

  const propertySlug = params.property;

  if (!propertySlug) {
    notFound();
  }

  const property = getPropertyBySlug(propertySlug);

  if (!property) {
    notFound();
  }

  return (
    <main className="bg-[#f8f7f3]">
      <section className="section-padding">
        <Container>
          <Link
            href={`/stays/${property.slug}`}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-primary"
          >
            <ArrowLeft size={17} />
            Back to property
          </Link>

          <div className="mb-9 text-center">
            <p className="section-eyebrow">Your Sri Lankan getaway</p>

            <h1 className="section-title">Request Your Stay</h1>

            <p className="section-description mx-auto">
              Complete the form below to submit your preferred booking details.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="card overflow-hidden">
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Your selected stay
                </p>

                <h2 className="mt-3 font-playfair text-2xl font-semibold text-primary">
                  {property.name}
                </h2>

                <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  {property.location}
                </p>

                <div className="my-6 border-t border-gray-200" />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-gray-500">
                    Accommodation type
                  </span>

                  <span className="text-sm font-medium text-primary">
                    {property.type}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-sm text-gray-500">Maximum guests</span>

                  <span className="text-sm font-medium text-primary">
                    {property.maxGuests}
                  </span>
                </div>

                <div className="mt-6 rounded-xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500">Starting from</p>

                  <p className="mt-1 text-2xl font-bold text-primary">
                    Rs. {formatPrice(property.pricePerNight)}
                    <span className="ml-1 text-sm font-normal text-gray-500">
                      / night
                    </span>
                  </p>
                </div>

                <Link
                  href={`/stays/${property.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-primary hover:text-accent"
                >
                  View property details
                  <ArrowLeft size={15} className="ml-2 rotate-180" />
                </Link>
              </div>
            </aside>

            <BookingForm property={property} />
          </div>
        </Container>
      </section>
    </main>
  );
}

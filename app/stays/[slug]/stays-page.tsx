"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  Clock,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import PropertyGallery from "@/components/properties/PropertyGallery";

import { getPropertyBySlug } from "@/data/properties";
import Badge from "@/components/ui/Badge";
import { useEffect, useState } from "react";
import PropertyLoading from "./loading";

interface PropertyPageProps {
  slug: string;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-LK", {
    maximumFractionDigits: 0,
  }).format(price);
}

export default function StaysPage({ slug }: PropertyPageProps) {
  const property = getPropertyBySlug(slug);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    PropertyLoading();
  }

  if (!property) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="section-padding">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-sm text-gray-500"
          >
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>

            <span>/</span>

            <Link href="/explore" className="transition hover:text-primary">
              Explore Stays
            </Link>

            <span>/</span>

            <span className="font-medium text-primary">{property.name}</span>
          </nav>

          <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge> {property.type} </Badge>

                {property.featured && <Badge> Featured Stay </Badge>}
              </div>

              <h1 className="font-playfair text-3xl font-semibold text-primary md:text-4xl">
                {property.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  {property.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <strong className="text-gray-800">
                    {property.rating.toFixed(1)}
                  </strong>
                  ({property.reviewCount} reviews)
                </span>
              </div>
            </div>

            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-accent"
            >
              <ArrowLeft size={16} />
              Back to all stays
            </Link>
          </div>

          <PropertyGallery
            images={property.images}
            propertyName={property.name}
          />

          <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <section className="border-b border-gray-200 pb-8">
                <h2 className="font-playfair text-2xl font-semibold text-primary">
                  About this stay
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  {property.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  <div className="flex items-center gap-3">
                    <Users size={21} className="text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {property.maxGuests} Guests
                      </p>
                      <p className="text-xs text-gray-500">Maximum capacity</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <BedDouble size={21} className="text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {property.bedrooms} Bedrooms
                      </p>
                      <p className="text-xs text-gray-500">Sleeping spaces</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Bath size={21} className="text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {property.bathrooms} Bathrooms
                      </p>
                      <p className="text-xs text-gray-500">
                        Private facilities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={21} className="text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {property.checkInTime}
                      </p>
                      <p className="text-xs text-gray-500">Check-in time</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="border-b border-gray-200 py-8">
                <h2 className="font-playfair text-2xl font-semibold text-primary">
                  What this place offers
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check size={15} />
                      </span>

                      {amenity}
                    </div>
                  ))}
                </div>
              </section>

              <section className="pt-8">
                <h2 className="font-playfair text-2xl font-semibold text-primary">
                  Check-in and check-out
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#f8f7f3] p-5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <CalendarDays size={18} />
                      <span className="text-sm">Check-in</span>
                    </div>

                    <p className="mt-2 text-lg font-semibold text-primary">
                      {property.checkInTime}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f8f7f3] p-5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <CalendarDays size={18} />
                      <span className="text-sm">Check-out</span>
                    </div>

                    <p className="mt-2 text-lg font-semibold text-primary">
                      {property.checkOutTime}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="card p-6 shadow-lg">
                <p className="text-sm text-gray-500">Price per night</p>

                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    Rs. {formatPrice(property.pricePerNight)}
                  </span>

                  <span className="text-sm text-gray-500">/ night</span>
                </div>

                <div className="my-6 border-t border-gray-200" />

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Accommodation</span>
                    <span className="font-medium text-primary">
                      {property.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Maximum guests</span>
                    <span className="font-medium text-primary">
                      {property.maxGuests}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Check-in</span>
                    <span className="font-medium text-primary">
                      {property.checkInTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Check-out</span>
                    <span className="font-medium text-primary">
                      {property.checkOutTime}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/booking?property=${property.slug}`}
                  className="btn btn-primary mt-7 w-full"
                >
                  Request to Book
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

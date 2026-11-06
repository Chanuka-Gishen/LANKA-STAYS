import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Heart, MapPin, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "About Us",
  description:
    "Discover Lanka Stayz and our mission to help travellers find beautiful places to stay across Sri Lanka.",
  path: "/about",
});

const values = [
  {
    icon: Compass,
    title: "Discover More",
    description:
      "Explore different destinations and find accommodation that suits your travel plans.",
  },
  {
    icon: Heart,
    title: "Travel with Confidence",
    description:
      "Find useful property information to help you make informed accommodation choices.",
  },
  {
    icon: Sparkles,
    title: "Meaningful Experiences",
    description: "Discover stays that make your time in Sri Lanka memorable.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#f3f5f1] py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Our Story</p>

            <h1 className="section-title">
              Discover Sri Lanka, One Stay at a Time
            </h1>

            <p className="section-description mx-auto">
              We believe every great journey deserves a beautiful place to stay.
              Lanka Stayz helps travellers discover accommodation across the
              island.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/background/about-sri-lanka.png"
                alt="Beautiful Sri Lankan tropical landscape"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="section-eyebrow">Welcome to Lanka Stayz</p>

              <h2 className="font-playfair text-3xl font-semibold leading-tight text-primary md:text-4xl">
                Your journey begins with the right stay.
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                From relaxing coastal escapes and peaceful mountain retreats to
                city apartments and boutique hotels, Sri Lanka offers something
                for every kind of traveller.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Lanka Stayz brings a variety of accommodation options together
                in one place, making it easier to explore destinations, compare
                properties and find a stay for your next adventure.
              </p>

              <div className="mt-7">
                <Link href="/explore" className="btn btn-primary">
                  Explore Stays
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f7f3]">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="section-eyebrow">What Matters to Us</p>

            <h2 className="section-title">Making every journey special</h2>

            <p className="section-description mx-auto">
              We want to make discovering your next Sri Lankan getaway simple
              and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="card p-7 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={25} />
                  </div>

                  <h3 className="font-playfair text-xl font-semibold text-primary">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="rounded-2xl bg-primary px-6 py-14 text-center md:px-12">
            <MapPin size={32} className="mx-auto mb-5 text-accent" />

            <h2 className="font-playfair text-3xl font-bold leading-tight text-white md:text-5xl">
              Ready to Explore Sri Lanka?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/90">
              Find your next getaway and discover a place worth remembering.
            </p>

            <Link
              href="/explore"
              className="btn btn-accent mt-8 inline-flex items-center gap-2"
            >
              Find Your Stay
              <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

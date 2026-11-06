import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";

export default function DestinationsSection() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Explore the island"
          title="Find Your Next Destination"
          description="Discover the diverse beauty of Sri Lanka, from lively coastal towns to peaceful mountain hideaways."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/explore?destination=${destination.slug}`}
              className="group relative isolate block aspect-[5/4] overflow-hidden rounded-2xl bg-surface-muted"
            >
              <Image
                src={destination.image}
                alt={`${destination.name}, Sri Lanka`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <div>
                  <h3 className="font-heading text-2xl font-semibold">
                    {destination.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                    {destination.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition-colors group-hover:bg-white group-hover:text-primary">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

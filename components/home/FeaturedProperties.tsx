import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PropertyCard from "@/components/properties/PropertyCard";
import { featuredProperties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-surface-muted">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Handpicked for you"
            title="Featured Places to Stay"
            description="Explore some of our selected accommodation options for your next Sri Lankan getaway."
          />

          <Link
            href="/explore"
            className="mb-10 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View all stays
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/explore" variant="secondary">
            Explore All Properties
            <ArrowRight size={17} />
          </Button>
        </div>
      </Container>
    </section>
  );
}

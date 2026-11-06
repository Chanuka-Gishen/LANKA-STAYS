import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Star, ArrowUpRight } from "lucide-react";
import type { Property } from "@/types/property";
import Badge from "@/components/ui/Badge";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="card card-hover group">
      <Link
        href={`/stays/${property.slug}`}
        className="property-image relative block aspect-[4/3]"
        aria-label={`View ${property.name}`}
      >
        <Image
          src={property.images[0].src}
          alt={property.images[0].alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {property.featured && (
          <div className="absolute left-4 top-4">
            <Badge className="bg-white text-primary">Featured</Badge>
          </div>
        )}

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
          <Star size={14} className="fill-accent text-accent" />
          {property.rating.toFixed(1)}
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Badge>{property.type}</Badge>

            <Link href={`/stays/${property.slug}`}>
              <h3 className="mt-3 font-heading text-xl font-semibold text-primary transition-colors group-hover:text-accent">
                {property.name}
              </h3>
            </Link>

            <p className="mt-2 flex items-center gap-1.5 text-sm text-text-secondary">
              <MapPin size={15} className="shrink-0" />
              <span>{property.location}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div>
            <p className="text-xs text-text-muted">Starting from</p>

            <p className="mt-1 text-lg font-bold text-primary">
              Rs. {property.pricePerNight.toLocaleString("en-LK")}
              <span className="ml-1 text-xs font-normal text-text-secondary">
                / night
              </span>
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-text-secondary">
            <Users size={15} />
            Up to {property.maxGuests}
          </div>
        </div>

        <Link
          href={`/stays/${property.slug}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}

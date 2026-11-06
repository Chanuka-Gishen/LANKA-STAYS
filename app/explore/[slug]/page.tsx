import type { Metadata } from "next";

import { getPropertyBySlug } from "@/data/properties";
import { generateSEO } from "@/lib/seo";
import StaysPage from "./stays-page";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return generateSEO({
      title: "Property Not Found",
      description: "The requested accommodation could not be found.",
      path: `/explore/${slug}`,
      noIndex: true,
    });
  }

  return generateSEO({
    title: `${property.name} - ${property.location}`,
    description: property.description.slice(0, 155),
    path: `/explore/${property.slug}`,
    image: property.images[0]?.src || undefined,
  });
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;

  return <StaysPage slug={slug} />;
}

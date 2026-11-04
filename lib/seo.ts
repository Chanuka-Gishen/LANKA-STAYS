import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  path = "",
  image = "/images/branding/og-image.jpg",
  noIndex = false,
}: SEOOptions): Metadata {
  const canonicalUrl = new URL(path, SITE_CONFIG.url).toString();

  const imageUrl = new URL(image, SITE_CONFIG.url).toString();

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
    },

    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      siteName: SITE_CONFIG.name,
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

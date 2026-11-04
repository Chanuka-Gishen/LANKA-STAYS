import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  explore: [
    { label: "Explore All Stays", href: "/explore" },
    { label: "Hotels", href: "/explore?type=Hotel" },
    { label: "Villas", href: "/explore?type=Villa" },
    { label: "Guesthouses", href: "/explore?type=Guesthouse" },
  ],

  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],

  support: [
    { label: "Booking Information", href: "/contact" },
    { label: "Help & Support", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold">
                Lanka<span className="text-accent">Stayz</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
              Discover beautiful places to stay across Sri Lanka. From peaceful
              mountain escapes to unforgettable coastal retreats, find a stay
              that feels just right.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt=""
                  width={17}
                  height={17}
                />
              </a>

              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt=""
                  width={17}
                  height={17}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Explore</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Company</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Get in Touch</h3>

            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin size={18} strokeWidth={1.8} />
                <span>{SITE_CONFIG.address}</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} strokeWidth={1.8} />
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} strokeWidth={1.8} />
                <a
                  href={`tel:${SITE_CONFIG.contactPhone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE_CONFIG.contactPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <p className="text-xs text-white/50">Discover more. Stay better.</p>
        </div>
      </Container>
    </footer>
  );
}

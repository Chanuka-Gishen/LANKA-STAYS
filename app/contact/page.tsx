import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = generateSEO({
  title: "Contact Us",
  description:
    "Get in touch with Lanka Stayz. We would love to hear from you and help with your Sri Lankan travel plans.",
  path: "/contact",
});

const contactDetails = [
  {
    icon: Mail,
    title: "Email us",
    value: SITE_CONFIG.contactEmail,
    href: `mailto:${SITE_CONFIG.contactEmail}`,
  },
  {
    icon: Phone,
    title: "Call us",
    value: SITE_CONFIG.contactPhone,
    href: `tel:${SITE_CONFIG.contactPhone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    title: "Our location",
    value: SITE_CONFIG.address,
    href: null,
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Monday – Friday, 9:00 AM – 5:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-primary py-16 text-white ">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Get in touch
            </p>

            <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
              We would love to hear from you.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
              Have a question about finding your perfect stay in Sri Lanka? Send
              us a message and we will be happy to help.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Contact information"
                title="Let's start a conversation"
                description="Reach out through any of the following channels."
                align="left"
              />

              <div className="mt-9 space-y-7">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-dark">
                          {item.title}
                        </h3>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 inline-block text-sm text-gray-600 transition hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-gray-600">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-9">
              <h2 className="font-heading text-2xl font-semibold text-dark">
                Send us a message
              </h2>

              <p className="mb-7 mt-2 text-sm leading-7 text-gray-500">
                Fill in the form below and let us know how we can assist you.
              </p>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

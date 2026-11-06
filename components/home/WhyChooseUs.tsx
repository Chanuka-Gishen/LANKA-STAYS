import { MapPinned, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: MapPinned,
    title: "Discover More Places",
    description:
      "Explore accommodation options across Sri Lanka, from popular destinations to hidden escapes.",
  },
  {
    icon: ShieldCheck,
    title: "Carefully Presented Stays",
    description:
      "Browse clear property information, photos and facilities before sending your booking request.",
  },
  {
    icon: HeartHandshake,
    title: "A Simple Booking Journey",
    description:
      "Find a suitable property and submit your booking request through a straightforward process.",
  },
  {
    icon: Sparkles,
    title: "Unique Experiences",
    description:
      "Discover different types of accommodation to suit your travel style and preferences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Why Lanka Stayz"
          title="A Better Way to Discover Sri Lanka"
          description="We make it easier to explore accommodation options and find a place that feels right for your journey."
          align="center"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={28} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

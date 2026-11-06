import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 md:py-20">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
              Your next escape awaits
            </span>

            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Make Your Next Journey Unforgettable
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Discover beautiful accommodation across Sri Lanka and start
              planning your next getaway.
            </p>

            <Link href="/explore" className="btn btn-accent mt-8">
              Explore Stays
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

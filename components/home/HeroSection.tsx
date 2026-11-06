import Image from "next/image";
import Container from "@/components/ui/Container";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/background/hero-web.png"
          alt="Beautiful Sri Lankan accommodation surrounded by tropical scenery"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/40 to-black/15" />

      <Container>
        <div className="flex min-h-[590px] flex-col justify-center py-20 md:min-h-[650px]">
          <div className="max-w-3xl text-white">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Your journey begins here
            </span>

            <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Your
              <br />
              Perfect Stay in
              <br />
              <span className="text-accent-light">Sri Lanka.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              From peaceful mountain escapes to stunning coastal retreats, find
              the perfect place to make your next journey unforgettable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/explore" className="btn btn-accent">
                Explore Stays
              </a>

              <a
                href="/about"
                className="btn border border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
              >
                Discover Lanka Stayz
              </a>
            </div>
          </div>

          <div className="mt-14 w-full">
            <SearchBar />
          </div>
        </div>
      </Container>
    </section>
  );
}

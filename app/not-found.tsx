import Link from "next/link";
import { Home, SearchX } from "lucide-react";

import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f8f7f3] py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 p-5">
            <SearchX size={42} className="text-primary" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            404 - Page Not Found
          </p>

          <h1 className="font-playfair text-4xl font-semibold text-primary md:text-5xl">
            Looks like you've lost your way.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-gray-600">
            The page you're looking for doesn't exist or may have been moved.
            Let's help you find your next beautiful stay in Sri Lanka.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary">
              <Home size={17} />
              Back to Home
            </Link>

            <Link href="/explore" className="btn btn-secondary">
              Explore Stays
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

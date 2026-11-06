import Container from "@/components/ui/Container";

export default function ExploreLoading() {
  return (
    <main>
      <section className="bg-[#f3f5f1] py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl animate-pulse text-center">
            <div className="mx-auto mb-4 h-4 w-36 rounded bg-gray-200" />
            <div className="mx-auto mb-4 h-10 w-3/4 rounded bg-gray-200" />
            <div className="mx-auto h-4 w-full max-w-lg rounded bg-gray-200" />
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_1fr]">
            {/* Filter skeleton */}
            <div className="card animate-pulse space-y-6 p-5">
              <div className="h-6 w-32 rounded bg-gray-200" />

              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-2">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-11 w-full rounded bg-gray-200" />
                </div>
              ))}

              <div className="h-11 w-full rounded bg-gray-200" />
            </div>

            {/* Property card skeletons */}
            <div>
              <div className="mb-6 h-7 w-48 animate-pulse rounded bg-gray-200" />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="card animate-pulse overflow-hidden"
                  >
                    <div className="aspect-[4/3] bg-gray-200" />

                    <div className="space-y-4 p-5">
                      <div className="h-5 w-3/4 rounded bg-gray-200" />
                      <div className="h-4 w-1/2 rounded bg-gray-200" />
                      <div className="h-5 w-1/3 rounded bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

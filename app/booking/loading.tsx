import Container from "@/components/ui/Container";

export default function BookingLoading() {
  return (
    <main className="section-padding bg-[#f8f7f3]">
      <Container>
        <div className="mx-auto max-w-5xl animate-pulse">
          <div className="mb-8 h-5 w-32 rounded bg-gray-200" />

          <div className="mx-auto mb-10 max-w-xl space-y-3 text-center">
            <div className="mx-auto h-4 w-40 rounded bg-gray-200" />
            <div className="mx-auto h-10 w-64 rounded bg-gray-200" />
            <div className="mx-auto h-4 w-80 max-w-full rounded bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="card space-y-5 p-6">
              <div className="h-5 w-36 rounded bg-gray-200" />
              <div className="h-8 w-3/4 rounded bg-gray-200" />
              <div className="h-4 w-1/2 rounded bg-gray-200" />
              <div className="h-24 rounded bg-gray-200" />
            </div>

            <div className="card space-y-5 p-6">
              <div className="h-7 w-40 rounded bg-gray-200" />

              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="space-y-2">
                  <div className="h-4 w-28 rounded bg-gray-200" />
                  <div className="h-11 rounded bg-gray-200" />
                </div>
              ))}

              <div className="h-12 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

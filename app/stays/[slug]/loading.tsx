import Container from "@/components/ui/Container";

export default function PropertyLoading() {
  return (
    <main className="section-padding">
      <Container>
        <div className="animate-pulse">
          <div className="mb-8 h-4 w-48 rounded bg-gray-200" />

          <div className="mb-6 space-y-3">
            <div className="h-9 w-2/3 rounded bg-gray-200" />
            <div className="h-4 w-1/3 rounded bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="aspect-[4/3] bg-gray-200 md:col-span-2 md:row-span-2 md:aspect-auto" />

            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-[4/3] bg-gray-200" />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
            <div className="space-y-5">
              <div className="h-7 w-1/2 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
              <div className="h-4 w-4/6 rounded bg-gray-200" />
            </div>

            <div className="h-64 rounded-xl bg-gray-200" />
          </div>
        </div>
      </Container>
    </main>
  );
}

import Container from "@/components/ui/Container";

export default function PropertyLoading() {
  return (
    <main className="animate-pulse">
      <Container>
        <div className="py-8">
          <div className="mb-6 h-4 w-48 rounded bg-gray-200" />

          <div className="mb-8 space-y-3">
            <div className="h-8 w-2/3 rounded bg-gray-200" />
            <div className="h-4 w-1/3 rounded bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="h-64 rounded-xl bg-gray-200 md:col-span-2 md:row-span-2 md:h-[420px]" />

            <div className="hidden h-[204px] rounded-xl bg-gray-200 md:block" />
            <div className="hidden h-[204px] rounded-xl bg-gray-200 md:block" />
            <div className="hidden h-[204px] rounded-xl bg-gray-200 md:block" />
            <div className="hidden h-[204px] rounded-xl bg-gray-200 md:block" />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px]">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="h-6 w-48 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-3/4 rounded bg-gray-200" />
              </div>

              <div className="space-y-4">
                <div className="h-6 w-40 rounded bg-gray-200" />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-10 rounded-lg bg-gray-200" />
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[300px] rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="mb-6 h-7 w-32 rounded bg-gray-200" />
              <div className="mb-5 h-12 rounded bg-gray-200" />
              <div className="mb-5 h-12 rounded bg-gray-200" />
              <div className="h-12 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

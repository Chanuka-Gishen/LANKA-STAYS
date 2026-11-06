"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, CalendarDays, Users, Search } from "lucide-react";
import { destinations } from "@/data/destinations";
import Button from "@/components/ui/Button";

export default function SearchBar() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const [today, setToday] = useState("");

  const handleSearch = () => {
    if (checkIn && checkOut && checkOut <= checkIn) {
      return;
    }

    const params = new URLSearchParams();

    if (destination) params.set("destination", destination);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);

    params.set("guests", guests);

    router.push(`/explore?${params.toString()}`);
  };

  useEffect(() => {
    const localDate = new Date();
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, "0");
    const day = String(localDate.getDate()).padStart(2, "0");

    setToday(`${year}-${month}-${day}`);
  }, []);

  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_15px_50px_rgba(0,0,0,0.14)] md:p-5">
      <div className="grid gap-3 md:grid-cols-[1.3fr_1fr_1fr_0.8fr_auto]">
        <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-3">
          <MapPin size={20} className="shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <label
              htmlFor="search-destination"
              className="block text-xs font-semibold text-primary"
            >
              Destination
            </label>

            <select
              id="search-destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              className="mt-1 w-full bg-transparent text-sm text-text-secondary outline-none"
            >
              <option value="">Anywhere in Sri Lanka</option>

              {destinations.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-3">
          <CalendarDays size={20} className="shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <label
              htmlFor="search-checkin"
              className="block text-xs font-semibold text-primary"
            >
              Check-in
            </label>

            <input
              id="search-checkin"
              type="date"
              min={today}
              value={checkIn}
              onChange={(event) => setCheckIn(event.target.value)}
              className="mt-1 w-full bg-transparent text-sm text-text-secondary outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-3">
          <CalendarDays size={20} className="shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <label
              htmlFor="search-checkout"
              className="block text-xs font-semibold text-primary"
            >
              Check-out
            </label>

            <input
              id="search-checkout"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
              className="mt-1 w-full bg-transparent text-sm text-text-secondary outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-3">
          <Users size={20} className="shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <label
              htmlFor="search-guests"
              className="block text-xs font-semibold text-primary"
            >
              Guests
            </label>

            <select
              id="search-guests"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="mt-1 w-full bg-transparent text-sm text-text-secondary outline-none"
            >
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? "Guest" : "Guests"}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        <Button onClick={handleSearch} className="min-h-[58px] md:px-5">
          <Search size={18} />
          <span className="md:hidden lg:inline">Search</span>
        </Button>
      </div>

      {checkIn && checkOut && checkOut <= checkIn && (
        <p className="mt-3 text-sm text-error" role="alert">
          Check-out must be after check-in.
        </p>
      )}
    </div>
  );
}

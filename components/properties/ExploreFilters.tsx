"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { RotateCcw, Search } from "lucide-react";
import { destinations } from "@/data/destinations";
import { PROPERTY_TYPES, GUEST_OPTIONS } from "@/lib/constants";

interface ExploreFiltersProps {
  initialFilters: {
    destination: string;
    type: string;
    guests: string;
    minPrice: string;
    maxPrice: string;
    checkIn: string;
    checkOut: string;
  };
}

interface FilterValues {
  destination: string;
  type: string;
  guests: string;
  minPrice: string;
  maxPrice: string;
}

const validationSchema = Yup.object({
  destination: Yup.string(),
  type: Yup.string(),
  guests: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .min(1, "At least one guest is required")
    .max(10, "Maximum 10 guests")
    .optional(),
  minPrice: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .min(0, "Price cannot be negative")
    .optional(),
  maxPrice: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .min(0, "Price cannot be negative")
    .optional()
    .test(
      "max-greater-than-min",
      "Maximum price must be greater than minimum price",
      function (value) {
        const { minPrice } = this.parent;

        if (value === undefined || minPrice === undefined) {
          return true;
        }

        return value >= minPrice;
      },
    ),
});

export default function ExploreFilters({
  initialFilters,
}: ExploreFiltersProps) {
  const router = useRouter();

  const formik = useFormik<FilterValues>({
    initialValues: {
      destination: initialFilters.destination,
      type: initialFilters.type,
      guests: initialFilters.guests,
      minPrice: initialFilters.minPrice,
      maxPrice: initialFilters.maxPrice,
    },
    validationSchema,
    onSubmit: (values) => {
      const params = new URLSearchParams();

      if (values.destination) {
        params.set("destination", values.destination);
      }

      if (values.type) {
        params.set("type", values.type);
      }

      if (values.guests) {
        params.set("guests", values.guests);
      }

      if (values.minPrice) {
        params.set("minPrice", values.minPrice);
      }

      if (values.maxPrice) {
        params.set("maxPrice", values.maxPrice);
      }

      if (initialFilters.checkIn) {
        params.set("checkIn", initialFilters.checkIn);
      }

      if (initialFilters.checkOut) {
        params.set("checkOut", initialFilters.checkOut);
      }

      const query = params.toString();

      router.push(query ? `/explore?${query}` : "/explore");
    },
  });

  const handleClear = () => {
    formik.resetForm({
      values: {
        destination: "",
        type: "",
        guests: "",
        minPrice: "",
        maxPrice: "",
      },
    });

    const params = new URLSearchParams();

    if (initialFilters.checkIn) {
      params.set("checkIn", initialFilters.checkIn);
    }

    if (initialFilters.checkOut) {
      params.set("checkOut", initialFilters.checkOut);
    }

    const query = params.toString();

    router.push(query ? `/explore?${query}` : "/explore");
  };

  return (
    <aside className="card h-fit p-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary">Filter Stays</h2>

        <button
          type="button"
          onClick={handleClear}
          className="flex items-center gap-1 text-sm text-gray-500 transition hover:text-primary"
        >
          <RotateCcw size={15} />
          Clear
        </button>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="destination" className="form-label">
            Destination
          </label>

          <select
            id="destination"
            {...formik.getFieldProps("destination")}
            className="form-input"
          >
            <option value="">All destinations</option>

            {destinations.map((destination) => (
              <option key={destination.slug} value={destination.slug}>
                {destination.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="type" className="form-label">
            Accommodation type
          </label>

          <select
            id="type"
            {...formik.getFieldProps("type")}
            className="form-input"
          >
            <option value="">All types</option>

            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guests" className="form-label">
            Guests
          </label>

          <select
            id="guests"
            {...formik.getFieldProps("guests")}
            className="form-input"
          >
            <option value="">Any number of guests</option>

            {GUEST_OPTIONS.map((guest) => (
              <option key={guest} value={guest}>
                {guest} {guest === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Price per night (LKR)</label>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="number"
                name="minPrice"
                placeholder="Minimum"
                min="0"
                value={formik.values.minPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input"
              />

              {formik.touched.minPrice && formik.errors.minPrice && (
                <p className="form-error">{formik.errors.minPrice}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                name="maxPrice"
                placeholder="Maximum"
                min="0"
                value={formik.values.maxPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input"
              />

              {formik.touched.maxPrice && formik.errors.maxPrice && (
                <p className="form-error">{formik.errors.maxPrice}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="btn btn-primary w-full"
        >
          <Search size={17} />
          Apply Filters
        </button>
      </form>
    </aside>
  );
}

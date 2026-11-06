"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CheckCircle2 } from "lucide-react";

import type { Property } from "@/types/property";

interface BookingFormProps {
  property: Property;
}

interface BookingValues {
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

function createValidationSchema(maxGuests: number) {
  return Yup.object({
    guestName: Yup.string()
      .trim()
      .min(2, "Name must contain at least 2 characters")
      .max(100, "Name is too long")
      .required("Please enter your name"),

    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .required("Email address is required"),

    phone: Yup.string()
      .required("Contact number is required")
      .test("valid-phone", "Please enter a valid contact number", (value) => {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        return digits.length >= 9 && digits.length <= 10;
      }),

    checkIn: Yup.string()
      .required("Please select a check-in date")
      .test("not-in-past", "Check-in date cannot be in the past", (value) => {
        if (!value) return false;

        return value >= getLocalDateString();
      }),

    checkOut: Yup.string()
      .required("Please select a check-out date")
      .test(
        "after-check-in",
        "Check-out must be after check-in",
        function (value) {
          const { checkIn } = this.parent;

          if (!value || !checkIn) return true;

          return value > checkIn;
        },
      ),

    guests: Yup.number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value,
      )
      .typeError("Please select the number of guests")
      .integer("Guest count must be a whole number")
      .min(1, "At least one guest is required")
      .max(maxGuests, `This property accepts a maximum of ${maxGuests} guests`)
      .required("Please select the number of guests"),
  });
}

function getLocalDateString() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingForm({ property }: BookingFormProps) {
  const [today, setToday] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setToday(getLocalDateString());
  }, []);

  const formik = useFormik<BookingValues>({
    initialValues: {
      guestName: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "1",
    },
    validationSchema: createValidationSchema(property.maxGuests),
    onSubmit: () => {
      setSubmitted(true);
    },
  });

  const fieldError = (name: keyof BookingValues) => {
    return formik.touched[name] && formik.errors[name]
      ? formik.errors[name]
      : undefined;
  };

  if (submitted) {
    return (
      <div className="card mx-auto max-w-2xl p-8 text-center md:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 size={38} className="text-green-600" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Request submitted
        </p>

        <h2 className="mt-3 font-playfair text-3xl font-semibold text-primary">
          Thank you, {formik.values.guestName}!
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
          Your demonstration booking request for{" "}
          <strong>{property.name}</strong> has been recorded on this page.
        </p>

        <div className="mt-7 rounded-xl bg-[#f8f7f3] p-5 text-left">
          <h3 className="mb-4 font-semibold text-primary">Request summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Property</span>
              <span className="text-right font-medium text-primary">
                {property.name}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Check-in</span>
              <span className="font-medium text-primary">
                {formik.values.checkIn}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Check-out</span>
              <span className="font-medium text-primary">
                {formik.values.checkOut}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Guests</span>
              <span className="font-medium text-primary">
                {formik.values.guests}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Contact email</span>
              <span className="break-all text-right font-medium text-primary">
                {formik.values.email}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            formik.resetForm();
          }}
          className="btn btn-primary mt-7"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      className="card space-y-6 p-6 md:p-8"
    >
      <div>
        <h2 className="font-playfair text-2xl font-semibold text-primary">
          Your details
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Enter your details and preferred stay dates.
        </p>
      </div>

      <div>
        <label htmlFor="guestName" className="form-label">
          Full name
        </label>

        <div className="relative">
          <input
            id="guestName"
            name="guestName"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            value={formik.values.guestName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("guestName"))}
            className="form-input pl-10"
          />
        </div>

        {fieldError("guestName") && (
          <p className="form-error">{fieldError("guestName")}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email address
        </label>

        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("email"))}
            className="form-input pl-10"
          />
        </div>

        {fieldError("email") && (
          <p className="form-error">{fieldError("email")}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          Contact number
        </label>

        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+94 77 123 4567"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("phone"))}
            className="form-input pl-10"
          />
        </div>

        {fieldError("phone") && (
          <p className="form-error">{fieldError("phone")}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="checkIn" className="form-label">
            Check-in date
          </label>

          <div className="relative">
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              min={today || undefined}
              value={formik.values.checkIn}
              onChange={(event) => {
                formik.handleChange(event);

                if (
                  formik.values.checkOut &&
                  event.target.value >= formik.values.checkOut
                ) {
                  formik.setFieldValue("checkOut", "");
                }
              }}
              onBlur={formik.handleBlur}
              aria-invalid={Boolean(fieldError("checkIn"))}
              className="form-input pl-10"
            />
          </div>

          {fieldError("checkIn") && (
            <p className="form-error">{fieldError("checkIn")}</p>
          )}
        </div>

        <div>
          <label htmlFor="checkOut" className="form-label">
            Check-out date
          </label>

          <div className="relative">
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              min={formik.values.checkIn || today || undefined}
              value={formik.values.checkOut}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={Boolean(fieldError("checkOut"))}
              className="form-input pl-10"
            />
          </div>

          {fieldError("checkOut") && (
            <p className="form-error">{fieldError("checkOut")}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="form-label">
          Number of guests
        </label>

        <div className="relative">
          <select
            id="guests"
            name="guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("guests"))}
            className="form-input pl-10"
          >
            {Array.from(
              { length: property.maxGuests },
              (_, index) => index + 1,
            ).map((guest) => (
              <option key={guest} value={guest}>
                {guest} {guest === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-1 text-xs text-gray-500">
          Maximum capacity: {property.maxGuests} guests
        </p>

        {fieldError("guests") && (
          <p className="form-error">{fieldError("guests")}</p>
        )}
      </div>

      <div className="rounded-xl bg-[#f8f7f3] p-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          Check-in: {property.checkInTime}
          <span className="mx-1">|</span>
          Check-out: {property.checkOutTime}
        </div>
      </div>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="btn btn-primary w-full"
      >
        Submit Booking Request
      </button>
    </form>
  );
}

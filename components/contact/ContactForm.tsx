"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CheckCircle2, Send } from "lucide-react";
import Button from "@/components/ui/Button";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Please enter your email"),
  subject: Yup.string().trim().required("Please enter a subject"),
  message: Yup.string()
    .trim()
    .min(10, "Message must contain at least 10 characters")
    .required("Please enter your message"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/15 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />

        <h3 className="font-heading text-2xl font-semibold text-dark">
          Thank you for reaching out!
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Your message has been submitted in this demo interface. No message has
          actually been sent or stored.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(_, { resetForm }) => {
        setSubmitted(true);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-5">
          <div>
            <label htmlFor="name" className="form-label">
              Your name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="form-input"
            />
            <ErrorMessage name="name" component="p" className="form-error" />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="form-input"
            />
            <ErrorMessage name="email" component="p" className="form-error" />
          </div>

          <div>
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <Field
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              className="form-input"
            />
            <ErrorMessage name="subject" component="p" className="form-error" />
          </div>

          <div>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              className="form-input min-h-36 resize-y"
            />
            <ErrorMessage name="message" component="p" className="form-error" />
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
          >
            <span className="inline-flex items-center gap-2">
              Send Message
              <Send size={16} />
            </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}

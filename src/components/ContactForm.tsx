"use client";

import useForm from "@/lib/useForm";
import { clsx } from "clsx";
import ValidationMessage from "./ValidationMessage";

export default function ContactForm() {
  const {
    state: { data, type },
    handleSubmit,
  } = useForm();

  return (
    <form action="/api/contact" method="POST" onSubmit={handleSubmit}>
      <fieldset
        className={clsx(
          type === "loading" ? "opacity-80 " : "",
          "mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        )}
        disabled={type === "loading"}
      >
        <div>
          <label
            htmlFor="first-name"
            className="contact-label"
          >
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="firstName"
              id="first-name"
              autoComplete="given-name"
              className="contact-input"
              placeholder="Ada"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="contact-label"
          >
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="lastName"
              id="last-name"
              autoComplete="family-name"
              className="contact-input"
              placeholder="Lovelace"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="contact-label"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="contact-input"
              placeholder="ada@company.com"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="phone"
              className="contact-label"
            >
              Phone
            </label>
            <span id="phone-optional" className="contact-optional">
              Optional
            </span>
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="contact-input"
              placeholder="(optional)"
              aria-describedby="phone-optional"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="contact-label"
          >
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              className="contact-input"
              placeholder="A new project, a tricky problem..."
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="message"
              className="contact-label"
            >
              Message
            </label>
            <span id="message-max" className="contact-optional">
              Max. 500 characters
            </span>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="contact-input"
              aria-describedby="message-max"
              placeholder="A few details about what you're building, where you're stuck, or how I can help."
              defaultValue={""}
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="submit"
            disabled={type === "loading"}
            className="contact-submit"
          >
            Submit
          </button>
        </div>
        {data?.error && (
          <ValidationMessage
            message={data.error}
            isSubmitting={type === "loading"}
            type="error"
          />
        )}
        {data && !data.error && (
          <ValidationMessage
            message="Successfully submitted"
            isSubmitting={type === "loading"}
            type="success"
          />
        )}
      </fieldset>
    </form>
  );
}

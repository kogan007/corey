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
            className="block text-sm font-medium text-warm-gray-900"
          >
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="firstName"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="lastName"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Phone
            </label>
            <span id="phone-optional" className="text-sm text-warm-gray-500">
              Optional
            </span>
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              aria-describedby="phone-optional"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Message
            </label>
            <span id="message-max" className="text-sm text-warm-gray-500">
              Max. 500 characters
            </span>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              aria-describedby="message-max"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="submit"
            disabled={type === "loading"}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
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

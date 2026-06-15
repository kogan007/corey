"use client";

import useForm from "@/lib/useForm";
import { Button } from "./Button";
import ValidationMessage from "./ValidationMessage";

function MailIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export default function Newsletter() {
  const {
    state: { data, type },
    handleSubmit,
  } = useForm();

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      action="/api/subscribe"
      className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 bg-white dark:bg-zinc-800/30 p-8 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700/60">
          <MailIcon className="h-5 w-5" />
        </div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Stay up to date
        </h2>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new. No spam — unsubscribe at any
        time.
      </p>

      {/* Input row */}
      <div className="mt-6 flex gap-3">
        <input
          type="email"
          placeholder="you@example.com"
          aria-label="Email address"
          required
          name="email"
          autoComplete="email"
          className="min-w-0 flex-auto appearance-none rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-700/20 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 shadow-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:border-teal-400 dark:focus:ring-teal-400/20 transition"
        />
        <Button type="submit" className="flex-none px-5">
          Join
        </Button>
      </div>

      {/* Feedback */}
      <div className="mt-3 min-h-[1.25rem]">
        {data?.error && (
          <ValidationMessage
            message={data.error}
            isSubmitting={type === "loading"}
            type="error"
          />
        )}
        {data && !data.error && (
          <ValidationMessage
            message="You're subscribed!"
            isSubmitting={type === "loading"}
            type="success"
          />
        )}
      </div>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";

type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
};

type ContactResponse = {
  body?: { message?: string };
  error?: string;
  message?: string;
  success?: boolean;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "32d8c349-037a-43b6-8db2-366b5d5bf148";

export default function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const captchaResponse = String(
      formData.get("h-captcha-response") ?? "",
    ).trim();

    if (!captchaResponse) {
      setSubmission({
        status: "error",
        message: "Please complete the CAPTCHA before sending your message.",
      });
      return;
    }

    setSubmission({ status: "submitting" });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "Corey Kogan — Portfolio",
          name: `${firstName} ${lastName}`.trim(),
          replyto: email,
          subject: subject || `New portfolio inquiry from ${firstName} ${lastName}`.trim(),
        }),
      });

      const result = (await response.json().catch(() => null)) as ContactResponse | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.body?.message ??
          result?.error ??
          result?.message ??
          "Your message could not be sent. Please try again.",
        );
      }

      form.reset();
      setSubmission({
        status: "success",
        message:
          result?.body?.message ??
          result?.message ??
          "Thanks — your message was sent.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    }
  }

  const isSubmitting = submission.status === "submitting";

  return (
    <>
      <Script
        src="https://web3forms.com/client/script.js"
        strategy="afterInteractive"
      />
      <form action={WEB3FORMS_ENDPOINT} method="POST" onSubmit={handleSubmit}>
        <fieldset
          className="mt-6 grid gap-5 sm:grid-cols-2"
          disabled={isSubmitting}
        >
          <div className="hidden" aria-hidden="true">
            <input name="access_key" type="hidden" value={WEB3FORMS_ACCESS_KEY} />
            <label htmlFor="botcheck">Leave this field empty</label>
            <input
              autoComplete="off"
              id="botcheck"
              name="botcheck"
              tabIndex={-1}
              type="checkbox"
            />
          </div>

          <label className="contact-label" htmlFor="firstName">
          First name
          <input
            autoComplete="given-name"
            className="contact-input"
            id="firstName"
            name="firstName"
            required
            type="text"
          />
          </label>

          <label className="contact-label" htmlFor="lastName">
          Last name
          <input
            autoComplete="family-name"
            className="contact-input"
            id="lastName"
            name="lastName"
            required
            type="text"
          />
          </label>

          <label className="contact-label" htmlFor="email">
          Email
          <input
            autoComplete="email"
            className="contact-input"
            id="email"
            name="email"
            required
            type="email"
          />
          </label>

          <label className="contact-label" htmlFor="phone">
          Phone <span aria-hidden="true">(optional)</span>
          <input
            autoComplete="tel"
            className="contact-input"
            id="phone"
            name="phone"
            type="tel"
          />
          </label>

          <label className="contact-label sm:col-span-2" htmlFor="subject">
          Subject <span aria-hidden="true">(optional)</span>
          <input
            className="contact-input"
            id="subject"
            name="subject"
            type="text"
          />
          </label>

          <label className="contact-label sm:col-span-2" htmlFor="message">
            Message
            <textarea
              className="contact-input min-h-36 resize-y"
              id="message"
              maxLength={500}
              name="message"
              required
            />
          </label>

          <div className="sm:col-span-2">
            <p className="contact-label mb-2">Security check</p>
            <div
              className="h-captcha"
              data-captcha="true"
              data-theme="dark"
            />
          </div>

          <div className="sm:col-span-2">
            <button className="contact-submit" type="submit">
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
            {submission.status !== "idle" && submission.message ? (
              <p
                aria-live="polite"
                className={`mt-3 text-sm ${
                  submission.status === "error" ? "text-red-300" : "text-white/70"
                }`}
                role={submission.status === "error" ? "alert" : undefined}
              >
                {submission.message}
              </p>
            ) : null}
          </div>
        </fieldset>
      </form>
    </>
  );
}

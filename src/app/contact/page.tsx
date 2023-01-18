import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 mt-12 w-full">
      <div className="relative bg-white shadow-xl">
        <h2 id="contact-heading" className="sr-only">
          Contact Me
        </h2>

        <div>
          {/* Contact form */}
          <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 className="text-lg font-medium text-warm-gray-900">
              Send me a message
            </h3>
            <a href="mailto:coreykogan@gmail.com" className="text-sm">
              coreykogan@gmail.com
            </a>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire a Full-Stack Software Engineer",
  description:
    "Contact Corey Kogan, a Philadelphia-based full-stack, frontend, product, and forward-deployed engineer available for Northeast and remote software teams.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Engineering Portfolio",
  description:
    "Selected full-stack, frontend, and product engineering work by Corey Kogan, a Philadelphia software engineer building customer-facing web products and commerce experiences.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

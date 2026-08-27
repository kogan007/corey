import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack, Frontend & Product Engineer in Philadelphia",
  description:
    "Meet Corey Kogan, a Philadelphia-based full-stack, frontend, and product engineer experienced in accessible web applications, React, Next.js, and headless commerce.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

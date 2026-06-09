import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Corey Kogan",
  description:
    "Here is a small collection of projects I've worked on, many having been built from scratch.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

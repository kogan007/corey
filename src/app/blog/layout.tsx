import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Corey Kogan",
  description:
    "A collection of my thoughts, ideas, and experiences throughout life, my career, and more.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

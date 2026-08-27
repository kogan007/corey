import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Engineering Notes",
  description:
    "Writing from Corey Kogan, a Philadelphia full-stack engineer, on web development, product work, communities, and building better software.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

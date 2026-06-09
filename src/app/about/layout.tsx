import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Corey Kogan",
  description: "I'm Corey, a web developer based in Philadelphia, Pennsylvania.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

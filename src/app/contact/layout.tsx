import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Corey Kogan",
  description: "Lets get in touch and hear your ideas",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { AnalyticsWrapper } from "@/components/Analytics";
import { type Metadata, type Viewport } from "next";

const siteUrl = "https://coreykogan.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Corey Kogan",
  url: siteUrl,
  image: `${siteUrl}/images/portrait.png`,
  jobTitle: "Full-stack Software Engineer and Product Engineer",
  description:
    "Philadelphia-based full-stack software engineer building fast, accessible web products, headless commerce experiences, and user-centered software for Northeast and remote teams.",
  email: "coreykogan@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/kogan007",
    "https://www.linkedin.com/in/corey-kogan-5159261b5/",
  ],
  knowsAbout: [
    "Full-stack software engineering",
    "Frontend engineering",
    "Product engineering",
    "Forward-deployed engineering",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Headless commerce",
    "Web accessibility",
  ],
};

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Corey Kogan | Full-Stack Software Engineer in Philadelphia",
    template: "%s | Corey Kogan",
  },
  description:
    "Corey Kogan is a Philadelphia-based full-stack, frontend, and product engineer building fast, accessible web products for Northeast and remote teams.",
  keywords: [
    "full-stack software engineer Philadelphia",
    "frontend engineer Philadelphia",
    "product engineer Philadelphia",
    "forward deployed engineer Philadelphia",
    "remote software engineer Northeast",
    "React engineer",
    "Next.js engineer",
    "TypeScript engineer",
    "headless commerce developer",
  ],
  authors: [{ name: "Corey Kogan", url: siteUrl }],
  creator: "Corey Kogan",
  publisher: "Corey Kogan",
  alternates: { canonical: "/" },
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Corey Kogan",
    title: "Corey Kogan | Full-Stack Software Engineer in Philadelphia",
    description: "Full-stack, frontend, and product engineer building fast, accessible web products for Northeast and remote teams.",
    images: [{ url: "/images/portrait.png", width: 720, height: 720, alt: "Corey Kogan, full-stack software engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corey Kogan | Full-Stack Software Engineer in Philadelphia",
    description: "Full-stack, frontend, and product engineer building fast, accessible web products for Northeast and remote teams.",
    images: ["/images/portrait.png"],
  },
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Philadelphia",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Script
          dangerouslySetInnerHTML={{ __html: modeScript }}
          id="mode-script"
          strategy="beforeInteractive"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Header />
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

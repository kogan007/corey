import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { AnalyticsWrapper } from "@/components/Analytics";
import { type Metadata, type Viewport } from "next";

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
  title: "Corey Kogan - SW Engineer",
  description:
    "I'm Corey, a web developer based in Philadelphia, Pennsylvania. I'm passionate about building responsive and accessible web applications using the latest technologies in the web industry",
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
    <html lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black min-h-screen">
        <Script
          dangerouslySetInnerHTML={{ __html: modeScript }}
          id="mode-script"
          strategy="beforeInteractive"
        />
        <Header />
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

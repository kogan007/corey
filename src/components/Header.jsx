"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/Container";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
];

function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    window.localStorage.isDarkMode = String(isDark);
  }

  return (
    <button type="button" className="theme-toggle" aria-label="Toggle color theme" onClick={toggleTheme}>
      <span aria-hidden="true">☼</span>
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href="/" className="site-mark" aria-label="Corey Kogan home">
            <span className="site-mark__avatar">
              <Image src="/images/avatar.jpg" alt="" width={72} height={72} priority />
            </span>
            <span>Corey<span className="site-mark__dot">.</span></span>
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="header-resume">Résumé <span aria-hidden="true">↗</span></a>
            <Link href="/contact" className="header-contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}

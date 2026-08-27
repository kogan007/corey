import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <p><span className="footer-spark">✦</span> Built with curiosity in Philadelphia.</p>
          <div className="site-footer__links">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <a href="https://github.com/kogan007" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <p>© {new Date().getFullYear()} Corey Kogan</p>
        </div>
      </Container>
    </footer>
  );
}

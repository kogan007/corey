import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ChapterRail } from "@/components/ChapterRail";

export default function Contact() {
  const chapters = [
    { id: "contact-intro", label: "Go to introduction" },
    { id: "contact-form", label: "Go to contact form", dark: true },
  ];

  return (
    <main className="chapters-page chapters-contact">
      <header className="chapters-top">
        <Link className="chapters-brand" href="/">corey<i>.</i></Link>
        <nav aria-label="Primary"><Link href="/">Home</Link><Link href="/projects">Selected work</Link><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav>
      </header>
      <ChapterRail chapters={chapters} />

      <section className="chapter" id="contact-intro">
        <div className="chapter-copy">
          <p className="chapter-num"><span />01 / NEXT</p>
          <h1>Let&apos;s make something <em>worth using.</em></h1>
          <p>Have a product, storefront, or tricky experience in mind? I&apos;d love to hear what you&apos;re working on.</p>
          <a className="chapter-text-link" href="mailto:coreykogan@gmail.com">coreykogan@gmail.com ↗</a>
        </div>
        <div className="chapter-stage"><div className="record-wrap"><div className="chapter-orb record"><span className="record-label">GOOD IDEAS</span></div><div className="record-arm" aria-hidden="true" /></div></div>
      </section>

      <section className="chapter chapter-dark contact-form-chapter" id="contact-form">
        <div className="chapter-copy">
          <p className="chapter-num"><span />02 / START HERE</p>
          <h2>Tell me what&apos;s on your mind.</h2>
          <p>A little context goes a long way. Share the goal, the problem, or the idea that&apos;s keeping you up.</p>
          <div className="contact-chapter-details">
            <p><span>01</span><strong>Good fit</strong> Product builds, headless commerce, and thorny UX problems.</p>
            <p><span>02</span><strong>Reply time</strong> Usually within two business days—often sooner.</p>
            <p><span>03</span><strong>Based in</strong> Philadelphia, collaborating wherever the work takes us.</p>
          </div>
        </div>
        <div className="chapter-stage"><div className="contact-chapter-form"><ContactForm /></div></div>
      </section>
    </main>
  );
}

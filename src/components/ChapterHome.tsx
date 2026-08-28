"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";

const chapters = [
  { id: "chapter-1", label: "Go to introduction" },
  { id: "chapter-2", label: "Go to approach" },
  { id: "chapter-3", label: "Go to capabilities" },
  { id: "chapter-4", label: "Go to work" },
  { id: "chapter-5", label: "Go to contact" },
];

export function ChapterHome() {
  const [activeChapter, setActiveChapter] = useState("chapter-1");

  useEffect(() => {
    const elements = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((chapter): chapter is HTMLElement => chapter !== null);
    const observer = new IntersectionObserver((entries) => {
      const active = entries.find((entry) => entry.isIntersecting);
      if (active) setActiveChapter(active.target.id);
    }, { threshold: 0.55 });
    elements.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  function goToChapter(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const onDark = activeChapter === "chapter-2" || activeChapter === "chapter-4";

  return (
    <main className="chapters-home">
      <header className="chapters-top">
        <a className="chapters-brand" href="#chapter-1">corey<i>.</i></a>
        <nav aria-label="Primary"><a href="#chapter-4">Selected work</a><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav>
      </header>
      <nav className={`chapters-rail${onDark ? " is-on-dark" : ""}`} aria-label="Story chapters">
        {chapters.map(({ id, label }) => <button key={id} type="button" aria-label={label} aria-controls={id} aria-current={activeChapter === id ? "true" : undefined} onClick={() => goToChapter(id)} />)}
      </nav>
      <section className={`chapter ${activeChapter === "chapter-1" ? "is-active" : ""}`} id="chapter-1">
        <div className="chapter-copy"><p className="chapter-num"><span />01 / INTRODUCTION</p><h1>One engineer. The <em>whole</em> product.</h1><p>Corey Kogan is a Philadelphia-based full-stack, frontend, and product engineer who brings the work from first idea through the last edge case.</p><div className="chapter-socials" aria-label="Corey Kogan on social media"><a href="https://www.linkedin.com/in/corey-kogan-5159261b5/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn <span aria-hidden="true">↗</span></a><a href="https://instagram.com/coreykogan" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram <span aria-hidden="true">↗</span></a></div></div>
        <div className="chapter-stage intro-stage" aria-label="Animated record player with Corey Kogan portrait label"><div className="record-wrap"><div className="chapter-orb record" aria-hidden="true"><span className="record-marker" /></div><div className="record-photo"><Image src="/images/portrait.png" alt="" fill priority sizes="(min-width: 720px) 310px, 210px" /></div><div className="record-arm" aria-hidden="true" /></div></div><p className="chapter-hint">SCROLL TO CONTINUE</p>
      </section>
      <section className={`chapter chapter-dark ${activeChapter === "chapter-2" ? "is-active" : ""}`} id="chapter-2"><div className="chapter-copy"><p className="chapter-num"><span />02 / HOW HE WORKS</p><h2>Start close to the people using it.</h2><p>Discovery, prototype, ship, iterate. A working screen helps a team make sharper decisions than a long document ever could.</p></div><div className="chapter-stage"><article className="chapter-card"><small>THE WORKING LOOP</small><strong>Discovery<br />Prototype<br />Ship<br />Iterate</strong><p>Product, users, and operations stay in view at every turn.</p></article></div></section>
      <section className={`chapter ${activeChapter === "chapter-3" ? "is-active" : ""}`} id="chapter-3"><div className="chapter-copy"><p className="chapter-num"><span />03 / CAPABILITIES</p><h2>Make complicated things feel obvious.</h2><p>Product-minded frontend, reliable systems and APIs, and headless commerce experience—all connected by a focus on what people need to do next.</p></div><div className="chapter-stage"><article className="chapter-card"><small>TOOLS OF THE TRADE</small><strong>React<br />TypeScript<br />Next.js<br />Node.js</strong><p>Fluent across the stack, focused on the outcome.</p></article></div></section>
      <section className={`chapter chapter-dark ${activeChapter === "chapter-4" ? "is-active" : ""}`} id="chapter-4"><div className="chapter-copy"><p className="chapter-num"><span />04 / SELECTED WORK</p><h2>Built for real people, not just pretty screenshots.</h2><p>From a thoughtful digital care journey at Curology to operational underwriting workflows at CompScience, the through-line is useful software.</p><Link className="chapter-text-link" href="/projects">See selected projects ↗</Link></div><div className="chapter-stage"><article className="chapter-card"><small>THREE PRODUCT SURFACES</small><strong>Curology<br />Rhone<br />CompScience</strong><p>Digital care, headless commerce, and operational software.</p></article></div></section>
      <section className={`chapter chapter-closing ${activeChapter === "chapter-5" ? "is-active" : ""}`} id="chapter-5"><div className="chapter-copy"><p className="chapter-num"><span />05 / NEXT</p><h2>Looking for an engineer who thinks about the product, not just the component?</h2><Link className="chapter-button" href="/contact">Start a conversation ↗</Link></div><div className="chapter-stage"><div className="record-wrap"><div className="chapter-orb record"><span className="record-label">LET&apos;S TALK</span></div><div className="record-arm" aria-hidden="true" /></div></div></section>
    </main>
  );
}

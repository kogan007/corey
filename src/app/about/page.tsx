import Image from "next/image";
import Link from "next/link";

import { ChapterRail } from "@/components/ChapterRail";
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/SocialIcons";

const career = [
  { years: "2024 — now", company: "CompScience", role: "Frontend Software Engineer", detail: "AI-driven insurance software: underwriting, inspection, summaries, and analytics people can trust." },
  { years: "2023 — 2024", company: "Rhone", role: "Web Developer", detail: "Headless commerce, high-traffic category browsing, and product experiences built for real shopping behavior." },
  { years: "2019 — 2023", company: "MakDigital", role: "Full Stack Web Developer", detail: "Custom storefronts and web applications across React, Next.js, Remix, BigCommerce, and Shopify." },
];

function MailIcon(props: React.ComponentProps<"svg">) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z" /></svg>;
}

export default function About() {
  const chapters = [
    { id: "about-intro", label: "Go to introduction" },
    { id: "about-story", label: "Go to how Corey works", dark: true },
    { id: "about-career", label: "Go to career" },
    { id: "about-connect", label: "Go to contact", dark: true },
  ];

  return (
    <main className="chapters-page chapters-about">
      <header className="chapters-top">
        <Link className="chapters-brand" href="/">corey<i>.</i></Link>
        <nav aria-label="Primary"><Link href="/projects">Selected work</Link><Link href="/contact">Start a conversation</Link><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav>
      </header>
      <ChapterRail chapters={chapters} />

      <section className="chapter is-active" id="about-intro">
        <div className="chapter-copy"><p className="chapter-num"><span />01 / ABOUT COREY</p><h1>I make the hard screens feel <em>obvious.</em></h1><p>I&apos;m a full-stack product engineer in Philadelphia. I work where a good interface, sound systems thinking, and the people actually using the product all have to agree.</p><p className="about-status-line"><span /> Currently building AI-driven insurance tools at CompScience</p></div>
        <div className="chapter-stage intro-stage" aria-label="Portrait of Corey Kogan"><div className="record-wrap"><div className="chapter-orb record" aria-hidden="true"><span className="record-marker" /></div><div className="record-photo"><Image src="/images/portrait.png" alt="Corey Kogan" fill priority sizes="(min-width: 720px) 310px, 210px" /></div><div className="record-arm" aria-hidden="true" /></div></div>
      </section>

      <section className="chapter chapter-dark" id="about-story">
        <div className="chapter-copy"><p className="chapter-num"><span />02 / THE THROUGHLINE</p><h2>Curious early. Product-minded ever since.</h2><div className="about-story-copy"><p>I started making websites as a kid—first virtual communities, then a tiny phone app my friends and I built for a school science fair. By the time the whole class had it installed, I was hooked on the feeling of making something people could actually use.</p><p>That instinct has stayed constant: get close to the work, understand the friction, and put a working version in front of people early.</p></div></div>
        <div className="chapter-stage"><article className="chapter-card about-principles-list"><small>WHAT I BRING</small><ol><li><span>01</span><p><strong>Prototype early.</strong> Give teams something concrete to react to.</p></li><li><span>02</span><p><strong>Respect the details.</strong> Performance, state, and accessibility are part of the product.</p></li><li><span>03</span><p><strong>Push for the right thing.</strong> Challenge the prompt when the outcome asks for better.</p></li></ol></article></div>
      </section>

      <section className="chapter" id="about-career">
        <div className="chapter-copy"><p className="chapter-num"><span />03 / A FEW CHAPTERS</p><h2>Where I&apos;ve been building.</h2><p>I care about software that earns its place in someone&apos;s day: fast when conditions are messy, accessible by default, and considerate enough that people can focus on their work.</p></div>
        <div className="chapter-stage"><ol className="career-index">{career.map((item, index) => <li key={item.company}><span>0{index + 1}</span><div><small>{item.years}</small><strong>{item.company}</strong><em>{item.role}</em><p>{item.detail}</p></div></li>)}</ol></div>
      </section>

      <section className="chapter chapter-dark" id="about-connect">
        <div className="chapter-copy"><p className="chapter-num"><span />04 / FIND ME ELSEWHERE</p><h2>Let&apos;s keep in touch.</h2><div className="about-connect-links"><a href="https://github.com/kogan007" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub ↗</a><a href="https://www.linkedin.com/in/corey-kogan-5159261b5/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn ↗</a><a href="https://twitter.com/coreykogan_" target="_blank" rel="noreferrer"><TwitterIcon /> Twitter ↗</a><a href="https://instagram.com/coreykogan" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram ↗</a><a href="mailto:coreykogan@gmail.com"><MailIcon /> Email ↗</a></div><Link className="chapter-button" href="/contact">Start a conversation ↗</Link></div>
        <div className="chapter-stage"><div className="record-wrap"><div className="chapter-orb record"><span className="record-label">HELLO</span></div><div className="record-arm" aria-hidden="true" /></div></div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons";

type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
  icon: typeof GitHubIcon;
};

function SocialLink({ href, children, icon: Icon }: SocialLinkProps) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="about-social-link">
      <Icon aria-hidden="true" />
      <span>{children}</span>
      <i aria-hidden="true">↗</i>
    </a>
  );
}

function MailIcon(props: React.ComponentProps<"svg">) {
  return <svg viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z" /></svg>;
}

const career = [
  { years: "2024 — now", company: "CompScience", role: "Frontend Software Engineer", detail: "AI-driven insurance software: underwriting, inspection, summaries, and analytics people can trust." },
  { years: "2023 — 2024", company: "Rhone", role: "Web Developer", detail: "Headless commerce, high-traffic category browsing, and product experiences built for real shopping behavior." },
  { years: "2019 — 2023", company: "MakDigital", role: "Full Stack Web Developer", detail: "Custom storefronts and web applications across React, Next.js, Remix, BigCommerce, and Shopify." },
];

export default function About() {
  return (
    <main className="about-page">
      <Container>
        <section className="about-hero">
          <div className="about-hero__copy">
            <p className="eyebrow">ABOUT COREY</p>
            <h1>I make the hard screens feel <em>obvious.</em></h1>
            <p className="about-hero__intro">I&apos;m a full-stack product engineer in Philadelphia. I work where a good interface, sound systems thinking, and the people actually using the product all have to agree.</p>
            <div className="about-status"><span /> Currently building AI-driven insurance tools at CompScience</div>
          </div>
          <div className="about-portrait">
            <div className="about-portrait__scribble" aria-hidden="true">HELLO<br />THERE</div>
            <Image src="/images/portrait.png" alt="Corey Kogan" width={740} height={915} priority sizes="(min-width: 1024px) 34rem, 82vw" />
            <p>Philadelphia, PA <b>✦</b> remotely available</p>
          </div>
        </section>

        <section className="about-story">
          <p className="eyebrow">THE THROUGHLINE</p>
          <div>
            <h2>Curious early. Product-minded ever since.</h2>
            <div className="about-story__body">
              <p>I started making websites as a kid—first virtual communities, then a tiny phone app my friends and I built for a school science fair. By the time the whole class had it installed, I was hooked on the feeling of making something people could actually use.</p>
              <p>That instinct has stayed constant: get close to the work, understand the friction, and put a working version in front of people early. Today that means designing and building complex internal tools, commerce experiences, APIs, and the connective tissue between them.</p>
              <p>I care about software that earns its place in someone&apos;s day: fast when conditions are messy, accessible by default, and considerate enough that people can focus on their work—not fight the interface.</p>
            </div>
          </div>
        </section>

        <section className="about-principles" aria-labelledby="principles-heading">
          <div><p className="eyebrow">WHAT I BRING</p><h2 id="principles-heading">A little less theater. A lot more useful.</h2></div>
          <ul>
            <li><span>01</span><p><strong>Prototype early.</strong> A working screen gives teams something concrete to react to—and makes better decisions sooner.</p></li>
            <li><span>02</span><p><strong>Respect the details.</strong> Performance, state, edge cases, and accessibility are all part of the product—not cleanup work.</p></li>
            <li><span>03</span><p><strong>Push for the right thing.</strong> I&apos;ll challenge a prompt or a layout when the user, the data, or the outcome asks for better.</p></li>
          </ul>
        </section>

        <section className="about-career" aria-labelledby="career-heading">
          <div className="about-career__heading"><p className="eyebrow">A FEW CHAPTERS</p><h2 id="career-heading">Where I&apos;ve been building.</h2></div>
          <ol>
            {career.map((item) => <li key={item.company}><p>{item.years}</p><div><h3>{item.company}</h3><strong>{item.role}</strong><span>{item.detail}</span></div></li>)}
          </ol>
        </section>

        <section className="about-connect">
          <div><p className="eyebrow">FIND ME ELSEWHERE</p><h2>Let&apos;s keep in touch.</h2></div>
          <div className="about-connect__links">
            <SocialLink href="https://github.com/kogan007" icon={GitHubIcon}>GitHub</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/corey-kogan-5159261b5/" icon={LinkedInIcon}>LinkedIn</SocialLink>
            <SocialLink href="https://twitter.com/coreykogan_" icon={TwitterIcon}>Twitter</SocialLink>
            <SocialLink href="https://instagram.com/coreykogan" icon={InstagramIcon}>Instagram</SocialLink>
            <SocialLink href="mailto:coreykogan@gmail.com" icon={MailIcon}>coreykogan@gmail.com</SocialLink>
          </div>
          <Link href="/contact" className="button button--primary">Start a conversation <span className="arrow" aria-hidden="true">↗</span></Link>
        </section>
      </Container>
    </main>
  );
}

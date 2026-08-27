import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { getAllPosts } from "@/lib/posts";
import { featuredProjects } from "@/lib/featuredProjects";

const capabilities = [
  ["01", "Product-minded frontend", "Interfaces that make complicated things feel obvious."],
  ["02", "Systems & APIs", "Reliable backend work with an eye on the whole flow."],
  ["03", "Headless commerce", "Fast, flexible storefronts built to keep growing."],
];

const stack = ["TypeScript", "React", "Next.js", "Node.js", "Remix", "Shopify", "BigCommerce", "Sanity"];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function MarqueeCopy({ hidden = false }: { hidden?: boolean }) {
  return (
    <span className="marquee__group" aria-hidden={hidden || undefined}>
      Think in systems <b>✦</b> Ship with care <b>✦</b> Make it useful <b>✦</b>
    </span>
  );
}

export default async function Home() {
  const { allPost } = await getAllPosts();
  const posts = allPost?.slice(0, 2) ?? [];

  return (
    <main className="portfolio-home">
      <Container>
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow__pulse" /> Available for select projects · 2026</p>
            <h1>Digital <em>experiences</em> with a human pulse.</h1>
            <p className="hero-intro">I&apos;m Corey Kogan, a Philadelphia-based full-stack, frontend, and product engineer building fast, user-first software from the first idea to the last edge case.</p>
            <p className="hero-search-summary">Available to Northeast and remote teams, including forward-deployed engineering work close to users, product, and operations.</p>
            <div className="hero-actions">
              <Link href="/projects" className="button button--primary">Explore my work <Arrow /></Link>
              <Link href="/contact" className="button button--quiet">Start a conversation <Arrow /></Link>
            </div>
            <div className="hero-location"><span>⌖</span> Philadelphia, PA <i /> Working wherever good ideas are</div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Corey Kogan">
            <div className="hero-visual__grid" aria-hidden="true" />
            <div className="hero-visual__shape hero-visual__shape--one" />
            <div className="hero-visual__shape hero-visual__shape--two" />
            <div className="hero-visual__label label--top">FULL-STACK<br />ENGINEER</div>
            <div className="portrait-frame">
              <Image src="/images/portrait.png" alt="Corey Kogan" width={720} height={720} priority sizes="(min-width: 1024px) 40vw, 85vw" />
            </div>
            <div className="hero-visual__code" aria-hidden="true">&lt;/&gt;</div>
            <div className="hero-visual__label label--bottom">DESIGN × CODE<br />× PEOPLE</div>
          </div>
        </section>

        <section className="working-loop" aria-label="How Corey works">
          <p className="eyebrow">HOW I WORK</p>
          <ol>
            <li><span>01</span> Discovery</li>
            <li><span>02</span> Prototype</li>
            <li><span>03</span> Ship</li>
            <li><span>04</span> Iterate</li>
          </ol>
          <p>Close to the people using it.</p>
        </section>

        <section className="marquee" aria-label="Corey’s specialties">
          <div className="marquee__track">
            <MarqueeCopy />
            <MarqueeCopy hidden />
          </div>
        </section>

        <section className="capabilities-section">
          <div className="section-intro">
            <p className="eyebrow">HOW I WORK</p>
            <h2>Good software is both a feeling and a system.</h2>
          </div>
          <div className="capability-list">
            {capabilities.map(([number, title, body]) => (
              <article className="capability" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{body}</p></div><span className="capability__symbol">✦</span>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section">
          <div className="work-section__heading">
            <div><p className="eyebrow">SELECTED WORK</p><h2>Built for real people, not just pretty screenshots.</h2></div>
            <Link href="/projects" className="text-link">All projects <Arrow /></Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <a href={project.href} target="_blank" rel="noreferrer" className={`project-card project-card--${index + 1}`} key={project.name}>
                <div className="project-card__index">0{index + 1}</div>
                <div className="project-card__image">
                  <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className={`project-card__logo project-card__logo--${project.logoClass}`}>
                  {project.logoClass === "compscience" ? (
                    <Image src="/images/work/compscience-logo.svg" alt="CompScience" width={184} height={31} />
                  ) : (
                    <span>{project.wordmark}</span>
                  )}
                </div>
                <div className="project-card__details"><p>{project.impact}</p><h3>{project.name} <Arrow /></h3></div>
              </a>
            ))}
          </div>
          <aside className="proof-note">
            <p className="eyebrow">WHAT A MANAGER SAID</p>
            <blockquote>“A working screen in front of a stakeholder settles arguments a document would drag out for a week. Hire him if you want an engineer who thinks about the product, not just the component.”</blockquote>
            <p>James Abraham · Software Engineering Manager, CompScience</p>
          </aside>
        </section>

        <section className="build-note">
          <div className="build-note__scribble" aria-hidden="true">☻</div>
          <div><p className="eyebrow">MY BUILD NOTES</p><h2>Design with intention. Build for the long haul.</h2></div>
          <p>I care about the details people feel but rarely name: responsive behavior, progressive enhancement, accessible interactions, and a site that stays quick when the real world gets messy.</p>
          <Link href="/about" className="text-link">A little more about me <Arrow /></Link>
        </section>

        <section className="stack-section">
          <div><p className="eyebrow">TOOLS OF THE TRADE</p><h2>Fluent across the stack,<br />focused on the outcome.</h2></div>
          <div className="stack-list">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        {posts.length > 0 && <section className="notes-section">
          <div className="work-section__heading"><div><p className="eyebrow">FROM THE NOTEBOOK</p><h2>Things I&apos;m learning out loud.</h2></div><Link href="/blog" className="text-link">Read all notes <Arrow /></Link></div>
          <div className="notes-grid">{posts.map((post) => <Link href={post.path.current} className="note-card" key={post._id}><p>{post._createdAt.slice(0, 10)}</p><h3>{post.title}</h3><span>Read note <Arrow /></span></Link>)}</div>
        </section>}

        <section className="contact-banner">
          <p className="eyebrow">HAVE A GOOD PROBLEM?</p>
          <h2>Let&apos;s make something<br /><em>worth using.</em></h2>
          <Link href="/contact" className="button button--primary">Tell me about it <Arrow /></Link>
          <div className="contact-banner__mark">CK<span>+</span></div>
        </section>
      </Container>
    </main>
  );
}

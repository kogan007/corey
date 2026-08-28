import Image from "next/image";
import Link from "next/link";

import { ChapterRail } from "@/components/ChapterRail";
import { featuredProjects } from "@/lib/featuredProjects";

function ProjectArrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Projects() {
  const chapters = [
    { id: "projects-intro", label: "Go to introduction" },
    { id: "work-index", label: "Go to selected work", dark: true },
    { id: "projects-next", label: "Go to contact" },
  ];

  return (
    <main className="chapters-page chapters-projects">
      <header className="chapters-top">
        <Link className="chapters-brand" href="/">corey<i>.</i></Link>
        <nav aria-label="Primary"><Link href="/">Home</Link><Link href="/contact">Start a conversation</Link><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav>
      </header>
      <ChapterRail chapters={chapters} />

      <section className="chapter" id="projects-intro">
        <div className="chapter-copy">
          <p className="chapter-num"><span />01 / SELECTED WORK</p>
          <h1>Built for people, not just screenshots.</h1>
          <p>A focused collection of commerce and product experiences where thoughtful engineering has to meet real customers.</p>
        </div>
        <div className="chapter-stage" aria-hidden="true"><div className="chapter-orb"><span>WORK / 03</span></div></div>
      </section>

      <section className="chapter chapter-dark work-index-chapter" id="work-index">
        <div className="chapter-copy"><p className="chapter-num"><span />02 / THE WORK</p><h2>Three product surfaces. One useful through-line.</h2><p>Digital care, headless commerce, and operational software—all designed around what people need to do next.</p></div>
        <div className="chapter-stage"><div className="work-index">
          {featuredProjects.map((project, index) => (
            <a href={project.href} target="_blank" rel="noreferrer" key={project.name}>
              <div className="work-index__image"><Image src={project.image} alt="" fill sizes="(min-width: 720px) 130px, 90px" /></div>
              <span className="work-index__number">0{index + 1}</span>
              <div><strong>{project.name} <ProjectArrow /></strong><p>{project.impact}</p></div>
            </a>
          ))}
        </div></div>
      </section>

      <section className="chapter chapter-closing" id="projects-next">
        <div className="chapter-copy"><p className="chapter-num"><span />03 / NEXT</p><h2>Have a useful problem to solve?</h2><Link className="chapter-button" href="/contact">Start a conversation ↗</Link></div>
        <div className="chapter-stage"><div className="record-wrap"><div className="chapter-orb record"><span className="record-label">LET&apos;S TALK</span></div><div className="record-arm" aria-hidden="true" /></div></div>
      </section>
    </main>
  );
}

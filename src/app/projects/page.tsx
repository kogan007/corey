import Image from "next/image";

import { SimpleLayout } from "@/components/SimpleLayout";
import { featuredProjects } from "@/lib/featuredProjects";

function ProjectArrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Selected full-stack work"
      intro="A focused collection of commerce and product experiences where thoughtful engineering has to meet real customers."
    >
      <ul className="project-grid" role="list">
        {featuredProjects.map((project, index) => (
          <li key={project.name}>
            <a href={project.href} target="_blank" rel="noreferrer" className={`project-card project-card--${index + 1}`}>
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
              <div className="project-card__details">
                <p>{project.impact}</p>
                <h2>{project.name} <ProjectArrow /></h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}

"use client";

import { useEffect, useState } from "react";

type Chapter = {
  id: string;
  label: string;
  dark?: boolean;
};

export function ChapterRail({ chapters }: { chapters: Chapter[] }) {
  const [activeChapter, setActiveChapter] = useState(chapters[0]?.id);

  useEffect(() => {
    const sections = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const active = entries.find((entry) => entry.isIntersecting);
      if (active) setActiveChapter(active.target.id);
    }, { threshold: 0.55 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [chapters]);

  const active = chapters.find((chapter) => chapter.id === activeChapter);

  function goToChapter(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className={`chapters-rail${active?.dark ? " is-on-dark" : ""}`} aria-label="Page chapters">
      {chapters.map(({ id, label }) => (
        <button key={id} type="button" aria-label={label} aria-controls={id} aria-current={activeChapter === id ? "true" : undefined} onClick={() => goToChapter(id)} />
      ))}
    </nav>
  );
}

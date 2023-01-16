"use client";
import clsx from "clsx";
import { ProjectSnippet } from "@/lib/projects";
import Image from "next/image";

let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

export default function Project({ data }: { data: ProjectSnippet[] }) {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mt-4 space-y-12">
          {data.map((project, idx) => (
            <div
              key={project.projectImage.asset.url}
              className="flex space-x-4 justify-between flex-wrap"
            >
              <div
                className={clsx(
                  "relative flex-none rounded-xl bg-zinc-100 dark:bg-zinc-800 ",
                  rotations[rotations.length],

                  idx % 2 === 0 && "order-1"
                )}
              >
                <Image
                  src={project.projectImage.asset.url}
                  alt=""
                  width={600}
                  height={800}
                  className="sm:rounded-2xl max-w-full"
                />
              </div>
              <div>
                <h5 className="text-3xl font-medium">{project.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

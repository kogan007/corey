import { type Node, type NodeProps, useReactFlow } from "@xyflow/react";
import { useCallback } from "react";

export type SlideData = {
  source: string;
  left?: string;
  up?: string;
  down?: string;
  right?: string;
};

export const SLIDE_WIDTH = 200;
export const SLIDE_HEIGHT = 100;

// The padding constant is used when computing the presentation layout. It adds
// a bit of space between each slide
export const SLIDE_PADDING = 10;

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
  fontSize: "16px",
} satisfies React.CSSProperties;

type SlideNode = Node<SlideData, "slide">;

const arrowLabel: Record<string, string> = {
  left: "←",
  up: "↑",
  down: "↓",
  right: "→",
};

export function Slide({ data }: NodeProps<SlideNode>) {
  const { source, left, up, down, right } = data;
  const { fitView } = useReactFlow();

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, id: string) => {
      event.stopPropagation();
      fitView({ nodes: [{ id }], duration: 100 });
    },
    [fitView]
  );

  const navItems = [
    { dir: "left", target: left },
    { dir: "up", target: up },
    { dir: "down", target: down },
    { dir: "right", target: right },
  ] as const;

  return (
    <article
      className="rounded-lg p-[3px] gradient-border overflow-hidden relative wrapper shadow-md"
      style={style}
    >
      <div className="bg-white dark:bg-zinc-900 p-2.5 h-full flex flex-col justify-between rounded-md">
        <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-snug line-clamp-3">
          {source}
        </p>

        {/* Navigation controls */}
        <footer className="slide__controls nopan flex gap-1 justify-end mt-1">
          {navItems.map(
            ({ dir, target }) =>
              target && (
                <button
                  key={dir}
                  onClick={(e) => moveToNextSlide(e, target)}
                  aria-label={`Go ${dir}`}
                  className="h-5 w-5 flex items-center justify-center rounded bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold transition-colors duration-100 select-none"
                >
                  {arrowLabel[dir]}
                </button>
              )
          )}
        </footer>
      </div>
    </article>
  );
}

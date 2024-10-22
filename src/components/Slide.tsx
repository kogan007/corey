import { type NodeProps, useReactFlow } from "reactflow";
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

export function Slide({ data }: NodeProps<SlideData>) {
  const { source, left, up, down, right } = data;
  const { fitView } = useReactFlow();

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, id: string) => {
      // Prevent the click event from propagating so `onNodeClick` is not
      // triggered when clicking on the control buttons.
      event.stopPropagation();
      fitView({ nodes: [{ id }], duration: 100 });
    },
    [fitView]
  );

  return (
    <article
      className="rounded p-[4px] gradient-border overflow-hidden relative wrapper"
      style={style}
    >
      <div className="bg-white p-2 h-full">
        {source}
        <footer className="slide__controls nopan">
          {left && <button onClick={(e) => moveToNextSlide(e, left)}>←</button>}
          {up && <button onClick={(e) => moveToNextSlide(e, up)}>↑</button>}
          {down && <button onClick={(e) => moveToNextSlide(e, down)}>↓</button>}
          {right && (
            <button onClick={(e) => moveToNextSlide(e, right)}>→</button>
          )}
        </footer>
      </div>
    </article>
  );
}

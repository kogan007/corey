import { Edge, Node } from "reactflow";
import { SLIDE_WIDTH, SLIDE_HEIGHT, SLIDE_PADDING, SlideData } from "./Slide";

const slide01 = {
  id: "01",
  data: {
    right: "02",
    source: `I speak fluent Russian and Ukrainian`,
  },
};

const slide02 = {
  id: "02",
  data: {
    left: "01",
    right: "03",
    source: `I've been a full-stack developer for 8 years`,
  },
};

const slide03 = {
  id: "03",
  data: {
    left: "02",
    source: `As a hobby I do a bit of DJing!`,
  },
};

export const slides = Object.fromEntries(
  [slide01, slide02, slide03].map(({ id, data }) => [id, data])
) as Record<string, SlideData>;

export const slidesToElements = (
  initial: string,
  slides: Record<string, SlideData>
) => {
  const stack = [{ id: initial, position: { x: 0, y: 50 } }];
  const visited = new Set();
  const nodes: Node<SlideData>[] = [];
  const edges: Edge[] = [];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const data = slides[id];
    const node = { id, type: "slide", position, data };

    if (data.left && !visited.has(data.left)) {
      const nextPosition = {
        x: position.x - (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: data.left, position: nextPosition });
      edges.push({
        id: `${id}->${data.left}`,
        source: id,
        target: data.left,
      });
    }

    if (data.up && !visited.has(data.up)) {
      const nextPosition = {
        x: position.x,
        y: position.y - (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: data.up, position: nextPosition });
      edges.push({ id: `${id}->${data.up}`, source: id, target: data.up });
    }

    if (data.down && !visited.has(data.down)) {
      const nextPosition = {
        x: position.x,
        y: position.y + (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: data.down, position: nextPosition });
      edges.push({
        id: `${id}->${data.down}`,
        source: id,
        target: data.down,
      });
    }

    if (data.right && !visited.has(data.right)) {
      const nextPosition = {
        x: position.x + (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: data.right, position: nextPosition });
      edges.push({
        id: `${id}->${data.down}`,
        source: id,
        target: data.right,
      });
    }

    nodes.push(node);
    visited.add(id);
  }

  return { nodes, edges };
};

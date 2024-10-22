"use client";
import { KeyboardEventHandler, useCallback, useState } from "react";
import {
  Background,
  Node,
  NodeMouseHandler,
  NodeProps,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { Slide, SlideData } from "./Slide";
import { slides, slidesToElements } from "./Slides";

const nodeTypes = {
  slide: Slide,
};

const initialSlide = "01";
const { nodes, edges } = slidesToElements(initialSlide, slides);

export default function Flow() {
  return (
    <ReactFlowProvider>
      <div className="w-full h-80">
        <SlideWrap />
      </div>
    </ReactFlowProvider>
  );
}

const SlideWrap = () => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { fitView } = useReactFlow();

  const handleKeyPress = useCallback<KeyboardEventHandler>(
    (event) => {
      const slide = slides[currentSlide];

      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowRight": {
          const direction = event.key.slice(5).toLowerCase() as keyof SlideData;
          const target = slide[direction];

          // Prevent the arrow keys from scrolling the page when React Flow is
          // only part of a larger application.
          event.preventDefault();

          if (target) {
            setCurrentSlide(target);
            fitView({ nodes: [{ id: target }], duration: 100 });
          }
        }
      }
    },
    [fitView, currentSlide]
  );

  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      if (node.id !== currentSlide) {
        setCurrentSlide(node.id);
        fitView({ nodes: [{ id: node.id }], duration: 100 });
      }
    },
    [fitView, currentSlide]
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      nodesDraggable={false}
      edges={edges}
      fitView
      fitViewOptions={{ nodes: [{ id: initialSlide }], duration: 100 }}
      minZoom={0.1}
      onKeyDown={handleKeyPress}
      onNodeClick={handleNodeClick}
    >
      <Background />
    </ReactFlow>
  );
};

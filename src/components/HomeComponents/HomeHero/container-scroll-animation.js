import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Reverse the translate animation
  const rotate = useTransform(scrollYProgress, [1, 0], [0, -30]);
  const scale = useTransform(scrollYProgress, [1, 0], [1, 1]);
  const translate = useTransform(scrollYProgress, [1, 0], [10, 0]); // Make the translation less drastic

  return (
    <div ref={containerRef}>
      <div style={{ perspective: "1000px" }}>
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({ rotate, scale, translate, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate, // Added translateY to apply the translation
      }}
      transition={{
        type: "tween", // Use tween for smooth transitions
        duration: 1,
        ease: [5, 5, 5, 5], // Custom easing function for smoothness
      }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

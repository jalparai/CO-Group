import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import HeroImg from "../../../assets/Podcasts/PodcastsImage/HeroImg.png";

const imageSizes = {
  default: "w-[370px] h-[178.87px] mb-[43px]",
  sm: "sm:w-[613px] sm:h-[281px]",
  md: "md:w-[826px] md:h-[384px]",
  lg: "lg:w-[1207px] lg:h-[501px] lg:mb-[98px]",
  huge: "huge:w-[1407px] huge:h-[541px]",
};

const PodcastsImage = ({podcastImg}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger every time the component is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }} // Start with opacity 0, slight downward position, and scale down
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 } // Animate to full opacity, centered position, and scale 1
          : { opacity: 0, y: 30, scale: 0.95 } // Reset when out of view
      }
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }} // Use spring for a bouncy effect
      className="flex justify-center items-center relative w-full"
    >
      <img
        className={`relative z-10 ${imageSizes.default} ${imageSizes.sm} ${imageSizes.md} ${imageSizes.lg} ${imageSizes.huge} rounded-3xl`}
        src={podcastImg}
        alt="Statistics Hero"
      />
    </motion.div>
  );
};

export default memo(PodcastsImage);

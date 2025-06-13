import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import Dashboard from "../../../../assets/CashOnDelivery/StatisticsImgHero/Statistics.webp";

const imageSizes =
  "w-[370px] h-[178.87px] mb-[43px] sm:w-[613px] sm:h-[281px] md:w-[826px] md:h-[384px] lg:w-[1252px] lg:h-[590px] lg:mb-[98px] huge:w-[1452px] huge:h-[613px]";

const StatisticsImgHero = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define motion settings
  const animationProps = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: isInView
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 30, scale: 0.95 },
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="flex justify-center items-center relative w-full"
    >
      <img
        className={`relative z-10 ${imageSizes}`}
        src={data?.generalSection?.image || Dashboard}
        alt="Statistics Hero"
      />
    </motion.div>
  );
};

export default memo(StatisticsImgHero);

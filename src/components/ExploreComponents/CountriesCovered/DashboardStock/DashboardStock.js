import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dashboard from "../../../../assets/DashboardStockImg/Stock.png";
import Side from "../../../../assets/DashboardStockImg/Side.png";

const DashboardStock = ({data}) => {
  // Intersection observer for triggering animations on scroll
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: false, // Allow the animation to trigger multiple times
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start animation when in view
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start from below and hidden
    visible: { opacity: 1, y: 0 }, // Animate to visible
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-[370.55px] h-auto md:w-[700px] md:h-[450px] lg:w-[1206px] lg:h-[713px] huge:w-[1306px] huge:h-[813px] justify-center items-center relative mx-auto"
    >

      <motion.img
        className="lg:mt-[100px] relative"
        src={data?.generalSection?.image || Dashboard}
        alt="heroImage"
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.img
        src={Side}
        alt="Side"
        className="absolute bottom-0 md:bottom-7 lg:-bottom-7 left-0 w-[85.09px] md:w-[150px] lg:w-[250px] h-auto lg:h-[778px] huge:w-[260px] huge:h-[878px]"
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
    </motion.div>
  );
};

export default DashboardStock;
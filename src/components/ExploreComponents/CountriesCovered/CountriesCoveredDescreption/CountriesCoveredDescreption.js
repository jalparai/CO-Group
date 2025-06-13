import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CountriesCoveredDescreption = ({data}) => {
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

  const fadeIn = {
    hidden: { opacity: 0 }, // Start hidden
    visible: { opacity: 1 }, // Animate to visible
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center z-10 mt-[53px] md:mt-[200px] lg:mt-[320px]"
    >
      <div
        className="absolute inset-0 bg-black/90 blur-[200px] -z-10"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
        //   backgroundBlendMode: "overlay",
        // }}
      ></div>

      {/* Title and button */}
      <motion.div
        className="flex justify-center mb-[16.64px] md:mb-[20px] lg:mb-[26px]"
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="text-[#0587FF] border-[1px] border-[#373656] rounded-[32px] md:rounded-[40px] lg:rounded-[50px] bg-[#373656] bg-opacity-50 hover:border-[#373656]/0 hover:bg-[#0052B4]/50 transition-all duration-700 text-[12.8px] md:text-[16px] lg:text-[20px] tracking-[3px] md:tracking-[4px] lg:tracking-[5px] font-medium font-Montserrat px-[21px] md:px-[30px] lg:px-[38px] py-[9px] md:py-[12px] lg:py-[15px] gap-2 inline-flex justify-center items-center cursor-pointer">
          {data?.cardSection?.heading || "COUNTRIES COVERED"}
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.div
        className="relative text-center"
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-[28.16px] md:text-[40px] lg:text-[50px] font-bold font-Montserrat w-[392px] md:w-[600px] lg:w-[982px] leading-[33.8px] md:leading-[45px] lg:leading-[60px]">
          {data?.cardSection?.description || "At COD Power Group, we're proud to offer our services across the globe."}
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        className="mt-[16.64px] md:mt-[20px] lg:mt-[26px] text-[12.26px] md:text-[16px] lg:text-[20px] font-Montserrat leading-[16.9px] md:leading-[22px] lg:leading-[30px] text-center text-[#5C5B5B]"
        variants={fadeIn}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        {data?.cardSection?.caption || "You can rely on us in the following regions."}
      </motion.p>
    </motion.div>
  );
};


export default CountriesCoveredDescreption;
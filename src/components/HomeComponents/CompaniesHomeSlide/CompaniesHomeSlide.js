import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Aramex from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/Aramex.svg";
import DHL from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/DHL.svg";
import NAQEL from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/NAQEL.svg";
import UPS from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/Subtract.svg";

const companies = [Aramex, DHL, NAQEL, UPS];
const companyWidths = {
  [Aramex]: "w-[84.99px]",
  [DHL]: "w-[80.64px]",
  [NAQEL]: "w-[56.32px]",
  [UPS]: "w-[27.37px]",
};

const CompaniesHomeSlide = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();
  const marqueeControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setTimeout(() => marqueeControls.start("visible"), 1200); // Delay Marquee animation
    }
  }, [inView, controls, marqueeControls]);

  // Section Fade-in Animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  // Text Animation
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Logo Appear Animation
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="relative w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8 mb-[92px]"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-white">
        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="flex flex-col items-start mb-8 lg:mb-0 lg:pr-8"
        >
          <p className="text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
            Trusted by <span className="font-semibold">10,000+</span>
          </p>
          <motion.div
            className="flex items-center mt-2 space-x-2"
            variants={textVariants}
          >
            <span className="inline-flex justify-center items-center bg-gradient-to-r from-[#FF737E] to-[#E61D2D] text-white rounded-lg w-[123.52px] h-[33.28px] sm:w-[158.26px] sm:h-[42.64px] lg:w-[193px] lg:h-[52px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
              companies
            </span>
            <span className="whitespace-nowrap text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
              around the world
            </span>
          </motion.div>
        </motion.div>

        {/* Marquee Section (Delayed) */}
     {/* Marquee Section (Delayed) */}
<motion.div
  initial="hidden"
  animate={marqueeControls}
  variants={sectionVariants}
  className="relative flex-grow overflow-hidden rounded-l-[18px] w-full lg:w-auto"
>
  <Marquee
    direction="left"
    speed={50}
    gradient={false}
    pauseOnHover
    className="whitespace-nowrap"
  >
    <div className="flex items-center space-x-4 sm:space-x-8">
      {companies.length > 0 ? (
        companies.map((company, index) => (
          <motion.div
            key={`company-${index}`}
            className="flex justify-center items-center w-[128px] h-[44.8px] sm:w-[164px] sm:h-[57.4px] lg:w-[200px] lg:h-[70px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat bg-[#001024] text-white rounded-[11.52px] lg:rounded-[18px] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            custom={index}
            initial="hidden"
            animate={marqueeControls}
            variants={logoVariants}
          >
            <img
              src={company}
              alt="company"
              className={`w-[20px] ${companyWidths[company]} lg:w-auto h-auto`}
            />
          </motion.div>
        ))
      ) : (
        <p className="text-white">No companies to display</p> // Optional: Message when no companies are present
      )}
    </div>
  </Marquee>
</motion.div>
      </div>
    </motion.div>
  );
};

export default CompaniesHomeSlide;

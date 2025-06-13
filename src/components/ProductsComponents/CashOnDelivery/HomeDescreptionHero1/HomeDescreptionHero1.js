import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Title = ({ children }) => (
  <h1
    className="text-[28.8px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[34.3px] sm:leading-[47.15px] lg:leading-[60px] w-full max-w-[678px]"
    aria-label="Platform Features"
  >
    {children}
  </h1>
);

const Description = ({ children }) => (
  <p
    className="text-[11.52px] sm:text-[15.76px] lg:text-[20px] leading-[17.3px] sm:leading-[23.65px] lg:leading-[30px] font-Montserrat font-thin text-[#E3E3E3] max-w-[326px] lg:max-w-[1010px] mb-[63px] lg:mb-[99px]"
    aria-label="Platform Description"
  >
    {children}
  </p>
);

const HomeDescriptionHero = ({data}) => {
  const ref = useRef(null);

  // Animation variants for fade-in and fade-out on scroll
  const fadeInOut = {
    hidden: { opacity: 0, y: 50 }, // Starting state when out of view
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      exit="exit" // Exit animation on scroll-up
      variants={fadeInOut}
      viewport={{ once: false, amount: 0.2 }} // Ensure animation on both entering and leaving the viewport
      className="relative flex flex-col items-center mt-[69px] lg:mt-[134px] text-center"
      role="region"
      aria-labelledby="home-description-title"
    >
      {/* Title */}
      <div className="relative mb-[22.49px] sm:mb-[13.745px] lg:mb-[31px]">
        <Title>
          {data?.generalSection?.heading || <>
          Discover our <br />
          <span className="text-[#0587FF]">platform</span> features below.
          </>}
        </Title>
      </div>
      {/* Description */}
      <Description>
        {data?.generalSection?.description || 
       " Tools & Features That Serve All Your eCommerce Needs. Say goodbye to 10s"+
       " of partners & tools, and save yourself from all the hassle of getting"+
       " these partners & tools to speak with each other."}
      </Description>
    </motion.div>
  );
};

export default HomeDescriptionHero;

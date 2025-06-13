import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CODLogo from "../../../../assets/Affliation/CODLogo/CODLogo.svg";

const AffiliateBanner = ({data}) => {
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
      className="bg-[#151515] font-Montserrat px-4 sm:px-8 md:px-[55px] py-8 md:py-[62px] rounded-[30px] lg:max-w-7xl mx-auto my-12 md:my-[164px]"
    >
      {/* Text Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex flex-col space-y-6 md:space-y-10">
          {/* Logo */}
          <motion.img
            src={CODLogo}
            alt="CODLogo"
            className="w-24 md:w-[129.6px] h-auto md:h-[59.52px]"
            variants={fadeIn} // Animation for logo
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.h2
            className="text-2xl md:text-[35px] max-w-full md:w-[649px] font-bold leading-tight"
            variants={fadeInUp} // Animation for title
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {data?.generalSection?.heading || "Join our affiliate program today & start earning money by promoting"+
            "quality products on our platform."}
          </motion.h2>
          {/* Button */}
          <div>
            <motion.button
              onClick={() => window.open(data?.generalSection?.buttons[0]?.url, "_blank")}
              className="px-6 md:px-[49px] py-4 md:py-[21px] text-base md:text-[20px] font-bold text-white bg-[#0587FF] transition-colors duration-300 rounded-full"
              variants={fadeIn} // Animation for button
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              {data?.generalSection?.buttons[0]?.text || "Sign Up Now"}
            </motion.button>
          </div>
        </div>
        <div className="w-full md:w-[539px] h-[200px] md:h-[356px] bg-[#1E1E1E] rounded-[30px]">
          <img src={data?.generalSection?.image} alt="Affiliate Banner" className="w-full h-full object-cover rounded-[30px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default AffiliateBanner;

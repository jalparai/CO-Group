import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeDescreptionHero_1 = ({data}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animations to trigger multiple times
    threshold: 0.5, // Element needs to be 50% in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and move upward
    visible: {
      opacity: 1,
      y: 0, // Animate to original position
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <motion.div
        className="flex justify-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[18px]"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-[#0587FF] text-[11.52px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]"
        >
          {data && data?.title? data.title : "GET YOUR OPTION"}
        </motion.div>
      </motion.div>
      <motion.div
        className="relative text-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[18px]"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-[28.8px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[34.3px] sm:leading-[47.15px] lg:leading-[60px] whitespace-pre-line"
        >
           { data && data?.cardSection ? 
            data?.cardSection?.heading : 
            <>
            Start Your Cash on Delivery <br /> Business Now
            </>

          }
        </motion.h1>
      </motion.div>
      <motion.p
        className="text-[11.52px] sm:text-[15.76px] lg:text-[20px] leading-[17.3px] sm:leading-[23.65px] lg:leading-[30px] font-Montserrat text-center text-[#5C5B5B] max-w-2xl sm:max-w-3xl lg:max-w-4xl"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
            {data && data?.cardSection ? data.cardSection.description 
       :  <>Join us now by selecting the model that best suits your <br /> needs. We offer Seller and Affiliate options.</>}
      </motion.p>
    </div>
  );
};

export default HomeDescreptionHero_1;

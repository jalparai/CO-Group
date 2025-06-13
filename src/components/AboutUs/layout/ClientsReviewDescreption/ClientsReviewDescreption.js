import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ClientsReviewDescreption = () => {
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
      className="hidden md:block w-[912px] mx-auto"
    >
      <motion.div
        className="relative text-center"
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-1xl lg:text-[50px] font-bold font-Montserrat leading-tight lg:leading-[60px]">
          What clients said to Us
          <br />
          ––– It’s simple for Free
        </h1>
      </motion.div>

      <motion.p
        className="mt-[30px] text-[20px] font-Montserrat text-center leading-[30px] text-[#5C5B5B] w-[718px] mx-auto"
        variants={fadeIn}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        Voices of satisfaction: Testimonials, Reviews, and Feedback from our
        <br />
        valued clients
      </motion.p>
    </motion.div>
  );
};

export default ClientsReviewDescreption;

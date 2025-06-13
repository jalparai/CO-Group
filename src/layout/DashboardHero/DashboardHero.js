import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Dashboard from "../../assets/DashboardHeroImage/Dashboard.webp";
import { apiclient } from "../../apiConfig/apiConfig";

const fetchData = async () => {
  const response = await apiclient.get("/dashboard-hero");
  return response.data.hero;
}


const DashboardHero = () => {
  const [img, setImg] = useState(Dashboard);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchData();
        setImg(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };
    fetch();
  }
  , []);

  // Intersection observer setup
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: false, // Allow multiple animations on scroll
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
    hidden: { opacity: 0, y: 50 }, // Start hidden and below
    visible: { opacity: 1, y: 0 }, // Animate to visible and normal position
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:mt-auto mt-[44px] flex justify-center items-center relative w-full pt-[60px] p-[30px]"
    >
      <motion.img
        src={img}
        alt="heroImage"
        className="w-[401.2px] h-[249.75px] lg:w-[1206px] lg:h-[713px] huge:w-[1306px] huge:h-[813px] -mt-20 lg:mt-[100px] relative"
        variants={fadeInUp} // Apply the fade-in-up animation
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default DashboardHero;

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { apiclient } from "../../apiConfig/apiConfig";
const fetchData = async () => {
  try {
    const response = await apiclient.get("/sections/banners-component");
    return response.data.sections.find( sec => sec.title.toLowerCase().includes("reserve your spot"));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export const Reserve = () => {
  const [data, setData] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
      fetchData().then((data) => {
        setData(data);
      });
    }, []);

  // Staggered fade-up animation for all elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    }),
  };

  return (
  <motion.div
        ref={ref}
        variants={fadeUpVariants}
        initial="hidden"
        animate={controls}
        custom={0} className="mt-[54px] mx-auto w-full max-w-[1271px]">
      <div className="lg:mt-2 mt-5 lg:rounded-[30px] rounded-[20px] flex items-center  p-[40px]  bg-banner-3 lg:h-[250px] lg:w-[90%] w-[95%] m-auto">
         <motion.div
                 variants={fadeUpVariants}
                 custom={0.2} className="lg:flex justify-between w-[100%] items-end">
            <motion.h2
                      variants={fadeUpVariants}
                      custom={0.4} className="lg:text-[34px] text-[20px] text-center lg:text-left lg:w-[65%] text-white font-bold">
            {data?.generalSection?.description || "Reserve Your Webinar Spot Now – Limited Seats Available!"}
          </motion.h2>
            <motion.a
                    href={data?.generalSection?.buttons[0].url || 'https://lp.codpowergroup.com/webinar-registration'} 
                    target={data?.generalSection?.buttons[0].target || '_black'}
                      variants={fadeUpVariants}
                      custom={0.6} className="mt-[11px] lg:mt-0 lg:text-[20px] text-[14px] bg-[#FF1F22] lg:m-0 m-auto block text-white py-3 px-5  rounded-[10px]">
            {data?.generalSection?.buttons[0].text || "Reserve Your Spot"}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

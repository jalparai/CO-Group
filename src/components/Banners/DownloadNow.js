import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { apiclient } from '../../apiConfig/apiConfig';
const fetchData = async () => {
  try {
    const response = await apiclient.get("/sections/banners-component");
    
    return response.data.sections.find( sec => sec.title.toLowerCase().includes("download now"));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export const DownloadNow = () => {
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

  console.log(data);

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
      custom={0}
      className="mx-auto w-full my-[40px] max-w-[1271px]"
    >
      <div className="lg:rounded-[30px] rounded-[20px] flex items-center lg:p-[40px] p-[35px] bg-banner lg:h-[300px] lg:w-[100%] w-[95%] m-auto">
        <motion.div
          variants={fadeUpVariants}
          custom={0.2}
          className="lg:flex justify-between items-end w-full"
        >
          <motion.h2
            variants={fadeUpVariants}
            custom={0.4}
            className="lg:text-[28px] text-[23px] text-center lg:text-left lg:w-[55%] text-white font-bold"
          >
            {data?.generalSection?.description || 'Download Your "Ultimate Cash on Delivery Playbook: How to Boost Your Sales with COD?"'}
          </motion.h2>

          <motion.a
          href={data?.generalSection?.buttons[0].url || 'https://lp.codpowergroup.com/download-free-cod-ebook'} 
          target={data?.generalSection?.buttons[0].target || '_black'}
            variants={fadeUpVariants}
            custom={0.6}
            className="lg:m-0 w-fit mt-[11px] lg:mt-0 lg:text-[20px] text-[14px]  m-auto block text-white lg:py-3 px-3 py-2 lg:px-5 border border-white rounded-full"
          >
            {data?.generalSection?.buttons[0].text || "Download Now!"}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
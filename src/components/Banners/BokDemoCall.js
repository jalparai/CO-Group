import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { apiclient } from '../../apiConfig/apiConfig';

const fetchData = async () => {
  try {
    const response = await apiclient.get("/sections/banners-component");
    return response.data.sections.find( sec => sec.title.toLowerCase().includes("book demo call"));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}


export const BokDemoCall = () => {
  const controls = useAnimation();
  const [data, setData] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }
  , []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
      className='mx-auto w-full max-w-[1271px] mb-[60px] lg:mb-[10px]'
     ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={controls}
      custom={0}
    >
      <motion.div 
        className='lg:rounded-[30px] rounded-[20px] flex items-center lg:p-[40px] p-[30px] bg-banner-2 lg:h-[350px] lg:w-[100%] w-[95%] m-auto'
          variants={fadeUpVariants}
          custom={0.2}
      >
        <div className='w-[100%]'>
          <motion.a 
          href='https://lp.codpowergroup.com/book-demo-call' target='_blank'
            className='mb-[11px]  w-fit lg:mt-0 lg:text-[18px] lg:tracking-[7px] text-[12px] m-auto block text-white lg:py-3 px-4 py-2 lg:px-6 border border-white rounded-full'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {data?.generalSection?.heading || "BOOK A DEMO CALL"}
          </motion.a>

          <motion.h2 
            className='lg:text-[42px] text-[22px] text-center m-auto lg:w-[65%] text-white font-bold'
            variants={fadeUpVariants}
            custom={0.4}
          >
            {data?.generalSection?.description || "Start Scaling your Store Orders with Cash on Delivery Today!"}
          </motion.h2>

          <motion.a 
                    href={data?.generalSection?.buttons[0]?.url || 'https://lp.codpowergroup.com/book-demo-call'} target={data?.generalSection?.buttons[0]?.target || '_blank'}

            className='lg:text-[20px] w-fit font-medium text-[12px] m-auto mt-[11px] block text-white lg:py-3 lg:px-7 px-5 py-2 bg-[#007AFF] rounded-full'
           variants={fadeUpVariants}
            custom={0.6}
          >
            { data?.generalSection?.buttons[0]?.text || "Book a Free Demo Now"}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

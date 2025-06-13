import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HomeDescreptionHero_3 = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, triggerOnce: false });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonFade = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="text-gray-600 w-[423.09px] lg:w-[1297px] mx-auto mt-[66px] body-font">
      <div className="container mx-auto px-5 lg:px-10 huge:px-0 flex flex-col md:flex-row">
        <motion.div
          className="lg:flex-grow mt-5 md:mt-0 md:w-9/10 lg:pr-24 md:pr-16 flex flex-col items-start text-left relative"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="whitespace-pre-line text-white font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em] text-[10.75px] md:text-[20px]"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {data && data?.title ? data.title: "E-COMMERCE ESSENTIALS"}
          </motion.div>
          <motion.h2
            className=" whitespace-pre-line my-[12.36px] lg:my-[23px] font-Montserrat font-bold text-[26.88px] lg:text-[50px] leading-[32.3px] lg:leading-[60px] text-white"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            { data && data?.generalSection ? 
            data?.generalSection?.heading : 
            <>
             All The <span className="text-[#0587FF]">E-Commerce</span> Services
             <br /> You Need to Succeed
            </>

          }
           
          </motion.h2>
          <motion.p
            className="whitespace-pre-line text-[10.75px] md:text-[20px] font-Montserrat text-[#5C5B5B] max-w-4xl"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {data && data?.generalSection?.caption ? data?.generalSection.caption : "Quicker, simpler, smarter, and more cost-effective"}
          </motion.p>
          <motion.div
            className="whitespace-pre-line relative lg:absolute my-[20px] lg:my-0 bottom-0 right-0"
            variants={buttonFade}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.button
              className=" text-[#0587FF] font-normal bg-[#0052B4] hover:bg-[#0052B4]/50 transition-all duration-700 text-[11.47px] lg:text-[16px] font-Montserrat rounded-full w-[123.29px] h-[38.8px] lg:w-[172px] lg:h-[54px] gap-2 bg-opacity-20 inline-flex justify-center items-center"
              variants={buttonFade}
              onClick={() => {if (data?.generalSection?.buttons[0]?.url) {
                window.open(data?.generalSection?.buttons[0]?.url, "_blank");
              }}  }

            >
              {data?.generalSection?.buttons[0]?.text || "View Details"}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeDescreptionHero_3;

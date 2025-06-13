import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactSalesDescreption = ({data}) => {
  return (
    <div className="w-full flex flex-col items-center z-10 mt-[20px] sm:mt-[53px] lg:mt-[320px]">
      {/* Main Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        <h1 className="text-[24px] sm:text-[28.16px] lg:text-[50px] font-bold font-Montserrat leading-[30px] sm:leading-[33.8px] lg:leading-[60px]">
          {data?.generalSection?.heading || "Contact Sales"}
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-[10px] sm:mt-[14.64px] lg:mt-[26px] text-[10px] sm:text-[11.26px] lg:text-[20px] font-Montserrat leading-[15px] sm:leading-[16.9px] lg:leading-[30px] text-center text-[#5C5B5B]"
      >
        {data?.generalSection?.description || "Learn more about how we can help you provide exceptional <br /> customer service to your clients."}
      </motion.p>
    </div>
  );
};

export default ContactSalesDescreption;

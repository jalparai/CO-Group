import React from "react";
import { motion } from "framer-motion";
import ContactGetStarted from "../GetStarted/GetStarted";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const ContactSalesContact = ({data, nextData}) => {

  
  return (
    <>
    <div className="w-full max-w-[1086px] mx-auto my-[60px] px-4">
      <div className="flex flex-col w-full max-w-[494px]">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-[32px] sm:text-[40px] md:text-[50px] font-bold font-Montserrat my-[20px] sm:my-[30px]"
        >
          {data?.cardSection?.heading || "Contact Sales"}
        </motion.h3>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] sm:text-[18px] md:text-[20px] text-[#A5A5A5] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal font-Montserrat mb-[40px] sm:mb-[60px] md:mb-[87px]"
        >
          {data?.cardSection?.description || "Your success starts here: let's talk about how our call center can"+
          "drive your business forward."}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-[444.69px] h-auto py-[13px] px-[28px] rounded-[16.2px] border border-[#FFFFFF] hover:bg-[#0587FF] hover:border-[#FFFFFF]/0 transition-all duration-700"
        >
        <a href="tel:+32486110405">
  <h4 className="text-[20px] sm:text-[22px] md:text-[24.3px] font-Montserrat font-bold">
    {data?.cardSection?.cards[0].title || "Call Us."}
  </h4>
  <p className="text-[16px] lg:text-[20px] sm:text-[22px] md:text-[24.3px] font-Montserrat font-bold">
    {data?.cardSection?.cards[0].description || "+32 486 11 04 05"}
  </p>
</a>

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-[444.69px] h-auto py-[13px] px-[28px] my-[20px] sm:my-[30px] md:my-[40px] rounded-[16.2px] border border-[#FFFFFF] hover:bg-[#0587FF] hover:border-[#FFFFFF]/0 transition-all duration-700"
        >
        <a href="mailto:contact@codpowergroup.com">
  <h4 className="text-[20px] sm:text-[22px] md:text-[24.3px] font-Montserrat font-bold">
    {data?.cardSection?.cards[1].title || "Email Us."}
  </h4>
  <p className="text-[16px] lg:text-[20px] sm:text-[22px] md:text-[24.3px] font-Montserrat font-bold">
    {data?.cardSection?.cards[1].description || "contact@codpowergroup.com"}
  </p>
</a>

        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-Montserrat font-light text-[#A5A5A5]"
        >
          {data?.cardSection?.caption || "Discuss your requirements with our team."}
        </motion.p>
      </div>
    </div>
      <ContactGetStarted data={nextData}/>
</>
  );
};

export default ContactSalesContact;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const fallback = [
  {
    title: "Expertise",
    description:
      "Our team has extensive experience in customs clearance procedures, ensuring that your shipments comply with all regulations.",
  },
  {
    title: "Time Savings",
    description:
      "We handle all aspects of customs clearance, saving you time and allowing you to focus on your core business.",
  },
  {
    title: "Cost Efficiency",
    description:
      "By ensuring compliance with regulations, we help you avoid costly delays and penalties.",
  },
  {
    title: "Peace of Mind",
    description:
      "With our customs clearance service, you can rest assured that your shipments will reach their destination on time.",
  },
];


const BenefitsCustomsClearance = ({data}) => {
 

  const [benefits, setBenefits] = useState(data?.cardSection?.cards || fallback);
  useEffect(() => {
    setBenefits(data?.cardSection?.cards || fallback);
  }, [data]);



  // Animation variants for fade-in and fade-up
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden and moved down
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and move to position
  };

  return (
    <div>
      <div className="block lg:hidden">
        <motion.div
          className="flex justify-center mb-[10px] sm:mb-[13.745px] lg:mb-[18px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <div className="whitespace-pre-line text-[#338AF3] text-[12px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat tracking-[0.3em]">
            {data?.title? data.title : "SESSION HERE 01"}
          </div>
        </motion.div>
        <motion.div
          className="relative text-center mb-[10px] sm:mb-[13.745px] lg:mb-[51px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <h1 className="whitespace-pre-line text-[22px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[28px] sm:leading-[47.15px] lg:leading-[60px]">
            {data?.cardSection?.heading? data?.cardSection?.heading
            :
            <>
            Benefits of Our
            <br />
            Customs Clearance Service
            </>}
          </h1>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center bg-[#FFFFFF]/5 border border-[#3D3D3D] backdrop-blur-[70%] rounded-[30px] mt-[50px] sm:mt-[100px] py-[40px] sm:py-[61px] mb-[30px] sm:mb-[58px] max-w-[95%] sm:max-w-[1307px] mx-auto">
        <div className="hidden lg:block">
          <motion.div
            className="flex justify-center mb-[10px] sm:mb-[13.745px] lg:mb-[18px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUpVariants}
          >
            <div className="whitespace-pre-line text-[#338AF3] text-[12px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat tracking-[0.3em]">
            {data?.title? data.title : "SESSION HERE 01"}
            </div>
          </motion.div>
          <motion.div
            className="relative text-center mb-[10px] sm:mb-[13.745px] lg:mb-[51px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUpVariants}
          >
            <h1 className="whitespace-pre-line text-[22px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[28px] sm:leading-[47.15px] lg:leading-[60px]">
            {data?.cardSection?.heading? data?.cardSection?.heading
            :
            <>
            Benefits of Our
            <br />
            Customs Clearance Service
            </>}
            </h1>
          </motion.div>
        </div>

        {/* Responsive Flexbox with animation */}
        <motion.div
          className="flex flex-col sm:flex-row sm:space-x-[30px] lg:space-x-[50px] space-y-[20px] sm:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }} // Ensures animation triggers when 20% of the element is in the viewport
          variants={fadeUpVariants}
        >
          {benefits && benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start">
              <button className="text-[#0587FF] bg-[#0052B4]/20 hover:bg-[#0052B4]/50 transition-all duration-700 text-[17px] sm:text-[16px] lg:text-[22px] font-Montserrat font-bold rounded-full w-auto sm:w-auto px-[15px] sm:px-[30.5px] py-[10px] sm:py-[7.5px] flex justify-center sm:justify-start">
                {benefit.title}
              </button>
              <p className="text-[15.36px] sm:text-[18px] lg:text-[20px] font-Montserrat text-[#606060] w-[260.4px] sm:w-[200px] lg:w-[237px] mt-[20px] lg:mt-[30px] text-center sm:text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsCustomsClearance;

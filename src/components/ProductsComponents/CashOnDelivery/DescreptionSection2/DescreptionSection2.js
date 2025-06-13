import { motion } from "framer-motion";
import { useRef } from "react";

const DescreptionSection1 = ({data}) => {
  const ref = useRef(null);

  // Fade-in animation configuration for the section
  const fadeInFromTop = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mt-[85px] mb-[55px] lg:mb-[86px]" ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={fadeInFromTop}
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
      >
        {/* Button Section */}
        <div className="flex justify-center mb-[14.64px] lg:mb-[26px]">
          <button
            aria-label="View all covered countries"
            className="text-[#0587FF] border border-[#0587FF] rounded-full transition duration-700 
            bg-opacity-50 text-[12.26px] lg:text-[20px] tracking-[3px] lg:tracking-[5px] font-medium 
            font-Montserrat w-[258.56px] h-[38.4px] lg:w-[404px] lg:h-[60px] flex items-center 
            justify-center cursor-pointer hover:bg-[#0052B4]/50"
          >
            {data?.title || "COUNTRIES COVERED"}
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center px-4">
          <h1 className="text-[28.16px] lg:text-[50px] font-bold font-Montserrat leading-[1.2] max-w-[878px] mx-auto">
            {data?.cardSection?.heading || "All Countries Covered for Your Payment Method"}
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default DescreptionSection1;

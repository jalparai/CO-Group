import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const DescreptionSection2 = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-30% 0px" }); // triggerOnce: false to allow animation on both scroll-up and scroll-down
  // const [element, setElement] = React.useState(data?.cardSection?.cards?.pop() || null);

  useEffect(() => {
  }
  , [data]);

  return (
    <motion.div
      className="relative flex flex-col items-center mt-[40px] sm:mt-[60px] md:mt-[140px] lg:mt-[195px] mb-[40px] sm:mb-[50px] md:mb-[100px] lg:mb-[156px]"
      ref={ref}
      initial={{ y: "50%", opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      role="region"
      aria-labelledby="home-description-title"
    >
      {/* Sourcing Process text */}
      <div className="flex justify-center mb-[9px] sm:mb-[14px] md:mb-[16px] lg:mb-[18px]">
        <div className="text-[#E61D2D] text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]">
          {data?.title? data?.title:"SOURCING BENEFITS"}
        </div>
      </div>

      {/* Title */}
      <div className="relative text-center w-[358px] sm:w-[500px] md:w-[650px] lg:w-full">
        <h1 className="text-[28px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-Montserrat font-bold leading-[34px] sm:leading-[48px] md:leading-[55px] lg:leading-[60px]">
          {data?.cardSection?.heading ?  data?.cardSection?.heading :"Why Choose Our Sourcing Service"}
        </h1>
      </div>
    </motion.div>
  );
};

export default DescreptionSection2;

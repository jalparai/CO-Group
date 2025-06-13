import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SourcingBg from "../../../assets/backgrounds/SourcingBg.png";
import Bg from "../../../assets/Dashboard/spera10.svg";

const PricingDescreption = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* <img src={Bg} className="absolute w-[100%] z-[-10]" /> */}

      <motion.div
        ref={ref}
        className="w-full flex flex-col items-center z-10 mt-[53px] "
        variants={fadeUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          className="absolute inset-0 bg-black/90 blur-[100px] -z-10"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
          //   backgroundBlendMode: "overlay",
          // }}
        ></div>

        {/* Title and button */}
        <motion.div
          className=" lg:mt-[320px] flex justify-center mb-[16.64px] lg:mb-[26px]"
          variants={fadeUpVariants}
        >
          <div className="text-[#0587FF] border-[1px] border-[#373656] rounded-[50px] bg-[#373656] bg-opacity-50 hover:border-[#373656]/0 hover:bg-[#0052B4]/50 transition-all duration-700 text-[12.8px] lg:text-[20px] tracking-[5px] lg:tracking-[5px] font-medium font-Montserrat px-[30px] lg:px-[48px] h-[38.4px] lg:h-[60px] gap-2 inline-flex justify-center items-center cursor-pointer">
            {data?.generalSection?.heading || "PRICING"}
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="relative text-center w-[445px] lg:w-[1002px]"
          variants={fadeUpVariants}
        >
          <h1 className="text-[30.16px] lg:text-[50px] font-bold font-Montserrat leading-[33.8px] lg:leading-[60px]">
            {data?.generalSection?.descriotion || "Discover the Perfect Package for Your Needs"}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-[16.64px] lg:mt-[26px] text-[11.26px] lg:text-[20px] font-Montserrat leading-[16.9px] lg:leading-[30px] text-center text-[#5C5B5B]"
          variants={fadeUpVariants}
        >
          {data?.generalSection?.caption || "You can find the right plan for you"}
        </motion.p>
      </motion.div>
    </>
  );
};

export default PricingDescreption;

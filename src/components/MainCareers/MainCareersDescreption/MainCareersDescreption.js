import { motion } from "framer-motion";
import SourcingBg from "../../../assets/backgrounds/SourcingBg.png";
import Bg from "../../../assets/Dashboard/spera14.svg"
import { useEffect } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MainCareersDescreption = ({data}) => {
  useEffect(() => {}, [data])

  
  return (
    <div className="flex flex-col items-center z-10 mt-[53px] lg:mt-[320px] w-[373px] lg:w-[982px] mx-auto">
                      <img src={Bg} className="absolute w-[100%] mt-[-177px] -z-50"/>

      <div
        className="absolute inset-0 h-screen top-[100px] bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
      ></div>
      <div
        className="absolute w-[440px] lg:w-full bg-cover lg:bg-contain bg-no-repeat top-[100px] lg:-top-[400px] inset-0 -z-10"
        style={{
          backgroundImage: `url(${SourcingBg})`,
        }}
      ></div>

      {/* Title and button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-[14.64px] lg:mb-[26px]"
      >
        <div className="text-[#0587FF] border-[1px] border-[#373656] rounded-[50px] bg-[#373656] bg-opacity-50 hover:border-[#373656]/0 hover:bg-[#0052B4]/50 transition-all duration-700 text-[12.8px] lg:text-[20px] tracking-[3px] lg:tracking-[5px] font-medium font-Montserrat px-[20px] lg:px-[48px] h-[38.4px] lg:h-[60px] gap-2 inline-flex justify-center items-center cursor-pointer">
          {data?.generalSection?.heading || "CAREERS"}
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }} // Delay for the title
        className="relative text-center"
      >
        <h1 className="text-[32px] lg:text-[50px] font-bold font-Montserrat leading-[38px] lg:leading-[60px]">
          {data?.generalSection?.description || "Join the Revolution in COD Cash on Delivery Services"}
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }} // Delay for the description
        className="mt-[14.64px] w-full max-w-[90%] sm:max-w-[500px] lg:max-w-[792px] lg:mt-[26px] text-[12.8px] sm:text-[14px] lg:text-[20px] font-Montserrat leading-[16px] sm:leading-[20px] lg:leading-[30px] text-center text-[#A5A5A5]"
      >
        {data?.generalSection?.caption || "Are you ready to be a part of a dynamic team that is revolutionizing the"+
        "world of cash on delivery (COD) services? Join us at COD Power Group and"+
        "be a part of the transformation."}
      </motion.p>
    </div>
  );
};

export default MainCareersDescreption;
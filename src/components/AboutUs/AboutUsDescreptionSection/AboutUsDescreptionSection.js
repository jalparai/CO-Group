import { motion } from "framer-motion";
import Rectangle from "../../../assets/AboutUsItems/AboutUsDescreptionSection/Rectangle.png";
import { useEffect } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutUsDescreptionSection = ({data}) => {
  useEffect(() => { }, [data]);
  return (
      data && Array.isArray(data) && data.length > 0 && (
        <div className="relative flex flex-col items-center py-12 px-4">
        <div className="max-w-[1232px] w-full mx-auto space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-[30px] font-Montserrat font-semibold mb-6">
                {data && data[0]?.generalSection?.heading}
              </h3>
              <p className="text-[#6F6F6F] text-base md:text-[20px] font-Montserrat font-normal max-w-[595px] mx-auto md:mx-0">
                {data && data[0]?.generalSection?.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={data && data[0]?.generalSection?.image}
                alt="Rectangle"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </motion.div>
  
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-[30px] font-Montserrat font-semibold mb-6">
                {data && data[1]?.generalSection?.heading}
              </h3>
              <p className="text-[#6F6F6F] text-base md:text-[20px] font-Montserrat font-normal max-w-[595px] mx-auto md:mx-0">
                {data && data[1]?.generalSection?.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={data && data[1]?.generalSection?.image}
                alt="Rectangle"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
      )
    
  );
};

export default AboutUsDescreptionSection;
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Frame from "../../../assets/CustomClearanceDescreption2Item/Frame.png";

const RessourceCenterDescreption = ({data}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "0% 100%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${Frame})`, // Replace with your actual image path
        backgroundPosition: backgroundPosition,
      }}
      className="relative flex items-center justify-center w-[90%] max-w-[1250px] 2xl:max-w-[1250px] min-h-[400px] md:h-[599px] rounded-[30px] mx-auto bg-cover bg-center mt-16 md:mt-32 px-4 md:px-8"
    >
      <div className="text-center w-full max-w-[1102px] py-12 md:py-0">
        {/* Button */}
        <div className="mb-6 md:mb-10">
          <button
          onClick={() => window.open(data?.generalSection?.buttons[0].url || "https://www.codpowergroup.com/", "_blank")} 
          className="text-black bg-white text-lg md:text-2xl lg:text-[30px] font-bold font-Montserrat py-4 md:py-[27px] px-8 md:px-[107px] rounded-[50px] transition duration-300 hover:bg-gray-100">
            <div className="flex items-center justify-center">{data?.generalSection?.buttons[0]?.text || "Join us Now"}</div>
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-white font-bold font-Montserrat text-2xl md:text-4xl lg:text-5xl px-4 md:px-8">
          {data?.generalSection?.description || "Experience Life at COD Power Group"}
        </h1>

        {/* Description */}
        <p className="text-white max-w-[900px] mx-auto font-Montserrat font-extralight mt-6 md:mt-10 text-base md:text-lg lg:text-xl px-4 md:px-8">
          {data?.generalSection?.caption || "At COD Power Group, we believe that our people are our most valuable"+
          "asset. We foster a culture of collaboration, innovation, and"+
          "continuous learning, where every team member is empowered to make a"+
          "difference."}
        </p>
      </div>
    </motion.div>
  );
};

export default RessourceCenterDescreption;

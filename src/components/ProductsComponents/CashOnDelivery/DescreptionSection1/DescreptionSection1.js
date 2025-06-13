import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import simplified from "../../../../assets/CashOnDelivery/DescreptionSection1/simplified.svg";
import enhance from "../../../../assets/CashOnDelivery/DescreptionSection1/enhance.svg";
import increase from "../../../../assets/CashOnDelivery/DescreptionSection1/increase.svg";

// Data for cards
const cardData = [
  {
    imgSrc: simplified,
    alt: "Simplified payment processing icon",
    text: "Simplified payment processing",
  },
  {
    imgSrc: enhance,
    alt: "Enhanced customer trust icon",
    text: "Enhanced customer trust & satisfaction",
  },
  {
    imgSrc: increase,
    alt: "Increased sales icon",
    text: "Increased sales & customer base",
  },
];

// Card Component
const Card = ({ imgSrc, alt, text, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: index * 0.3, // Incremental delay for each card
      }}
      className="flex flex-col items-center bg-[#FFFFFF]/10 hover:bg-[#00A3FF]/[27%] border border-[#363636] hover:border-[#509FE8] transition-colors duration-300 ease-in-out p-5 lg:p-9 rounded-2xl w-full lg:w-[420px] huge:w-[457px] lg:h-[267px] h-[207px]"
    >
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: index * 0.3, // Apply delay to the image as well
        }}
        className="p-3 lg:p-4 lg:w-[78px] w-[67px] bg-[#FFFFFF]/10 border rounded-lg lg:rounded-2xl mb-6"
        src={imgSrc}
        alt={alt}
      />
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: index * 0.3, // Apply delay to the text as well
        }}
        className="text-lg sm:text-xl lg:text-2xl text-center font-medium font-Montserrat leading-[1.2]"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

const DescreptionSection1 = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative flex flex-col items-center mt-16 lg:mt-36 px-4 lg:px-0"
    >
      {/* Title */}
      <div className="flex justify-center mb-3 lg:mb-4">
        <h2 className="text-gray-400 text-xs sm:text-sm lg:text-lg font-medium font-Montserrat gap-[11px] inline-flex items-center tracking-[0.3em]">
          {data?.title || "ADVANTAGES"}
        </h2>
      </div>
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-Montserrat font-bold leading-[1.2]">
          {data?.cardSection?.heading || "Why Choose COD Power Group?"}
        </h1>
      </div>
      {/* Card Grid */}
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-2 huge:space-x-8 space-y-4 lg:space-y-0 w-full">
        {data?.cardSection?.cards?.map(({ image, title }, index) => (
          <Card key={index} imgSrc={image} alt={title} text={title} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default DescreptionSection1;

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import REMITTANCE from "../../../../assets/OfferNowSection2/REMITTANCE.png";
import ConfermedTotalLeads from "../../../../assets/OfferNowSection2/ConfermedTotalLeads.png";
import TotalLeads from "../../../../assets/OfferNowSection2/TotalLeads.png";

const content = {
  title: "Payment Collection",
  description:
    "Our delivery team collects cash payments from your customers upon delivery of the products.",
  icon: REMITTANCE,
  imag1: TotalLeads,
  imag2: ConfermedTotalLeads,
};

const Card = ({ title, description, icon, imag1, imag2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  // Define motion settings for a stronger fade-up effect
  const animationProps = {
    initial: { opacity: 0, y: 50 }, // Increased y-offset for a stronger effect
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: {
      duration: 1.2, // Adjust the duration for a slower animation
      ease: [0.25, 0.1, 0.25, 1], // Custom easing for a more pronounced effect
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`backdrop-blur-sm bg-[#0F0E0E]/50 w-full max-w-[1270px] lg:max-w-[1230px] huge:max-w-[1430px] border border-[#3E3C3C] rounded-[20px] lg:rounded-[30px] py-[54px] lg:py-[78px] px-6 lg:px-[46.5px] huge:px-[66.5px] flex flex-col lg:flex-row items-center text-left`}
      {...animationProps} // Apply fade-up effect to the whole card
    >
      <div className="flex-1 mx-auto lg:w-[550px] text-left mb-[47px] lg:mb-0">
        <motion.button
          className="text-[#E61D2D] font-normal bg-[#FF0000]/20 hover:bg-[#FF0000]/50 transition-all duration-700 text-[12px] lg:text-[16px] font-Montserrat rounded-full w-[120px] h-[40px] lg:w-[145px] lg:h-[54px] gap-2 inline-flex justify-center items-center"
          {...animationProps} // Apply fade-up effect to the button
        >
          Offer Now
        </motion.button>
        <motion.h3
          className="text-white font-bold font-Montserrat text-[25px] lg:text-[25px] my-[27px] lg:my-[39px]"
          {...animationProps} // Apply fade-up effect to the title
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-[#FFFFFF] font-Montserrat text-[17px] lg:text-[20px] font-thin w-[323.14px] lg:w-[372px] mx-auto lg:mx-0"
          {...animationProps} // Apply fade-up effect to the description
        >
          {description}
        </motion.p>
      </div>
      <div className="relative flex-1 flex justify-center lg:justify-end">
        <motion.img
          className="w-[323.17px] lg:w-auto mx-auto"
          src={icon}
          alt={title}
          {...animationProps} // Apply fade-up effect to the main image
        />
        {/* <motion.img
          className="w-[129.23px] lg:w-auto mx-auto absolute top-[26px] lg:top-[55px] left-[10px] lg:-left-[70px]"
          src={imag1}
          alt={title}
          {...animationProps} // Apply fade-up effect to the first small image
        />
        <motion.img
          className="w-[156.75px] lg:w-auto mx-auto absolute bottom-[16px] -left-[15px] lg:bottom-12 lg:-left-36"
          src={imag2}
          alt={title}
          {...animationProps} // Apply fade-up effect to the second small image */}
        {/* /> */}
      </div>
    </motion.div>
  );
};

const OfferNowSection = ({data}) => {
  const [offerData, setOfferData] = useState(data?.cardSection?.cards[0] || content);
  useEffect(() => {
    setOfferData(data?.cardSection?.cards[0] || content)
  }, [data])
  console.log(offerData)
  return (
    <div className="flex justify-center w-full px-4 lg:px-0">
      <Card
        title={offerData.title}
        description={offerData.description}
        icon={offerData.image || content.icon}
        imag1={content.imag1}
        imag2={content.imag2}
      />
    </div>
  );
};

export default OfferNowSection;
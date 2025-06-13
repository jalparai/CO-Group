import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ContinousSupport from "../../../../assets/OfferNowSectionItem/Group1.png";

const content = {
  title:
    "Streamline your sourcing process and find high-quality products at competitive prices with COD Power Group's sourcing service.",
  description: "Contact us today to learn more and get started.",
  icon: ContinousSupport,
};

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 50 }, // Start from below with no opacity
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and move to original position
};

const imageVariants = {
  hidden: { opacity: 0, y: -50 }, // Start from above with no opacity
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and move to original position
};

const Card = ({ title, description, icon, buttons }) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(textRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      className="backdrop-blur-sm bg-[#0F0E0E]/50 w-full max-w-[1330px] huge:max-w-[1430px] border border-[#3E3C3C] rounded-[30px] my-[78px] md:my-[106px] py-[40px] md:py-[50px] lg:py-[78px] px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-start lg:items-center text-left"
    >
      {/* Text Section */}
      <div className="w-auto md:w-[70%] lg:w-[100%]">
      <motion.button
  onClick={() => buttons && Array.isArray(buttons) && buttons.length > 0 ? window.open(buttons[0]?.url, "_blank") : null}
  className="text-[#0587FF] font-normal bg-[#0052B4] hover:bg-[#0052B4]/50 transition-all duration-700 text-[11px] md:text-[14px] lg:text-[16px] font-Montserrat rounded-full w-[120px] h-[40px] md:w-[130px] md:h-[48px] lg:w-[145px] lg:h-[54px] gap-2 bg-opacity-20 inline-flex justify-center items-center mx-auto md:mx-0"
>
  {buttons && Array.isArray(buttons) && buttons.length > 0 ? buttons[0]?.text : "Offer Now"}
</motion.button>
        <motion.h3
          ref={textRef}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white font-bold font-Montserrat text-[17px] sm:text-[23px] md:text-[25px] lg:text-[29px] my-[17px] md:my-[22px] lg:my-[27px] w-[315px] sm:w-[500px] md:w-[520px] lg:w-[634px]"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#FFFFFF] font-Montserrat text-[15px] md:text-[18px] lg:text-[20px] font-thin md:w-[400px] lg:w-[472px] mx-auto md:mx-0"
        >
          {description}
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.img
        ref={imgRef}
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-[80%] sm:w-[55%] md:w-[35%] lg:w-auto mx-auto lg:mx-0 mt-[56px] md:mt-0"
        src={icon}
        alt={title}
      />
    </motion.div>
  );
};

const OfferNowSection = ({data}) => {
  useEffect(() => {}, [data]);
  return (
    <div className="flex justify-center items-center px-4">
      <div
        className="absolute inset-0 bg-black/90 blur-[500px] -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <Card
        title={data?.generalSection?.heading || content?.title}
        description={data?.generalSection?.description || content.description}
        icon={data?.generalSection?.image || content.icon}
        buttons={data?.generalSection?.buttons || []}
      />
    </div>
  );
};

export default OfferNowSection;

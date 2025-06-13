import Upload from "../../../../assets/NewRequestSectionItem/Upload.png";
import bgGragiant from "../../../../assets/Home_Hero_Icons/bgGragiant.png";
import { motion, useInView } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import Bg from "../../../../assets/Dashboard/sphear-4.svg"
const NewRequestSection = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.9 });
  useEffect(() => {}, [data]);
  // Define motion settings for fade-up effect
  const animationProps = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: isInView
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 30, scale: 0.95 },
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  };

  return (
    <motion.section
      ref={ref}
      {...animationProps}
      className="flex justify-center items-center w-full relative"
    >
        <img src={Bg} className="absolute w-[100%] z-[-10]"/>
      {/* Motion wrapper around the image */}
      <motion.img
        className="
          w-[90%] lg:w-[1306px] lg:h-[723px] huge:w-[1427px] huge:h-[836px]
          mt-[66px] md:mt-[135px] 
          relative z-10
        "
        src={data?.generalSection?.image || Upload}
        alt="Upload illustration"
        {...animationProps} // Applying the fade-up effect here as well
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-black/90 blur-[200px] -z-10"
        style={{
          backgroundImage: `url(${bgGragiant}), linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
      >    
</div>
    </motion.section>
  );
};

export default memo(NewRequestSection);

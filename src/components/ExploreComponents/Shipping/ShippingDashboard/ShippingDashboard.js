import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Dashboard from "../../../../assets/DashboardHeroImage/Dashboard.webp";

const imageSizes =
  "w-[350px] sm:w-[350px] md:w-[401.2px] lg:w-[1206px] huge:w-[1306px] h-auto mt-[0px]";

const ShippingDashboard = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define motion settings
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
    <div className="flex justify-center items-center relative w-full
           m-auto space-x-0 lg:space-x-6  md:w-[400px] lg:w-auto huge:w-[1496px] px-[16px] md:px-[26px] py-[30px]  huge:px-[113px] huge:py-[50px] lg:px-[42.5px] lg:py-[54.5px]

    ">
      <div
        className="absolute inset-0 bg-black/80 blur-[150px] sm:blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10
        "
      ></div>

      {/* Fade-In, Fade-Up, and Scale Effect */}
      <motion.img
        ref={ref}
        {...animationProps}
        className={`relative z-10 ${imageSizes}`}
        src={data?.generalSection?.image || Dashboard}
        alt="Statistics Hero"
      />
    </div>
  );
};

export default ShippingDashboard;

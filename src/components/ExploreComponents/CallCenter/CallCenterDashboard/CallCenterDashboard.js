import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Dashboard from "../../../../assets/DashboardHeroImage/Dashboard.webp";

const CallCenterDashboard = ({data}) => {
  const ref = useRef(null);

  // Detect when the section is in view
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state: faded down
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Fade up/down based on view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className="flex justify-center items-center relative w-full"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-black/80 blur-[150px] sm:blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
       
      ></div>

      {/* Dashboard Image */}
      <img
        className="w-[350px] sm:w-[350px] md:w-[401.2px] lg:w-[1206px] huge:w-[1306px] h-auto lg:mt-[100px] relative z-10"
        src={data?.generalSection?.image || Dashboard}
        alt="heroImage"
      />
    </motion.div>
  );
};

export default CallCenterDashboard;

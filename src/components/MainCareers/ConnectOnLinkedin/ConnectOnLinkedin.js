import { motion } from "framer-motion";
import Linkedin from "../../../assets/JobListingsItems/Linkedin/Linkedin.png";
import Bg from "../../../assets/Dashboard/spear12.svg"
import { useEffect } from "react";

const ConnectOnLinkedin = ({data}) => {
  useEffect(() => {},[data])
  return (
    <section className="text-white mt-[60px] md:mt-[100px] lg:mt-[169px] flex justify-center items-center max-w-[1230px] w-full mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-[80px]">
        {/* LinkedIn Icon with Scroll-triggered Animation */}
        <img src={Bg} className="absolute w-[100%] -z-50"/>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Triggers the animation only once when it's in view
        >
          <img
            src={data?.generalSection?.image ||  Linkedin}
            alt="LinkedIn Icon"
            className="object-contain w-[172.18px] lg:w-auto"
          />
        </motion.div>

        {/* Text and Button with Scroll-triggered Animation */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }} // Triggers the animation only once when it's in view
        >
          <h2 className="text-[25px] md:text-[28px] lg:text-[35px] font-bold font-Montserrat leading-[30px] md:leading-[40px] lg:leading-[50px] max-w-full lg:max-w-[747px]">
            {data?.generalSection?.heading || "Join our LinkedIn community to stay updated on the latest news and"+
            "job opportunities at COD Power Group."}
          </h2>
          <motion.button
            className="mt-[40px] md:mt-[50px] lg:mt-[74px] bg-white text-black py-[16px] md:py-[20px] lg:py-[24px] px-[24px] md:px-[32px] lg:px-[38px] rounded-full text-[18px] md:text-[22px] lg:text-[27px] font-bold font-Montserrat shadow-lg hover:bg-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => window.open(data?.generalSection?.buttons[0]?.url || "https://www.linkedin.com/company/codpowergroup", "_blank")}
          >
            {data?.generalSection?.buttons[0].text || "Connect on LinkedIn"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectOnLinkedin;

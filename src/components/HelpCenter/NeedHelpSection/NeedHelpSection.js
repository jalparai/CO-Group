import { useState } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const NeedHelpSection = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center lg:mt-[85.89px] px-1"
      initial={{ opacity: 0, y: 50 }} // Initial state: fully transparent and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade-up animation when in view
      exit={{ opacity: 0, y: -50 }} // Fade-down animation when out of view
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is in view
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition for both
    >
      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(circle, #D9D9D9 0%, #0066FF 10%, #FF0000 70%, #0DA8FF 52%, #0035F2 74%, #FFA1A1 100%)",
        //   backgroundBlendMode: "overlay",
        //   backgroundPosition: "-200px",
        // }}
      ></div>
      <div className="relative text-center">
        <h1 className="text-[35px] sm:text-[52px] lg:text-[70px] font-Montserrat font-bold leading-tight sm:leading-snug lg:leading-none">
          {data?.generalSection?.heading || "Need Help?"}
        </h1>
      </div>
      <p className="my-[38px] lg:my-[26px] text-[18px] lg:text-[26px] font-light font-Montserrat text-center text-[#E3E3E3] max-w-[392px] sm:max-w-[666px] lg:max-w-[1048px]">
      {data?.generalSection?.description || "If you need assistance or have any questions, please don't hesitate to"+
        "reach out to our support team. We're here to help you every step of the"+
        "way"}
      </p>
      <div className="flex flex-row justify-center mb-[14px] sm:mb-[30px] lg:mb-[77px] gap-4">
        <Link
        to={data?.generalSection?.buttons[0]?.url || '/contactsales'}
          className="text-white text-[16px] font-Montserrat border rounded-full py-2 px-6 z-50 gap-2 inline-flex hover:bg-white/20 hover:border-white/5 transition-colors duration-500 items-center"
          type="button"
        >
          <BiSupport /> {data?.generalSection?.buttons[0]?.text || "Contact Sales"}
        </Link>
        <motion.div
          initial={{
            background: "linear-gradient(to right, #53ACFF, #282E6A)",
          }}
          animate={{
            background: isHovered
              ? "linear-gradient(to right, #282E6A, #53ACFF)"
              : "linear-gradient(to right, #53ACFF, #282E6A)",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`rounded-full items-center z-50`}
        >
          <a
          href={data?.generalSection?.buttons[1]?.url || "https://get-started.codpowergroup.com/registration"}
            className="text-white text-[16px] font-Montserrat text-base rounded-full py-[9px] px-6 gap-2 inline-flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type="button"
          >
            {data?.generalSection?.buttons[1]?.text || `Get Started`} <GoArrowUpRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NeedHelpSection;

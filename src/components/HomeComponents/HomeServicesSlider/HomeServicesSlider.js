import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaWarehouse,
  FaMoneyBillWave,
  FaShippingFast,
  FaBox,
} from "react-icons/fa";
import { GiAbbotMeeple } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import "./HomeServicesSlider.css";

// Smooth fade-in effect
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

const HomeServicesSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    { name: "Cash on Delivery", icon: <FaMoneyBillWave /> },
    { name: "Affiliation Platform", icon: <IoIosPeople /> },
    { name: "Call Center", icon: <FaPhone /> },
    { name: "Sourcing", icon: <TbReportSearch /> },
    { name: "Custom Clearance", icon: <GiAbbotMeeple /> },
    { name: "Warehousing & Fulfillment", icon: <FaWarehouse /> },
    { name: "COD Remittance", icon: <FaBox /> },
    { name: "Shipping", icon: <FaShippingFast /> },
  ];

  const renderMarqueeLine = (direction, indexPrefix = "") => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Marquee
        direction={direction}
        speed={60}
        gradient={false}
        className="whitespace-nowrap mt-[13px] lg:mt-[27.32px]"
      >
        <div className="flex gap-8 items-center">
          {services.map((service, index) => (
            <motion.div
              key={`${indexPrefix}-${index}`}
              className="service-button border border-[#FFFFFF]/10 text-[19.42px] lg:text-[36.48px] font-medium font-Montserrat rounded-full cursor-pointer text-center shadow-lg transition-all duration-500"
              variants={fadeInVariant}
              custom={index * 0.2} // Delay animation per item
            >
              <div className="flex items-center justify-center px-8 min-w-[148.56px] h-[53.25px] lg:h-[100px] lg:min-w-[279px] gap-2">
                {service.icon}
                <span className="service-name">{service.name}</span>
              </div>
            </motion.div>
          ))}
          <div className="w-3"></div>
        </div>
      </Marquee>
    </motion.div>
  );

  return (
    <motion.div
      className="mt-[55.59px] mb-[27.59px] lg:my-[72px] flex text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative flex-grow overflow-hidden marquee-wrapper">
        {isMobile ? (
          <>
            {renderMarqueeLine("left", "mobile-1")}
            {renderMarqueeLine("right", "mobile-2")}
            {renderMarqueeLine("left", "mobile-3")}
            {renderMarqueeLine("right", "mobile-4")}
          </>
        ) : (
          <>
            {renderMarqueeLine("left", "desktop-1")}
            {renderMarqueeLine("right", "desktop-2")}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default HomeServicesSlider;

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import useInView for scroll-triggered effects
import Statistics from "../../../../assets/CODRemittanceContactUsSection/Statistics.png";
import OrdersManagement from "../../../../assets/CODRemittanceContactUsSection/OrdersManagement.png";
import bottons from "../../../../assets/CODRemittanceContactUsSection/bottons.png";
import chats from "../../../../assets/CODRemittanceContactUsSection/chats-dots.svg";

const ContactUsSection = ({data}) => {
  const sectionRef = useRef(null);
  
  // Use in-view hooks for each element to trigger fade-up individually
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ordersRef, inView: ordersInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: buttonsRef, inView: buttonsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: contactBoxRef, inView: contactBoxInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row justify-center items-center relative w-full mb-[80px] lg:mb-[163px] px-4 lg:px-0"
    >
      {/* Main Image */}
      <motion.img
        ref={statsRef}
        className="w-full  h-full sm:w-[300px] sm:h-[188px] lg:w-[401.2px] lg:h-[249.75px] xl:w-[1046px] xl:h-[688px] lg:mt-[135px] relative"
        src={data?.cardSection?.cards[0]?.image} //Statistics
        alt="heroImage"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 10 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Additional Images */}
      <motion.img
        ref={ordersRef}
        src={data?.cardSection?.cards[1]?.image} //OrdersManagement
        alt="OrdersManagement"
        className="absolute bottom-0 left-2 lg:left-5 w-[276px] sm:w-[200px] lg:w-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: ordersInView ? 1 : 0, y: ordersInView ? 0 : 10 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.img
        ref={buttonsRef}
        src={data?.cardSection?.cards[2]?.image} //bottons
        alt="bottons"
        className="absolute top-[0px] sm:top-[130px] right-2 lg:top-[167px] lg:right-5 w-[90.5px] sm:w-[100px] lg:w-auto h-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: buttonsInView ? 1 : 0, y: buttonsInView ? 0 : 10 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Contact Box */}
      <motion.div
        ref={contactBoxRef}
        className="lg:flex flex-row bg-[#0587FF] border border-[#B4B3B3] py-3 sm:py-[17px] px-6 sm:px-[49px] rounded-[20px] sm:rounded-[30px] absolute -bottom-[50px] lg:-bottom-[120px] justify-center items-center text-left w-[380px] lg:w-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: contactBoxInView ? 1 : 0, y: contactBoxInView ? 0 : 10 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src={chats} alt="chats" className="w-[34px] sm:w-auto" />
        <p className="text-[10px] sm:text-[20px] font-bold font-Montserrat leading-auto sm:leading-[40px] lg:ml-4  w-[167.73px] sm:w-[300px] lg:w-[468px]">
         {data?.generalSection?.heading ? data?.generalSection?.heading : " Contact us today ––– to learn more and get started."}
        </p>
        <button
        onClick={() => window.open(data?.cardSection?.cards[0]?.buttons[0]?.url, "_blank")} 
        className="sm:mt-0 sm:ml-[20px] lg:ml-[380px] text-[#338AF3] text-[8px] sm:text-[16px] font-bold font-Montserrat rounded-[20px] sm:rounded-[30px] px-[16px] sm:px-[45px] py-[7px] sm:py-[10.5px] bg-white">
          {data?.cardSection?.cards[0]?.buttons[0].text || "Contact Us"}
        </button>
      </motion.div>
    </div>
  );
};

export default ContactUsSection;

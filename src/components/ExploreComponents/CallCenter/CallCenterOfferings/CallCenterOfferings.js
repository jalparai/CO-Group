import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LiveChatSupport from "../../../../assets/CallCenter/CallCenterOfferingsIcons/LiveChatSupport.svg";
import TechnicalAssistance from "../../../../assets/CallCenter/CallCenterOfferingsIcons/TechnicalAssistance.svg";
import EmailManagement from "../../../../assets/CallCenter/CallCenterOfferingsIcons/EmailManagement.svg";
import PostSalesSupport from "../../../../assets/CallCenter/CallCenterOfferingsIcons/PostSalesSupport.svg";
import AppointmentCoordination from "../../../../assets/CallCenter/CallCenterOfferingsIcons/AppointmentCoordination.svg";

// Card data
const services = [
  {
    title: "Live Chat Support",
    description:
      "Provide real-time assistance to your customers through live chat on your website or app.",
    icon: LiveChatSupport,
    bgColor: "bg-[#5335CD]",
  },
  {
    title: "Technical Assistance",
    description:
      "Help your customers with technical issues they may encounter with your products or services.",
    icon: TechnicalAssistance,
    bgColor: "bg-[#6F4FF2]",
    textColor: "text-white",
  },
  {
    title: "Email Management",
    description:
      "Manage and respond to customer inquiries and concerns via email.",
    icon: EmailManagement,
    bgColor: "bg-[#5335CD]",
  },
  {
    title: "Post-sales Support",
    description:
      "Assist customers with product-related questions or issues after they have made a purchase.",
    icon: PostSalesSupport,
    bgColor: "bg-[#5335CD]",
  },
  {
    title: "Appointment Coordination",
    description:
      "Schedule appointments for customers who require assistance or service.",
    icon: AppointmentCoordination,
    bgColor: "bg-[#5335CD]",
  },
];

// Animation variants for the card (fade up/down)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// CallCenterOfferings component
const CallCenterOfferings = ({data}) => {
  const [isHovered, setIsHovered] = useState(null);
  const [offerings, setOfferings] = useState(data?.cardSection?.cards || services);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (data?.cardSection?.cards) setOfferings(data.cardSection.cards);
    else setOfferings(services);
  }, [data]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center mt-[75px] lg:mt-[134px] mb-[58px] px-4 sm:px-8"
    >
      <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
        <div className="text-[#E61D2D] text-[11.52px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat tracking-[0.3em]">
          {data?.title ? data.title : "CALL CENTER OFFERINGS"}
        </div>
      </div>

      <motion.div
        className="relative text-center mb-4 sm:mb-5 lg:mb-[51px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[24px] sm:text-[36px] lg:text-[50px] font-Montserrat font-bold leading-tight">
          {data?.cardSection?.heading ? data?.cardSection?.heading : "Our Call Center Services Include"}
        </h1>
      </motion.div>

      <motion.div
        className="w-full lg:w-[1246px] huge:w-[1446px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {offerings.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.3, // Staggered delay for each card
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              className={`flex flex-col justify-center items-center rounded-[19.2px] lg:rounded-[30px] px-[41px] py-[77px] transition-all duration-300 ${
                isHovered === index ? service.bgColor : "bg-[#1D1D1D]/50"
              }`}
            >
              <img
                src={service.image || service.icon}
                alt={service.title}
                className="w-[64px] lg:w-auto h-auto"
              />
              <h3 className="text-[19.2px] sm:text-2xl lg:text-[29px] font-Montserrat font-bold mt-[32px] mb-[19.24px] md:mt-[50px] md:mb-[30px]">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-[25px] font-Montserrat font-extralight text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.slice(3, 5).map((service, index) => (
            <motion.div
              key={index + 3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (index + 3) * 0.3, // Staggered delay for second set of cards
              }}
              onMouseEnter={() => setIsHovered(index + 3)}
              onMouseLeave={() => setIsHovered(null)}
              className={`flex flex-col justify-center items-center rounded-[19.2px] lg:rounded-[30px] px-[10px] py-[68px] transition-all duration-300 ${
                isHovered === index + 3 ? service.bgColor : "bg-[#1D1D1D]/50"
              }`}
            >
              <img
                src={service.image || service.icon}
                alt={service.title}
                className="w-[64px] lg:w-auto h-auto"
              />
              <h3 className="text-[19.2px] sm:text-2xl lg:text-[29px] font-Montserrat font-bold mt-[32px] mb-[19.24px] md:mt-[50px] md:mb-[30px]">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-[25px] font-Montserrat font-light text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CallCenterOfferings;

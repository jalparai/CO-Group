import { motion } from "framer-motion";
import LiveChat from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/commentdotsnotification.svg";
import EmailSupport from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/envelopenotification.svg";
import PhoneSupport from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/callPone.svg";
import FAQs from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/commentquestion.svg";
import Bg from "../../../assets/Dashboard/spear12.svg"
import { useEffect, useState } from "react";

const TeamOfferSection = ({data}) => {
  
  const cards = [
    {
      title: "Specialized Expertise",
      description:
        "Our team comprises highly skilled professionals in various fields, offering specialized expertise to thrive in a constantly evolving environment.",
      icon: LiveChat,
    },
    {
      title: "Collaborative Culture",
      description:
        "We foster a culture of collaboration and mutual support, where every member feels valued and encouraged to contribute to collective success.",
      icon: EmailSupport,
    },
    {
      title: "Impactful Innovative Projects",
      description:
        "Joining our team means being part of a community that constantly seeks innovative solutions to complex challenges.",
      icon: PhoneSupport,
    },
    {
      title: "Growth Opportunities",
      description:
        "We provide training programs and professional advancement opportunities to foster the growth of our members, regardless of their level of experience.",
      icon: FAQs,
    },
  ];
  const [list, setList] = useState(cards)
  useEffect(() => {
    setList(data?.cardSection?.cards || cards)
  }
, [data]);


  return (
    <div className="flex flex-col items-center justify-center font-Montserrat mt-[180px] px-4 sm:px-8 lg:px-16">
      {/* Title Section */}
      <img src={Bg} className="absolute w-[100%] z-[-10] "/>

      <motion.div
        className="mb-[50px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-center">
          {data?.cardSection?.heading || "What Our Team Offer?"}
        </h2>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1228px] w-full"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
          hidden: {},
        }}
        viewport={{ once: true }}
      >
        {list.map((card, index) => (
          <motion.div
            key={index}
            className="p-6 sm:p-[30px] lg:p-[50px] rounded-[30px] bg-[#F4F4F4]/5 hover:bg-[#7B89D1] border border-[#535353] transition duration-500 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={card?.image || card.icon}
              alt={card.title}
              className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
            />
            <h3 className="text-[20px] sm:text-[25px] lg:text-[30px] font-semibold my-4">
              {card.title}
            </h3>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#FFFFFF]">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamOfferSection;

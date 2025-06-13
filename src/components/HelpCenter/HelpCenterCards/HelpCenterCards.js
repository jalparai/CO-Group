import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LiveChat from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/commentdotsnotification.svg";
import EmailSupport from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/envelopenotification.svg";
import PhoneSupport from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/callPone.svg";
import FAQs from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/commentquestion.svg";
import SubmitaATicket from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/chatstar.svg";
import Feedback from "../../../assets/HelpCenterIcons/HelpCenterCardsIcons/liketag.svg";
import { set } from "lodash";

const HelpCenterCards = ({data}) => {
  const cards = [
    { title: "Live Chat", description: "Our live chat support is available 24/7 to assist you with any inquiries or issues you may have. Click on the chat icon in the bottom right corner to start a conversation with one of our representatives.", icon: LiveChat },
    { title: "Email Support", description: "For non-urgent inquiries or if you prefer to contact us via email, you can reach us at support@codpowergroup.com. We strive to respond to all emails very quickly.", icon: EmailSupport },
    { title: "Phone Support", description: "If you need immediate assistance, you can call us at +32 486 11 04 05. Our phone lines are open 24/7 to assist you with any urgent matters.", icon: PhoneSupport },
    { title: "FAQs", description: "Before contacting us, you may find the answer to your question in our FAQs section. Browse through our frequently asked questions to see if your question has already been answered.", icon: FAQs },
    { title: "Submit a Ticket", description: "If you have a specific issue that requires our attention, you can submit a ticket through our online helpdesk. Provide detailed information about your issue, and one of our support agents will get back to you as soon as possible.", icon: SubmitaATicket },
    { title: "Feedback", description: "We value your feedback. If you have any suggestions, comments, or feedback about our services, please let us know. Your input helps us improve our services and provide a better experience for our customers.", icon: Feedback },
  ];

  const [cardsData, setCardsData] = useState(cards);

  useEffect(() => {
    if (data?.cardSection?.cards) {
      setCardsData(data?.cardSection?.cards);
    }
  }, [data]);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 }, // Increased stagger time to slow down the animation
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } }, // Slower transition
  };

  return (
    <div className="flex items-center justify-center mx-[13px] mt-[47px] lg:mt-[180px]">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1228px] w-full"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the cards are in the viewport
      >
        {cardsData?.map((card, index) => (
          <motion.div
            key={index}
            className="lg:p-[50px] p-[33px] rounded-[30px] bg-[#5D7A95]/10 
                       hover:bg-[#7B89D1] backdrop-blur-md border border-[#FFFFFF]/20 
                       hover:border-none transition duration-500 ease-in-out 
                       cursor-pointer group"
            variants={cardVariants}
            style={{ transitionDelay: `${index * 0.2}s` }} // Add a delay for each card based on index
          >
            <motion.img
              src={card?.image || card?.icon}
              alt={card.title}
              className="mb-[20px] lg:mb-[30px] w-[40.32px] lg:w-auto h-auto"
              variants={cardVariants}
            />
            <motion.h3
              className="lg:text-[30px] text-[20px] font-Montserrat font-semibold 
                         my-[20px] lg:my-[31px] group-hover:text-white transition duration-500 ease-in-out"
              variants={cardVariants}
            >
              {card.title}
            </motion.h3>
            <motion.p
              className="lg:text-[25px] text-[15px] font-Montserrat font-light 
                         text-[#707F92]/40 group-hover:text-white transition duration-500 ease-in-out"
              variants={cardVariants}
            >
              {card.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HelpCenterCards;

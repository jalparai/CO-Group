import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import creditcardcheck from "../../../assets/Home_Hero_Icons/CardContainerIcons/creditcardcheck.svg";
import wallet from "../../../assets/Home_Hero_Icons/CardContainerIcons/wallet.svg";
import customer from "../../../assets/Home_Hero_Icons/CardContainerIcons/customer.svg";

const Card = ({
  featureTitle,
  featureDescription,
  featureIcon,
  isActive,
  onClick,
  animationVariants,
  isInView,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle =
    isActive || isHovered
      ? "bg-gradient-to-b from-[#304096]/5 to-[#304096]/30 border-[#516CFC]"
      : "bg-white bg-opacity-5 border-[#5F5A5A]";

  return (
    <motion.div
      className={`lg:mt-[98px] mt-[21px] flex-none cursor-pointer transition-transform duration-300 ease-in-out h-full`} // Ensure the card container takes full height
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      variants={animationVariants} // Apply scroll animation variants
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Control visibility on scroll
    >
      <div
        className={`flex flex-col lg:w-[417px] w-[400px] rounded-[30px] py-[36.5px] px-[50px] overflow-hidden transition-all duration-1000 ease-in-out ${cardStyle} border-2 h-full`} // Ensure the card takes full height
      >
        <div className="flex items-center justify-between mb-[21.2px] lg:mb-[23px]">
          <h2 className="whitespace-pre-line text-white dark:text-white w-[201.83px] lg:w-[219px] lg:text-[20px] text-[18.43px] font-Montserrat font-bold">
            {featureTitle}
          </h2>
          <div
            className={`lg:w-[66px] lg:h-[66px] w-[60.83px] h-[60.83px] inline-flex items-center justify-center rounded-[20px] text-white flex-shrink-0 bg-[#221E2C] ${
              isHovered && "border border-[#878095]"
            }`}
          >
            <img src={featureIcon} alt="icon" />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="whitespace-pre-line lg:leading-[22px] leading-[20.3px] lg:text-[15.84px] text-[14.6px] font-Montserrat w-[312px] text-[#A5A5A5]">
            {featureDescription}
          </p>
          <div className="lg:mt-[23px] mt-[21.2px] lg:text-[15.84px] text-[14.6px] font-medium font-Montserrat text-[#0587FF] inline-flex items-center">
            PLATFORM
          </div>
          <p className="lg:mt-[23px] mt-[21.2px] lg:text-[15.84px] text-[14.6px] font-Montserrat font-light text-[#FFFFFF]/50 inline-flex items-center">
            Web
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CardContainer = ({data}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const ref = useRef(null); // Reference for scrolling section
  const isInView = useInView(ref, { once: false, margin: "-50px", threshold: 0.9 }); // Trigger when 40% of the section is in view
  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  // Animation variants for staggered card fade-in
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Default hidden state with fade-up
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggeredVariants = (index) => ({
    ...cardVariants,
    visible: {
      ...cardVariants.visible,
      transition: {
        ...cardVariants.visible.transition,
        delay: index * 0.3, // Stagger the fade-in for each card
      },
    },
  });

  return (
    <div
      ref={ref} // Attach the ref to the container
      className="flex flex-wrap justify-center gap-4" // Use gap for spacing between cards
    >
      {data && data?.cardSection?.cards && data?.cardSection?.cards.map((card, index) => (
        <motion.div
          key={index}
          className="w-[calc(100%-1rem)] lg:w-[calc(34.333%-1rem)] huge:lg:w-[calc(25.333%-1rem)] flex justify-center h-full" // Ensure the container takes full height
          variants={staggeredVariants(index)} // Apply staggered animation for each card
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        >
          <Card
            featureTitle={card.title}
            featureDescription={card.description}
            featureIcon={card.image}
            isActive={index === activeCardIndex}
            onClick={() => handleCardClick(index)}
            animationVariants={staggeredVariants(index)} // Pass staggered variant to Card
            isInView={isInView} // Pass visibility state to Card
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CardContainer;

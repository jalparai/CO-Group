import React, { useRef, memo, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import ContinousSupport from "../../../../assets/SourcingCardsItems/ContinousSupport.png";
import Control from "../../../../assets/SourcingCardsItems/Control.png";
import Negotiation from "../../../../assets/SourcingCardsItems/Negotiation.png";
import Selection from "../../../../assets/SourcingCardsItems/Selection.png";
import Support from "../../../../assets/SourcingCardsItems/Support.png";

const fallback = [
  {
    title: "Product Selection",
    description:
      "Tell us what products you're looking for, and we'll use our extensive network of trusted suppliers to find the best options for you.",
    icon: Selection,
  },
  {
    title: "Supplier Negotiation",
    description:
      "Our experienced team will negotiate with suppliers on your behalf to ensure you get the best prices and terms.",
    icon: Negotiation,
  },
  {
    title: "Quality Control",
    description:
      "We conduct rigorous quality control checks to ensure that all products meet your standards before they are shipped to you.",
    icon: Control,
  },
  {
    title: "Logistics Support",
    description:
      "We take care of all logistics, including shipping and customs clearance, to ensure that your products arrive on time and in good condition.",
    icon: Support,
  },
  {
    title: "Continuous Support",
    description:
      "Our team provides ongoing support to help you manage your inventory and ensure that you always have the products you need.",
    icon: ContinousSupport,
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const defaultCardStyles = "text-white font-Montserrat";
const defaultContainerStyles =
  "backdrop-blur-sm bg-[#FFFFFF]/10 w-full mx-auto rounded-[15.36px] md:rounded-[20px] p-[30px] md:p-[50px] lg:p-[68px] flex flex-col items-center text-center";

const Card = memo(({ title, description, image, index, isLastCard = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 }); // triggerOnce false to trigger on both scroll-up and scroll-down

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.3, // Increase delay for sequential appearance
      }}
      className={`${defaultContainerStyles} ${
        isLastCard && "md:flex-row-reverse lg:items-start"
      }`}
    >
      <img
        src={image}
        alt={`${title} icon`}
        className={`${
          isLastCard ? "mx-auto mt-4 lg:mt-0" : "h-[145.15px] md:h-max md:w-max"
        }`}
      />
      <div
        className={`${
          isLastCard
            ? "lg:w-auto mx-auto md:text-left"
            : "w-[306px] md:w-[375px]"
        }`}
      >
        <h3
          className={`${defaultCardStyles} font-bold text-lg md:text-[20px] lg:text-[25px] my-[30px] md:my-[35px] lg:my-[40px]`}
        >
          {title}
        </h3>
        <p
          className={`${defaultCardStyles} font-thin text-base leading-[20px] md:leading-[25px] lg:leading-[30px] md:text-[17px] lg:text-[20px]`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
});

const CardsSection = ({data}) => {
  const [list, setList] = React.useState(data?.cardSection?.cards || fallback);

  useEffect(() => {
    if (data?.cardSection?.cards) {
      setList(data.cardSection.cards);
    } else {
      setList(fallback);
    }
  }
  , [data]);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-[20px] lg:gap-[31px] w-full max-w-[1260px] mx-auto p-4 md:p-2 lg:p-0">
      {list.slice(0, 4).map((item, index) => (
        <Card key={index} {...item} index={index} />
      ))}
      <div className="md:col-span-2 lg:col-span-2 flex justify-center">
        <Card {...list[4]} index={4} isLastCard />
      </div>
    </div>
  );
};

export default CardsSection;

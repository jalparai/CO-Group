import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./CustomizeSection.css";
import photo from "../../../../assets/CashOnDelivery/CustomizeSection/image.png";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hiddenOut: { opacity: 0, y: -50, transition: { duration: 1 } },
};

// Card Component
const Card = ({ cardIndex, title,heading, description, image, isHovered, onMouseEnter, onMouseLeave }) => {
  const bgClasses = isHovered
    ? "bg-[#0587FF]/20 button-gradient-border"
    : "bg-[#FFFFFF]/5 border border-[#5F5A5A]";
  const textClasses = isHovered ? "text-white" : "";
  const contentColor = isHovered ? "text-[#4E719B]" : "text-[#6E6E6E]";
  const cardHeight =
    cardIndex === 0 ? "md:h-auto sm:h-auto h-[518.98px]" : "lg:h-[518.98px]";

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      className={`relative py-[28px] px-[43.9px] lg:py-[50px] rounded-[30px] mx-auto transition-transform duration-500 ${bgClasses} ${cardHeight}`}
      onMouseEnter={() => onMouseEnter(cardIndex)}
      onMouseLeave={onMouseLeave}
    >
      <button
        aria-label="Customize Button"
        className="font-normal bg-[#0052B4]/50 text-[#0587FF] transition duration-700 text-[11px] lg:text-[14px] xl:text-[16px] font-Montserrat rounded-full w-[100px] h-[35px] lg:w-[145px] lg:h-[54px] inline-flex justify-center items-center mb-4 lg:mb-[30px]"
      >
        {title}
      </button>
      <h2 className={`text-[18px] md:text-[23px] lg:text-[30px] xl:text-[40px] font-Montserrat font-bold mb-4 ${textClasses}`}>
        {heading}
      </h2>
      <p className={`font-Montserrat text-[12px] md:text-[14px] lg:text-[18px] xl:text-[22px] font-light w-full ${contentColor}`}>
        {description}
      </p>
      {cardIndex === 0 && (
        <img
          src={photo}
          alt="payment processing visualization"
          className="w-[311.04px] sm:w-[240px] md:w-[340px] lg:w-[540px] absolute bottom-0 left-1/2 transform -translate-x-1/2"
          loading="lazy"
        />
      )}
    </motion.div>
  );
};

// Main Section Component
const CustomizeSection = ({data}) => {
  return (
    <div className="lg:mt-[98px] text-white lg:w-[1250px] huge:w-[1450px] lg:h-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 lg:px-0">
      <Card
        cardIndex={0}
        title={data?.cardSection?.cards[0]?.title || "Customize"}
        heading={data?.cardSection?.cards[0]?.subtitle || "Cash on Delivery (COD)"}
        description={data?.cardSection?.cards[0]?.description || "Streamline your cash on delivery operations with our advanced COD platform. At COD Power Group, we understand the importance of offering flexible payment options to your customers. That's why we've developed a cutting-edge solution to make cash transactions easy and convenient for you and your customers."}
        image={data?.cardSection?.cards[0]?.image || photo}
        isHovered={false}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
      <div className="space-y-6">
        <Card
          cardIndex={1}
          title={data?.cardSection?.cards[1]?.title || "Customize"}
          heading={data?.cardSection?.cards[1]?.subtitle || "Effortless Integration"}
          description={data?.cardSection?.cards[1]?.description || "Our platform seamlessly integrates with your e-commerce store, allowing you to offer COD as a payment option with just a few clicks. Say goodbye to complex payment processing systems and hello to a streamlined, hassle-free experience."}
          image={data?.cardSection?.cards[1]?.image || photo}
          isHovered={false}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
        <Card
          cardIndex={2}
          title={data?.cardSection?.cards[2]?.title || "Customize"}
          heading={data?.cardSection?.cards[2]?.subtitle || "Maximize Your Revenue"}
          description={data?.cardSection?.cards[2]?.heading || "With COD Power Group, you can tap into new markets and reach customers who prefer paying cash upon delivery. By offering COD, you'll increase your conversion rates and maximize your revenue potential, all while providing your customers with the convenience and flexibility they deserve."}
          image={data?.cardSection?.cards[2]?.image || photo}
          isHovered={false}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
      </div>
    </div>
  );
};

export default CustomizeSection;

import { motion } from "framer-motion";
import { memo, useRef } from "react";
import { useInView } from "framer-motion";
import Accuracy from "../../../../assets/CashOnDelivery/CardsItems/Accuracy.png";
import Clearance from "../../../../assets/CashOnDelivery/CardsItems/Clearance.png";
import Expand from "../../../../assets/CashOnDelivery/CardsItems/Expand.png";
import Fast from "../../../../assets/CashOnDelivery/CardsItems/Fast.png";
import Inventory from "../../../../assets/CashOnDelivery/CardsItems/Inventory.png";
import Operational from "../../../../assets/CashOnDelivery/CardsItems/Operational.png";
import Potential from "../../../../assets/CashOnDelivery/CardsItems/Potential.png";
import Simplify from "../../../../assets/CashOnDelivery/CardsItems/Simplify.png";
import Support from "../../../../assets/CashOnDelivery/CardsItems/Support.png";
import Trust from "../../../../assets/CashOnDelivery/CardsItems/Trust.png";
import Bg from "../../../../assets/Dashboard/spera3.svg"
import "./CardsSection.css";

// Animation variants for the card (fade up/down)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Memoized Card component with animation
const Card = memo(({ title, description, image, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: false, // Ensures animation works on every scroll
    threshold: 0.2, // Trigger animation when 20% of the card is visible
  });

  return (
    <motion.div
      ref={ref}
      className="backdrop-blur-sm bg-white/10 w-full sm:w-[614px] mx-auto rounded-[20px] lg:rounded-[30px] p-6 flex flex-col items-center text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2, // Add delay for staggered effect
      }}
    >
      <img
        src={image}
        alt={`${title} icon`}
        className="w-[132px] lg:w-auto h-auto"
      />
      <h3 className="text-white font-bold font-Montserrat text-[16px] sm:text-[25px] my-5 sm:my-7">
        {title}
      </h3>
      <p className="text-white font-Montserrat text-[13px] sm:text-[20px] font-thin w-full sm:w-[472px]">
        {description}
      </p>
    </motion.div>
  );
});

// CardsSection component with conditional rendering
const CardsSection = ({data}) => {
  return (
    <div className="cards-section-bg py-10 px-4">
      <div className="relative flex flex-wrap justify-center gap-5 sm:gap-8 max-w-[1260px] mx-auto">
        {data?.cardSection?.cards?.map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
        <img src={Bg}  className="absolute bottom-0 z-[-10]"/>
      </div>
    </div>
  );
};

export default CardsSection;

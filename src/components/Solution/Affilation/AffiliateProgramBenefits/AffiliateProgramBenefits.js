import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AffiliateProgramBenefits = ({data}) => {
  // Reusable function for creating inView and animation controls for each card
  const useCardAnimation = (threshold = 0.2) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold, // Trigger animation when 20% of the card is visible
      triggerOnce: true, // Only trigger once
    });
    React.useEffect(() => {}, [data]);
    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start from below and hidden
    visible: { opacity: 1, y: 0 }, // Animate to visible
  };

  // Card Component
  const BenefitCard = ({ title, description, delay = 0, image }) => {
    const { ref, controls } = useCardAnimation();
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        className="text-center bg-[#121212] font-Montserrat rounded-[30px]"
      >
        {image && image!="" && (
          <div className="w-full h-48 md:h-[420px] rounded-[30px] mx-auto bg-[#191919]">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-[30px]" />
          </div>
        )}
        <div className="py-6 md:py-9">
          <h4 className="text-xl md:text-[30px] font-bold mb-[36px] leading-[30px] w-full max-w-[452px] mx-auto">
            {title}
          </h4>
          <p className="text-base md:text-[25px] font-extralight leading-[30px] w-full max-w-[486px] mx-auto">
            {description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 md:mt-[254px]">
      <div className="grid md:grid-cols-2 gap-6 md:space-x-[20px]">
        <div className="space-y-6 md:space-y-[36px]">
          { data?.cardSection?.cards?.length > 0 &&
            data?.cardSection?.cards?.slice(0,3).map((item, index) => (
              <BenefitCard
                key={index}
                title={item.title}
                description={item.description}
                delay={index * 0.2}
                image={item.image}
              />
            ))
          }
          {
            data?.cardSection?.cards?.length ===0 && (
              <>
                 <BenefitCard
            title="Fast & Reliable Payments"
            description="Receive your commissions quickly and securely."
          />
          <BenefitCard
            title="Benefits of the Product Affiliate Program at COD Power Group"
            description="Attractive Commissions: Earn competitive commissions on every sale generated through your affiliate link."
            delay={0.2}
            image
          />
          <BenefitCard
            title="Wide Selection of Products"
            description="Access a wide range of products in different categories to promote those that best suit your audience."
            delay={0.4}
            image
          /> 
          </>
            )
          }
       
        </div>
        <div className="space-y-6 md:space-y-[36px] md:mt-[124px]">
        { data?.cardSection?.cards?.length > 3 &&
            data?.cardSection?.cards?.slice(3,6).map((item, index) => (
              <BenefitCard
                key={index}
                title={item.title}
                description={item.description}
                delay={index * 0.2}
                image={item.image}
              />
            ))
          }
          {
            data?.cardSection?.cards?.length ===0 && (
            <>
              <BenefitCard
            title="Generate Links"
            description="Generate unique affiliate links for each product you want to promote. These links will track sales and attribute commissions to you."
            delay={0.6}
            image
          />
          <BenefitCard
            title="Earn Commissions:"
            description="Attractive Commissions: Earn competitive commissions on every sale generated through your affiliate link."
            delay={0.8}
          />
          <BenefitCard
            title="Support & Tracking"
            description="Get dedicated support to help you maximize your earnings through our affiliate program."
            delay={1}
            image
          />
          </>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgramBenefits;

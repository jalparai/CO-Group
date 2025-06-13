import { motion } from "framer-motion";
import RegEdit from "../../../../assets/Affliation/AffiliateProgramSteps/RegEdit.svg";
import Stamp from "../../../../assets/Affliation/AffiliateProgramSteps/Stamp.svg";
import Bullhorn from "../../../../assets/Affliation/AffiliateProgramSteps/Bullhorn.svg";
import { useEffect, useState } from "react";
const AffiliateProgramSteps = ({data}) => {
  const steps = [
    {
      image: RegEdit,
      title: "Registration",
      description:
        "Fill out the registration form on our website and submit your application.",
    },
    {
      image: Stamp,
      title: "Approval",
      description:
        "Once your application is approved, you will receive a confirmation email with your login information.",
    },
    {
      image: Bullhorn,
      title: "Start Promoting",
      description:
        "Begin promoting products and earning commissions as soon as you receive your affiliate link.",
    },
  ];

  const [stepsData, setStepsData] = useState(steps);
  useEffect(() => {
    if (data?.cardSection?.cards) setStepsData(data?.cardSection?.cards);
  }, [data]);

  // Animation Variants with delay based on index
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and below
    visible: (index) => ({
      opacity: 1,
      y: 0, // Fade in and move to original position
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.3, // Add delay based on index
      },
    }),
  };

  return (
    <div className="mt-16 md:mt-32 px-4 md:px-20 lg:px-32">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-20">
        <p className="text-base md:text-xl uppercase font-Montserrat tracking-[5px] text-[#A5A5A5] mb-4 md:mb-[18px]">
          {data?.title || "Quick Join"}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[50px] font-Montserrat leading-tight md:leading-[60px] w-full max-w-[989px] mx-auto font-bold">
          {data?.cardSection?.heading || "How to Sign Up for the Product Affiliate Program?"}
        </h2>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[145px] justify-items-center">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center font-Montserrat text-center max-w-[340px] w-full"
            initial="hidden" // Start hidden
            whileInView="visible" // Animate when in view
            viewport={{ once: false, amount: 0.3 }} // Re-trigger animation every time it scrolls into view
            variants={cardVariants} // Apply animation variants
            custom={index} // Pass the index for custom delay
          >
            <img src={step.image} alt={`Illustration for ${step.title}`} className="w-18 md:w-auto" />
            <h3 className="text-2xl md:text-[30px] font-bold my-4 md:my-[30px]">{step.title}</h3>
            <p className="text-base md:text-xl font-thin">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateProgramSteps;

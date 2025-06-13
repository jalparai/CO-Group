import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Availability from "../../../../assets/CallCenter/CallCenterAdvantagsIcons/Availability.svg";
import MultilingualSupport from "../../../../assets/CallCenter/CallCenterAdvantagsIcons/MultilingualSupport.svg";
import PersonalizedInteractions from "../../../../assets/CallCenter/CallCenterAdvantagsIcons/PersonalizedInteractions.svg";
import EfficientIssueResolution from "../../../../assets/CallCenter/CallCenterAdvantagsIcons/EfficientIssueResolution.svg";
import Bg from "../../../../assets/Dashboard/spera-9.svg"

const adv = [
  {
    title: "24/7 Availability",
    description:
      "Our call center operates 24 hours a day, 7 days a week, ensuring that your customers can reach us whenever they need assistance.",
    bgColor: "bg-[#1D1D1D]",
    iconPath: Availability,
  },
  {
    title: "Multilingual Support",
    description:
      "We offer support in multiple languages to cater to your diverse customer base.",
    bgColor: "bg-[#1D1D1D]",
    iconPath: MultilingualSupport,
  },
  {
    title: "Personalized Interactions",
    description:
      "Our customer service representatives are trained to provide personalized interactions, making each customer feel valued.",
    bgColor: "bg-[#1D1D1D]",
    iconPath: PersonalizedInteractions,
  },
  {
    title: "Efficient Issue Resolution",
    description:
      "We use advanced automation tools to save time and reduce resolution times for customer issues.",
    bgColor: "bg-[#1D1D1D]",
    iconPath: EfficientIssueResolution,
  },
];

const CallCenterAdvantags = ({data}) => {
  const [isHovered, setIsHovered] = useState(null);
  const [advantages, setAdvantages] = useState(data?.cardSection?.cards || adv);
  // Control animations when the section is in view
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (data?.cardSection?.cards) {
      setAdvantages(data?.cardSection?.cards);
    }
    else {
      setAdvantages(adv);
    }
  }, [data]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger the children animations with a 0.3s delay
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative flex flex-col items-center mt-[67px] lg:mt-[134px] mb-[46px] lg:mb-[58px] px-4 sm:px-8 lg:px-0"
    >
      <div className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[400px] -z-10"></div>
      <div className="flex justify-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[18px]">
        <div className="text-[#E61D2D] text-[11.52px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]">
          {data?.title ? data.title : "ADVANTAGES"}
        </div>
      </div>
      <img src={Bg} className="absolute w-[100%] top-0"/>

      {/* Fade-up animation for the section heading */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={controls}
        className="relative text-center mb-[69.49px] sm:mb-[13.745px] lg:mb-[51px]"
      >
        <h1 className="text-[24px] sm:text-[28.8px] md:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[34.3px] sm:leading-[47.15px] lg:leading-[60px]">
          {data?.cardSection?.heading ? data?.cardSection?.heading 
          : <>Why Choose COD Power Group for
          <br className="hidden sm:block" /> Call Center Services </> }
        </h1>
      </motion.div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:max-w-[80%] lg:max-w-[90%]">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            className={`py-6 lg:py-[37px] px-6 lg:px-[48px] cursor-pointer rounded-[30px] backdrop-blur-md text-white flex items-start transition-all duration-700 ${
              isHovered === index ? "bg-[#338AF3]" : advantage.bgColor
            }`}
            variants={fadeVariants}
          >
            <div className="flex-shrink-0 mr-4 lg:mr-[40px]">
              <img
                src={advantage.image || advantage.iconPath}
                alt={advantage.title}
                className="w-[41.46px] lg:w-auto h-auto"
              />
            </div>
            <div className="flex flex-col justify-center w-[288px] lg:w-[388px]">
              <h3 className="text-[15px] lg:text-[29px] font-Montserrat font-bold mb-[15px] lg:mb-[30px]">
                {advantage.title}
              </h3>
              <p className="text-[13.5px] lg:text-[20px] font-Montserrat font-light leading-[18px] lg:leading-[25px]">
                {advantage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CallCenterAdvantags;

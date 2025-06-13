import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

// Import images/icons
import SHIPPINGBENEFITS from "../../../../assets/SippingProcessItem/SHIPPINGBENEFITS.png";
import BoxIIcon from "../../../../assets/SippingProcessItem/BoxIIcon.svg";
import VectorLeft from "../../../../assets/SippingProcessItem/VectorLeft.svg";
import VectorRight from "../../../../assets/SippingProcessItem/VectorRight.svg";

// Sample content array for the slider
const content = [
  {
    id: 1,
    icon: BoxIIcon,
    title: "Swift & Dependable Shipping",
    description:
      "Timely product delivery is crucial for customer satisfaction. We partner with trusted carriers to ensure your products reach their destination quickly and safely.",
    image: SHIPPINGBENEFITS,
  },
  {
    id: 2,
    icon: BoxIIcon,
    title: "Cost-Effective Shipping",
    description:
      "We offer cost-effective shipping solutions without compromising on delivery speed and reliability.",
    image: SHIPPINGBENEFITS,
  },
  {
    id: 3,
    icon: BoxIIcon,
    title: "Global Shipping Options",
    description:
      "Our services provide global shipping options to ensure your products reach every corner of the world.",
    image: SHIPPINGBENEFITS,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const SippingProcess = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [steps, setSteps] = useState(data?.cardSection?.cards || content);

  useEffect(()=> {
    if (data?.cardSection?.cards) {
      setSteps(data.cardSection.cards);
    } else {
      setSteps(content);
    }
  }, [data]);
  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle visibility based on scroll position
  const handleScroll = () => {
    const section = document.getElementById("sipping-process");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    setIsVisible(rect.top <= window.innerHeight * 0.75);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="sipping-process"
      className="relative flex flex-col items-center mt-[16px] lg:mt-[134px] lg:mb-[58px] lg:w-[90%] w-[95%] m-auto"
    >
      {/* Section Title */}
       {/* Shipping Process Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[18px]"
      >
        <div className="text-[#E61D2D] text-[11.52px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]">
          {data?.title || "SHIPPING PROCESS"}
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 60 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative text-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[51px]"
      >
        <h1 className="text-[28.8px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[34.3px] sm:leading-[47.15px] lg:leading-[60px] w-[333px] lg:w-auto">
          {data?.cardSection?.heading || "Our Shipping Services Include"}
        </h1>
      </motion.div>

      {/* Slider Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="lg:max-w-[90%] max-w-[95%] w-full border border-[#4C4C4C] py-[54px] px-[35px] lg:p-[90px] rounded-[40px] my-[46px] lg:my-[95px] mx-auto relative"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-[50px]">
          <div className="lg:ml-6 flex flex-col items-start">
            <motion.img
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              src={content[currentIndex].icon}
              alt="Icon"
              className="w-[52px] h-[47px] lg:w-auto lg:h-auto"
            />
            <motion.h3
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-[21px] lg:text-[40px] font-Montserrat font-bold mb-[25px] mt-[19.2px] lg:my-[30px] text-left"
            >
              {steps[currentIndex].title}
            </motion.h3>
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="text-[#6F6F6F] text-[14px] lg:text-[20px] font-Montserrat font-normal w-full lg:w-[491px] lg:mx-0"
            >
              {steps[currentIndex].description}
            </motion.p>
          </div>
          <img
            src={steps[currentIndex].image}
            alt="Shipping"
            className="max-w-[460px] lg:max-w-[500px] w-full lg:w-[50%] mx-auto mt-[66px] lg:mt-0"
          />
        </div>
      </motion.div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 lg:block"
      >
        <img src={VectorLeft} alt="VectorLeft" className="w-[14px] lg:w-auto h-auto" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 lg:block"
      >
        <img src={VectorRight} alt="VectorRight" className="w-[14px] lg:w-auto h-auto" />
      </button>
    </div>
  );
};

export default SippingProcess;

import { motion } from "framer-motion";
import Rectangle from "../../../assets/HelpCenterIcons/PopularTopicsSection/Rectangle.png";
import "./PopularTopicsSection.css";

const topics = [
  {
    title: "Billing & Payments",
    description:
      "Get information about billing, payment methods, and how to resolve payment-related issues.",
  },
  {
    title: "Account Management",
    description:
      "Learn how to manage your account, update your information, and troubleshoot common account issues.",
  },
  {
    title: "Product Guides",
    description:
      "Access user manuals, setup guides, and tutorials to help you get the most out of our products.",
  },
  {
    title: "Technical Support",
    description:
      "Find solutions to technical issues, troubleshooting tips, and guidance on using our products and services.",
  },
];

const PopularTopicsSection = ({data}) => {
  return (
    <motion.div
      className="relative flex flex-col mt-[69px] lg:mt-[134px] py-[61px] mb-[58px] w-full max-w-[1307px] mx-auto"
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and below
      whileInView={{ opacity: 1, y: 0 }} // Fade-up animation when in view
      exit={{ opacity: 0, y: -50 }} // Fade-down animation when out of view
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is in view
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
    >

      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[150px] -z-10"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(circle, #D9D9D9 0%, #0066FF 10%, #FF0000 70%, #0DA8FF 52%, #0035F2 74%, #FFA1A1 100%)",
        //   backgroundBlendMode: "overlay",
        //   backgroundPosition: "-200px",
        // }}
      ></div>

      <div className="relative text-start ml-[25px] mb-[40px] lg:mb-[51px]">
        <h1 className="text-[28.8px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[34.3px] sm:leading-[47.15px] lg:leading-[60px]">
          Popular Topics
        </h1>
      </div>

      {/* Add overflow-x-auto for horizontal scrolling with scroll snap */}
      <div className="scroll-container flex lg:justify-center overflow-x-auto space-x-[40px] px-4 scrollbar-hide">
        {data?.cardSection?.cards?.map((topic, index) => (
          <div
            key={index}
            className="scroll-item flex-shrink-0 flex flex-col items-center w-[250px]"
          >
            <img
              src={topic.image || Rectangle}
              alt={topic.title}
              className="w-[236.19px] lg:w-auto h-auto"
            />
            <button className="text-[18.47px] lg:text-[22px] font-Montserrat font-bold rounded-full h-auto w-auto my-[27px] lg:my-[30px] justify-center items-center">
              {topic.title}
            </button>
            <p className="text-[17px] lg:text-[20px] text-center font-Montserrat text-[#606060] w-[237px]">
              {topic.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PopularTopicsSection;

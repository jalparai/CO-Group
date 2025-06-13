import { motion } from "framer-motion";
import SearchIcon from "../../../assets/HelpCenterIcons/SearchIcon.svg";

const HelpCenterSearch = ({data}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-[46px] px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }} // Initial state: fully transparent and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade-up animation when in view
      exit={{ opacity: 0, y: -50 }} // Fade-down animation when out of view
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is in view
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition for both
    >
      <div className="text-white text-[19.2px] sm:text-[24px] md:text-[30px] mb-[20px] sm:mb-[40px] md:mb-[57px] font-Montserrat font-bold text-center">
        {data?.cardSection?.heading || "How Can We Assist You?"}
      </div>
      <div className="flex items-center w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1205px] rounded-full bg-gray-900 shadow-md">
        <input
          type="text"
          placeholder="Search for articles ? ..."
          className="flex-grow w-full px-[20px] sm:px-[25px] md:px-[31px] py-[15px] sm:py-[30px] md:py-[41px] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-white font-light font-Montserrat bg-transparent focus:outline-none rounded-l-full"
        />
        <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-[15.36px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-Montserrat text-white py-[8px] sm:py-[10px] px-[20px] sm:px-[25px] md:px-[31px] lg:px-[37px] m-[15px] sm:m-[20px] md:m-[25px] rounded-full">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="mr-2 w-[20.48px] lg:w-auto h-auto"
          />
          Search
        </button>
      </div>
      <div className="text-[12px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-Montserrat font-light mt-[15px] sm:mt-[20px] md:mt-[29px] text-center">
        {data?.cardSection?.description || "Most Popular Posts: Live Chat, Email Support, FAQs ..."}
      </div>
    </motion.div>
  );
};

export default HelpCenterSearch;

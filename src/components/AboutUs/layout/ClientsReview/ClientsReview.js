import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DashboardHero from "../DashboardHero/DashboardHero";
import { apiclient } from "../../apiConfig/apiConfig"


const fetchReviews = async () => {
  const res = await apiclient.get("/reviews");
  return res.data.data;
}

const ClientsReview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reviews = await fetchReviews(); // Await the async function
      setReviews(reviews);
    };
  
    fetchData(); // Call the async function
  }, []);
  


  // Reviews Array (Only 3)
  // const reviews = [
  //   {
  //     key: "sarah",
  //     name: "Sarah W.",
  //     role: "E-Commerce Entrepreneur",
  //     review:
  //       "COD Power Group made cash on delivery incredibly easy. Their platform is user-friendly, and their shipping is lightning-fast. Highly recommended!",
  //   },
  //   {
  //     key: "jawad",
  //     name: "Jawad S.",
  //     role: "Dropshipping Enthusiast",
  //     review:
  //       "I was skeptical at first, but COD Power Group exceeded my expectations. Logistics are fully managed, and now I focus on scaling my business!",
  //   },
  //   {
  //     key: "marouan",
  //     name: "Marouan M.",
  //     role: "Online Retailer",
  //     review:
  //       "COD Power Group is a game-changer. Their team handles everything, and my sales have skyrocketed. Wouldn’t trade this service for anything!",
  //   },
  // ];

  // Handle Tab Click
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  // Handle Drag to Switch Slides
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleTabClick((activeIndex + 1) % reviews.length); // Move Forward
    } else if (info.offset.x > 50) {
      handleTabClick((activeIndex - 1 + reviews.length) % reviews.length); // Move Backward
    }
  };

  const processName = (name) => {
    if (name.split(" ").length === 1) return name;
    const updName = name.split(" ")[0] + " " + name.split(" ")[1].charAt(0) + ".";
    return updName; 
  }

  return (
    <div className="block w-full lg:max-w-[1250px] mx-auto overflow-hidden">
      <motion.div
        className="my-[60px] rounded-[30px] bg-opacity-5 border p-[20px] border-[#323131] text-white shadow-lg backdrop-blur-[20px] bg-[#0F0E0E]/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Tabs for Switching Reviews */}
        <ul className="flex items-center justify-center mb-6 overflow-hidden">
          {reviews.map((review, index) => (
            <li className="flex-1 min-w-[200px] md:min-w-[auto]" key={review._id}>
              <button
                onClick={() => handleTabClick(index)}
                className={`w-full h-[136px] mx-auto p-4 focus:outline-none relative ${
                  index === activeIndex ? "w-[481px] flex items-center mx-auto" : ""
                }`}
              >
                <motion.div
                  layout
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(13,66,145,0.5)] via-[rgba(3,81,153,0.13)] to-[rgba(3,81,153,0.01)] border-t-[4px] border-[#0587FF]"
                ></motion.div>

                <div className="relative mx-auto flex items-center justify-center z-10">
                  <img
                    src={review?.avatarURL}
                    alt={review?.fullName}
                    className="w-[60px] h-[60px] rounded-full mr-[24px]"
                  />
                  <div className="text-left">
                    <h3 className="text-[20px] md:text-[24px] font-Montserrat font-bold">{processName(review?.fullName)}</h3>
                    <p className="text-[16px] md:text-[19.2px] font-Montserrat text-[#5A5A5A]">{review?.role}</p>
                  </div>
                  {index === activeIndex && (
                    <FaStar className="mx-auto ml-[40px] text-[24px] md:text-[31.2px] text-blue-500" />
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Review Slide Content with Smooth Transitions */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="rounded-b-lg text-center w-[1114px] mx-auto items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[activeIndex]?._id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ opacity: 0, x: -50, transition: { duration: 0.6, ease: "easeInOut" } }}
            >
              <h2 className="text-[50px] font-Montserrat font-bold mb-[65px]">
                {reviews[activeIndex]?.title}
              </h2>
              <p className="text-gray-300 text-[24px] font-normal font-Montserrat">
                {reviews[activeIndex]?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots Indicator for Navigation */}
        <div className="flex justify-center items-center mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`inline-block w-[17.28px] h-[17.28px] mx-[13px] my-[48px] rounded-full focus:outline-none ${
                activeIndex === index ? "bg-[#0587FF]" : "bg-[#0587FF]/20"
              }`}
            ></button>
          ))}
        </div>
      </motion.div>
      <DashboardHero />
    </div>
  );
};

export default ClientsReview;

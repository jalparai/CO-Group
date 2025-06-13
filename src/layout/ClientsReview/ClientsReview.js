import { useEffect, useState ,useRef } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import user from "../../assets/ClientsReview/user.webp";
import DashboardHero from "../DashboardHero/DashboardHero";
import { apiclient } from "../../apiConfig/apiConfig"
import { BokDemoCall } from "../../components/Banners/BokDemoCall";


const fetchReviews = async () => {
  const res = await apiclient.get("/reviews");
  return res.data.data;
}

const ClientsReview = ({data}) => {
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
    console.log("hello ", updName);
    return updName; 
  }
  const activeTabRef = useRef(null);

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest", // Ensures it doesn't move unnecessarily
      });
    }
  }, [activeIndex]);
  
  return (
    <div className="block lg:w-[1250px] w-[95%]  mx-auto overflow-hidden">
      <motion.div
        className="my-[60px] rounded-[30px] bg-opacity-5 border border-[#323131] text-white shadow-lg backdrop-blur-[20px] bg-[#0F0E0E]/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Tabs for Switching Reviews */}
        <ul className="flex items-center justify-start lg:justify-center mb-6 overflow-x-auto scrollbar-hide snap-x">
        {reviews.map((review, index) => (
      <li className="flex-1 lg:min-w-[auto] min-w-[100%]" key={review._id}>

<button
  ref={index === activeIndex ? activeTabRef : null}
  onClick={() => handleTabClick(index)}
  className={`w-full h-[136px] mx-auto p-4 focus:outline-none relative ${
    index === activeIndex ? " w-full flex items-center" : ""
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
                    <h3 className="lg:text-[24px] text-[20px] font-Montserrat font-bold">{processName(review?.fullName)}</h3>
                    <p className="lg:text-[19.2px] text-[16px] font-Montserrat text-[#5A5A5A]">{review?.role}</p>
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
          className="rounded-b-lg text-center w-auto lg:w-[1114px] mx-auto items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[activeIndex]?._id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ opacity: 0, x: -50, transition: { duration: 0.6, ease: "easeInOut" } }}
            >
              <h2 className="lg:text-[50px] text-[20px] font-Montserrat font-bold mb-[10px] lg:mb-[65px]">
                {reviews[activeIndex]?.title}
              </h2>
              <p className="text-gray-300 text-[16px] lg:text-[24px] font-normal font-Montserrat">
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
              className={`inline-block w-[17.28px] h-[17.28px] lg:mx-[13px] mx-[5px] my-[48px] rounded-full focus:outline-none ${
                activeIndex === index ? "bg-[#0587FF]" : "bg-[#0587FF]/20"
              }`}
            ></button>
          ))}
        </div>
      </motion.div>
                    <BokDemoCall />

      <DashboardHero data={data}/>
    </div>
  );
};

export default ClientsReview;

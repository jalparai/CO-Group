import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// Assets
import image3 from "../../../../assets/CashOnDelivery/productSlideDashboard/Dashboard copy.webp";
import image4 from "../../../../assets/CashOnDelivery/productSlideDashboard/image.webp";
import image5 from "../../../../assets/CashOnDelivery/productSlideDashboard/image1.webp";

// Animation Variants
const fadeInOut = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },  // Added exit for scroll up
  transition: { duration: 0.8, ease: "easeOut" },
};

// Button Styles
const buttonBaseStyles =
  "text-white font-bold rounded-full inline-flex items-center justify-center transition-colors duration-500";

// Swiper Settings
const swiperSettings = {
  modules: [EffectCoverflow, Autoplay],
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  autoplay: { delay: 1500, disableOnInteraction: false },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1800,
    modifier: 0.5,
    slideShadows: true,
  },
  loop: true,
};

const ProductHero = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center px-1"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      exit="exit"  // Handle scroll back
      variants={fadeInOut}
    >
      {/* Cash On Delivery Button */}
      <motion.div
        className="flex justify-center mt-[85.89px] sm:mt-[95.89px] lg:mt-[124px] mb-[14px] sm:mb-[20px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-white rounded-[30px] font-Montserrat h-[34.56px] w-[161.86px] sm:w-[300px] sm:h-[45px] lg:h-[60px] lg:w-[281px] gap-2 inline-flex items-center justify-center lg:font-bold text-[14.4px] sm:text-[15px] lg:text-[25px] font-bold bg-[#E61D2D] hover:bg-white/20 hover:border-white/5 transition-colors duration-500 cursor-default">
          {data?.title || "Cash On Delivery"}
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="relative text-center text-[28px] sm:text-[52px] lg:text-[70px] font-Montserrat font-bold leading-tight sm:leading-snug lg:leading-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {data?.cardSection?.heading || "Expand Sales Across Europe & Beyond"}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-[14px] sm:mt-[20px] lg:mt-[26px] text-[12.24px] sm:text-[15px] lg:text-[20px] font-light font-Montserrat text-center text-[#E3E3E3] max-w-[300px] sm:max-w-[666px] lg:max-w-[1048px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {data?.cardSection?.description || "COD Power Group propels your business to the forefront of e-commerce"+
        "success. Join us to redefine customer satisfaction, trust, and revenue"+
        "generation in Europe and beyond."}
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-row justify-center mt-[14px] sm:mt-[30px] lg:mt-[45px] lg:mb-[77px] gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.button
          className={`${buttonBaseStyles} text-[12.29px] sm:text-[16px] lg:text-[20px] font-Montserrat h-[36.86px] w-[148.68px] sm:h-[48px] sm:w-[198px] lg:h-[60px] lg:w-[242px] border`}
          type="button"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => window.open(data?.cardSection?.cards[0].buttons[0]?.url, "_blank")}
        >
          {data?.cardSection?.cards[0].buttons[0]?.text || "Learn More"}
        </motion.button>

        <motion.div
          initial={{ background: "linear-gradient(to right, #53ACFF, #282E6A)" }}
          animate={{
            background: isHovered
              ? "linear-gradient(to right, #282E6A, #53ACFF)"
              : "linear-gradient(to right, #53ACFF, #282E6A)",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="rounded-full items-center"
        >
          <motion.a
            href={data?.cardSection?.cards[0].buttons[1]?.url ||  "https://get-started.codpowergroup.com/registration"}
            target="blank"
            className={`${buttonBaseStyles} text-[12.29px] sm:text-[16px] lg:text-[20px] font-DMSans h-[36.86px] w-[148.68px] sm:h-[48px] sm:w-[198px] lg:h-[60px] lg:w-[242px] gap-2`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {data?.cardSection?.cards[0].buttons[1]?.text || "Get Started Now"}
            <GoArrowUpRight />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Swiper Slider */}
      <motion.div
        className="swiper-container mySwiper w-full h-full mt-[62px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Swiper {...swiperSettings}>
          { data?.cardSection?.cards? data?.cardSection?.cards?.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
            <img
              src={item.image}
              alt={`Dashboard ${index + 1}`}
              style={{ width: "700px", maxWidth: "100%" }}
              className="mx-auto"
              loading="lazy"
            />
          </SwiperSlide>
        ))
          :
          [image3, image4, image5, image3, image4, image5].map(
            (image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Dashboard ${index + 1}`}
                  style={{ width: "700px", maxWidth: "100%" }}
                  className="mx-auto"
                  loading="lazy"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default ProductHero;

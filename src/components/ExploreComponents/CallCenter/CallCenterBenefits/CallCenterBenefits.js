import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import IncreasedAccuracy from "../../../../assets/CallCenter/CallCenterBenefits/IncreasedAccuracy.png";
import EnhancedCustomerSatisfaction from "../../../../assets/CallCenter/CallCenterBenefits/EnhancedCustomerSatisfaction.png";
import ReducedReturns from "../../../../assets/CallCenter/CallCenterBenefits/ReducedReturns.png";
import { Swiper as SwiperClass } from "swiper";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { useInView } from "react-intersection-observer"; // Import the intersection observer hook

const ben = [
  {
    title: "Increased Accuracy",
    description:
      "By confirming orders over the phone, we reduce the chances of errors in the order processing.",
    icon: IncreasedAccuracy,
  },
  {
    title: "Enhanced Customer Satisfaction",
    description:
      "By confirming orders over the phone, we reduce the chances of errors in the order processing.",
    icon: EnhancedCustomerSatisfaction,
  },
  {
    title: "Reduced Returns",
    description:
      "By confirming orders over the phone, we reduce the chances of errors in the order processing.",
    icon: ReducedReturns,
  },
  {
    title: "Increased Accuracy",
    description:
      "By confirming orders over the phone, we reduce the chances of errors in the order processing.",
    icon: IncreasedAccuracy,
  },
  {
    title: "Reduced Returns",
    description:
      "By confirming orders over the phone, we reduce the chances of errors in the order processing.",
    icon: ReducedReturns,
  },
  {
    title: "Enhanced Customer Satisfaction",
    description:
      "By confirming orders over the phone, we reduce the chances of errors in the order processing.",
    icon: EnhancedCustomerSatisfaction,
  },
];

const Card = ({ title, description, icon, isVisible }) => {
  
  return (
    <div
      className={`backdrop-blur-xl bg-[#FFFFFF]/10 w-full mx-auto rounded-[30px] p-[20px] md:p-[27px] swiper-slide flex flex-col justify-center items-center text-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-center items-center w-full h-[100px] md:h-[150px]">
        <img
          src={icon}
          alt={title}
          className="object-contain w-auto h-full mx-auto"
        />
      </div>
      <div>
        <h3 className="text-white font-bold font-Montserrat text-[20px] md:text-[25px] my-[20px] md:my-[30px]">
          {title}
        </h3>
        <p className="text-[#FFFFFF] font-Montserrat text-[16px] md:text-[20px] font-thin">
          {description}
        </p>
      </div>
    </div>
  );
};

const CallCenterBenefits = ({data}) => {
  const [visibleIndex, setVisibleIndex] = useState([0, 1, 2]);
  const [ benefits, setBenefits ] = useState(data?.cardSection?.cards || ben);

  useEffect(() => {
    setBenefits(data?.cardSection?.cards || ben);
  }, [data])

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it's in view
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

  useEffect(() => {
    const swiper = new SwiperClass(".mySwiper", {
      modules: [EffectCoverflow, Autoplay],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 900,
        modifier: 0.5,
        slideShadows: true,
      },
      loop: true,
      breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 4 }, // Mobile
        640: { slidesPerView: 2, spaceBetween: 8 }, // Small screens
        1024: { slidesPerView: 3, spaceBetween: 10 }, // Desktop
      },
      on: {
        slideChange: (swiper) => {
          const currentIndex = swiper.realIndex;
          const nextVisible = [
            currentIndex,
            (currentIndex + 1) % benefits.length,
            (currentIndex + 5) % benefits.length,
          ];
          setVisibleIndex(nextVisible);
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center mt-[71px] lg:mt-[134px] lg:mb-[58px]"
    >
      <div className="flex justify-center mb-[10px] sm:mb-[14px] lg:mb-[18px]">
        <div className="text-[#E61D2D] text-[12px] sm:text-[16px] lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]">
        {data?.title ? data.title :"CALL CENTER BENEFITS"}
        </div>
      </div>
      <div className="relative text-center mb-[44px] sm:mb-[14px] lg:mb-[51px]">
        <motion.h1
          className="whitespace-pre-line text-[24px] sm:text-[32px] md:text-[39px] lg:text-[50px] font-Montserrat font-bold leading-[30px] sm:leading-[40px] lg:leading-[60px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {data?.cardSection?.heading ? data.cardSection?.heading : <>
          Benefits of Using Our Call Center for
          <br /> Order Confirmation</>}
        </motion.h1>
      </div>
      <motion.div
        className="swiper mySwiper w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="swiper-wrapper">
          {benefits.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.image || item.icon}
              isVisible={visibleIndex.includes(index)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CallCenterBenefits;

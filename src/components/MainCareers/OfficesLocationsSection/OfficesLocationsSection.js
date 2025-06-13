import Rectangle from "../../../assets/HelpCenterIcons/PopularTopicsSection/Rectangle.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Locations = [
  {
    photo: Rectangle,
    country: "Dubai",
    address: "P.O. Box",
    ZipCode: "Zip Code",
  },
  {
    photo: Rectangle,
    country: "Morocco",
    address: "P.O. Box",
    ZipCode: "Zip Code",
  },
  {
    photo: Rectangle,
    country: "Luxembourg",
    address: "P.O. Box",
    ZipCode: "Zip Code",
  },
];

// Animation Variants
const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OfficesLocationsSection = ({data}) => {
  useEffect(() => {},[data])
  // Hook for heading animation on scroll
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  const cardControls = useAnimation();
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (cardInView) {
      cardControls.start("visible");
    }
  }, [cardControls, cardInView]);

  return (
    <div className="relative flex flex-col items-center mt-20 px-4 lg:px-10">
      {/* Animated Heading on Scroll */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInDown}
        className="text-center"
      >
        <h1 className="text-[35px] sm:text-[52px] lg:text-[70px] font-Montserrat font-bold leading-tight sm:leading-snug lg:leading-none">
          {data?.cardSection?.heading || "Need Help?"}
        </h1>
      </motion.div>

      <p className="mt-4 sm:mt-6 lg:mt-8 text-[10.24px] sm:text-[15px] lg:text-[20px] font-light font-Montserrat text-center text-[#E3E3E3] max-w-[316px] sm:max-w-[666px] lg:max-w-[1048px]">
        {data?.cardSection?.description || "If you need assistance or have any questions, please don't hesitate to"+
        "reach out to our support team. We're here to help you every step of the"+
        "way."}
      </p>

      {/* Animated Cards on Scroll */}
      <div className="relative my-16 w-full max-w-[1307px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {data?.cardSection?.cards?.map((Location, index) => {

            return (
              <motion.div
                ref={cardRef}
                key={index}
                initial="hidden"
                animate={cardControls}
                variants={fadeInUp}
                className="flex flex-col items-center bg-[#121212] rounded-[30px] py-4 px-4"
              >
                <img
                  src={Location.image}
                  alt="Rectangle"
                  className="lg:w-[406px] h-auto"
                />
                <p className="text-[24px] lg:text-[30px] font-Montserrat font-bold mt-6 text-center">
                  {Location.title}
                </p>
                <p className="text-[20px] lg:text-[25px] text-center font-Montserrat text-[#606060] w-full max-w-[237px] mt-4">
                  {Location.subtitle}
                  <br />
                  {Location.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfficesLocationsSection;

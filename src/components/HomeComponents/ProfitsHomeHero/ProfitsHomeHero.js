import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import profits from "../../../assets/ProfitsHomeHero/profits.webp";
import columnChart from "../../../assets/ProfitsHomeHero/columnChart.webp";
import lineGraph from "../../../assets/ProfitsHomeHero/lineGraph.webp";
import "./ProfitsHomeHero.css";
import { useAnimation } from "framer-motion";

const ProfitsHomeHero = ({data}) => {
  const [scrolls, setScrolls] = useState(0);
  const [scrollBlocked, setScrollBlocked] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(-1);
  const [inView, setInView] = useState(false);
  const [selectedButton, setSelectedButton] = useState(data?.cardSection?.cards[0].title);
  const [enableAnimation, setEnableAnimation] = useState(false);
  useEffect(() => {
    if (data?.cardSection?.cards?.length > 0) {
      setSelectedButton(data.cardSection.cards[0].title);
    }
  }, [data]);
  const controls = useAnimation();
  const heroRef = useRef(null);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls, selectedButton]); // Trigger animation on button change

  const renderContent = () => {
    return (
      <div className="text-left">
        {data && data?.cardSection?.cards && data.cardSection.cards.map((card, index) => (
          selectedButton === card.title && (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="whitespace-pre-line leading-[32px] sm:leading-[41px] lg:leading-[50px] w-[343.6px] sm:w-[479.3px] lg:w-[615px] mx-auto text-[32px] sm:text-[41px] lg:text-[50px] font-bold font-Montserrat mb-[31px] sm:mb-[36.5px] lg:mb-[42px]"
            >
              {card.subtitle}
            </motion.h3>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="whitespace-pre-line text-[12.8px] sm:text-[16.4px] lg:text-[20px] w-[337.36px] sm:w-[455.68px] lg:w-[574px] mx-auto lg:mx-0 font-Montserrat leading-[19.2px] sm:leading-[24.6px] lg:leading-[30px] text-[#A5A5A5] mb-[31px] sm:mb-[42px] lg:mb-[53px]"
            >
              {card.description}
            </motion.p>
            <a
              href={card?.buttons[0]?.url || "https://get-started.codpowergroup.com/registration"}
              className="text-[#0587FF] font-bold font-Montserrat text-[15.36px] sm:text-[19.68px] lg:text-[24px] py-2 md:mx-0 flex items-center justify-start"
            >
              {card?.buttons[0]?.text || "Get Started"}
              <GoArrowUpRight className="ml-1" />
            </a>
          </motion.div>
          )
        ))}


        {/* {selectedButton === "Seller" && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="leading-[32px] sm:leading-[41px] lg:leading-[50px] w-[343.6px] sm:w-[479.3px] lg:w-[615px] mx-auto text-[32px] sm:text-[41px] lg:text-[50px] font-bold font-Montserrat mb-[31px] sm:mb-[36.5px] lg:mb-[42px]"
            >
              COD POWER GROUP Seller Model
            </motion.h3>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="text-[12.8px] sm:text-[16.4px] lg:text-[20px] w-[337.36px] sm:w-[455.68px] lg:w-[574px] mx-auto lg:mx-0 font-Montserrat leading-[19.2px] sm:leading-[24.6px] lg:leading-[30px] text-[#A5A5A5] mb-[31px] sm:mb-[42px] lg:mb-[53px]"
            >
              Start selling your products in multiple European countries with
              our services.
            </motion.p>
            <a
              href="https://get-started.codpowergroup.com/registration"
              className="text-[#0587FF] font-bold font-Montserrat text-[15.36px] sm:text-[19.68px] lg:text-[24px] py-2 md:mx-0 flex items-center justify-start"
            >
              Get Started 
              <GoArrowUpRight className="ml-1" />
            </a>
          </motion.div>
        )}
        {selectedButton === "Affiliate" && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="leading-[32px] sm:leading-[41px] lg:leading-[50px] w-[343.6px] sm:w-[479.3px] lg:w-[615px] mx-auto text-[32px] sm:text-[41px] lg:text-[50px] font-bold font-Montserrat mb-[31px] sm:mb-[36.5px] lg:mb-[42px]"
            >
              Affiliate Program <br />
              Earn with Us
            </motion.h3>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="text-[12.8px] sm:text-[16.4px] lg:text-[20px] w-[337.36px] sm:w-[455.68px] lg:w-[574px] mx-auto lg:mx-0 font-Montserrat leading-[19.2px] sm:leading-[24.6px] lg:leading-[30px] text-[#A5A5A5] mb-[31px] sm:mb-[42px] lg:mb-[53px]"
            >
              Join our affiliate program and earn commissions by promoting our
              services.
            </motion.p>
            <a href="https://get-started.codpowergroup.com/registration" className="text-[#0587FF] font-bold font-Montserrat text-[15.36px] sm:text-[19.68px] lg:text-[24px] py-2 md:mx-0 flex items-center justify-start">
              Get Started <GoArrowUpRight className="ml-1" />
            </a>
          </motion.div>
        )}
        {selectedButton === "Customize" && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="leading-[32px] sm:leading-[41px] lg:leading-[50px] w-[343.6px] sm:w-[479.3px] lg:w-[615px] mx-auto text-[32px] sm:text-[41px] lg:text-[50px] font-bold font-Montserrat mb-[31px] sm:mb-[36.5px] lg:mb-[42px]"
            >
              Customization Options <br />
              Tailored Solutions
            </motion.h3>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="text-[12.8px] sm:text-[16.4px] lg:text-[20px] w-[337.36px] sm:w-[455.68px] lg:w-[574px] mx-auto lg:mx-0 font-Montserrat leading-[19.2px] sm:leading-[24.6px] lg:leading-[30px] text-[#A5A5A5] mb-[31px] sm:mb-[42px] lg:mb-[53px]"
            >
              Customize our services to fit your business needs and stand out in
              the market.
            </motion.p>
            <a href="https://get-started.codpowergroup.com/registration" className="text-[#0587FF] font-bold font-Montserrat text-[15.36px] sm:text-[19.68px] lg:text-[24px] py-2 md:mx-0 flex items-center justify-start">
              Get Started <GoArrowUpRight className="ml-1" />
            </a>
          </motion.div>
        )} */}
      </div>
    );
  };

  return (
    <div
      ref={heroRef}
      className="mt-[92px] lg:mt-20 px-4 lg:pr-20 relative sm:w-[624px] lg:w-[1248px] sm:mx-auto z-40"
    >
      <div className="flex flex-wrap justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Profits Image */}
        <motion.div
          className="relative p-4 sm:p-6 lg:p-8 w-full lg:w-[45%] flex justify-center will-change-transform"
          initial={enableAnimation ? { y: 50, rotateX: 0 } : {}}
          whileInView={enableAnimation ? { y: 0, rotateX: 15 } : {}}
          transition={enableAnimation ? { type: "spring", stiffness: 100 } : {}}
        >
          <img
            src={data?.cardSection?.image}
            alt="profits"
            className="relative w-[297.6px] sm:w-[381.3px] lg:w-[465px] z-10"
            loading="lazy"
          />

          {/* Column Chart */}
          <div
            className="absolute top-0 sm:top-5 lg:top-10 right-0 sm:-right-0 lg:-right-14 w-[182.94px] sm:w-[234.39px] lg:w-[285.84px] z-20 will-change-transform"
            initial={
              enableAnimation && window.innerWidth >= 768
                ? { y: 50, rotateX: 0, opacity: 0 }
                : {}
            }
            animate={
              enableAnimation && window.innerWidth >= 768
                ? { y: 0, rotateX: 15, opacity: 1 }
                : {}
            }
            transition={
              enableAnimation && window.innerWidth >= 768
                ? { type: "spring", stiffness: 100, delay: 0.2 }
                : {}
            }
          >
            <img src={columnChart} alt="Column Chart" loading="lazy" />
          </div>

          {/* Line Graph */}
          <div className="absolute bottom-40 md:top-60 lg:bottom-44 right-0 lg:-right-14 w-[148.48px] sm:w-[190.24px] lg:w-[232px] z-20 will-change-transform">
            <img src={lineGraph} alt="Line Graph" loading="lazy" />
          </div>

          {/* Scroll Bar with Numbers */}
          <div
            className={
              enableAnimation
                ? `absolute top-1/2 left-4 sm:left-0 lg:left-[0px] transform -translate-y-1/2 z-20 bg-gray-300 slide-style`
                : `hidden`
            }
            style={{
              width: "6px",
              height: window.innerWidth >= 1124 ? "488px" : "388px",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              className="bg-blue-500 transition-all duration-300 will-change-transform"
              style={{
                height: `${scrollPercentage}%`,
                width: "100%",
                bottom: 0,
              }}
            />
          </div>

          {/* Dynamic Numbers */}
          <div
            className={
              enableAnimation
                ? "absolute top-10 lg:top-5 left-5 sm:left-1 lg:left-[3px] huge:left-[5px] transform -translate-x-1 z-30 text-white text-sm"
                : "hidden"
            }
          >
            0
          </div>
          <div
            className={
              enableAnimation
                ? "absolute bottom-10 lg:bottom-5 left-5 sm:left-1 lg:left-[3px] huge:left-[5px] transform -translate-x-1/2 z-30 text-white text-sm"
                : "hidden"
            }
          >
            {scrolls + 1}
          </div>
        </motion.div>

        {/* Text Section */}
        <div className="pt-8 w-full sm:w-[72.5%] lg:w-[45%] text-white z-40">
          <div className="flex flex-col items-center sm:items-start lg:items-start">
            <div className="flex space-x-[17px] w-[363.6px] sm:[693.3px] lg:w-auto mb-[31px] sm:mb-[42px] lg:mb-[53px] mt-5">
              {
                data && data?.cardSection?.cards && data.cardSection.cards.map((card, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedButton(card.title)}
                    className={`font-semibold font-Montserrat text-[10.24px] sm:text-[13.12px] lg:text-[16px] rounded-[30px] w-[92.8px] h-[35.04px] sm:w-[118.9px] sm:h-[44.52px] lg:w-[145px] lg:h-[54px] gap-2 inline-flex items-center justify-center
                      ${
                        selectedButton === card.title
                          ? "bg-[#0052B4] text-[#0587FF] bg-opacity-20"
                          : "bg-[#151515] text-[#7C7C7C]"
                      }
                      hover:bg-[#0052B4]/50 transition-all duration-700`}
                      >{card.title}</button>
                    ))
              }
              {/* <button
                onClick={() => setSelectedButton("Seller")}
                className={`font-semibold font-Montserrat text-[10.24px] sm:text-[13.12px] lg:text-[16px] rounded-[30px] w-[92.8px] h-[35.04px] sm:w-[118.9px] sm:h-[44.52px] lg:w-[145px] lg:h-[54px] gap-2 inline-flex items-center justify-center
                  ${
                    selectedButton === "Seller"
                      ? "bg-[#0052B4] text-[#0587FF] bg-opacity-20"
                      : "bg-[#151515] text-[#7C7C7C]"
                  }
                  hover:bg-[#0052B4]/50 transition-all duration-700`}
              >
                Seller
              </button>
              <button
                onClick={() => setSelectedButton("Affiliate")}
                className={`font-semibold font-Montserrat text-[10.24px] sm:text-[13.12px] lg:text-[16px] rounded-[30px] w-[92.8px] h-[35.04px] sm:w-[118.9px] sm:h-[44.52px] lg:w-[145px] lg:h-[54px] gap-2 inline-flex items-center justify-center
                  ${
                    selectedButton === "Affiliate"
                      ? "bg-[#0052B4] text-[#0587FF] bg-opacity-20"
                      : "bg-[#151515] text-[#7C7C7C]"
                  }
                  hover:bg-[#0052B4]/50 transition-all duration-700`}
              >
                Affiliate
              </button>
              <button
                onClick={() => setSelectedButton("Customize")}
                className={`font-semibold font-Montserrat text-[10.24px] sm:text-[13.12px] lg:text-[16px] rounded-[30px] w-[92.8px] h-[35.04px] sm:w-[118.9px] sm:h-[44.52px] lg:w-[145px] lg:h-[54px] gap-2 inline-flex items-center justify-center
                  ${
                    selectedButton === "Customize"
                      ? "bg-[#0052B4] text-[#0587FF] bg-opacity-20"
                      : "bg-[#151515] text-[#7C7C7C]"
                  }
                  hover:bg-[#0052B4]/50 transition-all duration-700`}
              >
                Customize
              </button> */}
            </div>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitsHomeHero;
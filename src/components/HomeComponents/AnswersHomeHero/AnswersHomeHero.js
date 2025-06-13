import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import truck from "../../../assets/AnswersHomeHero/truck.webp";
import "./AnswersHomeHero.css";
import Bg from "../../../assets/Dashboard/spher2.svg";

const AnswersHomeHero = ({ data }) => {
  const [activeButton, setActiveButton] = useState(1);
  const [isHoveredPhoto, setIsHoveredPhoto] = useState(false);
  const getTranslateX = () => {
    return `${(activeButton - 1) * 100}%`;
  };

  const renderContent = () => {
    return (
      data &&
      data?.cardSection &&
      data.cardSection.cards.map(
        (button, index) =>
          index + 1 === activeButton && (
            <>
              <h1 className="whitespace-pre-line text-[25.92px] lg:text-[45px] font-Montserrat font-bold tracking-tight leading-tight mb-[20.47px] lg:mb-[36px]">
                {button.subtitle}
              </h1>
              <p className="whitespace-pre-line text-base text-[10.37px] lg:text-[18px] font-Montserrat w-full lg:w-[590.88px] leading-[17.3px] lg:leading-[30px] text-[#5D5D5D] mb-[20.47px] lg:mb-[36px]">
                {button.description}
              </p>
            </>
          )
      )
    );
  };

  return (
    <div className="relative flex flex-col items-center mt-[36px] lg:mt-[39px] px-4">
      <img src={Bg} className="absolute w-[100%] z-[-5]" />

      <div className="relative flex flex-col items-center mt-[55.26px] lg:mt-[167px] px-4">
        <div className="relative z-10 flex flex-col items-center">
          {/* Button with Fade-Up Effect */}
          <div className="flex flex-col items-center">
            {/* Button with Scroll Triggered Fade-Up Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex justify-center mb-[28.26px] lg:mb-[39px]"
            >
              <button className="whitespace-pre-line text-[#0587FF] font-normal font-Montserrat text-[12.17px] lg:text-[19.2px] bg-[#0052B4] hover:bg-[#0052B4]/50 transition-all duration-1000 ease-in-out rounded-[36px] w-[130.78px] h-[41.37px] lg:w-[206.4px] lg:h-[65.2px] gap-2 bg-opacity-20 inline-flex justify-center items-center">
                {data && data?.cardSection ? data.title : "Free solutions"}
              </button>
            </motion.div>

            {/* Heading with Scroll Triggered Fade-Up Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="whitespace-pre-line relative text-center w-[387px] lg:w-[auto] mb-[28.26px] lg:mb-[39px]"
            >
              <h1 className="text-[28.8px] lg:text-[50px] font-bold font-Montserrat leading-[34.6px] lg:leading-[60px]">
                {data && data?.cardSection ? (
                  data.cardSection.heading
                ) : (
                  <>
                    Discover, your answers in 3 steps{" "}
                    <br className="hidden lg:block" /> and get It for Free.
                  </>
                )}
              </h1>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center w-[405px] lg:w-auto mt-[39px] mb-[139.8px] border border-[#132A45] py-[6px] px-[6px] lg:py-[14.5px] lg:px-[17.5px] rounded-[100px] z-10">
            <div className="relative w-[390.54px] lg:w-[678px] h-[36.29px] lg:h-[63px] rounded-[30px] overflow-hidden">
              {/* Sliding background */}
              <div
                className="absolute top-0 left-0 h-full w-[33.33%] rounded-[30px]  transition-transform duration-500 bg-opacity-20 ease-in-out"
                style={{
                  transform: `translateX(${getTranslateX()})`,
                }}
              >
                {/* Gradient border for the sliding element */}
                <div className="absolute inset-0 w-[130.18px] h-[36.29px] lg:w-[226px] lg:h-[63px] rounded-[30px] bg-[#0587FF]/20 border-[1.5px] border-transparent bg-clip-padding button-gradient-border" />
              </div>

              {/* Buttons */}

              {data &&
                data?.cardSection &&
                data.cardSection.cards.map((button, index) => {
                  // Calculate left position properly
                  const leftPosition = `${index * 33.33}%`;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveButton(index + 1)}
                      style={{ left: leftPosition }}
                      className={`absolute top-0 w-[33.33%] h-full text-[11.23px] lg:text-[19.5px] font-Montserrat z-10 transition-colors duration-700 flex items-center justify-center
                      ${
                        activeButton === index + 1
                          ? "text-[#0587FF] font-medium"
                          : "text-[#B0B0B0]"
                      }`}
                    >
                      {button.title}
                    </button>
                  );
                })}
            </div>
          </div>

          <div className="relative w-[400px] lg:w-[1230px] huge:w-[1300px] flex flex-col lg:flex-row lg:max-w-screen-lg mx-auto border rounded-[30px] border-[#132A45] overflow-hidden">
            {/* Text Section */}
            <div className="lg:w-[613.5px] h-[354px] lg:h-[522px] px-[23.31px] lg:px-[71px] py-[36.76px] lg:py-[82px]">
              {renderContent()}
              <a
                target="_blank"
                href={
                  data?.cardSection?.buttons[0]?.url ||
                  data?.cardSection?.cards[0]?.buttons[0]?.url ||
                  "https://get-started.codpowergroup.com/registration"
                }
                className="text-[#0587FF] font-bold text-[13.82px] lg:text-[24px] font-Montserrat flex items-center"
              >
                {data?.cardSection?.buttons[0]?.text ||
                  `Get Started`} <GoArrowUpRight className="ml-1" />
              </a>
            </div>
            {/* Image Section */}
            <div
              onMouseEnter={() => setIsHoveredPhoto(true)}
              onMouseLeave={() => setIsHoveredPhoto(false)}
              className="relative lg:flex-1"
            >
              <motion.img
                src={
                  (data && data?.cardSection?.cards[activeButton - 1]?.image) ||
                  truck
                }
                alt="truck"
                className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[536px] h-auto lg:h-[440px] rounded-br-[30px] rounded-tl-[30px] ml-auto"
                style={{ right: 0 }}
                initial={{ x: "50%", y: "50%" }} // Start with 50% of the image hidden outside the right border
                animate={{
                  x: isHoveredPhoto ? "0%" : "15%", // Slide the image in and stop with 50% hidden on the left border
                  y: isHoveredPhoto ? "0%" : "15%", // Slide the image in and stop with 50% hidden on the left border
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswersHomeHero;

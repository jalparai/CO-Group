import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import worker from "../../../assets/AnswersHomeHero_2/worker.webp";
import earth from "../../../assets/AnswersHomeHero_2/earth.webp";
import "./AnswersHomeHero_2.css";

const AnswersHomeHero_2 = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation controls
  const sectionControls = useAnimation();
  const imageControls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      sectionControls.start({ opacity: 1, y: 0 });
      imageControls.start({ opacity: 1, y: 0 });
    } else {
      sectionControls.start({ opacity: 0, y: 50 });
      imageControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, sectionControls, imageControls]);

  const background = {
    background:
      "linear-gradient(180deg, rgba(27, 91, 150, 0.3) 0%, rgba(5, 135, 255, 0.03) 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={sectionControls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center mt-[36px] lg:mt-[39px] px-4"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center">
        <div
          style={background}
          className="relative flex flex-col lg:flex-row items-center w-[400px] lg:w-auto huge:w-[1496px] px-[26px] py-[45.5px] huge:px-[113px] huge:py-[118.5px] lg:px-[52.5px] lg:py-[54.5px] rounded-[30px] gradient-border"
        >
          <div className="flex-1 flex justify-center lg:justify-start">
            <div>
              <h1 className="whitespace-pre-line  mb-[30.72px] lg:mb-[48px] text-[32px] lg:text-[50px] font-Montserrat font-bold tracking-normal leading-[38.4px] lg:leading-[60px] dark:text-white">
                {data && data?.generalSection ? data?.generalSection?.heading : <>
                  How
                <br />
                It Works ?
                </> }
                
              </h1>
              <p className="whitespace-pre-line w-[348px] lg:w-[577px] mb-[30.72px] lg:mb-[48px] text-[14px] lg:text-[18px] font-normal font-Montserrat leading-[19.2px] lg:leading-[30px] text-[#5D5D5D]">
                  { data && data?.generalSection ? data?.generalSection?.description : <>
                      
                COD Power Group simplifies cash on delivery (COD) operations for
                international e-commerce businesses.
                <br />
                <br />
                Our platform provides seamless payment processing, while our
                comprehensive suite of services handles sourcing, clearance,
                warehousing, and shipping.
                <br />
                <br />
                By streamlining these logistics, we empower businesses to focus
                on growth and customer satisfaction.
                  </>
                  }

              </p>
              <motion.div
                initial={{
                  background: "linear-gradient(to right, #53ACFF, #282E6A)",
                }}
                animate={{
                  background: isHovered
                    ? "linear-gradient(to right, #282E6A, #53ACFF)"
                    : "linear-gradient(to right, #53ACFF, #282E6A)",
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="rounded-full inline-flex items-center justify-center mt-8"
              >
                <a
                  href={data?.generalSection?.url || "https://get-started.codpowergroup.com/registration"}
                  target="blank"
                  className="text-white text-[12.8px] lg:text-[20px] font-medium font-Montserrat rounded-[30px] w-[130.56px] h-[38.4px] lg:w-[204px] lg:h-[60px] flex justify-center items-center gap-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {data?.generalSection?.text || "Get Started"}
                  <GoArrowUpRight className="ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={imageControls}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center items-center lg:justify-end"
          >
            <img
              src={data && data?.generalSection ? data?.generalSection?.image : worker}
              alt="worker"
              className="w-[387px] h-[288.55px] lg:w-[632.87px] lg:h-[598.29px] mt-[37.76px] object-cover"
            />
            <img
              src={earth}
              alt="earth"
              className="absolute top-0 md:left-44 lg:left-28 w-[213.86px] md:w-1/2 lg:w-2/3 h-auto transform translate-x-[40%] translate-y-[-15%]"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnswersHomeHero_2;

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Sourcing from "../../../../assets/SourcingHeroImg/Sourcing.png";
import Frame from "../../../../assets/SourcingHeroImg/Frame.png";
import box from "../../../../assets/SourcingHeroImg/box-times.svg";
import Bg from "../../../../assets/Dashboard/sphear-5.svg"

const ExploreSourcingHero = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  useEffect(() => {}, [data]);

  // Animation variants
  const fadeInTopToBottom = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      exit="exit"
      variants={fadeInTopToBottom}
      className="relative flex flex-col items-center mt-[0px] md:mt-[100px] lg:mt-[140px] px-4 md:px-6"
    >
      <img src={Bg} className="absolute w-[100%] top-0"/>
      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[500px] -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center"
        variants={fadeInTopToBottom}
      >
        <div className="relative flex flex-col md:flex-row items-center space-x-6 max-w-full md:max-w-none w-full px-6 md:px-[24px] lg:px-[42.5px] py-8 md:py-[36px] lg:py-[54.5px] rounded-[30px]">
          <motion.div
            className="flex-1 flex justify-center md:justify-start"
            variants={fadeInTopToBottom}
          >
            <div>
              <motion.div className="rounded-full inline-flex items-center justify-center mt-6 md:mt-8">
                <button
                  className="whitespace-pre-line text-white text-[10px] md:text-[14px] lg:text-[16px] font-medium font-Montserrat rounded-[30px] px-[10px] py-[13px] md:px-[14px] md:py-[18px] lg:px-[17px] lg:py-[21px] flex justify-center items-center gap-2"
                  type="button"
                  aria-label="Explore Solutions / Sourcing"
                >
                  <img
                    src={box}
                    alt="box"
                    className="w-[19.2px] md:w-[25px] lg:w-[30.2px] h-[19.2px] md:h-[25px] lg:h-[30.2px]"
                  />
                  {data?.title? data.title:"Solutions / Sourcing"}
                </button>
              </motion.div>
              <motion.h1
                className="whitespace-pre-line mt-6 mb-4 md:mb-3 md:my-4 lg:my-6 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-Montserrat font-bold tracking-normal leading-[1.2] dark:text-white text-left"
                variants={fadeInTopToBottom}
              >
                {data?.generalSection?.heading? data.generalSection.heading : 
                
                <>
                Your sourcing,
                <br />
                <span className="text-[#979797]">Our responsibility</span>
                </>
          }
              </motion.h1>
              <motion.p
                className="whitespace-pre-line max-w-full sm:max-w-[348px] md:max-w-[450px] lg:max-w-[577px] mb-6 md:mb-[28px] lg:mb-[34px] text-[14px] md:text-[16px] lg:text-[18px] font-normal font-Montserrat leading-[1.5] text-[#5D5D5D] text-left"
                variants={fadeInTopToBottom}
              >
                {data?.generalSection?.description? data.generalSection.description
                :"COD Power Group's sourcing agents, together with our experience"+
                "in Asian countries, give our company a definite legitimacy when"+
                "it comes to sourcing. Over the years, we have forged strong"+
                "links with trusted suppliers, building up a solid network of"+
                "partners. Our aim is to develop a product that meets your"+
                "expectations and to provide you with a tailor-made service."}
              </motion.p>
              <motion.a
                href="https://get-started.codpowergroup.com/registration"
                target="blank"
                className="text-lg md:text-[20px] lg:text-[25px] font-Montserrat font-bold text-[#0587FF] text-left"
                variants={fadeInTopToBottom}
                aria-label="Get Started Now"
              >
                {data?.generalSection?.buttons[0]?.text || "Get Started Now"}
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="relative flex justify-center items-center md:justify-center lg:justify-end before:absolute before:-right-10 before:left-5 before:top-10 before:-bottom-10 before:inset-1 before:bg-[#121624] before:blur-[25px] shadow-xl before:-z-10"
            variants={fadeInTopToBottom}
          >
            <img
              src={data?.generalSection?.image? data?.generalSection?.image: Sourcing}
              alt="worker"
              className="w-[300px] sm:w-[400px] md:w-[350px] lg:w-[540px] huge:w-[608px] mt-8 lg:mt-0 object-cover"
            />
            <img
              src={Frame}
              alt="earth"
              className="absolute top-1/2 sm:left-28 md:left-16 lg:-left-1 w-[210px] sm:w-[260px] md:w-[260px] lg:w-[458px] h-auto transform translate-x-[40%] translate-y-[-15%]"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExploreSourcingHero;

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import countries from "../../assets/Dashboard/map.svg";
import france from "../../assets/CoutriesHomeSection/france.svg";
import Spain from "../../assets/CoutriesHomeSection/Spain.svg";
import Italy from "../../assets/CoutriesHomeSection/Italy.svg";
import Portugal from "../../assets/CoutriesHomeSection/Portugal.svg";
import Luxembourg from "../../assets/CoutriesHomeSection/Luxembourg.svg";
import Belgium from "../../assets/CoutriesHomeSection/Belgium.svg";
import Kuwait from "../../assets/CoutriesHomeSection/Kuwait.svg";
import Bahrain from "../../assets/CoutriesHomeSection/Bahrain.svg";
import Qatar from "../../assets/CoutriesHomeSection/Qatar.svg";
import Emirates from "../../assets/CoutriesHomeSection/Emirates.svg";
import Oman from "../../assets/CoutriesHomeSection/Oman.svg";
import SaudiArabia from "../../assets/CoutriesHomeSection/SaudiArabia.svg";
import Hungary from "../../assets/CoutriesHomeSection/Hungary.svg";
import Romania from "../../assets/CoutriesHomeSection/Romania.svg";
import Poland from "../../assets/CoutriesHomeSection/Poland.svg";
import India from "../../assets/CoutriesHomeSection/India.svg";
import Thailand from "../../assets/CoutriesHomeSection/Thailand.svg";
import Malysia from "../../assets/CoutriesHomeSection/Malysia.svg";
import Philippines from "../../assets/CoutriesHomeSection/Philippines.svg";
import Bg from "../../assets/Dashboard/Spear.svg"

const CoutriesHomeSection = ({data}) => {
  console.log("Countries Home Section");
  console.log(data);
  // Controls for the animation
  const controls = useAnimation();
 
  // Ref to track when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once when in view
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  // Start the animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger effect by index
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative flex flex-col items-center" ref={ref}>
            <img src={Bg} className="absolute w-[100%] z-[-5]"/>

      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-black/90 blur-[150px] -z-10 bg-black"
        style={{
          // backgroundImage:
          //   "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
          backgroundBlendMode: "overlay",
          
        }}
      ></div>
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 h-[1608.87px] w-[1716px] sm:bg-none"
          style={{
            background:
              "-webkit-radial-gradient(circle at 50% 50%, #D9D9D9 0%, #297FFF 22%, #BF38FF 52%, #CF68FF 74%, #28CBFF 100%, #E1A1FF 100%)",
            opacity: "0.15",
            filter: "blur(80px)",
            WebkitFilter: "blur(80px)",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className=" relative">
        {/* Image */}
        <img
          className="h-[793.16px] lg:h-[1608.87px] lg:w-[1716px] -bottom-20 md:-bottom-0 lg:relative z-10 object-cover object-left"
          src={countries}
          alt="Countries Background"
        />

        <motion.button
          custom={0}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[51.77%] left-[38%] sm:bottom-[51.77%] sm:left-[25%] md:bottom-[51.77%] md:left-[19%] lg:bottom-[51.77%] lg:left-[23.6%] huge:bottom-[51.77%] huge:left-[19.1%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={france}
            alt="france"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          France
        </motion.button>
        {/* Spain */}
        <motion.button
          custom={1}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[48.9%] left-[24.8%] sm:bottom-[48.9%] sm:left-[15.8%] md:bottom-[48.9%] md:left-[11.8%] lg:bottom-[48.9%] lg:left-[14.8%] huge:bottom-[48.9%] huge:left-[12.2%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Spain}
            alt="Spain"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Spain
        </motion.button>
        {/* Italy */}
        <motion.button
          custom={2}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[48.1%] left-[46.6%] sm:bottom-[48.1%] sm:left-[29.6%] md:bottom-[48.1%] md:left-[22.3%] lg:bottom-[48.1%] lg:left-[28.3%] huge:bottom-[48.1%] huge:left-[23%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Italy}
            alt="Italy"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Italy
        </motion.button>
        {/* Portugal */}
        <motion.button
          custom={3}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[44.8%] left-[18%] sm:bottom-[44.8%] sm:left-[11%] md:bottom-[44.8%] md:left-[8.2%] lg:bottom-[44.8%] lg:left-[10.2%] huge:bottom-[44.8%] huge:left-[8.2%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Portugal}
            alt="Portugal"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Portugal
        </motion.button>
        {/* Luxembourg */}
        <motion.button
          custom={4}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[54.4%] left-[53.2%] sm:bottom-[54.4%] sm:left-[35.2%] md:bottom-[54.4%] md:left-[25.2%] lg:bottom-[54.4%] lg:left-[32.2%] huge:bottom-[54.4%] huge:left-[26.1%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Luxembourg}
            alt="Luxembourg"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Luxembourg
        </motion.button>
        {/* Belgium */}
        <motion.button
          custom={5}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[57.6%] left-[44.4%] sm:bottom-[57.6%] sm:left-[28.4%] md:bottom-[57.6%] md:left-[21.1%] lg:bottom-[57.6%] lg:left-[27.1%] huge:bottom-[57.6%] huge:left-[21.9%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Belgium}
            alt="Belgium"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Belgium
        </motion.button>
        {/* Kuwait */}
        <motion.button
          custom={6}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[45.9%] left-[66.9%] sm:bottom-[45.9%] sm:left-[42.9%] md:bottom-[45.9%] md:left-[31.9%] lg:bottom-[45.9%] lg:left-[40.9%] huge:bottom-[45.9%] huge:left-[33.2%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Kuwait}
            alt="Kuwait"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Kuwait
        </motion.button>
        {/* Bahrain */}
        <motion.button
          custom={7}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[42.4%] left-[76.6%] sm:bottom-[42.4%] sm:left-[49.6%] md:bottom-[42.4%] md:left-[37.2%] lg:bottom-[42.4%] lg:left-[47.2%] huge:bottom-[42.4%] huge:left-[38.2%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Bahrain}
            alt="Bahrain"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Bahrain
        </motion.button>
        {/* Qatar */}
        <motion.button
          custom={8}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[39.1%] left-[81.4%] sm:bottom-[39.1%] sm:left-[51.4%] md:bottom-[39.1%] md:left-[38.4%] lg:bottom-[39.1%] lg:left-[49.4%] huge:bottom-[39.1%] huge:left-[40%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Qatar}
            alt="Qatar"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Qatar
        </motion.button>
        {/* Emirates */}
        <motion.button
          custom={9}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[35.9%] left-[82%] sm:bottom-[35.9%] sm:left-[52%] md:bottom-[35.9%] md:left-[39%] lg:bottom-[35.9%] lg:left-[49%] huge:bottom-[35.9%] huge:left-[39.8%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Emirates}
            alt="Emirates"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Emirates
        </motion.button>
        {/* Oman */}
        <motion.button
          custom={10}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[32.7%] left-[75%] sm:bottom-[32.7%] sm:left-[49.0%] md:bottom-[32.7%] md:left-[36.0%] lg:bottom-[32.7%] lg:left-[45.7%] huge:bottom-[32.7%] huge:left-[37.1%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Oman}
            alt="Oman"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Oman
        </motion.button>
        {/* SaudiArabia */}
        <motion.button
          custom={11}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[38.7%] left-[56.4%] sm:bottom-[38.7%] sm:left-[36.4%] md:bottom-[38.7%] md:left-[26.4%] lg:bottom-[38.7%] lg:left-[33.4%] huge:bottom-[38.7%] huge:left-[27.1%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={SaudiArabia}
            alt="SaudiArabia"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Saudi Arabia
        </motion.button>
        {/* Hungary */}
        <motion.button
          custom={12}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[51%] left-[57.0%] sm:bottom-[51%] sm:left-[37.0%] md:bottom-[51%] md:left-[27.0%] lg:bottom-[51%] lg:left-[34.5%] huge:bottom-[51%] huge:left-[28%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Hungary}
            alt="Hungary"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Hungary
        </motion.button>
        {/* Romania */}
        <motion.button
          custom={13}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[52.2%] left-[75.6%] sm:bottom-[52.2%] sm:left-[49.6%] md:bottom-[52.2%] md:left-[36.6%] lg:bottom-[52.2%] lg:left-[46.6%] huge:bottom-[52.2%] huge:left-[38%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Romania}
            alt="Romania"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Romania
        </motion.button>
        {/* Poland */}
        <motion.button
          custom={14}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className=" absolute bottom-[58.6%] left-[69.6%] sm:bottom-[58.6%] sm:left-[45.6%] md:bottom-[58.6%] md:left-[33.6%] lg:bottom-[58.6%] lg:left-[42.6%] huge:bottom-[58.6%] huge:left-[34.6%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Poland}
            alt="Poland"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Poland
        </motion.button>
        {/* India */}
        {/* <motion.button
          custom={15}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className="hidden absolute sm:bottom-[40.3%] sm:left-[65.6%] md:bottom-[40.3%] md:left-[48.6%] lg:bottom-[40.3%] lg:left-[62.1%] huge:bottom-[40.3%] huge:left-[50.4%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat sm:flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={India}
            alt="India"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          India
        </motion.button> */}
        {/* Thailand */}
        {/* <motion.button
          custom={16}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className="hidden  absolute sm:bottom-[31.6%] sm:left-[66.2%] md:bottom-[31.6%] md:left-[66.2%] lg:bottom-[31.6%] lg:left-[84.2%] huge:bottom-[31.6%] huge:left-[68.4%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat md:flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Thailand}
            alt="Thailand"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Thailand
        </motion.button> */}
        {/* Malysia */}
        {/* <motion.button
          custom={17}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className="hidden  absolute sm:bottom-[24.6%] sm:left-[66.8%] md:bottom-[24.6%] md:left-[66.8%] lg:bottom-[24.6%] lg:left-[85.2%] huge:bottom-[24.6%] huge:left-[69.2%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat md:flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Malysia}
            alt="Malysia"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Malysia
        </motion.button> */}
        {/* Philippines */}
        {/* <motion.button
          custom={18}
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className="hidden absolute huge:bottom-[32%] huge:left-[85%] w-auto px-[3.75px] h-[19.03px] text-[8.65px] lg:px-[9.2px] lg:h-[42.24px] lg:text-[19.2px] font-Montserrat huge:flex items-center justify-center rounded-[28.8px] backdrop-blur-[3px] hover:bg-[#FFFFFF]/15 transition-all duration-700 bg-[#FFFFFF]/20 z-10"
        >
          <img
            src={Philippines}
            alt="Philippines"
            className="lg:mr-2 mr-1 lg:h-auto lg:w-auto h-[11.25px] w-[11.25px]"
          />
          Philippines
        </motion.button> */}
      </div>
      {/* Text section */}
      <div className="absolute top-0 w-full flex flex-col items-center z-10 mt-[53px] lg:mt-[120px]">
        {/* Title and button */}
        <div className="flex justify-center mb-[14.64px] lg:mb-[26px]">
          <div className="text-[#0587FF] border-[1px] border-[#373656] rounded-[50px] bg-[#373656] bg-opacity-50 hover:border-[#373656]/0 hover:bg-[#0052B4]/50 transition-all duration-700 text-[11.26px] lg:text-[20px] tracking-[3px] lg:tracking-[5px] font-medium font-Montserrat w-[227.53px] h-[33.79px] lg:w-[404px] lg:h-[60px] gap-2 inline-flex justify-center items-center cursor-pointer">
            { data ? data?.title:"COUNTRIES COVERED"}
          </div>
        </div>

        {/* Main Title */}
        <div className="relative text-center">
          <h1 className="whitespace-pre-line text-[28.16px] lg:text-[50px] font-bold font-Montserrat leading-[33.8px] lg:leading-[60px]">
            {
              data && data?.generalSection?.heading ? data?.generalSection?.heading : 
              <>
              All Countries covered
              <br /> for your payment method. 
              </>
            }
        
          </h1>
        </div>

        {/* Description */}
        <p className="whitespace-pre-line mt-[14.64px] lg:mt-[26px] text-[11.26px] lg:text-[20px] font-Montserrat leading-[16.9px] lg:leading-[30px] text-center text-[#5C5B5B]">
          {data && data?.generalSection?.description ? data?.generalSection?.description :
                      <>
                      We have a strong presence in several European countries,
          <br />
          as well as in many Middle East countries.
                      </>}
          
        </p>
      </div>
    </div>
  );
};

export default CoutriesHomeSection;

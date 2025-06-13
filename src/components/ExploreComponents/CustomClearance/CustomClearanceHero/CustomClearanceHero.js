import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import TotalFees from "../../../../assets/CustomClearanceHeroItems/TotalFees.png";
import Items from "../../../../assets/CustomClearanceHeroItems/Items.png";
import Vector from "../../../../assets/CustomClearanceHeroItems/Vector.svg";
import Clearance from "../../../../assets/CustomClearanceHeroItems/Clearance.svg";
import Bg from "../../../../assets/Dashboard/sphear-6.svg"
const CustomClearanceHero = (
  { data }
) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility initially
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center  lg:pt-0  lg:mt-[140px] mt-[0px] px-4">
            <img src={Bg} className="absolute w-[100%] top-0"/>

      <div className="relative z-10 flex flex-col lg:flex-row items-center">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 100,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 w-[394px] md:w-[400px] lg:w-auto huge:w-[1496px] px-4 sm:px-6 lg:px-[42.5px] py-6 lg:py-[54.5px] rounded-[30px]"
        >
          <div className="flex-1 flex justify-center lg:justify-start">
            <div>
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
                className="rounded-full inline-flex items-center justify-center"
              >
                <button
                  className="whitespace-pre-line text-white text-[10.8px] lg:text-[16px] font-medium font-Montserrat rounded-[30px] lg:px-[15px] lg:py-[15px] px-[15px] py-[15px] flex justify-center items-center gap-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="button"
                >
                  <img
                    src={Clearance}
                    alt="Solution"
                    className="w-[21.15px] h-[15px] lg:w-[28.15px] lg:h-[30px]"
                  />
                  {data?.title ? data?.title : "Solutions / Clearance"}
                </button>
              </motion.div>
              <h1 className="whitespace-pre-line mb-6 lg:my-[48px] text-[25px] md:text-[32px] lg:text-[50px] mt-4 lg:mt-8 font-Montserrat font-bold tracking-normal leading-[32px] md:leading-[38.4px] lg:leading-[60px] dark:text-white">
                { data?.generalSection?.heading ? 
                data?.generalSection?.heading 
                :
                <><span className="text-[#979797]">Streamline Your </span>
                <br className="" />
                Customs Clearance{" "}
                <span className="text-[#979797]"> Process</span></>}
              </h1>
              <p className="whitespace-pre-line w-[350px] md:w-[348px] lg:w-[577px] mb-6 md:mb-[28px] lg:mb-[34px] text-[14px] lg:text-[18px] font-normal font-Montserrat leading-[19.2px] lg:leading-[30px] text-[#5D5D5D]">
                {data?.generalSection?.description ? data?.generalSection?.description : "COD Power Group offers a comprehensive customs clearance service"+
                "to ensure that your shipments comply with regulations and reach"+
                "their destination on time. Our experienced team handles all"+
                "aspects of customs clearance, making the process smooth and"+
                "hassle-free for you."}
              </p>
              <a
                href="https://get-started.codpowergroup.com/registration"
                target="blank"
                className="text-[18px] md:text-[25px] font-Montserrat font-bold text-[#0587FF]"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center lg:justify-end mt-6 lg:mt-0">
            <img 
              src = {data?.generalSection?.image ? data?.generalSection?.image : Clearance}
              alt="Custom Clearance"
              className="w-[329.86px] md:w-[387px] lg:w-[540px] lg:h-auto huge:w-auto huge:h-auto mt-[37.76px] object-cover"
            />
            
            {/* <img
              src={TotalFees}
              alt="worker"
              className="w-[329.86px] md:w-[387px] lg:w-[540px] lg:h-auto huge:w-auto huge:h-auto mt-[37.76px] object-cover"
            />
            <div className="flex flex-col absolute -bottom-7 -right-4 lg:-right-10">
              <img
                src={Items}
                alt="Items"
                className="w-[272.32px] h-16 md:w-auto md:h-auto"
              />
            </div>
            <div className="flex flex-col absolute -left-4 lg:-left-7 px-4 py-2 lg:px-[30px] lg:py-[19px] bg-[#FFFFFF]/20 rounded-[20px] backdrop-blur-xl">
              <img
                src={Vector}
                alt="Vector"
                className="w-8 h-8 md:w-auto md:h-auto"
              />
              <p className="text-[16px] md:text-[24.33px] font-medium font-Montserrat">
                1,298
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomClearanceHero;

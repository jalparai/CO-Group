import { motion } from "framer-motion";
import icon1 from "../../../../assets/CustomClearanceIcons/icon1.png";
import icon2 from "../../../../assets/CustomClearanceIcons/icon2.png";
import icon3 from "../../../../assets/CustomClearanceIcons/icon3.png";
import icon4 from "../../../../assets/CustomClearanceIcons/icon4.png";
import { useEffect, useState, useRef } from "react";

const IconsSection = ({data}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  console.log("data", data);

  const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
  
  useEffect(() => {}, [data]);

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility initially
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col space-y-10 lg:space-y-20 mt-[80px]"
    >
      {/* First Row */}
      <motion.div
        className="relative flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-center  max-w-[1536px]"
        initial="rest"
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 100,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="lg:absolute lg:left-5 w-[268.65px] lg:w-[583px] h-[134.55px] sm:h-[250px] lg:h-[292px] mx-auto bg-[#FFFFFF]/5 border border-[#3D3D3D] backdrop-blur-[100px] rounded-[100px] sm:rounded-[90px] lg:rounded-[145.92px] flex items-end justify-center"
          variants={{
            rest: { x: "0" },
            hover: { x: "0" },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={data?.cardSection?.cards[0].image || icon1}
            alt="icon1"
            className="w-[107.94px] lg:w-auto h-[149.08px] lg:h-auto max-h-full"
          />
        </motion.div>
        <motion.div
          className="w-[357.58px] lg:ml-[372px] lg:w-[776px] h-[134.55px] sm:h-[250px] lg:h-[292px]  bg-[#FFFFFF]/5 border border-[#3D3D3D] backdrop-blur-[100px] rounded-[100px] sm:rounded-[90px] lg:rounded-[145.92px] flex items-end justify-center"
          variants={{
            rest: { x: 0 },
            hover: { x: isDesktop ? "30%" : 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={data?.cardSection?.cards[1].image || icon2}
            alt="icon2"
            className="w-[205px] lg:w-auto h-[132.71px] lg:h-auto max-h-full"
          />
        </motion.div>
      </motion.div>

      {/* Second Row */}
<div className="w-full flex justify-end">
        <motion.div
        className="lg:flex lg:max-w-[1500px]"
        initial="rest"
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 100,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          variants={{
            rest: { x: 0 },
            hover: { x: isDesktop ? "-30%" : 0 },
          }}
          transition={{ duration: 0.5 }}
          className="relative  w-[382.46px] lg:w-[830px] h-[134.55px] sm:h-[250px] lg:h-[292px] mx-auto bg-[#FFFFFF]/5 border border-[#3D3D3D] backdrop-blur-[100px] rounded-[100px] sm:rounded-[90px] lg:rounded-[145.92px] flex items-end justify-center"
        >
          <img
            src={data?.cardSection?.cards[2].image || icon3}
            alt="icon3"
            className="w-[272.61px] lg:w-auto h-[134.37px] lg:h-auto max-h-full"
          />
        </motion.div>
        <motion.div
          variants={{
            rest: { x: "0" },
            hover: { x: "0" },
          }}
          transition={{ duration: 0.5 }}
          className="lg:relative mt-6 lg:mt-0 lg:right-5 w-[263.92px] lg:w-[572.73px] h-[134.55px] sm:h-[250px] lg:h-[292px] mx-auto bg-[#FFFFFF]/5 border border-[#3D3D3D] backdrop-blur-[100px] rounded-[100px] sm:rounded-[90px] lg:rounded-[145.92px] flex items-end justify-center  z-20"
        >
          <img
            src={data?.cardSection?.cards[3].image || icon4}
            alt="icon4"
            className="w-[181.84px] lg:w-auto h-[150.75px] lg:h-auto max-h-full"
          />
        </motion.div>
      </motion.div>
</div>
    </div>
  );
};

export default IconsSection;

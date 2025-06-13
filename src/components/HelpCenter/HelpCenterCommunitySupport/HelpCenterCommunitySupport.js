import background from "../../../assets/HelpCenterIcons/HelpCenterCommunitySupport/background.png";
import Discord from "../../../assets/HelpCenterIcons/CommunitySupport/Discord.svg";
import Telegram from "../../../assets/HelpCenterIcons/CommunitySupport/Telegram.svg";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Bg from "../../../assets/Dashboard/spear12.svg"

const HelpCenterCommunitySupport = ({data}) => {
  const ref = useRef(null);

  // Set up scroll detection and map the scroll position to rotation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animates as you scroll through the component
  });

  // Rotate background based on scroll position
  const backgroundRotation = useTransform(
    scrollYProgress,
    [0, 1],
    ["0deg", "360deg"]
  );

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full max-w-[1307px] h-auto sm:h-[400px] md:h-[500px] lg:h-[559px] rounded-[20px] lg:rounded-[30px] mx-auto mt-16 lg:mt-[128px] py-[82px] sm:py-[61px] px-4 sm:px-8 overflow-hidden"
    >

      {/* Rotating Background Layer */}
      <motion.div
        style={{
          backgroundImage: `url(${background})`,
          rotate: backgroundRotation,
        }}
        className="absolute bg-contain w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] lg:w-[1468px] lg:h-[1462px]"
      />

      {/* Content Layer */}
      <div className="relative text-center z-10 px-2">
        <h1 className="text-white font-bold font-Montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full lg:max-w-[1102px] mx-auto">
          {data?.cardSection?.heading || "Community Support"}
        </h1>
        <p className="text-white font-Montserrat font-semibold my-[39px] lg:my-[61px] text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-full lg:max-w-[900px] mx-auto">
          {data?.cardSection?.description || "Join our community forum to connect with other users, share"+
          "experiences, and get advice from our community moderators. Our"+
          "community is a great place to find tips and tricks, discuss product"+
          "features, and troubleshoot issues together."}
        </p>
        <div 
        onClick={() => window.open(data?.cardSection?.cards[0].description,"_blank")} 
        className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="text-white text-lg sm:text-[30px] font-bold font-Montserrat bg-[#2CA3DB] py-[0px] px-[13px] sm:px-[21px] sm:py-0 rounded-[50px] transition duration-300">
            <div
            
            className="flex items-center justify-center h-[56px] sm:h-[86px] space-x-2">
              <img
                src={data?.cardSection?.cards[0].image ||  Telegram}
                alt="Telegram"
                className="w-[46.8px] sm:w-auto"
              />
              <span>{data?.cardSection?.cards[0].title }</span>
              {data && console.log(data?.cardSection?.cards[0])}
            </div>
          </button>
          <button 
          onClick={() => window.open(data?.cardSection?.cards[1].description,"_blank")} 
          className="text-white text-lg sm:text-[30px] font-bold font-Montserrat bg-[#313887] py-[0px] px-[13px] sm:px-[21px] sm:py-0 rounded-[50px] transition duration-300">
            <div className="flex items-center justify-center h-[56px] sm:h-[86px] space-x-2">
              <img
                src={data?.cardSection?.cards[1].image || Discord}
                alt="Discord"
                className="w-[46.8px] sm:w-auto"
              />
              <span>{data?.cardSection?.cards[1].title }</span>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default HelpCenterCommunitySupport;

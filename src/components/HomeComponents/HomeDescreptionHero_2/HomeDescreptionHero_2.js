import { motion } from "framer-motion";
import HomeDescreptionHeroImg_2 from "../../../assets/HomeDescreptionHeroImg_2/HomeDescreptionHeroImg_2.png";
import aramex from "../../../assets/HomeDescreptionHeroImg_2/aramex.svg";
import DHL from "../../../assets/HomeDescreptionHeroImg_2/DHL.svg";
import NAQEL from "../../../assets/HomeDescreptionHeroImg_2/NAQEL.svg";
import UPS from "../../../assets/HomeDescreptionHeroImg_2/UPS.svg";
import BgGrient from "../../../assets/Dashboard/circle-spiner.svg"
import TitleAnimation from "../TitleAnimation/TitleAnimation";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import "./CircularBorder.css";

const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
  },
};

const HomeDescreptionHero_2 = () => {
  return (
    <div className="relative flex flex-col items-center my-6 sm:my-[52px] lg:mt-20 lg:mb-1 px-4">
    
      <div className="relative text-center mb-16">
        <TitleAnimation />
      </div>
  <div className="absolute top-[417px] xl:block hidden">
        <img src={BgGrient}/>
      </div>
      <div className="relative w-[411.65px] lg:w-[90%] flex justify-center mt-10">
        {/* Hero Image */}
        <img
          className="w-[411.65px] lg:w-[91%] relative z-10"
          src={HomeDescreptionHeroImg_2}
          alt="heroImage"
        />

        {/* Positioned SVG Icons with Animations */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20"
          animate={rotateAnimation}
          style={{
            width: "100%",
            height: "100%",
            transformOrigin: "center",
          }}
        >
          <motion.img
            src={aramex}
            alt="aramex"
            className="absolute top-[45%] right-[20%] md:left-[28%] w-[76.42px] md:w-[10%]"
            animate={{ rotate: -360 }}
            transition={rotateAnimation.transition}
          />
          <motion.img
            src={UPS}
            alt="UPS"
            className="absolute top-[13%] lg:top-[14%] right-[45%] w-[63.36px] md:w-[10%]"
            animate={{ rotate: -360 }}
            transition={rotateAnimation.transition}
          />
          <motion.img
            src={DHL}
            alt="DHL"
            className="absolute bottom-[45%] left-[0%] md:right-[8%] w-[63.36px] md:w-[10%]"
            animate={{ rotate: -360 }}
            transition={rotateAnimation.transition}
          />
          <motion.img
            src={NAQEL}
            alt="NAQEL"
            className="absolute -bottom-[11%] lg:-bottom-[5%] left-[45%] w-[76.42px] md:w-[10%]"
            animate={{ rotate: -360 }}
            transition={rotateAnimation.transition}
          />
        </motion.div>

        {/* Background Blur */}
        <div className="absolute inset-0 -z-10">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgba(41, 127, 255, 0.5)"
            gradientBackgroundEnd="rgba(191, 56, 255, 0.3)"
            size="150%"
            blendingValue="soft-light"
            className="absolute inset-0 -z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDescreptionHero_2;

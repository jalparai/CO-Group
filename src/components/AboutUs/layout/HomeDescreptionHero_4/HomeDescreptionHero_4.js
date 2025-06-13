import DachboardImage from "../../assets/HomeDescreptionHero_4_Img/DachboardImage.webp";
import ChatIcon from "../../assets/HomeDescreptionHero_4_Img/ChatIcon.svg";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const HomeDescreptionHero_4 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Staggered fade-up animation for all elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    }),
  };

  return (
    <div className="relative flex flex-col items-center px-4 lg:px-0">
      <div className="w-full max-w-md lg:max-w-[1125px] mx-auto mt-10 lg:mt-32">
        <div
          ref={ref}
          className="relative text-center bg-black/60 border-[#363636] border-[0.45px] rounded-lg lg:rounded-[30px] pt-8 lg:pt-16 shadow-lg"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            animate={controls}
            custom={0}
            className="text-lg lg:text-4xl font-Montserrat font-bold max-w-xs lg:max-w-[612px] mx-auto leading-tight lg:leading-tight text-white"
          >
            Ready to elevate your E-commerce Business?
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={controls}
            custom={0.2}
            className="mt-4 lg:mt-9 text-xs lg:text-lg font-Montserrat text-center text-[#A5A5A5] max-w-sm lg:max-w-3xl mx-auto"
          >
            Don't miss out on the opportunity to streamline your e-commerce
            operations and maximize your revenue potential. Sign up with COD
            Power Group today and take your business to new heights!
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={controls}
            custom={0.4}
            className="flex justify-center mt-4 lg:mt-9 gap-4"
          >
            <motion.div
              initial={{ background: "linear-gradient(to right, #53ACFF, #282E6A)" }}
              animate={{
                background: isHovered
                  ? "linear-gradient(to right, #282E6A, #53ACFF)"
                  : "linear-gradient(to right, #53ACFF, #282E6A)",
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="rounded-full"
            >
              <a
                href="https://get-started.codpowergroup.com/registration"
                target="blank"
                className="text-white text-xs lg:text-lg font-DMSans rounded-full py-2 px-6 lg:py-3 lg:px-8 flex items-center gap-2 justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started Now
                <GoArrowUpRight />
              </a>
            </motion.div>
            <Link to='/contactsales'
              className="text-white border text-[9.32px] lg:text-base font-Montserrat rounded-full bg-white/20 border-white/5 hover:bg-white/0 hover:border-white transition-colors duration-500 py-2 px-4 lg:py-3 lg:px-8 flex items-center gap-2 justify-center"
              type="button"
            >
              <img
                src={ChatIcon}
                alt="ChatIcon"
                className="w-4 lg:w-5 h-auto"
              />
              Chat with an expert!
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={controls}
            custom={0.6}
            className="flex justify-center mt-6 lg:mt-10"
          >
            <motion.img
              className="w-11/12 max-w-xs lg:max-w-4xl h-auto rounded-xl shadow-lg"
              src={DachboardImage}
              alt="heroImage"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeDescreptionHero_4;

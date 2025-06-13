import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Frame from "../../../../assets/CustomClearanceDescreption2Item/Frame.png";
import { GoArrowUpRight } from "react-icons/go";

const CustomClearanceDescreption2 = ({data}) => {
  const ref = useRef(null);

  // Set up scroll detection and map the scroll position to the background position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animates as you scroll through the component
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "100% 100%"]
  );

  // Use useInView to detect when the section is 100% visible
  const isInView = useInView(ref, {
    triggerOnce: true,
    threshold: 1, // Trigger when 100% of the component is visible
  });

  // Define motion settings for a stronger fade-up effect
  const animationProps = {
    initial: { opacity: 0, y: 100 }, // Start 100px below for a stronger effect
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }, // Fade up when in view
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }, // Slower and more pronounced animation
  };

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${Frame})`,
        backgroundPosition: backgroundPosition,
      }}
      className="relative flex items-center justify-center w-[370px] lg:w-[1307px] h-auto sm:h-[400px] md:h-[500px] lg:h-[559px] rounded-[20px] lg:rounded-[30px] mx-auto bg-cover bg-center mt-[44px] lg:mt-[128.86px] py-[61px] px-2 sm:px-8"
      {...animationProps} // Apply fade-up effect to the entire section
    >
      <div className="text-center">
        <motion.h1
          className="whitespace-pre-line text-white max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[1102px] mx-auto font-bold font-Montserrat leading-[35px] text-[30px] sm:text-3xl md:text-4xl lg:text-5xl"
          {...animationProps} // Apply fade-up effect to the heading
        >
          {data?.generalSection?.heading ? data?.generalSection?.heading : "Simplify your customs clearance process and ensure the timely delivery"+
          "of your shipments with COD Power Group's customs clearance service."}
        </motion.h1>
        <motion.p
          className="whitespace-pre-line text-white max-w-[90%] sm:max-w-[70%] md:max-w-[600px] lg:max-w-[900px] mx-auto font-Montserrat font-extralight my-[27px] md:my-[40px] text-[15px] sm:text-lg md:text-xl"
          {...animationProps} // Apply fade-up effect to the text
        >
           {data?.generalSection?.description ? data?.generalSection?.description :
                  "Contact us today to learn more and get started"}

        </motion.p>
        <motion.div
          className="mt-6"
          {...animationProps} // Apply fade-up effect to the button container
        >
          <a
            href="https://get-started.codpowergroup.com/registration"
            target="blank"
            className="flex items-center justify-center w-[277px] mx-auto hover:text-white bg-white text-black hover:bg-transparent text-[20px] font-bold font-Montserrat border hover:border-[#FFFFFF] py-3 rounded-[36px] transition-colors duration-700"
          >
            Get Started Today <GoArrowUpRight className="ml-[8.6px]" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomClearanceDescreption2;
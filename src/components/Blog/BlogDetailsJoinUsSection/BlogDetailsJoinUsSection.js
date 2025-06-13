import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Frame from "../../../assets/CustomClearanceDescreption2Item/Frame.png";

const BlogDetailsJoinUsSection = () => {
  const ref = useRef(null);

  // Set up scroll detection and map the scroll position to the background position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "0% 100%"]
  );

  // Fade effect on scroll
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${Frame})`,
        backgroundPosition: backgroundPosition,
      }}
      className="relative flex items-center justify-center w-full max-w-[1307px] huge:max-w-[1507px] min-h-[400px] md:min-h-[599px] rounded-[30px] mx-auto bg-cover bg-center mt-20  py-4"
    >
      <motion.div
        ref={inViewRef}
        className="text-center px-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[65%]"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 100,
        }}
        transition={{ duration: 1 }}
      >
        {/* Button */}
        <div className="mb-10">
          <button className="text-black bg-white text-lg sm:text-xl md:text-2xl font-bold font-Montserrat py-4 px-8 sm:px-10 md:px-12 rounded-full transition duration-300">
            <div className="flex items-center justify-center"> <a href="https://get-started.codpowergroup.com/registration" target="_blank">Join us Now </a> </div>
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-white font-bold font-Montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full max-w-[90%] mx-auto">
          Experience Life at COD Power Group
        </h1>

        {/* Description */}
        <p className="text-white font-Montserrat font-extralight mt-6 text-base sm:text-lg md:text-xl w-full max-w-[90%] sm:max-w-[80%] mx-auto">
          At COD Power Group, we believe that our people are our most valuable
          asset. We foster a culture of collaboration, innovation, and
          continuous learning, where every team member is empowered to make a
          difference.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetailsJoinUsSection;

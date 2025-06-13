import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TitleAnimation = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const words =
    "How Can We Help You Focus on Growth and Customer Satisfaction? Join us now by selecting the model that best suits your needs. We offer Seller and Affiliate options.".split(
      " "
    );

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when section is at least 50% visible
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      setAnimationComplete(true);
    }
  }, [inView]);

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div ref={ref} className="relative flex items-center justify-center text-center w-full max-w-[90%] mx-auto">
      <motion.h2 className="text-[35.84px] lg:text-[70px] font-Montserrat font-bold leading-[41px] lg:leading-[80px]">
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            initial="hidden"
            animate={animationComplete ? "visible" : "hidden"}
            custom={i}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default TitleAnimation;

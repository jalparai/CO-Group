import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive"; // Import for screen size detection
import Frame from "../../../assets/CustomClearanceDescreption2Item/Frame.png";

const ShippingGetStarted = ({data}) => {
  const ref = useRef(null);
  useEffect(() => {},[data])
  // Detect if the screen width is small (mobile)
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  // Set up scroll detection and map the scroll position to the background position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["start start", "end end"] : ["start end", "end start"],
  });

  // Use different transform values based on screen size
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-10% -10%", "100% 100%"] : ["-10% -10%", "100% 100%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${Frame})`,
        backgroundPosition: backgroundPosition,
        backgroundAttachment: isMobile ? "scroll" : "fixed", // Ensures smooth scrolling on mobile
      }}
      className="relative flex items-center justify-center w-[400px] lg:w-[1307px] h-auto sm:h-[400px] md:h-[500px] lg:h-[559px] rounded-[20px] lg:rounded-[30px] mx-auto bg-cover bg-center bg-no-repeat mt-[83px] lg:mt-[128.86px] py-[61px] px-2 sm:px-8"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 h-[2016.47px] -top-[800px] bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
        //   backgroundBlendMode: "overlay",
        // }}
      ></div>

      {/* Content Section */}
      <div className="text-center">
        {/* Button */}
        <div className="mb-6">
          <a
            href={data?.generalSection?.buttons[0].url || "https://cod-seller-seven.vercel.app"}
            target="blank"
            className="flex items-center justify-center w-[197.12px] lg:w-[277px] mx-auto hover:text-white bg-white text-black hover:bg-transparent text-[19px] lg:text-[30px] font-bold font-Montserrat border hover:border-[#FFFFFF] py-[17.3px] lg:py-[21px] rounded-[50px] transition-colors duration-300"
          >
            {data?.generalSection?.buttons[0].text || "Join us Now"}
          </a>
        </div>

        {/* Heading */}
        <h1 className="text-white max-w-[98%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[1102px] mx-auto font-bold font-Montserrat leading-[35px] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl my-[27px] md:my-[40px]">
          {data?.generalSection?.description || "Experience Life at COD Power Group"}
        </h1>

        {/* Description */}
        <p className="text-white max-w-[95%] sm:max-w-[70%] md:max-w-[700px] lg:max-w-[1051px] mx-auto font-Montserrat font-extralight text-[14px] sm:text-lg md:text-[25px]">
          {data?.generalSection?.caption || "At COD Power Group, we believe that our people are our most valuable"+
          "asset. We foster a culture of collaboration, innovation, and"+
          "continuous learning, where every team member is empowered to make a"+
          "difference."}
        </p>
      </div>
    </motion.div>
  );
};

export default ShippingGetStarted;

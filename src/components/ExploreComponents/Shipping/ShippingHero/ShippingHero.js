import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DeliverOrders from "../../../../assets/ShippingHeroItem/DeliverOrders.png";
import truck from "../../../../assets/ShippingHeroItem/truck.svg";
import { useInView } from "react-intersection-observer"; // Importing the hook
import Bg from "../../../../assets/Dashboard/Blue-carve.svg"

const ShippingHero = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down"); // State to track scroll direction
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when the element comes into view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center md:mt-[36px] lg:mt-[140px] px-4">
      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
        //   backgroundBlendMode: "overlay",
        // }}
      ></div>
      {/* <img src={Bg} className="absolute w-[100%] lg:top-[-900px]"/> */}

      <motion.div
        ref={ref} // Attach the ref to the motion.div element
        className="relative z-10 flex flex-col lg:flex-row items-center"
        initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly down
        animate={{
          opacity: inView ? 1 : 0,  // Fade in when in view
          y: inView
            ? (scrollDirection === "down" ? 0 : 50) // Scroll down: fade-up, scroll up: fade-down
            : (scrollDirection === "down" ? 50 : -50), // Scroll down: move up, scroll up: move down
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        <div className="relative flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 w-full md:w-[400px] lg:w-auto huge:w-[1496px] px-[16px] md:px-[26px] py-[30px] md:py-[45.5px] huge:px-[113px] huge:py-[118.5px] lg:px-[42.5px] lg:py-[54.5px] rounded-[30px]">
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
                className="rounded-full inline-flex items-center justify-center mt-8"
              >
                <button
                  className="text-white text-[12.8px] md:text-[14px] lg:text-[16px] font-medium font-Montserrat rounded-[30px] h-[36px] md:h-[38.4px] lg:h-[48px] px-[12px] md:px-[15.5px] py-[12px] md:py-[24px] flex justify-center items-center gap-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="button"
                >
                  <img
                    src={truck}
                    alt="truck"
                    className="w-[16px] md:w-[19.2px] lg:w-auto h-auto"
                  />
                  {data?.title || "Solutions / Shipping"}
                </button>
              </motion.div>
              <h1 className="lg:mb-[30.72px] my-[19.2px] lg:my-[48px] text-[20px] md:text-[25px] lg:text-[45px] font-Montserrat font-bold tracking-normal leading-[28px] md:leading-[38.4px] lg:leading-[60px] dark:text-white">
                {data?.generalSection?.heading || "Deliver Orders Worldwide with Confidence"}
              </h1>
              <p className="w-full md:w-[349px] lg:w-[577px] huge:w-[577px] mb-[19.2px] md:mb-[28px] lg:mb-[34px] text-[12px] md:text-[12.8px] lg:text-[18px] font-normal font-Montserrat leading-[18px] md:leading-[19.2px] lg:leading-[30px] text-[#5D5D5D]">
                {data?.generalSection?.description || "COD Power Group offers reliable shipping services to deliver"+
                "orders to your customers worldwide. We partner with trusted"+
                "shipping carriers to offer a range of shipping options to meet"+
                "your specific needs. Whether you're shipping domestically or"+
                "internationally, you can count on COD Power to deliver your"+
                "orders on time and in perfect condition."}
              </p>
              <a
                href="https://get-started.codpowergroup.com/registration"
                target="blank"
                className="text-[14px] md:text-[16px] lg:text-[25px] font-Montserrat font-bold text-[#0587FF]"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={data?.generalSection?.image ||  DeliverOrders}
              alt="worker"
              className="w-[250px] md:w-[387px] lg:w-[540px] h-auto object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingHero;

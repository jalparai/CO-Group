import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SHIPPINGBENEFITS from "../../../../assets/ShippingBenefitsItem/SHIPPINGBENEFITS.png";
import Bg from "../../../../assets/Dashboard/Spera-8.svg"
const ShippingBenefits = ({data}) => {
  const [activeButton, setActiveButton] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const renderContent = () => {
    return (
      <>
            <h3 className="text-[28px] sm:text-xl lg:text-[45px] font-Montserrat font-bold lg:mt-[52px]">
              {data?.cardSection?.cards[activeButton]?.subtitle || "Swift & Dependable Shipping"}
            </h3>
            <p className="text-gray-600 text-[14px] sm:text-base lg:text-[22px] my-4 sm:my-[36px] max-w-full sm:max-w-md lg:max-w-lg sm:leading-7 lg:leading-10">
            {data?.cardSection?.cards[activeButton]?.description || 
              "Timely product delivery is crucial for customer satisfaction. We"+
              "partner with trusted carriers to ensure your products reach their"+
              "destination quickly and safely."}
            </p>
            <a
              href={data?.cardSection?.cards[activeButton].buttons[0].url || "https://cod-seller-seven.vercel.app"}
              target="blank"
              className="text-md sm:text-[22px] lg:text-[24px] font-Montserrat font-bold text-[#0587FF]"
            >
              {data?.cardSection?.cards[activeButton].buttons[0].text || "Get Started Now"}
            </a>
          </>
    )
    // switch (activeButton) {
    //   case "button1":
    //     return (
    //       <>
    //         <h3 className="text-[28px] sm:text-xl lg:text-[45px] font-Montserrat font-bold lg:mt-[52px]">
    //           Swift & Dependable Shipping
    //         </h3>
    //         <p className="text-gray-600 text-[14px] sm:text-base lg:text-[22px] my-4 sm:my-[36px] max-w-full sm:max-w-md lg:max-w-lg sm:leading-7 lg:leading-10">
    //           Timely product delivery is crucial for customer satisfaction. We
    //           partner with trusted carriers to ensure your products reach their
    //           destination quickly and safely.
    //         </p>
    //         <a
    //           href="https://cod-seller-seven.vercel.app"
    //           target="blank"
    //           className="text-md sm:text-lg lg:text-[24px] font-Montserrat font-bold text-[#0587FF]"
    //         >
    //           Get Started Now
    //         </a>
    //       </>
    //     );
    //   case "button2":
    //     return (
    //       <>
    //         <h3 className="text-[28px] sm:text-xl lg:text-[45px] font-Montserrat font-bold lg:mt-[52px]">
    //           Reliability
    //         </h3>
    //         <p className="text-gray-600 text-[14px] sm:text-base lg:text-[22px] my-4 sm:my-[36px] max-w-full sm:max-w-md lg:max-w-lg sm:leading-7 lg:leading-10">
    //           Timely product delivery is crucial for customer satisfaction. We
    //           partner with trusted carriers to ensure your products reach their
    //           destination quickly and safely.
    //         </p>
    //         <a
    //           href="https://cod-seller-seven.vercel.app"
    //           target="blank"
    //           className="text-md sm:text-[22px] lg:text-[24px] font-Montserrat font-bold text-[#0587FF]"
    //         >
    //           Get Started Now
    //         </a>
    //       </>
    //     );
    //   case "button3":
    //     return (
    //       <>
    //         <h3 className="text-[28px] sm:text-xl lg:text-[45px] font-Montserrat font-bold lg:mt-[52px]">
    //           Convenience
    //         </h3>
    //         <p className="text-gray-600 text-[14px] sm:text-base lg:text-[22px] my-4 sm:my-[36px] max-w-full sm:max-w-md lg:max-w-lg sm:leading-7 lg:leading-10">
    //           Timely product delivery is crucial for customer satisfaction. We
    //           partner with trusted carriers to ensure your products reach their
    //           destination quickly and safely.
    //         </p>
    //         <a
    //           href="https://cod-seller-seven.vercel.app"
    //           target="blank"
    //           className="text-md sm:text-[22px] lg:text-[24px] font-Montserrat font-bold text-[#0587FF]"
    //         >
    //           Get Started Now
    //         </a>
    //       </>
    //     );
    //   default:
    //     return null;
    // }
  };

  const handleClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="relative lg:w-[95%] m-auto flex flex-col items-center sm:mt-12 mt-[0px] mb-10 sm:mb-12 lg:mb-16
        space-x-0 lg:space-x-6 w-full md:w-[400px]  huge:w-[1496px] px-[16px] md:px-[26px] py-[30px]  huge:px-[113px] huge:py-[50px] lg:px-[42.5px] lg:py-[54.5px]
      "
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to this state when visible
      exit={{ opacity: 0, y: 50 }} // Exit state
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[500px] lg:blur-[500px] -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
          backgroundBlendMode: "overlay",
        }}
      ></div>
            <motion.div
        className="whitespace-pre-line text-[#E61D2D] text-[14px] lg:text-[20px] font-medium tracking-[10px] mb-[11px] lg:mb-[19px]"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {data?.title || "SHIPPING BENEFITS"}
      </motion.div>
      <motion.h1
        className="text-[28px] lg:text-[40px] text-center font-Montserrat font-bold mb-[60px]"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {data?.cardSection?.heading || "Why Choose COD Power Group for Shipping"}
      </motion.h1>
      <div className="max-w-screen-lg w-[90%] lg:w-[95%] border border-[#132F51] py-[40px] px-[18px] sm:p-6 lg:p-10 rounded-[19.2px] lg:rounded-[30px] my-6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col items-start sm:text-left">
            <div className="block lg:hidden">
              {renderContent()}
              <img
                src={data?.cardSection?.cards[activeButton]?.image || SHIPPINGBENEFITS}
                alt="Shipping Benefits"
                className="w-3/4 sm:w-1/2 lg:w-auto mx-auto my-[60px] sm:my-0"
              />
            </div>
            <div className="flex flex-wrap justify-center border border-[#132A45] bg-[#101010]/10 p-2 rounded-full mt-[0]">
            {
              data?.cardSection?.cards?.map((card, index) => (
                <button
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`text-[11.23px] lg:text-[19.5px] font-Montserrat font-medium rounded-[30px] px-[15px] py-[11px] lg:px-[25px] lg:py-[11px] transition-all duration-300 inline-flex justify-center items-center
            ${
               activeButton === index && hoveredButton !== index
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium"
                : activeButton === index || hoveredButton === index
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium hover:bg-[#0587FF]/20 hover:text-[#0587FF] grientBtn-shiping-h hover:font-medium"
                : activeButton !== index && hoveredButton !== index
                ? "text-[#B0B0B0]"
                : ""
            }
          `}
              >
                {card?.title}
              </button>
              ))
            }
              {/* <button
                onClick={() => handleClick("button1")}
                onMouseEnter={() => setHoveredButton("button1")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`text-[11.23px] lg:text-[19.5px] font-Montserrat font-medium rounded-[30px] px-[15px] py-[11px] lg:px-[25px] lg:py-[11px] transition-all duration-300 inline-flex justify-center items-center
            ${
               activeButton === "button1" && hoveredButton !== "button1"
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium"
                : activeButton === "button1" || hoveredButton === "button1"
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium hover:bg-[#0587FF]/20 hover:text-[#0587FF] grientBtn-shiping-h hover:font-medium"
                : activeButton !== "button1" && hoveredButton !== "button1"
                ? "text-[#B0B0B0]"
                : ""
            }
          `}
              >
                Global Reach
              </button>
              <button
                onClick={() => handleClick("button2")}
                onMouseEnter={() => setHoveredButton("button2")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`text-[11.23px] lg:text-[19.5px] font-Montserrat font-medium rounded-[30px] px-[15px] py-[11px] lg:px-[25px] lg:py-[11px] transition-all duration-300 inline-flex justify-center items-center
            ${
              hoveredButton === "button1" || hoveredButton === "button3"
                ? "text-[#B0B0B0]"
                : activeButton === "button2" && hoveredButton !== "button2"
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium"
                : activeButton === "button2" || hoveredButton === "button2"
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium hover:bg-[#0587FF]/20 hover:text-[#0587FF] grientBtn-shiping-h hover:font-medium"
                : activeButton !== "button2" && hoveredButton !== "button2"
                ? "text-[#B0B0B0]"
                : ""
            }
          `}
              >
                Reliability
              </button>
              <button
                onClick={() => handleClick("button3")}
                onMouseEnter={() => setHoveredButton("button3")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`text-[11.23px] lg:text-[19.5px] font-Montserrat font-medium rounded-[30px] px-[15px] py-[11px] lg:px-[25px] lg:py-[11px] transition-all duration-300 inline-flex justify-center items-center
            ${
              hoveredButton === "button2" || hoveredButton === "button1"
                ? "text-[#B0B0B0]"
                : activeButton === "button3" && hoveredButton !== "button3"
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium"
                : activeButton === "button3" || hoveredButton === "button3"
                ? "bg-[#0587FF]/20 text-[#0587FF] grientBtn-shiping font-medium hover:bg-[#0587FF]/20 hover:text-[#0587FF] grientBtn-shiping-h hover:font-medium"
                : activeButton !== "button3" && hoveredButton !== "button3"
                ? "text-[#B0B0B0]"
                : ""
            }
          `}
              >
                Convenience
              </button> */}
            </div>
            <div className="hidden lg:block">{renderContent()}</div>
          </div>
          <img src={Bg} className="absolute w-[100%] z-[-10]"/>

          <div className="hidden lg:block">
            <img
              src={data?.cardSection?.cards[activeButton]?.image || SHIPPINGBENEFITS}
              alt="Shipping Benefits"
              className="w-3/4 sm:w-1/2 lg:w-auto sm:mx-0 mt-4 sm:mt-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShippingBenefits;
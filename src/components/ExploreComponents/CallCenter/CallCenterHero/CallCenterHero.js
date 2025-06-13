import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import image4 from "../../../../assets/CallCenter/CallCenterHeroItems/image4.png";
import headphones from "../../../../assets/CallCenter/CallCenterHeroItems/headphones.svg";
import Bg from "../../../../assets/Dashboard/spera10.svg"

const CallCenterHero = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  // Track when the section is in view
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start faded down
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Fade up/down on view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center lg:mt-[140px] px-4"
    >
                  <img src={Bg} className="absolute w-[100%] top-0"/>

      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
        //   backgroundBlendMode: "overlay",
        // }}
      ></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center">
        <div className="relative flex flex-col lg:flex-row items-center space-x-6 max-w-full px-4 py-8 lg:px-[42.5px] lg:py-[54.5px] rounded-[30px] w-full md:w-auto lg:w-auto huge:w-[1496px]">
          <div className="flex-1 flex justify-center lg:justify-between lg:w-[578px]">
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
                  className="text-white text-[10.24px] lg:text-[16px] font-medium font-Montserrat rounded-[30px] px-[13px] py-[12px] lg:px-4 lg:py-2 lg:w-auto lg:h-[60px] flex justify-center items-center gap-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="button"
                >
                  <img
                    src={headphones}
                    alt="headphones"
                    className="w-[19.2px] lg:w-auto h-auto"
                  />
                  {data?.title ? data.title :"Solutions / Call Center"}
                </button>
              </motion.div>
              <h1 className="my-[19px] lg:my-[48px] text-[24px] md:text-[32px] lg:text-[45px] w-full max-w-[674px] font-Montserrat font-bold tracking-normal leading-[30px] md:leading-[38.4px] lg:leading-[60px] text-left dark:text-white">
              {data?.generalSection?.heading ? data.generalSection.heading : "Provide Exceptional Customer Support with Our Call Center"+
                "Service"}
              </h1>
              <p className="w-full max-w-[348px] md:max-w-[577px] mb-4 md:mb-[28px] lg:mb-[34px] text-[12.8px] md:text-[16px] lg:text-[18px] font-normal font-Montserrat leading-[19.2px] md:leading-[24px] lg:leading-[30px] text-[#5D5D5D] text-left">
                {data?.generalSection?.description ? data.generalSection?.description :"COD Power Group offers a comprehensive call center service to"+
                "help you provide exceptional customer support to your clients."+
                "Our team of experienced customer service representatives is"+
                "available to assist your customers with any inquiries or"+
                "concerns they may have, ensuring that they receive the support"+
                "they need."}
              </p>
              <a
                href="https://get-started.codpowergroup.com/registration"
                target="blank"
                className="text-[16px] md:text-[25px] font-Montserrat font-bold text-[#0587FF] block text-left"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center lg:justify-end mt-4 lg:mt-0">
            <img
              src={data?.generalSection?.image || image4}
              alt="worker"
              className="w-full max-w-[250px] md:max-w-[387px] lg:max-w-[540px] h-auto object-cover mt-[20px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallCenterHero;

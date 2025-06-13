import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import heroImage from "../../../assets/Dashboard/Dashboard-image.svg";
import bgGragiant from "../../../assets/Dashboard/Dashboard-bg.svg";
import righSide from "../../../assets/Dashboard/Confirmed.svg";
import leftSide from "../../../assets/Dashboard/leftFloatCard.svg";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import "./home.css";
const HomeHero = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 200, // Trigger animation when the element is 10%-20% in the viewport
      duration: 1000,
      once: true, // Trigger animation only once
    });
    AOS.refresh(); // Refresh AOS after state change
  }, []);

  return (
    <div className="relative flex flex-col items-center lg:mt-[109px] px-1">
      <div
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="100"
        className="flex justify-center mt-8 mb-[14px] sm:mb[20px] lg:my-10"
      >
        <div className="text-white uppercase border rounded-full font-Montserrat h-[30.72px] w-[250.85px] sm:w-[500px] sm:h-[45px] lg:h-[60px] lg:w-[500px] gap-2 inline-flex items-center justify-center tracking-[0.3em] lg:font-medium text-[10.24px] sm:text-[15px] lg:text-[20px] bg-white/20 border-white/5 hover:bg-white/15 cursor-pointer transition-colors duration-500">
        {data? data.title : "cash on delivery service"}
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="200"
        className="relative text-center"
      >
        <h1 className="text-[35px] sm:text-[52px] lg:text-[70px] font-Montserrat font-bold leading-tight sm:leading-snug lg:leading-none whitespace-pre-line">
        {data && data?.generalSection ? 
    data?.generalSection?.heading : 
    <>
      Unlock Your <br className="lg:hidden" /> E-Commerce{" "}
      <br className="hidden lg:block" /> Potential with Cash on Delivery.
    </>
  }
          
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-repeat="true"
          className="absolute bottom-2 left-2 top-[140px] sm:top-auto sm:bottom-[100%] transform lg:-left-5 lg:top-0 p-[1px] h-[25px] sm:h-[25px] bg-white/30 rounded-full text-white inline-flex items-center rounded-br-none font-Montserrat font-medium text-[10.32px] sm:text-[15px] lg:text-[20.16px] power-button floating" // <-- Added "floating"
        >
          <div className="border-solid border-white/30 border-[2px] flex items-center justify-center h-[23.76px] w-[53.64px] sm:h-[34px] sm:w-[79px] lg:h-[46.88px] lg:w-[104.32px] bg-gradient-to-r from-[#53ACFF] to-[#282E6A] rounded-full rounded-br-none py-1.5 px-3 sm:py-2 sm:px-4 md:py-2 md:px-5">
            Power
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-repeat="true"
          className="absolute top-7 right-1 sm:top-[75%] md:top-[100%] transform lg:right-0 lg:-top-10 p-[2px] rounded-full text-white inline-flex items-center bg-gradient-to-r from-white/70 to-[#E61D2D]/100 rounded-bl-none font-Montserrat lg:font-medium text-[10.32px] sm:text-[15px] lg:text-[20.16px] floating" // <-- Added "floating"
        >
          <div className="flex items-center justify-center h-[23.76px] w-[88.64px] sm:h-[33px] sm:w-[120.32px] lg:h-[46.88px] lg:w-[172.32px] bg-[#E61D2D] rounded-full rounded-bl-none">
            E-Commerce
          </div>
        </div>
      </div>

      <p
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
        className="mt-[14px] sm:mt-[20px] lg:mt-[26px] text-[10.24px] sm:text-[15px] lg:text-[20px] font-extralight font-Montserrat text-center text-[#E3E3E3] max-w-[316px] sm:max-w-[666px] lg:max-w-4xl"
      >
        {data ? data?.generalSection?.description: "Your one-stop solution for maximizing your e-commerce potential. We specialize in providing comprehensive services tailored to the needs of international e-commerce businesses and dropshippers."}
      </p>

      <div className="z-20 flex flex-row justify-center mb-[14px] mt-[14px] sm:mt-[30px] sm:mb-[30px] lg:mt-[45px] lg:mb-[26px] gap-4">
        <Link
          to={data?.generalSection?.buttons[0]?.url || "/contactsales"}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="text-white text-[12.29px] sm:text-[16px] lg:text-[20px] font-light font-Montserrat bg-white/20 border-white/5 hover:bg-white/15 transition-colors duration-500 border rounded-full h-[36.86px] w-[148.68px] sm:h-[48px] sm:w-[198px] lg:h-[60px] lg:w-[242px] gap-1 inline-flex items-center justify-center"
          type="button"
        >
          {data?.generalSection?.buttons[0]?.text || "Learn More"}
        </Link>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          className="rounded-full items-center"
          style={{
            background:
              "linear-gradient(to right, rgb(83, 172, 255), rgb(40, 46, 106))",
          }}
        >
          <a
            href={data?.generalSection?.buttons[1]?.url || "https://get-started.codpowergroup.com/registration"}
            target="_blank"
            className="text-white text-[12.29px] sm:text-[16px] lg:text-[20px] font-bold font-DMSans rounded-full h-[36.86px] w-[148.68px] sm:h-[48px] sm:w-[198px] lg:h-[60px] lg:w-[242px] gap-2 inline-flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {data?.generalSection?.buttons[1]?.text || "Get Started Now"}
            <GoArrowUpRight />
          </a>
        </div>
      </div>

      <p
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="600"
        className="text-[7.68px] sm:text-[11px] lg:text-[15px] font-light font-Montserrat text-center text-[#E3E3E3]"
      >
        Focus on growth and customer satisfaction. We take care of the rest
      </p>

      <div className="flex mt-6 w-[100%] sm:mt-10 justify-center relative">

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0" // Reduce offset to make it appear earlier
          data-aos-once="false" // Ensure it appears every time
          className="relative w-[100%] lb:mb-[153px]"
        >
          <img
            className="relative z-10 w-[448.78px] sm:w-[983.29px] lg:w-[66%] mx-auto my-[50.09px] sm:my-[60.545px] lg:my-[71px]"
            src={data? data?.generalSection?.image : heroImage}
            alt="heroImage"
          />
          <img
            className="bgHomePage absolute z-10 w-[448.78px] sm:w-[983.29px] lg:b-[81px] lg:w-[100%] mx-auto my-[50.09px] sm:my-[60.545px] lg:my-[71px]"
            src={data?.generalSection?.image? data.generalSection.image.url : heroImage}
       
          />
          <motion.img
            className="absolute lg:block rounded-[20px] hidden z-10 w-[18%] right-[130px] top-[450px] bg-black opacity-100"
            src={righSide}
            alt="heroImage"
            animate={{
              y: [0, -10, 0], // Moves up and down
            }}
            transition={{
              duration: 3.5, // Slower movement
              repeat: Infinity, // Infinite loop
              ease: "easeInOut",
            }}
          />

          <motion.img
            className="absolute lg:block hidden z-10 w-[18%] left-[160px] top-[370px] opacity-100"
            src={leftSide}
            alt="heroImage"
            animate={{
              y: [0, -10, 0], // Moves up and down
            }}
            transition={{
              duration: 3.5, // Slower movement
              repeat: Infinity, // Infinite loop
              ease: "easeInOut",
            }}
          /> 

          <div
            className="absolute inset-0 bg-black/90 blur-[500px] -z-10"
            style={{
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

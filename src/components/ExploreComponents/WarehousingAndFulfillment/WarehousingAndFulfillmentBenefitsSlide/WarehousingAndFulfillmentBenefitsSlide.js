import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import "./WarehousingAndFulfillmentBenefitsSlide.css";


const WarehousingAndFulfillmentBenefitsSlide = ({data}) => {
  const companies = [
    "Improved Customer Experience",
    "Optimized Inventory Management",
    "Shipping & Delivery",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 } // Adjust threshold for triggering visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mb-20 w-full px-4 sm:px-8 lg:px-16 xl:px-24 transition-opacity duration-[1000ms] ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-[50px] scale-95"
      }`}
    >

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-white overflow-hidden">
        <div className="relative flex-grow overflow-hidden rounded-[15.36px] lg:rounded-[30px] marquee-wrapper w-full">
          <Marquee
            direction="left"
            speed={30}
            gradient={false}
            className="whitespace-nowrap"
          >
            <div className="flex items-center justify-end gap-4 sm:gap-8">
              {data?.cardSection?.cards?.map((company, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center px-[22px] py-[16px] lg:px-[45px] lg:py-[32px] text-[15.3px] sm:text-base lg:text-[30px] font-Montserrat bg-[#111427]/40 text-white/30 rounded-[15.36px] lg:rounded-[30px] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-white hover:bg-[#111427]"
                >
                  {company.title}
                </div>
              ))}
              {data?.cardSection?.cards?.map((company, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex justify-center items-center px-[22px] py-[16px] lg:px-[35px] lg:py-[32px] text-[15.3px] sm:text-base lg:text-[30px] font-Montserrat bg-[#111427]/40 text-white/30 rounded-[15.36px] lg:rounded-[30px] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-white hover:bg-[#111427]"
                >
                  {company.title}
                </div>
              ))}
              <div className="w-2 sm:w-4"></div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WarehousingAndFulfillmentBenefitsSlide;

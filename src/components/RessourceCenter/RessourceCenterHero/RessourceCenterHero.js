import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import books from "../../../assets/RessourceCenter/RessourceCenterHero/books.svg";
import Bg from "../../../assets/Dashboard/spera14.svg"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RessourceCenterHero = ({data}) => {
  useEffect(() => {
    // GSAP animation for fade-up effect
    gsap.fromTo(
      ".fade-up", // target elements with 'fade-up' class
      { opacity: 0, y: 50 }, // start with opacity 0 and y offset
      {
        opacity: 1,
        y: 0,
        duration: 1, // animation duration
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fade-up", // trigger animation when element enters viewport
          start: "top 80%", // start animation when the top of the element is 80% from the top of the viewport
          end: "top 20%", // end when the top of the element is 20% from the top
          scrub: true, // smooth scrolling animation
          once: true, // make the animation happen only once when entering the viewport
        },
      }
    );

    // Trigger the fade-up effect immediately on page load
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 50 }, // start with opacity 0 and y offset
      {
        opacity: 1,
        y: 0,
        duration: 1, // animation duration
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center mt-[36px] lg:mt-[140px] px-4">
            <img src={Bg} className="absolute w-[100%] z-[-10]"/>

      <div className="relative z-10 flex flex-col lg:flex-row items-center">
        <div className="relative flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-[100px] w-full lg:w-auto px-4 lg:px-[42.5px] lg:py-[54.5px] huge:px-[113px] huge:py-[118.5px] rounded-[30px]">
          {/* Left Section */}
          <div className="flex-1 flex justify-start">
            <div className="fade-up">
              <div className="rounded-full inline-flex items-center justify-center mt-8">
                <div className="text-white/50 text-[20px] lg:text-[40px] font-light font-Montserrat flex justify-center items-center gap-2">
                  <img src={data?.generalSection?.image || books} alt="Solution" />
                  {data?.generalSection?.heading || "Resource Center"}
                </div>
              </div>
              <h1 className="mt-4 text-[24px] lg:text-[45px] font-Montserrat font-bold tracking-normal leading-[32px] lg:leading-[60px] dark:text-white text-left">
                {data?.generalSection?.description || "Your Go-To Source for E-commerce Knowledge"}
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="fade-up relative flex justify-center lg:justify-end w-full max-w-[472px]">
            <p className="text-[16px] lg:text-[25px] font-Montserrat text-left">
              {data?.generalSection?.caption || "Stay updated with the latest trends, tips, and industry news"+
              "across various e-commerce domains"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RessourceCenterHero;

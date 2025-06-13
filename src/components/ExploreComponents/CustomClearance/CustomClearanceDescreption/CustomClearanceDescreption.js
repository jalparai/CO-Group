import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Clearance from "../../../../assets/CustomClearanceDescreptionITems/Clearance.png";
import TotalLeads from "../../../../assets/CustomClearanceDescreptionITems/TotalLeads.png";
import Documentation from "../../../../assets/CustomClearanceDescreptionITems/Documentation.svg";
import DutyCalculation from "../../../../assets/CustomClearanceDescreptionITems/DutyCalculation.svg";
import DeliveryCoordination from "../../../../assets/CustomClearanceDescreptionITems/DeliveryCoordination.svg";
import CustomsInspections from "../../../../assets/CustomClearanceDescreptionITems/CustomsInspections.svg";
import CustomsDeclarations from "../../../../assets/CustomClearanceDescreptionITems/CustomsDeclarations.svg";

const descriptions = [
  {
    imgSrc: Documentation,
    title: "Documentation",
    description:
      "We assist you in preparing all necessary documentation for customs clearance, including invoices, packing lists, and certificates of origin.",
  },
  {
    imgSrc: DutyCalculation,
    title: "Duty Calculation",
    description:
      "We assist you in calculating accurate customs duties to ensure compliance and minimize unexpected costs.",
  },
  {
    imgSrc: CustomsInspections,
    title: "Customs Inspections",
    description:
      "We help you prepare for customs inspections by providing guidance and support to ensure your shipments pass through smoothly.",
  },
  {
    imgSrc: DeliveryCoordination,
    title: "Delivery Coordination",
    description:
      "We coordinate the timely delivery of your goods once customs clearance has been successfully completed.",
  },
  {
    imgSrc: CustomsDeclarations,
    title: "Customs Declarations",
    description:
      "We handle the preparation and submission of customs declarations to ensure accurate and compliant reporting.",
  },
];

const CustomClearanceDescreption = ({data}) => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(Array(descriptions.length).fill(false));
  const [cards, setCards] = useState(data?.cardSection?.cards || descriptions);
  // Check if an item is in the viewport
  const handleScroll = () => {
    itemRefs.current.forEach((ref, index) => {
      const rect = ref?.getBoundingClientRect();
      if (rect?.top >= 0 && rect?.bottom <= window.innerHeight) {
        setIsVisible((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }
    });
  };

  useEffect(() => {
    setCards(data?.cardSection?.cards || descriptions);
  }, [data]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint for mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(0);
  };

  const handleClick = (index) => {
    if (isMobile) {
      setHoverIndex(hoverIndex === index ? -1 : index); // Toggle the selected item
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and below
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex flex-col items-center justify-center mt-[48px] lg:mt-[158px] mb-[96px] lg:mb-[178px] px-4"
    >
      <div className="flex justify-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[18px]">
        <div className="whitespace-pre-line text-[#E61D2D] text-[12.8px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]">
         {data?.title? data.title : "CUSTOMS CLEARANCE PROCESS"}
        </div>
      </div>
      <div className="relative text-center mb-[48.49px] sm:mb-[58.745px] lg:mb-[178px]">
        <h1 className="whitespace-pre-line text-[28px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[1.2] w-[363px] lg:w-auto">
         {data?.cardSection?.heading? data?.cardSection?.heading : "How Our Customs Clearance Service Works"}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-[100px] space-y-8 lg:space-y-0">
        <div className="relative w-[250px] lg:w-auto mx-auto hidden lg:block">
          <motion.img
            src={data?.cardSection?.image || Clearance}
            alt="Clearance"
            initial={{ opacity: 0, y: 50 }} // Fade-in and move up
            animate={{ opacity: 1, y: 0 }} // Fade-in and move up
            exit={{ opacity: 0, y: 50 }} // Fade-out and move down
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.img
            src={TotalLeads}
            alt="Total Leads"
            className="absolute -bottom-10 -left-8 lg:-bottom-20 lg:-left-24 pointer-events-none"
            initial={{ opacity: 0, y: 50 }} // Fade-in and move up
            animate={{ opacity: 1, y: 0 }} // Fade-in and move up
            exit={{ opacity: 0, y: 50 }} // Fade-out and move down
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
        <div className="w-full max-w-[566px] mx-auto">
          {cards?.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)} // Reference each item
              onClick={() => handleClick(index)} // Handle click on mobile
              onMouseEnter={() => !isMobile && handleMouseEnter(index)} // Hover for desktop
              onMouseLeave={() => !isMobile && handleMouseLeave(0)} // Default to first item on leave
              className={`py-4 w-full mx-auto px-4 lg:px-[40px] cursor-pointer transition-transform duration-300 ease-in-out ${
                hoverIndex === index
                  ? "scale-105 border-[#0587FF] border bg-[#0052B4]/20"
                  : "border-transparent bg-transparent"
              } rounded-[20px] lg:rounded-[30px]`}
              initial={{ opacity: 0, y: 50 }} // Start invisible and below
              animate={{ opacity: isVisible[index] ? 1 : 0, y: isVisible[index] ? 0 : 50 }} // Fade-in and move up
              exit={{ opacity: 0, y: 50 }} // Fade-out and move down when leaving
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="flex flex-1 items-center whitespace-pre-line ">
                <img
                  src={item.image || item.imgSrc}
                  alt={item.title}
                  className="w-10 h-10 lg:w-auto lg:h-auto"
                />
                <h3 className="text-[20px] lg:text-[30px] font-Montserrat font-bold ml-4">
                  {item.title}
                </h3>
              </div>

              <AnimatePresence>
                {isVisible[index] && hoverIndex === index && (
                  <motion.p
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      exit: { duration: 0.3 },
                    }}
                    className="whitespace-pre-line text-[16px] lg:text-[20px] font-Montserrat font-light mt-[15px] lg:mt-[25px]"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="relative w-[250px] lg:w-auto mx-auto block lg:hidden">
          <motion.img
            src={Clearance}
            alt="Clearance"
            initial={{ opacity: 0, y: 50 }} // Fade-in and move up
            animate={{ opacity: 1, y: 0 }} // Fade-in and move up
            exit={{ opacity: 0, y: 50 }} // Fade-out and move down
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.img
            src={TotalLeads}
            alt="Total Leads"
            className="absolute -bottom-10 -left-8 lg:-bottom-20 lg:-left-24 pointer-events-none"
            initial={{ opacity: 0, y: 50 }} // Fade-in and move up
            animate={{ opacity: 1, y: 0 }} // Fade-in and move up
            exit={{ opacity: 0, y: 50 }} // Fade-out and move down
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CustomClearanceDescreption;

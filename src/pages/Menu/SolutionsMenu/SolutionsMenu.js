import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation for routing

import Ellipse from "../../../assets/ProductsMenuItems/Ellipse.png";
import Affiliate from "../../../assets/SolutionsMenu/Affiliate.svg";
import CODRemittance from "../../../assets/SolutionsMenu/CODRemittance.svg";
import CallCenter from "../../../assets/SolutionsMenu/CallCenter.svg";
import Clearance from "../../../assets/SolutionsMenu/Clearance.svg";
import Shipping from "../../../assets/SolutionsMenu/Shipping.svg";
import Sourcing from "../../../assets/SolutionsMenu/Sourcing.svg";
import Warehousing from "../../../assets/SolutionsMenu/Warehousing.svg";
import gift from "../../../assets/SolutionsMenu/gift.svg";
import truk from "../../../assets/SolutionsMenu/truk.png";
import lgArrow from "../../../assets/Arrow/lgArrow.svg";
import { set } from "lodash";

// Define animation for lgArrow
const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Define animations for the sections
const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const backgroundVariants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Define the animated arrow
const LgArrow = ({ isHovered }) => (
  <motion.img
    src={lgArrow}
    alt="lgArrow"
    className="w-[35px]"
    initial="hidden"
    animate={isHovered ? "visible" : "hidden"}
    variants={arrowVariants}
  />
);

const SolutionsMenu = ({data}) => {
  const location = useLocation(); // Get the current location
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Close the menu when a link is clicked

  const solutionsData = [
    {
      title: "Sourcing & Purchasing",
      description:
        "Don't stress over finding trustworthy suppliers. We handle everything fully tailored to your needs.",
      imgSrc: Sourcing,
      link: "/Sourcing",
    },
    {
      title: "Custom Clearance",
      description:
        "We'll facilitate customs clearance and manage all required documentation for your shipment.",
      imgSrc: Clearance,
      link: "/CustomClearance",
    },
    {
      title: "COD Remittance",
      description:
        "We handle payment collection from customers and remit them to you. We provide global money transfers.",
      imgSrc: CODRemittance,
      link: "/CODRemittance",
    },
    {
      title: "Warehousing & Fulfillment",
      description:
        "Our warehouses in MENA and Europe securely store and track products, while our dashboard streamlines logistics.",
      imgSrc: Warehousing,
      link: "/WarehousingAndFulfillment",
    },
  ];

  const exploreData = [
    {
      title: "Shipping",
      description:
        "We offer secure door-to-door delivery and warehousing at competitive rates.",
      imgSrc: Shipping,
      link: "/Shipping",
    },
    {
      title: "Call Center",
      description:
        "Our experienced call center agents confirm orders and upsell through our call center operator service.",
      imgSrc: CallCenter,
      link: "/CallCenter",
    },
    {
      title: "Affiliate",
      description:
        "Our affiliate programme allows you to earn commissions by promoting a variety of products.",
      imgSrc: Affiliate,
      link: "/Affiliation",
    },
  ];

  const [solsData, setSolsData] = useState(solutionsData);
  const [expData, setExploreData] = useState(exploreData);
  const [countriesCoveredData, setCountriesCoveredData] = useState([]);
  useEffect(() => {
    if (data && Array.isArray(data)) {
      // Use find() instead of findOne()
      const sols = data.find(item => item?.cardSection?.heading === "Solutions") || solutionsData;
      const exp = data.find(item => item?.cardSection?.heading === "Explore") || exploreData;
      const countriesCovered = data.find(item => item?.cardSection?.heading === "Countries Covered") || [];
      
      setSolsData(sols?.cardSection?.cards || solutionsData);
      setExploreData(exp?.cardSection?.cards || exploreData);
      setCountriesCoveredData(countriesCovered?.cardSection?.cards || []);
    }
  }, [data]);
  // Set hoveredIndex based on the current location
  useEffect(() => {
    const currentPath = location.pathname;
    const solutionIndex = solutionsData.findIndex(solution => solution.link === currentPath);
    const exploreIndex = exploreData.findIndex(explore => explore.link === currentPath);
    
    if (solutionIndex !== -1) {
      setHoveredIndex(solutionIndex);
    } else if (exploreIndex !== -1) {
      setHoveredIndex(exploreIndex + 4); // Adjust for the explore section
    } else {
      setHoveredIndex(null);
    }
  }, [location.pathname, solutionsData, exploreData]);

  // Function to handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <motion.div
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen  mt-10 bg-black bg-cover bg-center bg-no-repeat px-[2500px] pb-[145px] pt-[150px] ${isMenuOpen ? '' : 'hidden'}`} // Hide menu if closed
      style={{
        backgroundImage: `url(${Ellipse})`,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex flex-col justify-center md:flex-row lg:gap-[50px]"
      >
        {/* Left Section - Solutions */}
        <motion.div variants={itemVariants}>
          <h2 className="text-sm md:text-lg px-4 md:px-8 font-bold font-Inter tracking-widest uppercase text-[#BFC0CB] my-[26px]">
            SOLUTIONS
          </h2>

          <div className="">
            {solsData.map((solution, index) => (
              <Link to={solutionsData[index].link} key={index} onClick={handleLinkClick}> {/* Close menu on link click */}
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`flex items-start hover:bg-[#268AFF]/10 hover:rounded-[20px] px-[30px] py-[18px] rounded-[20px] cursor-pointer ${hoveredIndex === index ? 'bg-[#268AFF]/10' : ''}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <img
                        src={solution.image}
                        alt={`${solution.title} Icon`}
                        className="w-[35px] h-auto"
                      />
                      <h3 className="text-[18px] font-bold font-Montserrat">
                        {solution.subtitle}
                      </h3>
                      <LgArrow isHovered={hoveredIndex === index} />
                    </div>
                    <p className="text-[14px] font-light leading-5 w-[358px] ml-1">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Middle Section - Explore */}
        <motion.div variants={itemVariants} className="space-y-[0px] ">
          <div className="md:mb-[75px]"></div>

          <div className="space-y-[20px] md:space-y-[0px]">
            {expData.slice(0,-1).map((explore, index) => (
              <Link to={exploreData[index]?.link || "www.codpowergroup.com"} key={index} onClick={handleLinkClick}> {/* Close menu on link click */}
                <div
                  onMouseEnter={() => setHoveredIndex(index + 4)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`flex items-start hover:bg-[#268AFF]/10 hover:rounded-[20px] rounded-[20px] px-[30px] py-[18px] cursor-pointer ${hoveredIndex === index + 4 ? 'bg-[#268AFF]/10' : ''}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <img
                        src={explore.image}
                        alt={`${explore.title} Icon`}
                        className="w-[35px] h-auto"
                      />
                      <h3 className="text-[18px] font-bold font-Montserrat">
                        {explore.subtitle}
                      </h3>
                      <LgArrow isHovered={hoveredIndex === index + 4} />
                    </div>
                    <p className="text-[14px] font-light leading-5 w-[358px] ml-1">
                      {explore.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex space-x-[10px] md:space-x-[20px] mt-[19px] px-[10px] md:px-[14.5px] py-[10px] md:py-[12.5px] rounded-[10px] md:rounded-[20px] bg-[#FFFFFF]/10">
                  <img
                    src={expData[3]?.image || gift}
                    alt="Sourcing Icon"
                    className="w-[30px] md:w-auto"
                  />
                  <p className="text-[12px] md:text-[14px] font-light leading-[20px] md:leading-[25px] font-Montserrat w-[300px] md:w-[357px]">
                    {expData[3]?.subtitle || "We offer all the services an e-commerce operator could ask"+
                    "for. From beginners to advanced, we have something for"+
                    "everyone."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Use Cases */}
        <motion.div
          variants={itemVariants}
          className="space-y-[15px] mt-[50px] md:mt-[0px]"
        >
          <h2 className="text-[16px] md:text-[20px] font-bold font-Inter tracking-[1.5px] uppercase text-[#BFC0CB] my-[29px]">
            EXPLORE
          </h2>

          <div className="">
            <Link to="/CountriesCovered" className="cursor-pointer" onClick={handleLinkClick}> {/* Close menu on link click */}
              <div className="flex-1">
                <div className="flex">
                  <h3
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="text-[16px] md:text-[20px] font-bold font-Montserrat tracking-[1.5px] mr-3"
                  >
                    {countriesCoveredData?.cardSection?.heading || "Countries Covered"}
                  </h3>
                  <LgArrow isHovered={isHovered} />
                </div>
                <p className="text-[12px] md:text-[14px] mt-[15px] mb-[34px] font-light leading-[20px] md:leading-[25px] font-Montserrat w-[350px] md:w-[300px]">
                  {countriesCoveredData?.cardSection?.description || "We have a strong presence in several European countries, as"+
                  "well as in many Middle East countries."}
                </p>
              </div>
            </Link>

            <div className="mt-4 grid space-y-3">
              <div className="overflow-hidden rounded-[30px] w-[253px] h-auto">
                <motion.img
                  src={countriesCoveredData?.cardSection?.cards[0].image || truk}
                  alt="Truck"
                  className="rounded-[30px]"
                  style={{ cursor: "pointer" }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="overflow-hidden rounded-[30px] w-[253px] h-auto">
                <motion.img
                  src={countriesCoveredData?.cardSection?.cards[1].image || truk}
                  alt="Truck"
                  className="rounded-[30px]"
                  style={{ cursor: "pointer" }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionsMenu;
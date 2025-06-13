import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import CachOnDelivery from "../../../assets/ProductsMenuItems/CachOnDelivery.png";
import CachOnDeliveryicon from "../../../assets/ProductsMenuItems/CachOnDeliveryicon.svg";
import Affiliation from "../../../assets/ProductsMenuItems/Affiliation.svg";
import Rectangle from "../../../assets/ProductsMenuItems/Rectangle.png";
import Ellipse from "../../../assets/ProductsMenuItems/Ellipse.png";
import lgArrow from "../../../assets/Arrow/lgArrow.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const containerVariants = {
  hidden: { opacity: 0, y: 0 }, // Start position when closing
  visible: {
    opacity: 1,
    y: 0, // Final position when open
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2, // Staggered delay between children
    },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }, // Reverse effect when closing
};

// Reverse background image animation
const backgroundVariants = {
  hidden: {
    y: "-100%", // Positioned above when hidden
  },
  visible: {
    y: "0%", // Drop down into view
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    y: "-100%", // Move up again when closing
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -30 }, // Start each item from above
  visible: {
    opacity: 1,
    y: 0, // Move to final position
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Define animation for lgArrow (if needed)
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

const ProductsMenu = ({data}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to manage menu open/close

  const location = useLocation(); // Get the current location
  const [isHoveredCOD, setIsHoveredCOD] = useState(false);
  const [isHoveredAffiliation, setIsHoveredAffiliation] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHoveredPhotoCOD, setIsHoveredPhotoCOD] = useState(false);
  const [isHoveredPhotoAffiliation, setIssHoveredPhotoAffiliation] = useState(false);

  useEffect(()=>{}, [data])
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // useEffect(() => {
  //   if (!isMenuOpen) {
  //     setHoveredItem(null);
  //     setIsHoveredCOD(false);
  //     setIsHoveredAffiliation(false);
  //   }
  // }, [isMenuOpen]);

  const navigate = useNavigate(); // Initialize navigation
  
  const handleLinkClick = (path) => {
    setIsMenuOpen(false); // Close the dropdown
    setTimeout(() => {
      navigate(path); // Navigate to the new page
      window.location.reload(); // Force a full page reload
    }, 50); // Small delay for smooth transition
  };
  
  const isActive = (path) => location.pathname === path; // Check if the current path matches

  return (
    <motion.div
      className="min-h-screen bg-black bg-cover bg-center bg-no-repeat mt-10 px-[2500px] pb-[145px] pt-[130px]"
      variants={backgroundVariants}
      initial="hidden"
      animate={isMenuOpen ? "visible" : "hidden"} // Toggle animation state
      style={{
        backgroundImage: `url(${Ellipse})`,
      }}
    >
      <motion.div
        className="container w-auto md:mx-auto mx-[20px] flex flex-col justify-center md:flex-row space-y-6 md:space-y-0 md:space-x-[55px] huge:space-x-[155px]"
        variants={containerVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"} // Toggle based on isMenuOpen
      >
        {/* Left - Products */}
        <motion.div className="w-full md:w-[733px]" variants={itemVariants}>
          <h2 className="text-[18px] md:text-[20px] font-bold font-Inter tracking-[1.5px] uppercase text-[#BFC0CB] my-[20px] md:my-[61px]">
            Products
          </h2>

          <div className="space-y-[30px] md:space-y-[30px]">
            {/* Cash on Delivery Platform */}
            <motion.div
              className="flex flex-col md:flex-row items-center md:space-x-[50px]"
              variants={itemVariants}
            >
              <div
                className="relative flex items-center w-[369px] md:w-[262px] h-[270.52px] md:h-[180px] border border-[#333333] bg-[#D9D9D9]/[2%] rounded-[20px] overflow-hidden"
                onMouseEnter={() => setIsHoveredPhotoCOD(true)}
                onMouseLeave={() => setIsHoveredPhotoCOD(false)}
              >
                <motion.img
                  src={CachOnDelivery}
                  alt="CashOnDelivery"
                  className="absolute w-[262px] h-auto"
                  style={{ right: 0 }}
                  initial={{ x: "50%" }} // Start with 50% of the image hidden outside the right border
                  animate={{
                    x: isHoveredPhotoCOD ? "0%" : "25%", // Slide the image in and stop with 50% hidden on the left border
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-start mt-[21px] md:mt-0">
                <div
                  className="flex justify-center bg-[#1585ED]/10 px-[10px] pt-[10px] mb-[21px] cursor-pointer rounded-[15px] transition-colors duration-700"
                  style={{
                    backdropFilter: "blur(50px)",
                    boxShadow: `1px 4px 14.2px rgba(70, 151, 247, 0.2), inset 0px 4px 18.6px rgba(0, 0, 0, 0.99)`,
                  }}
                >
                  <motion.img
                    src={data[0]?.cardSection?.cards[0]?.image || CachOnDeliveryicon}
                    alt="CachOnDeliveryicon"
                    className="mb-[10.5px] w-[25px] h-auto"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  />
                </div>

                <h3
                  className={`text-[22px] md:text-[20px] font-bold font-Inter tracking-[1.5px] mb-[15px] bg-gradient-to-r from-[#AED3FF] to-[#0A305D] bg-clip-text text-transparent ${isActive('/CashOnDelivery') ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity duration-700 flex items-center`}
                  onMouseEnter={() => setIsHoveredCOD(true)}
                  onMouseLeave={() => setIsHoveredCOD(false)}
                >
                <button onClick={() => handleLinkClick('/CashOnDelivery')}>
  {data[0]?.cardSection?.cards[1]?.subtitle || "Cash on Delivery Platform"}
</button>
                  <span className="ml-2 inline-block w-[35px]">
                    {isHoveredCOD || isActive('/CashOnDelivery') ? (
                      <motion.img
                        src={lgArrow}
                        alt="lgArrow"
                        className="w-auto"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={arrowVariants}
                      />
                    ) : null}
                  </span>
                </h3>

                <p className="text-[12px] md:text-[13px] font-light leading-[22px] md:leading-[22px] font-Montserrat w-full md:w-[357px] huge:w-[457px] text-gray-400">
                 {data[0]?.cardSection?.cards[1]?.description ||  "Expand your ecom market reach across Europe, MENA, and beyond"+
                  "by leveraging our services to sell your products"+
                  "internationally."}
                </p>
              </div>
            </motion.div>

            {/* Affiliation Platform */}
            <motion.div
              className="flex flex-col md:flex-row items-center md:space-x-[50px]"
              variants={itemVariants}
            >
              <div
                className="relative flex items-center w-[369px] md:w-[262px] h-[270.52px] md:h-[180px] border border-[#333333] bg-[#D9D9D9]/[2%] rounded-[20px] overflow-hidden"
                onMouseEnter={() => setIssHoveredPhotoAffiliation(true)}
                onMouseLeave={() => setIssHoveredPhotoAffiliation(false)}
              >
                <motion.img
                  src={data[0]?.cardSection?.cards[2].image ||  CachOnDelivery}
                  alt="CashOnDelivery"
                  className="absolute w-[262px] h-auto"
                  style={{ left: 0 }}
                  initial={{ x: "50%" }} // Start with 50% of the image hidden outside the right border
                  animate={{
                    x: isHoveredPhotoAffiliation ? "0%" : "-25%", // Slide the image in and stop with 50% hidden on the left border
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-start mt-4 md:mt-0">
                <div
                  className="flex justify-center bg-[#ED1515]/10 transition-colors duration-700 px-[10px] pt-[12px] mb-[21px] cursor-pointer rounded-[15px]"
                  style={{
                    backdropFilter: "blur(50px)",
                    boxShadow: `1px 4px 14.2px rgba(240, 149, 149, 0.2), inset 0px 4px 18.6px rgba(52, 1, 1, 0.99)`,
                  }}
                >
                  <motion.img
                    src={data[0]?.cardSection?.cards[3]?.image || Affiliation}
                    alt="Affiliationicon"
                    className="mb-[10.5px] w-[25px] h-auto"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  />
                </div>
                <h3
                  className={`text-[22px] md:text-[20px] font-bold font-Inter tracking-[1.5px] mb-[15px] bg-gradient-to-r from-[#FBC5AF] to-[#7D1416] bg-clip-text text-transparent ${isActive('/Affiliation') ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity duration-700 flex items-center`}
                  onMouseEnter={() => setIsHoveredAffiliation(true)}
                  onMouseLeave={() => setIsHoveredAffiliation(false)}
                >
                <button onClick={() => handleLinkClick('/Affiliation')}>
  {data[0]?.cardSection?.cards[3]?.subtitle || "Affiliation Platform"}
              </button>
                  <span className="ml-2 inline-block w-[35px]">
                    {isHoveredAffiliation || isActive('/Affiliation') ? (
                      <motion.img
                        src={lgArrow}
                        alt="lgArrow"
                        className="w-auto"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={arrowVariants}
                      />
                    ) : null}
                  </span>
                </h3>

                <p className="text-[12px] md:text-[14px] font-light leading-[22px] md:leading-[25px] font-Montserrat w-full md:w-[357px] huge:w-[457px] text-gray-400">
                  {data[0]?.cardSection?.cards[3]?.description || "Promote a variety of offers and products available on our"+
                  "platform, and earn significant commissions in the process."}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Use Cases */}
        <motion.div className="w-full md:w-auto" variants={itemVariants}>
          <h2 className="text-[18px] md:text-[20px] font-bold font-Inter tracking-[1.5px] uppercase text-[#BFC0CB] my-[20px] md:my-[61px]">
            {data[1]?.cardSection?.heading || "Use Cases"}
          </h2>

          <ul className="space-y-[15px] md:space-y-[18px]">
            {data[1]?.cardSection?.cards.map(
              (item) => (
                <li
                  key={item}
                  className={`flex items-center text-[18px] md:text-[20px] text-[#3D3D3D] hover:text-white font-Inter tracking-[1.5px] transition-all ${hoveredItem === item ? 'text-white' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleLinkClick(item.description)}
                >
                  {/* Arrow animation */}
                  {hoveredItem === item && (
                    <motion.span
                      className={`mr-[10px] md:mr-[20px]`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      →
                    </motion.span>
                  )}

                  {/* Text animation */}
                  <motion.span
                    initial={{ x: 0 }} // Start position
                    animate={{
                      x: hoveredItem === item ? 10 : 0, // Move right by 10px when hovered
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {item.subtitle}
                  </motion.span>
                </li>
              )
            )}
          </ul>

          <div className="mt-8">
            <div className="relative flex items-center justify-center overflow-hidden w-[278px] h-[250px] lg:w-[428px] bg-[#231F2F] rounded-[30px] md:rounded-[40px]">
              <motion.div
                className="absolute w-full h-full"
                initial={{
                  y: 40,
                  scale: 0.8,
                }}
                whileHover={{
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                }}
              >
                <img
                  src={data[1]?.cardSection?.cards[3].image || Rectangle}
                  alt="Animated Rectangle"
                  className="w-full h-full rounded-[30px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductsMenu;
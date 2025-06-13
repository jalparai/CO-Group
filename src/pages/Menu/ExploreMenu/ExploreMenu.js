import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 

import Ellipse from "../../../assets/ProductsMenuItems/Ellipse.png";
import Stock from "../../../assets/ExploreMenuItems/Stock.png";
import Truck from "../../../assets/ExploreMenuItems/Truck.png";
import Blog from "../../../assets/ExploreMenuItems/Blog.svg";
import Countries from "../../../assets/ExploreMenuItems/Countries.svg";
import Guides from "../../../assets/ExploreMenuItems/Guides.svg";
import Help from "../../../assets/ExploreMenuItems/Help.svg";
import Reviews from "../../../assets/ExploreMenuItems/Reviews.svg";
import lgArrow from "../../../assets/Arrow/lgArrow.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
  hoverHidden: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const solutions = [
  {
    icon: Countries,
    title: "Countries Covered",
    description: "We operate in several countries.",
    link: "/CountriesCovered",
  },
  {
    icon: Guides,
    title: "Guides",
    description: "Explore our guides.",
    link: "/guides",
  },
  {
    icon: Blog,
    title: "Blog",
    description: "All the latest news in our blogs.",
    link: "/Blog",
  },
  {
    icon: Help,
    title: "Help Center",
    description: "We support you and meet your needs.",
    link: "/HelpCenter",
  }
];

const ExploreMenu = ({data}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hovered, setHovered] = useState(null);
  const location = useLocation(); // Get the current location
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to manage menu open/close
  const [solsData, setSolsData] = useState(solutions);
  const [expData, setExploreData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      // Use find() instead of findOne()
      const sols = data.find(item => item?.cardSection?.heading?.toLowerCase().includes("explore")) || solutions;
      const exp = data.find(item => item?.cardSection?.heading?.toLowerCase().includes("products")) || [];
      
      setSolsData(sols?.cardSection?.cards || solutions);
      setExploreData(exp?.cardSection?.cards || []);
     
    }
  }, [data]);

  
  useEffect(() => {
    const currentPath = location.pathname;
    const solutionIndex = solutions.findIndex(solution => solution.link === currentPath);
    
    if (solutionIndex !== -1) {
      setHoveredIndex(solutionIndex);
    } else {
      setHoveredIndex(null);
    }
  }, [location.pathname, solutions]);

  useEffect(() => {
    setIsMenuOpen(false); // Automatically close menu on page reload/navigation
  }, [location.pathname]);
  
  const navigate = useNavigate(); // Initialize navigation
    
  const handleLinkClick = (path) => {
    setIsMenuOpen(false); // Close the dropdown
    setTimeout(() => {
      navigate(path); // Navigate to the new page
      window.location.reload(); // Force a full page reload
    }, 50); // Small delay for smooth transition
  };
  
  return (
    <motion.div
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen  mt-10 bg-black bg-cover bg-center bg-no-repeat px-[2500px] pb-[145px] pt-[160px]"
      style={{
        backgroundImage: `url(${Ellipse})`,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container w-auto mr-[130px] flex flex-col md:flex-row justify-between items-start space-x-0 md:space-x-[209px] px-4 md:px-0"
      >
        {/* Left Section - Solutions */}
        <motion.div variants={itemVariants} className="space-y-[32px]">
          <h2 className="text-[18px] md:text-[20px] font-bold font-Inter tracking-[1.5px] uppercase text-[#BFC0CB] mt-[31px] mb-[51px]">
            EXPLORE
          </h2>
          {solsData.map((item, index) => {
            const isActive = location.pathname === item.link; // Check if the link is active
            return (    
              <div key={index} className="md:space-y-[22px]">
                <div className="flex items-start">
                  <Link to={solutions[index].link} onClick={() => handleLinkClick(solutions[index].link)}>
                    <div className="relative flex-1">
                      <motion.div
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0.6 }}
                        animate={{
                          opacity: isActive || hoveredIndex === index ? 1 : 0.4, // Apply active style
                          transition: { duration: 0.3 },
                        }}
                        className="flex space-x-[10px] md:space-x-[20px] cursor-pointer"
                      >
                        <img
                          src={item.image || item.icon}
                          alt={item.title}
                          className="w-[24px] md:w-auto py-[11px] px-[13px] border border-[#FFFFFF] rounded-[15px] bg-gradient-to-br from-[#CCCCCC]/25 via-[#F2F2F2]/45 to-[#949494]/25"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-[20px] md:text-[24px] font-bold font-Inter tracking-[1.5px]">
                            {item.subtitle || item.title}
                          </h3>
                          <p className="text-[12px] md:text-[14px] font-light leading-[22px] md:leading-[25px] font-Montserrat w-[280px] md:w-[357px]">
                            {item.description}
                          </p>
                        </div>

                        <motion.img
                          src={lgArrow}
                          alt="lgArrow"
                          className="absolute right-0"
                          variants={arrowVariants}
                          animate={
                            hoveredIndex === index || isActive
                              ? "visible"
                              : "hoverHidden"
                          }
                        />
                      </motion.div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Right Section - Use Cases */}
        <motion.div
          variants={itemVariants}
          className="space-y-[32px] mt-12 md:mt-0"
        >
          <h2 className="text-[18px] md:text-[20px] font-bold font-Inter tracking-[1.5px] uppercase text-[#BFC0CB] mt-[31px] mb-[51px]">
            PRODUCTS
          </h2>

          <div className="relative">
            <div className="flex-1">
              <Link to="/Sourcing" onClick={() => handleLinkClick("/Sourcing")}>
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex space-x-[10px] md:space-x-[21px] cursor-pointer"
                >
                  <h3 className="text-[20px] md:text-[25px] font-bold font-Inter tracking-[1.5px] w-[400px]">
                    {expData?.cardSection?.cards[0]?.subtitle || "Cash on Delivery Platform"}
                  </h3>
                  <div className="text-lg md:text-xl text-white">
                    <motion.img
                      src={lgArrow}
                      alt="lgArrow"
                      className="w-auto"
                      variants={arrowVariants}
                      animate={hovered === true ? "visible" : "hoverHidden"}
                    />
                  </div>
                </div>
              </Link>
              <p className="text-[12px] md:text-[14px] mt-[24px] mb-[34px] font-light leading-[22px] md:leading-[25px] font-Montserrat w-[390px]">
                {expData?.cardSection?.cards[0]?.description || "This is your Cash on Delivery platform, tailored for sellers an"+
                "affiliates. Our streamlined system can enhance your onlin"+
                "commerce experience"}
              </p>
            </div>

            <div className="absolute flex flex-row space-x-2 items-center">
              {/* Stock Div - Starts Opened */}
              <motion.div
                className="flex h-[245px] rounded-[29px] overflow-hidden"
                initial={{ width: "326px" }} // Start opened
                animate={{
                  width:
                    hovered === "stock" || hovered === "truck"
                      ? "150px"
                      : "326px",
                }}
                onHoverStart={() => setHovered("stock")}
                onHoverEnd={() => setHovered(null)}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={expData?.cardSection?.cards[1]?.image ||  Stock}
                  alt="Stock"
                  className="object-cover rounded-[29px] object-right w-full h-full transform scale-125"
                />
              </motion.div>

              {/* Truck Div - Starts Closed */}
              <motion.div
                className="flex h-[245px] rounded-[29px] overflow-hidden"
                initial={{ width: "150px" }} // Start closed
                animate={{
                  width:
                    hovered === "stock" || hovered === "truck"
                      ? "326px"
                      : "150px",
                }}
                onHoverStart={() => setHovered("truck")}
                onHoverEnd={() => setHovered(null)}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={expData?.cardSection?.cards[1]?.image || Truck}
                  alt="Truck"
                  className="object-cover object-right-bottom rounded-[29px] w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExploreMenu;
import { useState, useRef, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/COD Power Group Logo.webp";
import { ProductsMenu, ExploreMenu, SolutionsMenu } from "../../pages/index"; // Ensure correct imports
import Support from "../../assets/NavBarIcon/Vector.svg";
import MobileDropdownMenu from "./MobileDropdownMenu";

export default function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is rendered
  }, []);

  // States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null); // Track hovered menu
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledPage, setIsScrolledPage] = useState(false);

  // mobile
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const toggleDropdown = (setDropdown) => {
    setProductsOpen(false);
    setSolutionsOpen(false);
    setExploreOpen(false);
    setPricingOpen(false);
    setDropdown((prev) => !prev); // Toggle the clicked dropdown only
  };
  ///////////////////////////////////////////
  const navigate = useNavigate();
  const productsMenuRef = useRef(null);
  const solutionsMenuRef = useRef(null);
  const exploreMenuRef = useRef(null);

  // Handlers
  const handleLogoClick = () => {
    navigate("/");
  };

  // Function to close all dropdowns
  const handleMenuItemClick = () => {
    setIsProductsMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsExploreMenuOpen(false);
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScrolledPage(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  // Menu Hover States
  const handleMenuHover = (menu, setOpen) => {
    setOpen(true);
    setHoveredMenu(menu);
  };

  const handleMenuLeave = (setOpen) => {
    setOpen(false);
    setHoveredMenu(null);
    setIsScrolled(false);
  };

  useEffect(() => {
    const handleScroll = (ref) => {
      setIsScrolled(ref.current?.scrollTop > 15);
    };

    const productsScrollHandler = () => handleScroll(productsMenuRef);
    const solutionsScrollHandler = () => handleScroll(solutionsMenuRef);
    const exploreScrollHandler = () => handleScroll(exploreMenuRef);

    const CurrentProductsMenuRef = productsMenuRef.current;
    const CurrentSolutionsMenuRef = solutionsMenuRef.current;
    const CurrentExploreMenuRef = exploreMenuRef.current;

    if (productsMenuRef.current) {
      productsMenuRef.current.addEventListener("scroll", productsScrollHandler);
    }
    if (solutionsMenuRef.current) {
      solutionsMenuRef.current.addEventListener(
        "scroll",
        solutionsScrollHandler
      );
    }
    if (exploreMenuRef.current) {
      exploreMenuRef.current.addEventListener("scroll", exploreScrollHandler);
    }

    return () => {
      if (CurrentProductsMenuRef) {
        CurrentProductsMenuRef.removeEventListener(
          "scroll",
          productsScrollHandler
        );
      }
      if (CurrentSolutionsMenuRef) {
        CurrentSolutionsMenuRef.removeEventListener(
          "scroll",
          solutionsScrollHandler
        );
      }
      if (CurrentExploreMenuRef) {
        CurrentExploreMenuRef.removeEventListener(
          "scroll",
          exploreScrollHandler
        );
      }
    };
  }, [isProductsMenuOpen, isSolutionsMenuOpen, isExploreMenuOpen]);

  // Add useEffect to handle body scroll
  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);


  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolledPage(true);
      } else {
        setIsScrolledPage(false);
      }

      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    className={`lg:fixed top-0 left-0 right-0 border-b border-[#373737] z-[3000] backdrop-blur-lg transition-all duration-300 ${
      isScrolledPage
        ? "lg:h-[103px] bg-black/50 shadow-md"
        : "lg:h-[143px] bg-black/30"
    } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    
    >
      <div className="mx-auto w-full max-w-[1271px] px-4 lg:px-8 h-full">
        <nav
          aria-label="Global"
          className="flex items-center justify-between h-full"
        >
          <div className="lg:flex items-center lg:flex-1 h-full">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="hidden lg:block z-20"
            >
              <span className="sr-only">Your Company</span>
              <img alt="logo" src={logo} className="h-[50.52px] w-[110px]" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex lg:gap-x-8 ml-[64px] h-full items-center">
              {/* Products Dropdown */}
              <div
                className={`relative inline-block `}
                onMouseEnter={() =>
                  handleMenuHover("Products", setIsProductsMenuOpen)
                }
                onMouseLeave={() => handleMenuLeave(setIsProductsMenuOpen)}
              >
                <Link
                  onClick={handleMenuItemClick}
                  className={`inline-flex items-center text-base text-[16.8px] font-Montserrat leading-6 transition-colors duration-300 ${
                    hoveredMenu === "Products"
                      ? "text-[#338AF3] z-0"
                      : "text-[#AFAFAF] z-10"
                  }`}
                >
                  <div
                    className={` flex justify-center items-center ${
                      hoveredMenu === "Products" ? "z-20" : "z-20"
                    }`}
                  >
                    Products{" "}
                    <IoIosArrowDown
                      className={`ml-1 transition-transform duration-300 ${
                        hoveredMenu === "Products" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </Link>
                {isProductsMenuOpen && (
                  <div
                    ref={productsMenuRef}
                    className={`absolute -top-20 left-[420px] transform -translate-x-1/2 rounded-b-[30px] shadow-lg ring-1 ring-black ring-opacity-5 max-h-[800px] overflow-y-auto ${
                      isScrolled ? "z-50" : "z-0"
                    }`}
                  >
                    <ProductsMenu isMenuOpen={isProductsMenuOpen} />
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className={`relative inline-block `}
                onMouseEnter={() =>
                  handleMenuHover("solutions", setIsSolutionsMenuOpen)
                }
                onMouseLeave={() => handleMenuLeave(setIsSolutionsMenuOpen)}
              >
                <Link
                  onClick={handleMenuItemClick}
                  className={`inline-flex items-center text-base text-[16.8px] font-Montserrat leading-6 transition-colors duration-300 ${
                    hoveredMenu === "solutions"
                      ? "text-[#338AF3] z-0"
                      : "text-[#AFAFAF] z-10"
                  }`}
                >
                  <div
                    className={` flex justify-center items-center ${
                      hoveredMenu === "solutions" ? "z-20" : "z-20"
                    }`}
                  >
                    Solutions{" "}
                    <IoIosArrowDown
                      className={`ml-1 transition-transform duration-300 ${
                        hoveredMenu === "solutions" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </Link>
                {isSolutionsMenuOpen && (
                  <div
                    ref={solutionsMenuRef}
                    className={`absolute -top-20 left-[300px] transform -translate-x-1/2 rounded-b-[30px] shadow-lg ring-1 ring-black ring-opacity-5 max-h-[800px] overflow-y-auto ${
                      isScrolled ? "z-50" : "z-0"
                    }`}
                  >
                    <SolutionsMenu />
                  </div>
                )}
              </div>

              {/* Explore Dropdown */}
              <div
                className={`relative inline-block `}
                onMouseEnter={() =>
                  handleMenuHover("explore", setIsExploreMenuOpen)
                }
                onMouseLeave={() => handleMenuLeave(setIsExploreMenuOpen)}
              >
                <Link
                  onClick={handleMenuItemClick}
                  className={`inline-flex items-center text-base text-[16.8px] font-Montserrat leading-6 transition-colors duration-300 ${
                    hoveredMenu === "explore"
                      ? "text-[#338AF3] z-0"
                      : "text-[#AFAFAF] z-10"
                  }`}
                >
                  <div
                    className={` flex justify-center items-center ${
                      hoveredMenu === "explore" ? "z-10" : "z-0"
                    }`}
                  >
                    Explore{" "}
                    <IoIosArrowDown
                      className={`ml-1 transition-transform duration-300 ${
                        hoveredMenu === "explore" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </Link>
                {isExploreMenuOpen && (
                  <div
                    ref={exploreMenuRef}
                    className={`absolute -top-20 left-[190px] transform -translate-x-1/2 rounded-b-[30px] shadow-lg ring-1 ring-black ring-opacity-5 max-h-[800px] overflow-y-auto ${
                      isScrolled ? "z-50" : "z-0"
                    }`}
                  >
                    <ExploreMenu />
                  </div>
                )}
              </div>

              {/* Pricing Link */}
              <Link
                to="Pricing"
                className={`inline-flex items-center text-base text-[16.8px] font-Montserrat leading-6 z-20 
                  ${
                    location.pathname === "/Pricing"
                      ? "text-[#0587ff]"
                      : "text-[#AFAFAF]"
                  }`}
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Right Side of Navbar */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4 h-full items-center">
            <Link
              to="/contactsales"
              className="text-white text-[14px] font-Montserrat font-extralight border rounded-full py-[15px] px-[32px] z-20 gap-2 inline-flex bg-white/20 border-white/5 hover:bg-white/15 transition-colors duration-300 items-center"
            >
              <img src={Support} alt="Support" /> Contact Sales
            </Link>
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
              className="rounded-full items-center z-20"
            >
              <a
                href="https://get-started.codpowergroup.com/registration"
                target="blank"
                className="text-white  text-[14px] font-Montserrat font-medium rounded-full py-[15px] px-[46px] gap-1 inline-flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started{" "}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 15 14"
                  className="ml-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 13V1M13.5 1H1.5M13.5 1L1.5 13"
                    stroke="white"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </nav>
      </div>
      <div className="lg:hidden fixed bg-black flex justify-between px-4 w-full items-center h-[110px]">
        {/* Logo */}
        <a href="/#" className="py-1.5" onClick={handleLogoClick}>
          <span className="sr-only">Your Company</span>
          <img alt="logo" src={logo} className="h-[50.52px] w-[110px]" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <XMarkIcon aria-hidden="true" className="h-[34.56px] w-[34.56px]" />
          ) : (
            <Bars3Icon aria-hidden="true" className="h-[34.56px] w-[34.56px]" />
          )}
        </button>
      </div>
      {/* Mobile Links */}
      {mobileMenuOpen && (
        <MobileDropdownMenu
          toggleDropdown={toggleDropdown}
          dropdownVariants={dropdownVariants}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
    </header>
  );
}

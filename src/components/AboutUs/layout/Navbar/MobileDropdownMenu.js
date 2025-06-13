import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";

const containerVariants = {
  hidden: { opacity: 0, y: -30 }, // Start from above
  visible: {
    opacity: 1,
    y: 0, // Move to final position (centered)
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export default function MobileDropdownMenu({
  dropdownVariants,
  setMobileMenuOpen,
}) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is rendered
  }, []);

  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = (dropdownSetter, isOpen) => {
    // Close all dropdowns first
    setProductsOpen(false);
    setSolutionsOpen(false);
    setExploreOpen(false);

    // Only toggle if the dropdown is not currently open
    if (!isOpen) {
      dropdownSetter(true);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lg:hidden fixed mt-[110px] bg-black text-white w-full h-auto px-3 py-4 space-y-2"
    >
      {/* Products */}
      <div>
        <Link
          onClick={() => toggleDropdown(setProductsOpen, productsOpen)}
          className={`flex items-center px-3 pt-[10.7px] text-[22.98px] font-normal font-Montserrat leading-7 text-[#AFAFAF] ${
            productsOpen && "text-[#AFAFAF]/50 transition-colors duration-300"
          }`}
        >
          Products{" "}
          <IoIosArrowDown
            className={`ml-1 transition-transform duration-300 ${
              productsOpen ? "-rotate-90" : "rotate-0"
            }`}
          />
        </Link>

        {productsOpen && (
          <motion.div
            initial="closed"
            animate="open"
            variants={dropdownVariants}
            className="pl-5 mt-[10.7px]"
          >
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/CashOnDelivery"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              Cash on Delivery Platform
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/Affliation"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              Affiliation Platform
            </Link>
          </motion.div>
        )}
      </div>

      {/* Solutions */}
      <div>
        <Link
          onClick={() => toggleDropdown(setSolutionsOpen, solutionsOpen)}
          className={`flex items-center px-3 pt-[10.7px] text-[22.98px] font-normal font-Montserrat leading-7 text-[#AFAFAF] ${
            solutionsOpen && "text-[#AFAFAF]/50 transition-colors duration-300"
          }`}
        >
          Solutions{" "}
          <IoIosArrowDown
            className={`ml-1 transition-transform duration-300 ${
              solutionsOpen ? "-rotate-90" : "rotate-0"
            }`}
          />
        </Link>
        {solutionsOpen && (
          <motion.div
            initial="closed"
            animate="open"
            variants={dropdownVariants}
            className="pl-5 mt-[10.7px]"
          >
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/Sourcing"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              Sourcing & Purchasing
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/CustomClearance"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              Custom Clearance
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/CODRemittance"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              COD Remittance
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/WarehousingAndFulfillment"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              Warehousing & Fulfillment
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/CallCenter"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              Call Center
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/solution2"
              className="block text-[17px] py-2 text-[#afafaf] font-Montserrat"
            >
              Affiliate
            </Link>
            {/* Add other solution links here */}
          </motion.div>
        )}
      </div>

      {/* Explore */}
      <div>
        <Link
          onClick={() => toggleDropdown(setExploreOpen, exploreOpen)}
          className={`flex items-center px-3 pt-[10.7px] text-[22.98px] font-normal font-Montserrat leading-7 text-[#AFAFAF] ${
            exploreOpen && "text-[#AFAFAF]/50 transition-colors duration-300"
          }`}
        >
          Explore{" "}
          <IoIosArrowDown
            className={`ml-1 transition-transform duration-300 ${
              exploreOpen ? "-rotate-90" : "rotate-0"
            }`}
          />
        </Link>
        {exploreOpen && (
          <motion.div
            initial="closed"
            animate="open"
            variants={dropdownVariants}
            className="pl-5 mt-[10.7px]"
          >
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/CountriesCovered"
              className="block text-[17px] py-1 text-[#afafaf] font-Montserrat"
            >
              Countries Covered
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/Blog"
              className="block py-1 text-[17px] text-[#afafaf] font-Montserrat"
            >
              Guides
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/Blog"
              className="block py-1 text-[17px] text-[#afafaf] font-Montserrat"
            >
              Blog
            </Link>

            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/HelpCenter"
              className="block py-1 text-[17px] text-[#afafaf] font-Montserrat"
            >
              Help Center
            </Link>
            {/* Add other explore links here */}
          </motion.div>
        )}
      </div>

      {/* Pricing */}
      <div>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          to="/Pricing"
          className="flex items-center px-3 pt-[10.7px] pb-[34.7px] text-[22.98px] font-normal font-Montserrat leading-7 text-[#AFAFAF]"
        >
          Pricing
        </Link>
      </div>

      {/* Contact Sales & Get Started Buttons */}
      <div className="lg:hidden left-0 right-0 bg-black px-4 py-4 w-full flex justify-center space-x-4">
        <Link
          to="/contactsales"
          onClick={() => setMobileMenuOpen(false)}
          className="text-white text-[12.29px] font-normal font-Montserrat border rounded-full py-[12px] px-[20px] z-20 gap-2 inline-flex items-center bg-white/20 border-white/5 hover:bg-white/0 hover:border-white transition-colors duration-500"
        >
          <BiSupport /> Contact Sales
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
            className="text-white text-[15.29px] font-normal font-Montserrat rounded-full py-[19px] px-[29px] gap-2 inline-flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get Started <GoArrowUpRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

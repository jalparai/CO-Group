import { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo/logoIcon.webp";
import globeEarth from "../../assets/FooterIcons/globeEarth.svg";
import starCircle from "../../assets/FooterIcons/starCircle.svg";
import euCircle from "../../assets/FooterIcons/euCircle.svg";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is rendered
  }, []);

  return (
    <footer className="text-white py-8 mt-[129.3px] z-[2000]">
      <div className="container mx-auto px-4 huge:mx-[134px] flex flex-col lg:flex-row gap-8 z-[2000] relative lg:gap-x-[70px]">
        {/* Left Section */}
        <div className="w-[389px] lg:w-[462px] mx-auto mb-8 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center justify-start mb-[13.54px] lg:mb-[16.92px]">
              <img
                src={logo}
                alt="logo"
                className="w-[66.79px] h-[23.34px] lg:w-[83.49px] lg:h-[29.18px] mr-2"
              />
              <h2 className="text-[16.95px] lg:text-[21.19px] font-Montserrat font-bold">
                COD POWER GROUP
              </h2>
            </div>
            <p className="w-[289.6px] lg:w-[362px] text-[12.8px] lg:text-[16px] font-Montserrat text-[#A5A5A5] mb-[31px]">
              Your one-stop solution for maximizing your e-commerce potential.
              Boost your business with us. – Get Started for Free
            </p>
            <div className="flex justify-start space-x-2 mb-[33.5px]">
              <Link
                target="_blank"
                to="https://www.facebook.com/codpower.group"
              >
                <FaFacebookF className="bg-[#FFFFFF]/10 p-2 rounded-[9.29px] w-[34.85px] h-[34.85px]  text-[#FFFFFF]/10 transition-all duration-300 hover:text-[#1877F2] hover:bg-[#1877F2]/20" />
              </Link>
              <Link target="_blank" to="https://www.x.com/codpowergroup">
                <FaTwitter className="bg-[#FFFFFF]/10 p-2 rounded-[9.29px] w-[34.85px] h-[34.85px]  text-[#FFFFFF]/10 transition-all duration-300 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/20" />
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/codpowergroup"
              >
                <FaInstagram className="bg-[#FFFFFF]/10 p-2 rounded-[9.29px] w-[34.85px] h-[34.85px]  text-[#FFFFFF]/10 transition-all duration-300 hover:text-[#C13584] hover:bg-[#C13584]/20" />
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/codpowergroup"
              >
                <FaLinkedinIn className="bg-[#FFFFFF]/10 p-2 rounded-[9.29px] w-[34.85px] h-[34.85px]  text-[#FFFFFF]/10 transition-all duration-300 hover:text-[#0e76a8] hover:bg-[#0e76a8]/20" />
              </Link>
              <Link target="_blank" to="https://www.youtube.com/@codpowergroup">
                <FaYoutube className="bg-[#FFFFFF]/10 p-2 rounded-[9.29px] w-[34.85px] h-[34.85px]  text-[#FFFFFF]/10 transition-all duration-300 hover:text-[#FF0000] hover:bg-[#FF0000]/20" />
              </Link>
            </div>
            <a
              href="mailto:contant@codpowergroup.com"
              className="text-[18px] font-DMSans block"
            >
              contact@codpowergroup.com
            </a>
          </div>

          {/* Contact Information & System Status at the Bottom */}
          <div className="hidden lg:block text-[#BFBFBF] mt-8 lg:mt-0">
            <p className="text-[18px] font-DMSans">
              All rights reserved &copy; 2025
            </p>
            <p className="text-[18px] font-DMSans">Copyright &copy; 2025.</p>
            <div className="flex items-center justify-start mt-[31px]">
              <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-2"></span>
              <p className="text-[18px] font-DMSans">System status</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex flex-wrap lg:justify-between">
          {[
            {
              title: "PRODUCTS",
              links: [
                { text: "Cash on Delivery Platform", url: "/CashOnDelivery" },
                { text: "Affiliation Platform", url: "/Affiliation" },
              ],
            },
            {
              title: "RESSOURCE",
              links: [
                { text: "Ressource Center", url: "/RessourceCenter" },
                { text: "Blog", url: "/Blog" },
                // { text: "Guides", url: "/TermsofUse" },
                { text: "Podcasts", url: "/Podcasts", target: "_blank" },              ],
              labels: [null, "New", null],
            },
            {
              title: "USE CASES",
              links: [
                {
                  text: "Top countries for cash on delivery in Europe",
                  url: "/CashOnDelivery",
                  icon: globeEarth,
                },
                {
                  text: "How to choose winning products",
                  url: "/Affiliation",
                  icon: starCircle,
                },
                {
                  text: "Understand EU Specificities",
                  url: "/Affiliation",
                  icon: euCircle,
                },
              ],
            },
            {
              title: "SOLUTION",
              links: [
                { text: "Sourcing and Purchasing", url: "/Sourcing" },
                { text: "Custom Clearance", url: "/CustomClearance" },
                {
                  text: "Warehousing & Fulfillment",
                  url: "/WarehousingAndFulfillment",
                },
                { text: "Shipping", url: "/Shipping" },
                { text: "Call Center", url: "/CallCenter" },
                { text: "COD Remittance", url: "/CODRemittance" },
                { text: "Affiliate", url: "/Affiliation" },
                { text: "Countries Covered", url: "/CountriesCovered" },
              ],
            },
            {
              title: "COMPANY",
              links: [
                { text: "About", url: "/AboutUs" },
                { text: "Career", url: "/MainCareers" },
                { text: "Community", url: "/ContactSales" },
                { text: "Contact Us", url: "/ContactSales" },
              ],
              labels: [null, "HIRING", null, null],
            },
            {
              title: "GET HELP",
              links: [
                { text: "Support", url: "/HelpCenter" },
                { text: "Pricing", url: "/Pricing" },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mb-8">
              <h3 className="text-[#0587ff] font-Montserrat mb-[20px]">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="mb-2 text-[18px] font-light font-Montserrat text-[#767676] w-[260px] transition-all duration-300"
                  >
                    <Link
                      to={link.url}
                      className="flex items-center gap-2 group transition-all duration-300 hover:text-[#213B5C]"
                    >
                      {link.icon && (
                        <div
                          className="flex items-center justify-center min-w-[50px] h-[50px] rounded-[10px] 
                          bg-[#213B5C]/30 transition-all duration-300 group-hover:bg-[#213B5C]"
                        >
                          <img
                            src={link.icon}
                            alt={`${link.text} icon`}
                            className="w-[24px] h-[24px] mx-auto transition-all duration-300"
                          />
                        </div>
                      )}
                      <span>{link.text}</span>
                      {section.labels && section.labels[idx] && (
                        <span
                          className={`text-[12px] font-Montserrat px-[8.5px] py-[3.5px] rounded-[100px] ml-2 text-white ${
                            section.labels[idx] === "New"
                              ? "bg-[#E61D2D]"
                              : "bg-[#53ACFF]"
                          }`}
                        >
                          {section.labels[idx]}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Copyright & System Status - Moved to Bottom in Mobile */}
          <div className="block lg:hidden w-full mt-8 lg:mt-0 lg:order-none order-1 lg:w-auto">
            <div className="text-[#BFBFBF]">
              <p className="text-[18px] font-DMSans">
                All rights reserved &copy; 2025
              </p>
              <p className="text-[18px] font-DMSans">Copyright &copy; 2025.</p>
              <div className="flex items-center justify-start mt-[31px]">
                <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-2"></span>
                <p className="text-[18px] font-DMSans">System status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#4A4A4A] mt-6" />
      <div className="container mx-auto">
        <div className="flex flex-row justify-center text-[10px] sm:text-[18px] font-extralight text-[#767676] font-Montserrat pt-[20px] sm:pt-[40px] space-y-0 space-x-2">
          <a
            href="/TermsofUse"
            className="hover:text-[#C6C6C6] transition-colors duration-300 text-center"
          >
            Terms & Conditions
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="/PrivacyPolicy"
            className="hover:text-[#C6C6C6] transition-colors duration-300 text-center"
          >
            Privacy Policy
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="/CookiePolicy"
            className="hover:text-[#C6C6C6] transition-colors duration-300 text-center"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

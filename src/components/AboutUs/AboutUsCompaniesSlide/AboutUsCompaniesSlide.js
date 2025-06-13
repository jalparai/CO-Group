import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./AboutUsCompaniesSlide.css";
import { apiclient } from "../../../apiConfig/apiConfig";
import Google from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/Google.svg";
import Facebook from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/Facebook.svg";
import Aramex from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/Aramex.svg";
import DHL from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/DHL.svg";
import NAQEL from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/NAQEL.svg";
import UPS from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/Subtract.svg";
import TikTok from "../../../assets/Home_Hero_Icons/CompaniesHomeSlideIcons/TikTok.svg";

const fetchCompanies = async () => {
  const res = await apiclient.get("/companies");
  return res.data.data;
};

const AboutUsCompaniesSlide = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
    };
    getCompanies();
  }, []);
  useEffect(() => {
  }, []);


  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8 mb-[92px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-white">
        <div className="flex flex-col items-start mb-8 lg:mb-0 lg:pr-8">
          <p className="text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
            Trusted by <span className="font-semibold">10,000+</span>
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <span className="inline-flex justify-center items-center bg-gradient-to-r from-[#FF737E] to-[#E61D2D] text-white rounded-lg w-[123.52px] h-[33.28px] sm:w-[158.26px] sm:h-[42.64px] lg:w-[193px] lg:h-[52px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
              companies
            </span>
            <span className="whitespace-nowrap text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
              around the world
            </span>
          </div>
        </div>

        <div className="relative flex-grow overflow-hidden rounded-l-[18px] w-full lg:w-auto">
          <Marquee
            direction="left"
            speed={30}
            gradient={false}
            className="whitespace-nowrap"
          >
            <div className="flex items-center gap-4 sm:gap-8">
              {companies.map((company, index) => (
                <div
                  key={`company-${index}`}
                  className="flex justify-center items-center w-[128px] h-[44.8px] sm:w-[164px] sm:h-[57.4px] lg:w-[200px] lg:h-[70px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat bg-[#001024] text-white rounded-[11.52px] lg:rounded-[18px] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                >
                  <img
                    src={company.url}
                    alt="company"
                    // className={`w-[20px] ${companyWidths[company]} lg:w-auto h-auto`}
                    className="w-[20px] lg:w-auto h-auto"
                  />
                </div>
              ))}
              {companies.map((company, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex justify-center items-center w-[128px] h-[44.8px] sm:w-[164px] sm:h-[57.4px] lg:w-[200px] lg:h-[70px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat bg-[#001024] text-white rounded-[11.52px] lg:rounded-[18px] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                >
                  <img
                    src={company.url}
                    alt="company"
                    // className={`w-[20px] ${companyWidths[company]} lg:w-auto h-auto`}
                    className="w-[20px] lg:w-auto h-auto"
                  />
                </div>
              ))}
              <div className="w-2 sm:w-3"></div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCompaniesSlide;

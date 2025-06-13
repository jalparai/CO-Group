import Marquee from "react-fast-marquee";
import "./ContactSalesCompaniesSlide.css";
import { useState, useEffect } from "react";
import { apiclient } from "../../../apiConfig/apiConfig";

const fetchCompanies = async () => {
  const res = await apiclient.get("/companies");
  return res.data.data;
};

const ContactSalesCompaniesSlide = ({data}) => {
  // const companies = ["Google", "Facebook", "Aramex", "DHL", "NAQEL"];
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
    };
    getCompanies();
  }, [data]);
  

  return (
    <div className="mb-[92px] mt-[60px] max-w-[100%] lg:max-w-[1300px] huge:max-w-[1470px] mx-[10px] lg:mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-white overflow-hidden">
        <div className="flex flex-col items-start mb-[38.4px] sm:mb-0 lg:pr-[60px]">
          <p className="text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
            {data?.generalSection?.heading || <>Trusted by <span className="font-semibold">10,000+</span></>}
          </p>
          <div className="flex items-center mt-2">
            <span className="flex justify-center items-center bg-gradient-to-r from-[#FF737E] to-[#E61D2D] text-white rounded-lg px-4 sm:px-6 lg:px-8 h-[33.28px] sm:h-[42.64px] lg:h-[52px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
              {data?.generalSection?.description || "companies"}
            </span>
            <span className="ml-2 whitespace-nowrap text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat font-medium">
              {data?.generalSection?.caption || "around the world"}
            </span>
          </div>
        </div>

        <div className="relative flex-grow overflow-hidden rounded-[18px] marquee-wrapper w-full">
          <Marquee
            direction="left"
            speed={30}
            gradient={false}
            className="whitespace-nowrap"
          >
            <div className="flex items-center gap-4 sm:gap-8">
              {companies && Array.isArray(companies) && companies.map((company, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center min-w-[128px] sm:min-w-[164px] lg:min-w-[200px] h-[44.8px] sm:h-[57.4px] lg:h-[70px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat bg-[#001024] text-white rounded-[18px] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                >
                  {company.name}
                </div>
              ))}
              {companies && Array.isArray(companies) && companies.map((company, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex justify-center items-center min-w-[128px] sm:min-w-[164px] lg:min-w-[200px] h-[44.8px] sm:h-[57.4px] lg:h-[70px] text-[19.2px] sm:text-[24.6px] lg:text-[30px] font-Montserrat bg-[#001024] text-white rounded-[18px] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                >
                  {company.name}
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

export default ContactSalesCompaniesSlide;

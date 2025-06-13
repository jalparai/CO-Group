import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Support from "../../../../assets/NavBarIcon/Vector.svg";

// Importing country images
import Emirates from "../../../../assets/Countries/MiddleEast/Emirates.svg";
import SaudiArabia from "../../../../assets/Countries/MiddleEast/SaudiArabia.svg";
import Bahrain from "../../../../assets/Countries/MiddleEast/Bahrain.svg";
import Kuwait from "../../../../assets/Countries/MiddleEast/Kuwait.svg";
import Oman from "../../../../assets/Countries/MiddleEast/Oman.svg";
import Qatar from "../../../../assets/Countries/MiddleEast/Qatar.svg";

import France from "../../../../assets/Countries/Europe/France.svg";
import Spain from "../../../../assets/Countries/Europe/Spain.svg";
import Portugal from "../../../../assets/Countries/Europe/Portugal.svg";
import Italy from "../../../../assets/Countries/Europe/Italy.svg";
import Belgium from "../../../../assets/Countries/Europe/Belgium.svg";
import Luxembourg from "../../../../assets/Countries/Europe/Luxembourg.svg";

import India from "../../../../assets/Countries/ComingSoon/SvgFlags/Flags.svg";
import Bulgaria from "../../../../assets/Countries/ComingSoon/SvgFlags/Bulgaria.svg";
import Greece from "../../../../assets/Countries/ComingSoon/SvgFlags/Greece.svg";
import CzechRepublic from "../../../../assets/Countries/ComingSoon/SvgFlags/CzechRepublic.svg";
import Slovakia from "../../../../assets/Countries/ComingSoon/SvgFlags/Slovakia.svg";
import Romania from "../../../../assets/Countries/ComingSoon/SvgFlags/Romania.svg";
import Hungary from "../../../../assets/Countries/ComingSoon/SvgFlags/Hungary.svg";
import Bg from "../../../../assets/Dashboard/spera-9.svg"
import { Link } from "react-router-dom";
import {apiclient} from "../../../../apiConfig/apiConfig";

// Data structure for regions and countries
const regions = [
  {
    title: "ARAB WORLD",
    buttonText: "Middle East",
    description:
      "Our services extend to numerous countries in the Middle East.",
    bgColor: "#6DA544",
    countries: [
      { name: "Emirates", img: Emirates },
      { name: "Saudi Arabia", img: SaudiArabia },
      { name: "Bahrain", img: Bahrain },
      { name: "Kuwait", img: Kuwait },
      { name: "Oman", img: Oman },
      { name: "Qatar", img: Qatar },
    ],
  },
  {
    title: "THE WESTERN",
    buttonText: "Europe",
    description:
      "We have a strong presence in several European countries, enabling us to satisfy requests from all over the continent.",
    bgColor: "#338AF3",
    countries: [
      { name: "France", img: France },
      { name: "Spain", img: Spain },
      { name: "Portugal", img: Portugal },
      { name: "Italy", img: Italy },
      { name: "Belgium", img: Belgium },
      { name: "Luxembourg", img: Luxembourg },
    ],
  },
  {
    title: "THE EASTERN",
    buttonText: "Eastern Europe",
    description:
      "Our service also extend to Eastern Europe countries",
    bgColor: "#E61D2D",
    countries: [
      { name: "Poland", img: India },
      { name: "Czech Republic", img: CzechRepublic },
      { name: "Slovakia", img: Slovakia },
      { name: "Hungary", img: Hungary },
      { name: "Bulgaria", img: Bulgaria },
      { name: "Romania", img: Romania },
      { name: "Greece", img: Greece },
    ],
  },
];

const bgColors = ["#6DA544", "#338AF3", "#E61D2D"];

const fetchCountriesCovered =async () => {
  const res  = await apiclient.get("/getAllCountries");
  console.log(res.data.data);
  return res.data.data;
}

const RegionSection = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [regions, setCountriesCovered] = useState([]);

  useEffect(() => {
    const getCountriesCovered = async () => {
      let data = await fetchCountriesCovered();
      data = data.sort((a, b) => a.country.length - b.country.length);
      setCountriesCovered(data);
    }
    getCountriesCovered();
  }
  , [data]);

  return (
    <div className="flex flex-col mt-[96px] lg:w-[800px] mx-auto huge:w-[1302px] items-center">
      <div className="w-full overflow-x-auto sm:overflow-x-visible md:overflow-visible scrollbar-none">
        <div className="flex flex-row sm:flex-col lg:flex-row justify-start md:justify-center items-end sm:items-center lg:items-end space-x-[15px] sm:space-x-[0px] lg:space-x-[30px] space-y-[0px] sm:space-y-[30px] lg:space-y-[0px]">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className="flex flex-col flex-shrink-0 w-[300px] sm:w-[350.11px] md:w-[380px] lg:w-[411px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              {/* Top section with title, button, and description */}
              <motion.div
                style={{ backgroundColor: `${bgColors[index]}1A` }}
                className="flex flex-col items-center justify-center font-Montserrat border border-[#303030] rounded-[26.93px] w-full py-[36px] md:py-[40px] lg:py-[44px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3
                  style={{ color: bgColors[index] }}
                  className="text-[15px] md:text-[16px] lg:text-[18px] font-light text-center font-Montserrat tracking-[10px]"
                >
                  {data?.cardSection?.cards?.find((card) => card.subtitle === region.region)?.title || region.region}
                </h3>
                <button
                  style={{ backgroundColor: bgColors[index] }}
                  className="py-[15px] w-[85%] my-[18px] md:my-[20px] lg:my-[23px] font-bold text-[20px] md:text-[24px] lg:text-[26px] font-Montserrat rounded-[44.89px]"
                >
                   {data?.cardSection?.cards?.find((card) => card.subtitle === region.region)?.subtitle || region.region}
                </button>
                <p className="text-[17px] md:text-[20px] lg:text-[22px] w-[85%] text-center mx-auto">
                {data?.cardSection?.cards?.find((card) => card.subtitle === region.region)?.description || region.description}
                </p>
              </motion.div>
              {/* Countries list */}
              <motion.div
                style={{ backgroundColor: `${bgColors[index]}1A` }}
                className="flex flex-col items-start justify-center border border-[#303030] rounded-[26.93px] px-[30px] md:px-[50px] lg:px-[60px] py-[36px] md:py-[50px] lg:py-[62px] space-y-[20px] mt-[20px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {region.country.map((country, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-row items-center w-[180px] md:w-[220px] lg:w-[245px] mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                  >
                    <img src={country.flag} alt={country.flag} />
                    <p className="text-[20px] md:text-[22px] lg:text-[24px] font-Montserrat font-bold ml-[10px]">
                      {country.country}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <img src={Bg} className="absolute w-[100%] z-[-10]"/>

      {/* Buttons for Contact Sales and Get Started Now */}
      <div className="flex flex-row justify-center mt-[38px] mb-[38px] lg:mb-[108px] gap-4">
        <Link to={data?.cardSection?.buttons[0]?.url || "/contactsales"} className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-Montserrat font-extralight border rounded-full py-[14px] px-[32px] z-20 gap-2 inline-flex bg-white/20 border-white/5 hover:bg-white/0 hover:border-white transition-colors duration-500 items-center">
          <img src={Support} alt="Support" /> {data?.cardSection?.buttons[0]?.text || "Contact Sales"}
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
            href={data?.cardSection?.buttons[1]?.url || "https://get-started.codpowergroup.com/registration"}
            target="blank"
            className="text-white text-[14px] md:text-[16px] lg:text-[20px] font-Montserrat font-medium rounded-full py-[14px] px-[32px] gap-2 inline-flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {data?.cardSection?.buttons[1]?.text ||  `Get Started` } <GoArrowUpRight className="ml-2" />
          </a>
        </motion.div>
      </div>

      <div className="lg:hidden my-[61px]">
        <button
         href = {data?.cardSection?.buttons[2]?.url} 
        className="w-full text-[14px] text-white font-bold py-3 px-10 rounded-[33px] bg-[#282E6A] hover:bg-[#53ACFF] hover:text-white/90 transition-all">
          {data?.cardSection?.buttons[2]?.text || "Discover More"}
        </button>
      </div>
    </div>
  );
};

export default RegionSection;

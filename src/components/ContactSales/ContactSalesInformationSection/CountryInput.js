import React, { useState } from "react";
import { countries } from "./countries"; // Your country data

const CountryInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to the first country
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false); // Close the dropdown when a country is selected
  };

  return (
    <div className="flex items-center space-x-[15px] w-full max-w-[479px] mb-4 lg:mb-[20px] h-[60px] md:h-[80px] mx-auto">
      {/* Custom Country select dropdown */}
      <div className="relative w-full">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full h-[60px] md:h-[80px] border border-[#343434] bg-black rounded-[10px] px-4 md:px-[22px] text-[18px] md:text-[27px] text-[#898989]"
          type="button"
        >
          <div className="flex items-center mr-2">
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.code}
              className="w-[30px] md:w-[53px] h-auto mr-2"
            />
            {selectedCountry.name}
          </div>
          {/* Arrow icon */}
          <svg
            className={`w-6 h-6 text-[#898989] ml-2 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute mt-2 w-full bg-black border border-[#343434] rounded-[10px] max-h-[100px] overflow-y-auto z-10">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => handleCountryChange(country)}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-left text-[#343434]"
                type="button"
              >
                <img
                  src={country.flag}
                  alt={country.code}
                  className="w-6 h-auto mr-2"
                />
                - {country.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInput;

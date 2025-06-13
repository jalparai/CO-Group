import React, { useState } from "react";
import { countries } from "./countries"; // Your country data

const PhoneInputWithCountryCode = ({ phoneNumber, onPhoneNumberChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to the first country
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false); // Close the dropdown when a country is selected
  };

  return (
    <div className="flex items-center space-x-[15px]  w-full max-w-[479px] h-[60px] md:h-[80px] mx-auto">
      {/* Custom Country select dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-[120px] md:w-[180px] h-[60px] md:h-[80px] border border-[#343434] bg-black rounded-[10px] lg:px-4 px-[10px] text-[18px] md:text-[27px] text-[#898989]"
          type="button"
        >
          <div className="flex items-center mr-2">
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.code}
              className="w-[30px] md:w-[53px] h-auto mr-2"
            />
            {selectedCountry.dialCode}
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
          <div className="absolute mt-2 w-[250px] bg-black border border-[#343434] rounded-[10px] max-h-[100px] overflow-y-auto">
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
                {country.dialCode} - {country.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Phone number input */}
      <div className="flex-1">
      <input
  type="tel"
  name="phone"
  value={phoneNumber}
  onChange={onPhoneNumberChange}
  onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} // Remove non-numeric characters
  className="w-full h-[60px] md:h-[80px] border border-[#343434] bg-black rounded-[10px] px-4 md:px-[22px] text-[18px] md:text-[27px] text-[#898989]"
  placeholder="Phone number*"
  pattern="[0-9]*"
  required
/>

      </div>
    </div>
  );
};

export default PhoneInputWithCountryCode;

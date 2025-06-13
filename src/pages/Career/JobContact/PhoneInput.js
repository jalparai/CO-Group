import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import france from "../../../assets/ContactSales/countriesIcons/france.png";
import india from "../../../assets/ContactSales/countriesIcons/india.png";
import unitedKingdom from "../../../assets/ContactSales/countriesIcons/unitedKingdom.png";
import unitedStates from "../../../assets/ContactSales/countriesIcons/unitedStates.png";

const countries = [
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    flag: unitedStates,
  },
  {
    code: "FR",
    name: "France",
    dialCode: "+33",
    flag: france,
  },
  {
    code: "GB",
    name: "United Kingdom",
    dialCode: "+44",
    flag: unitedKingdom,
  },
  {
    code: "IN",
    name: "India",
    dialCode: "+91",
    flag: india,
  },
];

const PhoneInput = ({setFileData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[1]); // France by default
  const [phoneNumber, setPhoneNumber] = useState("");
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    setFileData((prev) => ({ ...prev, phone: phoneNumber }));
  }, [phoneNumber]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-4">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="w-24 flex items-center justify-between border-b-[2px] border-[#6F6F6F] py-2 px-2 bg-transparent text-white"
          type="button"
        >
          <div className="flex items-center gap-2">
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} flag`}
              className="w-6 h-4 object-cover"
            />
            <span>{selectedCountry.dialCode}</span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isOpen && (
          <div className="absolute top-[70%] left-0 w-full min-w-[300px] overflow-auto h-[100px] bg-gray-900 border border-[#6F6F6F] rounded-md shadow-lg z-50">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => selectCountry(country)}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-800 text-white text-left"
              >
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-6 h-4 object-cover"
                />
                <span>{country.name}</span>
                <span className="text-gray-400 ml-auto">
                  {country.dialCode}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 relative">
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full bg-transparent border-b-[2px] border-[#6F6F6F] focus:border-blue-500 outline-none py-2 text-white"
        />
        <label
          className={`absolute left-0 text-sm transition-all duration-200 ${
            focus || phoneNumber
              ? "transform -translate-y-4 scale-90 text-gray-400"
              : "translate-y-2 text-gray-500"
          }`}
        >
          Phone Number
        </label>
      </div>
    </div>
  );
};

export default PhoneInput;

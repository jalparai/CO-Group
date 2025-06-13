import { useState } from "react";
import Rectangle from "../../../assets/ContactSales/ContactSalesInformationItems/Rectangle703.svg";
import CountryInput from "./CountryInput";
import PhoneInputWithCountryCode from "./PhoneInputWithCountryCode ";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYou from "../../../assets/Dashboard/heart-tag.svg";
import { Link } from "react-router-dom";
// import axios from "axios";
import { apiclient } from "../../../apiConfig/apiConfig";

const fetchCountriesCovered = async () => {
  const res = await apiclient.get("/getAllCountries");
  return res.data.data;
};

const ContactSalesInformationSection = ({data}) => {
  const [step, setStep] = useState(1);
  const [regions, setRegions] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    country: "",
    phone: "",
    ordersPerDay: "", // Added for the second step
    // Note: remove duplicate country key if not needed
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({}); // State to hold error messages
  const [isTermsAccepted, setIsTermsAccepted] = useState(false); // State for second checkbox

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        // Exclude phone from validation
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Errors found:", newErrors);
      return;
    }

    if (captchaValue === null) {
      setErrors((prev) => ({ ...prev, captcha: "Please complete the CAPTCHA." }));
      return;
    }

    
    const res = await apiclient.post("/postleadsContact", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      email: formData.email,
      country: formData.country,
      phoneNumber: formData.phone,
      numOfOrders: formData.ordersPerDay,
      countriesInterested: formData.country,
    });

    console.log("Form Submitted!", res);
    setStep(3); // Move to the thank you step
  };

  const handleEmailValidation = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailPattern.test(value)
          ? ""
          : "Please enter a valid email address.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors for other fields
    }
  };

  const nextStep = async () => {
    // Validate fields in the first step before proceeding
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const data = await fetchCountriesCovered();
    setRegions(data);
    
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center relative w-full px-4 sm:px-8 mb-[50px]">
      <img
        className="w-[95%] h-auto sm:w-[300px] sm:h-[200px] lg:w-[1306px] lg:h-[600px] huge:w-[1486px] huge:h-[640px] sm:mt-[50px] lg:mt-[100px] object-contain"
        src={data?.cardSection?.image || Rectangle}
        alt="Rectangle"
      />

      <div className="lg:absolute lg:translate-x-[55%] lg:translate-y-[70%] flex flex-col w-full max-w-[500px] sm:max-w-[600px] lg:w-[627px] lg:min-h-[850px] huge:w-[697px] bg-black border border-[#444444] rounded-[30px] p-[30px] sm:p-6 lg:p-[64px] mt-[50px] lg:mt-0">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] font-bold font-Montserrat">
                {data?.cardSection?.cards[0].title || "Information"}
              </h3>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-Montserrat font-thin leading-[24px] sm:leading-[28px] lg:leading-[30px] mb-[20px]">
                {data?.cardSection?.cards[0].description || "Your success starts here: let's talk about how our call center can drive your business forward."}
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 my-4 sm:mt-6 lg:my-[20px] ">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full h-[60px] sm:h-[80px] text-[20px] sm:text-[27px] text-[#898989] font-Montserrat font-light px-4 border border-[#343434] bg-black rounded-[10px]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full h-[60px] sm:h-[80px] text-[20px] sm:text-[27px] text-[#898989] font-Montserrat font-light px-4 border border-[#343434] bg-black rounded-[10px] mt-4 sm:mt-0"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name *"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full h-[60px] sm:h-[80px] mb-4 lg:mb-[20px] text-[20px] sm:text-[27px] text-[#898989] font-Montserrat font-light px-4 border border-[#343434] bg-black rounded-[10px]"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-[60px] sm:h-[80px] mb-4 text-[20px] sm:text-[27px] text-[#898989] font-Montserrat font-light px-4 border border-[#343434] bg-black lg:mb-[20px] rounded-[10px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <CountryInput />
              <PhoneInputWithCountryCode
                phoneNumber={formData.phone}
                onPhoneNumberChange={handleChange}
              />
              <button
                type="button"
                onClick={nextStep}
                className={`w-full h-[60px] text-[22px] mt-9 font-bold rounded-[10px] transition-colors duration-300 ${
                  formData.firstName &&
                  formData.lastName &&
                  formData.companyName &&
                  formData.email && 
                  formData.phone
                    ? "bg-blue-500 text-white cursor-pointer"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
                disabled={
                  !formData.firstName ||
                  !formData.lastName ||
                  !formData.companyName ||
                  !formData.email || 
                  !formData.phone
                }
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] font-bold font-Montserrat">
                {data?.cardSection?.cards[1].title || "Click to Submit"}
              </h3>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-Montserrat font-thin leading-[24px] sm:leading-[28px] lg:leading-[30px] mb-6">
                {data?.cardSection?.cards[1].description || "Your success starts here: let's talk about how our call center can drive your business forward."}
              </p>
              <label className="mt-4 mb-2 text-[14px] sm:text-[16px] lg:text-[18px] font-Montserrat font-thin leading-[24px] sm:leading-[28px] lg:leading-[30px]">
                Number of orders per day?
              </label>
              <input
                type="number"
                name="ordersPerDay"
                placeholder="Number of Orders"
                value={formData.ordersPerDay}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                required
                className="w-full h-[60px] sm:h-[80px] text-[20px] sm:text-[27px] text-[#898989] font-Montserrat font-light px-4 border border-[#343434] bg-black rounded-[10px]"
              />
              {errors.ordersPerDay && (
                <p className="text-red-500 text-sm">{errors.ordersPerDay}</p>
              )}
              <label className="mt-4 mb-2 text-[14px] sm:text-[16px] lg:text-[18px] font-Montserrat font-thin leading-[24px] sm:leading-[28px] lg:leading-[30px]">
                Countries Interested?
              </label>
              <div className="relative w-full mb-2">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full h-[60px] sm:h-[80px] text-[20px] sm:text-[27px] text-[#898989] font-Montserrat font-light px-4 border border-[#343434] bg-black rounded-[10px] appearance-none pr-10"
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {regions.map((region) =>
                    region.country.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))
                  )}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm">{errors.country}</p>
                )}
                <div className="absolute inset-y-0 left-0 right-[20px] flex justify-end items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#898989]"
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
                </div>
              </div>

              <div className="flex flex-col mt-5 space-y-3">
                {/* Optional checkbox for marketing emails */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="peer hidden" />
                  <div className="w-5 h-5 mt-[7px] border-white border-4 bg-white rounded-[6px] flex items-center justify-center peer-checked:bg-blue-500">
                    <div className="w-[20px] h-3 bg-transparent peer-checked:bg-white rounded-sm"></div>
                  </div>
                  <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-Montserrat font-thin leading-[24px] sm:leading-[28px] lg:leading-[30px]">
                    By checking this box, you agree to receive marketing emails from COD Power Group.
                  </span>
                </label>

                {/* Required checkbox for terms acceptance */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer hidden"
                    required
                    onChange={(e) => setIsTermsAccepted(e.target.checked)}
                  />
                  <div className="w-5 h-5 mt-[7px] border-white border-4 bg-white rounded-[6px] flex items-center justify-center peer-checked:bg-blue-500">
                    <div className="w-[20px] h-3 bg-transparent peer-checked:bg-white rounded-sm"></div>
                  </div>
                  <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-Montserrat font-thin leading-[24px] sm:leading-[28px] lg:leading-[30px]">
                    *By checking this box, you agree to our{" "}
                    <Link className="text-bold underline" to="/TermsofUse">
                      terms
                    </Link>{" "}
                    of service and{" "}
                    <Link className="text-bold underline" to="/PrivacyPolicy">
                      privacy policy
                    </Link>
                    , and consent to the transfer, hosting, and processing of data outside the EU.
                  </span>
                </label>
              </div>

              <div className="block justify-between">
                <button
                  type="submit"
                  className={`w-full h-[60px] text-[22px] mt-9 font-bold rounded-[10px] transition-colors duration-300 ${
                    formData.ordersPerDay && formData.country && isTermsAccepted
                      ? "bg-blue-500 text-white cursor-pointer"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  disabled={!(formData.ordersPerDay && formData.country && isTermsAccepted)}
                >
                  Submit
                </button>
                <ReCAPTCHA
                  sitekey="6Lflc9wqAAAAAM6XrDToOgT3vS_IHvcRmLYZk0h3"
                  onChange={handleCaptchaChange}
                  className="mt-5 w"
                />
                {errors.captcha && (
                  <p className="text-red-500 text-sm">{errors.captcha}</p>
                )}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex items-center mt-[2rem] lg:mt-[8rem]">
                <div>
                  <img src={ThankYou} className="block m-auto" alt="Thank You" />
                  <h3 className="mt-3 text-[30px] sm:text-[40px] lg:text-[50px] text-center font-bold font-Montserrat">
                    {data?.cardSection?.cards[2].title || "Thank You!"}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-Montserrat font-thin leading-[24px] sm:leading-[28px] text-center lg:leading-[30px] mb-6">
                    {data?.cardSection?.cards[2].description || "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan."}
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full h-[60px] text-[#898989] text-[22px] mt-9 bg-white font-bold rounded-[10px]"
                    >
                      Submit Again
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSalesInformationSection;

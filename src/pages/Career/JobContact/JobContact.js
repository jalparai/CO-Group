import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import { apiclient } from "../../../apiConfig/apiConfig"
import { use } from "react";
// Reusable components
const Label = ({ isActive, children }) => (
  <motion.label
    className={`absolute left-0 text-sm ${
      isActive ? "text-gray-400" : "text-gray-500"
    }`}
    animate={{ y: isActive ? -20 : 10, scale: isActive ? 1 : 1 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.label>
);

const Input = ({ label, type = "text", required, isFile, name, handleChange, fileData }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focus || value.length > 0;
  const fileInput = useRef(null);
 
  return (
    <div className="relative mb-8 w-full">
      <Label isActive={isActive}>
        {label} {required && "(required)"}
      </Label>
      <div className="relative">
        <input
          type={type}
          value={isFile ? (fileData[name] ? fileData[name].name : "") : fileData[name]}
          
          // onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => fileData[name] === "" ? setFocus(false): setFocus(true)}
          onChange={handleChange}
          name={name}
          className="w-full bg-transparent border-b-[2px] border-[#6F6F6F] focus:border-blue-500 outline-none py-2 text-white pt-2"
          readOnly={isFile}
        />
        {/* {isFile && (
          <>
          <input 
            type="file" 
            className="hidden"
            ref={fileInput}
            onChange={handleChange}
            name={name} />
          <button className="absolute right-0 bottom-2 text-white" 
            onClick={() => fileInput.current.click()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </button>
          </>
        )} */}
        {isFile && (
  <>
    <input 
      type="file" 
      className="hidden"
      ref={fileInput}
      onChange={(e) => { 
        handleChange(e);
      }
      }
      
      name={name} 
    />
    <button 
      className="absolute right-0 bottom-2 text-white" 
      onClick={(e) => {
        e.preventDefault();
        fileInput.current.click();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    </button>
   
  </>
)}
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <p className="mb-4">
    <span className="text-[#6F6F6F] font-light block">{label}:</span>
    <div>{value}</div>
  </p>
);

const JobContact = () => {
  const { title, department, remote, salary, description, overview, content, location } = useLocation().state;
  const [fileData, setFileData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    coverLetter: "",
    resume: "",
    job:title,
  });

  const handleInputChange = (e) => {
    setFileData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
     

      setFileData((prevData) => ({
        ...prevData,
        [e.target.name]: file,  // Ensure the file object is stored properly
      }));
    } else {
    }
  };
  
  const submitApplication = () => {
    const formData = new FormData();
    formData.append("fName", fileData.fName);
    formData.append("lName", fileData.lName);
    formData.append("email", fileData.email);
    formData.append("phone", fileData.phone);
    formData.append("linkedIn", fileData.linkedIn);
    formData.append("portfolio", fileData.portfolio);
    formData.append("coverLetter", fileData.coverLetter);
    formData.append("resume", fileData.resume);
    formData.append("job", fileData.job);

    // Send the form data to the backend
    apiclient.post("/createJobCandidate", formData)
      .then((response) => {
        console.log("Response:", response);
        alert("Application submitted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting the application");
  });
  }



  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1041px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-32 lg:pt-[220px] pb-10 sm:pb-16 lg:pb-20 text-white font-Montserrat">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-[#338AF3] uppercase text-base sm:text-lg tracking-widest font-semibold">
            Job Details -{" "}
            <span className="text-[#6F6F6F] font-normal tracking-normal">
              10 Min Read
            </span>
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold mt-6 sm:mt-8 lg:mt-[34px]">
            {title}
          </h1>
        </div>

        {/* Overview */}
        <div className="mt-8 sm:mt-12 lg:mt-[38px]">
          <h2 className="text-[#6F6F6F] text-base sm:text-lg font-normal mb-6 sm:mb-8 lg:mb-[32px] uppercase">
            Job Overview
          </h2>
          <p className="text-xl sm:text-2xl lg:text-[30px] text-[#A5A5A5] leading-relaxed sm:leading-snug lg:leading-[40px] mb-10 sm:mb-12 lg:mb-[60px]">
            {overview}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-base sm:text-lg lg:text-[20px] text-white mb-8 sm:mb-10">
          <InfoItem label="Department" value={department} />
          <InfoItem label="Job Type" value={remote ? "REMOTE" : "On-site"} />
          <InfoItem label="Expected Salary" value={salary} />
          <InfoItem label="Location" value={location} />
        </div>

        {/* Contact Form */}
        <div className="mt-12 sm:mt-16 lg:mt-[116px]">
          <h2 className="text-gray-400 uppercase mb-6 sm:mb-8">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8">
            <Input label="First Name" required name="fName" handleChange={handleInputChange} fileData={fileData} />
            <Input label="Last Name" required name="lName" handleChange={handleInputChange} fileData={fileData}/>
            <Input label="Email Address" type="email" required name="email" handleChange={handleInputChange} fileData={fileData}/>
            <PhoneInput setFileData={setFileData} />

            {/* Links Section */}
            <div className="md:col-span-2 mt-8 sm:mt-10 lg:mt-12">
              <h2 className="text-gray-400 uppercase mb-6 sm:mb-8">
                Links to uploads
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8">
                <Input label="LinkedIn URL" type="url" name="linkedIn" handleChange={handleInputChange}  fileData={fileData}/>
                <Input label="Portfolio (PDF)" isFile name="portfolio" handleChange={handleFileChange}  fileData={fileData}/>
                <Input label="Cover Letter (Word/PDF)" isFile name="coverLetter" handleChange={handleFileChange}   fileData={fileData}/>
                <Input label="Resume (Word/PDF)" isFile name="resume" handleChange={handleFileChange}  fileData={fileData} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start mt-12 sm:mt-16 lg:mt-[109px]">
          <input
            type="checkbox"
            id="Agree"
            name="Agree"
            value="Agree"
            className="cursor-pointer mt-1 mr-4 sm:mr-5"
          />
          <label
            htmlFor="Agree"
            className="text-xs sm:text-sm lg:text-[15px] text-[#7A7A7A] font-extralight font-Montserrat"
          >
            By submitting this form, you agree to our{" "}
            <a href="/TermsofUse" className="text-white font-medium">
              terms of service
            </a>{" "}
            and{" "}
            <a href="/PrivacyPolicy" className="text-white font-medium">
              privacy policy
            </a>
            , and consent to the transfer, hosting, and processing of data
            outside the EU.
          </label>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-[41px] mt-10 sm:mt-12 lg:mt-[57px]">
          <button className="text-base sm:text-xl lg:text-[25px] font-Montserrat font-bold bg-[#53ACFF] hover:bg-[#53ACFF]/60 rounded-[50px] px-6 sm:px-8 lg:px-[48px] py-3 sm:py-4 lg:py-[25px] transition-colors duration-500"
          onClick={submitApplication}>
            Submit Application Now
          </button>
          <button className="flex justify-center items-center text-base sm:text-xl lg:text-[25px] font-Montserrat font-extralight border border-[#FFFFFF] hover:bg-white/20 hover:border-white/5 transition-colors duration-500 rounded-[50px] px-6 sm:px-8 lg:px-[48px] py-3 sm:py-4 lg:py-[25px]">
            Back to Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobContact;

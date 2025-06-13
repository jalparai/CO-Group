import { useLocation, useNavigate } from "react-router-dom";
import { LiaTelegram } from "react-icons/lia";
import { use } from "react";

const JobDetail = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleJobDetailsClick = () => {
    navigate(`/job/contact/${state._id}`, {
        state,
    });
  };

  return (
    <div className="min-h-screen mt-20 md:mt-[220px] p-4 md:p-10 text-white font-Montserrat">
      {/* Job Details Header */}
      <div className="mb-6">
        <h3 className="text-[#338AF3] uppercase text-base md:text-[20px] tracking-wide md:tracking-[10px] font-semibold">
          Job Details -{" "}
          <span className="text-[#6F6F6F] font-normal tracking-normal md:tracking-[0px]">
            10 Min Read
          </span>
        </h3>
        <h1 className="text-3xl md:text-[50px] font-bold mt-6 md:mt-[34px]">
          {state.title}
        </h1>
      </div>

      {/* Job Overview Section */}
      <div className="mt-8 md:mt-[38px]">
        <h2 className="text-[#6F6F6F] text-base md:text-[20px] font-normal mb-6 md:mb-[32px] uppercase">
          Job Overview
        </h2>
        <p className="text-xl md:text-[30px] text-[#A5A5A5] leading-normal md:leading-[40px] mb-10 md:mb-[60px]">
          {state.overview}
        </p>
      </div>

      {/* Job Info Section */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:space-x-[100px] text-base md:text-[20px] text-[#FFFFFF] mb-10">
          <p className="text-center md:text-left">
            <span className="text-[#6F6F6F] font-light mb-2 block">
              Department:
            </span>
            <div>{state.department}</div>
          </p>
          <p className="text-center md:text-left">
            <span className="text-[#6F6F6F] font-light mb-2 block">
              Job Type:
            </span>
            <div>{state.remote ? "REMOTE" : "On-site"}</div>
          </p>
          <p className="text-center md:text-left">
            <span className="text-[#6F6F6F] font-light mb-2 block">
              Expected Salary:
            </span>
            <div>{state.salary}</div>
          </p>
          <p className="text-center md:text-left">
            <span className="text-[#6F6F6F] font-light mb-2 block">
              Location:
            </span>
            <div>{state.location}</div>
          </p>
        </div>
      </div>

      {/* Job Description Section */}
      <div className="mt-16 md:mt-[116px]">
        <h2 className="text-base md:text-[20px] text-[#6F6F6F] font-extralight">
          JOB DESCRIPTION
        </h2>
        <p className="text-base md:text-[20px] text-[#E9E9E9] font-light text-justify mt-10 md:mt-[60px]">
          {state.description}
        </p>
      </div>
      {/* <div className="font-Montserrat text-justify my-8 md:my-[30px]" dangerouslySetInnerHTML={{__html: state.content}}> */}
      <div
  className="font-Montserrat text-justify my-8 md:my-[30px] text_content"
  dangerouslySetInnerHTML={{ __html: state.content }}  
/>

      {/* </div> */}
      {/* Remaining sections follow similar responsive pattern */}
      {/* {state.sections.map((section, index) => (
        <div
          key={index}
          className="font-Montserrat text-justify my-8 md:my-[30px]"
        >
          <h2 className="text-2xl md:text-[35px] text-[#FFFFFF] font-bold">
            {section.section}
          </h2>
          <p className="text-base md:text-[20px] text-[#E9E9E9] font-light mt-6 md:mt-[30px]">
            {section.description}
          </p>
        </div>
      ))} */}

      {/* Apply Buttons Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[41px] mt-16 md:mt-[150px]">
        <button
          onClick={handleJobDetailsClick}
          className="text-lg md:text-[25px] font-Montserrat font-bold bg-[#53ACFF] hover:bg-[#53ACFF]/60 rounded-[50px] px-8 md:px-[48px] py-4 md:py-[25px] transition-colors duration-500"
        >
          Apply for This Position
        </button>
        <button
          onClick={handleJobDetailsClick}
          className="flex justify-center items-center text-lg md:text-[25px] font-Montserrat font-extralight border border-[#FFFFFF] hover:bg-white/20 hover:border-white/5 transition-colors duration-500 rounded-[50px] px-8 md:px-[48px] py-4 md:py-[25px]"
        >
          <LiaTelegram className="text-2xl md:text-[39px] mr-1 md:mr-[4.5px]" />
          Apply for This Position
        </button>
      </div>
    </div>
  );
};

export default JobDetail;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CurrentOpeningsJobs = ({
  job
}) => {
  const navigate = useNavigate();
  console.log(job);
  const handleJobDetailsClick = () => {
    navigate(`/job/${job._id}`, {
      state: job,
    });
  };

  return (
    <motion.div
      className="text-[#ABABAB] z-50 font-Montserrat hover:bg-[#1F1F1F]/80 border border-[#777777] py-[29px] sm:py-[38px] px-[20px] sm:px-[40px] rounded-[30px] mb-[20px] sm:mb-[33px] transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }} // Trigger only once when in view
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="max-w-full sm:max-w-[80%]">
          {/* Job title, department, remote status, and salary */}
          <p className="text-[15px] sm:text-[25px]">
            <span className="text-[17px] sm:text-[30px] font-bold">
              {job.title}
            </span>{" "}
            | {job.department} {job.remote ? "Remote" : "On-site"} - {job.salary}
          </p>

          {/* Job description */}
          <p className="text-[14px] sm:text-[20px] font-Montserrat text-[#ABABAB] my-[15px] sm:my-[20px] max-w-full sm:max-w-[70%]">
            {job.description}
          </p>

          {/* Job posting date */}
          <p className="text-[12px] sm:text-[15px] font-Montserrat text-[#ABABAB]">
            {job.date?.split("T")[0]} - {job.date?.split("T")[1]?.split(".")[0]}
          </p>
        </div>

        {/* Job details button */}
        <button
          onClick={handleJobDetailsClick}
          className="mt-[30px] sm:mt-0 text-white/50 text-[12.8px] sm:text-[25px] font-bold border border-[#FFFFFF]/50 hover:bg-[#53ACFF] hover:border-none hover:text-white px-[20px] sm:px-[28px] py-[10px] sm:py-[20px] rounded-[50px] transition-colors duration-500"
        >
          Job Details
        </button>
      </div>
    </motion.div>
  );
};

export default CurrentOpeningsJobs;

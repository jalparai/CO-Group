import CurrentOpeningsJobs from "./CurrentOpeningsJobs";
import briefcase from "../../../assets/JobListingsItems/briefcase.svg";
import { apiclient } from "../../../apiConfig/apiConfig";
import { use, useEffect, useState } from "react";

// Job listings data
const jobListingsData = [
  {
    id: 0,
    title: "Customer Service Representative",
    department: "Sales",
    remote: true,
    salary: "920$ Monthly",
    description:
      "Assist customers with inquiries, issues, and concerns related to COD orders, delivering a high level of customer satisfaction.",
    date: "26 January 2024",
    JobDetail: {
      JOBOVERVIEW:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore eum numquam officiis quam fugiat possimus quisquam quibusdam ipsa accusantium sequi? Nesciunt veniam numquam magni velit, natus culpa quibusdam porro hic?",
      LOCATION: "Dubai, UAE",
      JOBDESCRIPTION:
        "COD POWER GROUP provides various merchants and manufacturers with direct order fulfillment services to the customer, under which COD POWER GROUP stores, packs, and ships products to the merchant's customers; and Therefore, the company wishes to retain the services of COD POWER GROUP, and COD POWER GROUP wishes to provide services to the company, subject to the terms and conditions of this agreement; and Therefore, the parties agree as follows, in consideration of the mutual covenants and conditions set forth herein, and for other good and valuable reasons, the receipt and sufficiency of which are acknowledged hereby",
    },
  },
  {
    id: 1,
    title: "Customer Success Manager",
    department: "Management",
    remote: true,
    salary: "920$ Monthly",
    description:
      "Build and maintain long-term relationships with clients, ensuring their success and satisfaction with our COD services.",
    date: "26 January 2024",
    JobDetail: {
      JOBOVERVIEW:
        "COD POWER GROUP provides various merchants and manufacturers with direct order fulfillment services to the customer, under which COD POWER GROUP stores, packs, and ships products to the merchant's customers; and Therefore, the company wishes to retain the services of COD POWER GROUP, and COD POWER GROUP wishes to provide services to the company, subject to the terms and conditions of this agreement; and Therefore, the parties agree as follows, in consideration of the mutual covenants and conditions set forth herein, and for other good and valuable reasons, the receipt and sufficiency of which are acknowledged hereby",
      LOCATION: "Dubai, UAE",
      JOBDESCRIPTION:
        "COD POWER GROUP provides various merchants and manufacturers with direct order fulfillment services to the customer, under which COD POWER GROUP stores, packs, and ships products to the merchant's customers; and Therefore, the company wishes to retain the services of COD POWER GROUP, and COD POWER GROUP wishes to provide services to the company, subject to the terms and conditions of this agreement; and Therefore, the parties agree as follows, in consideration of the mutual covenants and conditions set forth herein, and for other good and valuable reasons, the receipt and sufficiency of which are acknowledged hereby",
    },
  },
  {
    id: 2,
    title: "Account Manager",
    department: "Direction",
    remote: true,
    salary: "920$ Monthly",
    description:
      "Manage client accounts, providing personalized support and guidance to help them maximize the benefits of our COD services.",
    date: "26 January 2024",
    JobDetail: {
      JOBOVERVIEW:
        "COD POWER GROUP provides various merchants and manufacturers with direct order fulfillment services to the customer, under which COD POWER GROUP stores, packs, and ships products to the merchant's customers; and Therefore, the company wishes to retain the services of COD POWER GROUP, and COD POWER GROUP wishes to provide services to the company, subject to the terms and conditions of this agreement; and Therefore, the parties agree as follows, in consideration of the mutual covenants and conditions set forth herein, and for other good and valuable reasons, the receipt and sufficiency of which are acknowledged hereby",
      LOCATION: "Dubai, UAE",
      JOBDESCRIPTION:
        "COD POWER GROUP provides various merchants and manufacturers with direct order fulfillment services to the customer, under which COD POWER GROUP stores, packs, and ships products to the merchant's customers; and Therefore, the company wishes to retain the services of COD POWER GROUP, and COD POWER GROUP wishes to provide services to the company, subject to the terms and conditions of this agreement; and Therefore, the parties agree as follows, in consideration of the mutual covenants and conditions set forth herein, and for other good and valuable reasons, the receipt and sufficiency of which are acknowledged hereby",
    },
  },
  {
    id: 3,
    title: "Media Buyer",
    department: "Marketing",
    remote: true,
    salary: "920$ Monthly",
    description:
      "Develop and implement media buying strategies to promote our COD services and drive customer engagement.",
    date: "26 January 2024",
    JobDetail: {
      JOBOVERVIEW:
        "COD POWER GROUP provides various merchants and manufacturers with direct order fulfillment services to the customer, under which COD POWER GROUP stores, packs, and ships products to the merchant's customers; and Therefore, the company wishes to retain the services of COD POWER GROUP, and COD POWER GROUP wishes to provide services to the company, subject to the terms and conditions of this agreement; and Therefore, the parties agree as follows, in consideration of the mutual covenants and conditions set forth herein, and for other good and valuable reasons, the receipt and sufficiency of which are acknowledged hereby",
      LOCATION: "Dubai, UAE",
      JOBDESCRIPTION:
        "COD POWER GROUP provides various merchants and manufacturers with direct order fulfillment services to the customer, under which COD POWER GROUP stores, packs, and ships products to the merchant's customers; and Therefore, the company wishes to retain the services of COD POWER GROUP, and COD POWER GROUP wishes to provide services to the company, subject to the terms and conditions of this agreement; and Therefore, the parties agree as follows, in consideration of the mutual covenants and conditions set forth herein, and for other good and valuable reasons, the receipt and sufficiency of which are acknowledged hereby",
    },
  },
];



const getJobsList = async () => {
    const res = await apiclient.get('/job/get')
    console.log(res.data)
    return res.data
    
}
// JobListings component
const JobListings = ({data}) => {
  const [jobs, setJobs] = useState([])

  useEffect (() => {
    const getJobs = async () => {
      const joblist = await getJobsList()
      console.log(joblist)
      setJobs(joblist)
    }
    getJobs()
  }
  ,[])

  useEffect(() => {},[data]);


  return (
    <div className="z-50 min-h-screen flex flex-col justify-center items-center py-8 md:py-12 lg:py-[38px] px-4 sm:px-6 lg:px-0">
      <div className="w-full max-w-[1200px]">
        {/* Heading Section */}
        <div className="flex self-start items-center my-[40px] lg:my-[99px]">
          <img
            src={data?.generalSection?.image || briefcase}
            alt="briefcase"
            className="w-[49.15px] lg:w-auto h-auto"
          />
          <h2 className="text-[25px] lg:text-[50px] font-bold font-Montserrat ml-4">
            {data?.generalSection?.heading || "Current Openings"}
          </h2>
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <CurrentOpeningsJobs
              job={job}
            />
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-[12.8px] sm:text-[20px] md:text-[25px] text-center font-extralight font-Montserrat mt-8 w-[350px] lg:w-auto mx-auto">
         { data?.generalSection?.description ||
          <>Interested in Glide but not looking for a position? We’d love to meet
          you! <span className="font-semibold">Reach Out</span></>
        }
        </p>
      </div>
    </div>
  );
};

export default JobListings;

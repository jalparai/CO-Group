import { motion } from "framer-motion";
import SearchIcon from "../../../assets/HelpCenterIcons/SearchIcon.svg";
import Bg from "../../../assets/Dashboard/spera14.svg";
import { useState } from "react";

const BlogSearchSection = ({blogs, setSearchedBlogs, isGuidesPage=false, data}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterBySearch = (e) => {
    
    // Early return if blogs is empty
    if (!blogs || blogs.length === 0) {
      return;
    }
    
    // If search term is empty, return all blogs
    if (!searchTerm.trim()) {
      setSearchedBlogs(blogs);
      return;
    }
    
    const filteredBlogs = blogs.filter((blog) => 
      (blog?.title?.toLowerCase() || "").includes(searchTerm) ||
      (blog?.subtitle?.toLowerCase() || "").includes(searchTerm) ||
      (blog?.description?.toLowerCase() || "").includes(searchTerm) ||
      (blog?.content?.toLowerCase() || "").includes(searchTerm) ||
      (blog?.category?.toLowerCase() || "").includes(searchTerm) ||
      (blog?.creator?.toLowerCase() || "").includes(searchTerm) ||
      (blog?.metaDescription?.toLowerCase() || "").includes(searchTerm) ||
      (blog?.slug?.toLowerCase() || "").includes(searchTerm)
    );
    
    setSearchedBlogs(filteredBlogs);
  }
  return (
    <div className="flex flex-col items-center justify-center mt-[20px] md:mt-[150px] lg:mt-[238px]">
      <img src={Bg} className="absolute w-[100%] z-[-10]" />

      <div className="absolute inset-0 h-screen top-[100px] bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"></div>
      <motion.h2
        className="text-white text-[32px] md:text-[42px] lg:text-[50px] mb-[35px] md:mb-[45px] lg:mb-[54px] font-Montserrat font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data? data.title : isGuidesPage ? "Explore Our Guides" : "Blogs"}
      </motion.h2>
      <motion.p
        className="text-white text-[16px] md:text-[20px] lg:text-[25px] text-center mb-[54px] font-Montserrat font-light max-w-[345px] md:max-w-[600px] lg:max-w-[836px] w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
       {data?.generalSection?.description? data.generalSection.description : "Stay  with the latest trends, tips, and industry news across various e-commerce domains:"}
      </motion.p>
      <motion.div
        className="flex items-center w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1205px] border-[0.5px] border-[#3C3C3C] rounded-full bg-[#09090F]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
          placeholder="Search for articles ? ..."
          className="flex-grow w-full px-[20px] sm:px-[25px] md:px-[28px] lg:px-[31px] py-[15px] sm:py-[30px] md:py-[35px] lg:py-[41px] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-white font-light font-Montserrat bg-transparent focus:outline-none rounded-l-full"
        />
        <button 
        onClick={filterBySearch}
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-Montserrat text-white py-[8px] sm:py-[10px] md:py-[12px] lg:py-[15px] px-[20px] sm:px-[25px] md:px-[28px] lg:px-[31px] m-[15px] sm:m-[20px] md:m-[22px] lg:m-[25px] rounded-full">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="mr-2 w-[20px] md:w-[22px] lg:w-auto h-auto"
            
          />
          Search
        </button>
      </motion.div>
    </div>
  );
};

export default BlogSearchSection;

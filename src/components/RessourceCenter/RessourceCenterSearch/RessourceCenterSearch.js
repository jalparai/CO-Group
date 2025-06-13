import SearchIcon from "../../../assets/HelpCenterIcons/SearchIcon.svg";
import { useState } from "react";

const RessourceCenterSearch = ({blogs, setSearchedBlogs}) => {

  const [searchTerm, setSearchTerm] = useState("");
    const filterBySearch = (e) => {
      console.log(blogs);
      
      // Early return if blogs is empty
      if (!blogs || blogs.length === 0) {
        console.log("No blogs to filter");
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
      
      console.log("filtered  blogs", filteredBlogs);
      setSearchedBlogs(filteredBlogs);
    }


  return (
    <div className="flex flex-col items-center justify-center mt-[44px]">
      <div className="flex items-center w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1205px] rounded-full bg-gray-900 shadow-md">
        <input
          onChange={(e) => {setSearchTerm(e.target.value); filterBySearch(e)}}
          value={searchTerm}
          type="text"
          placeholder="Search for articles ? ..."
          className="flex-grow w-full px-[20px] sm:px-[25px] md:px-[31px] py-[15px] sm:py-[30px] md:py-[41px] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-white font-light font-Montserrat bg-transparent focus:outline-none rounded-l-full"
        />
        <button 
        onClick={filterBySearch}
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-[15.36px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-Montserrat text-white py-[8px] sm:py-[10px] px-[20px] sm:px-[25px] md:px-[31px] lg:px-[37px] m-[15px] sm:m-[20px] md:m-[25px] rounded-full">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="mr-2 w-[20.48px] lg:w-auto h-auto"
          />
          Search
        </button>
      </div>
    </div>
  );
};

export default RessourceCenterSearch;

import { motion } from "framer-motion";
import Rectangle703 from "../../../assets/Blog/LatestBlogs/Rectangle703.png";
import { useNavigate } from "react-router-dom";
import Bg from "../../../assets/Dashboard/spera16.svg"
import { useEffect, useState } from "react";

const Blog = ({ index, blog, blogPosts}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="shadow-lg rounded-lg font-Montserrat overflow-hidden cursor-pointer"
      onClick={() => navigate(`/blog/${blog.title}`, {state: {blog, blogPosts}})}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="relative mb-6">
        <img className="h-[200px] sm:h-[250px] lg:h-[289px] w-full object-cover lg:rounded-[30px] rounded-xl" src={blog.blogPhoto} alt={blog.category} />
      </div>
      <div className="p-4">
        <div className="text-sm sm:text-base lg:text-[20px] text-[#6F6F6F] font-extralight">
          <span className="font-semibold tracking-[2px] sm:tracking-[3px] lg:tracking-[5px] text-[#338AF3]">{blog.Subtitle}</span> - {blog.readTime} min read
        </div>
        <h3 className="text-lg sm:text-xl lg:text-[25px] font-bold my-4 lg:my-[34px]">{blog.title}</h3>
        <p className="text-sm sm:text-base lg:text-[20px] font-light text-[#A5A5A5] mb-4 lg:mb-[34px]">{blog.description}</p>
        <div className="text-xs sm:text-sm lg:text-[15px] font-light text-[#6F6F6F]">{blog.date}</div>
      </div>
    </motion.div>
  );
};


const fetchBlogs = async () => {
  try {
    const response = await apiclient.get("/blog/get/resource-center");
    return response.data;
  } catch (error) {
    console.error("fetchBlogs -> error", error);
  }
};

// const blogPosts = [
//   { id: 1, blogPhoto: Rectangle703, category: "Shipping", title: "Enhance customer support and maximize efficiency.", description: "COD Power Group offers reliable shipping and warehousing solutions for your customers.", date: "February 16, 2024", readTime: "10" },
//   { id: 2, blogPhoto: Rectangle703, category: "Shipping", title: "Enhance customer support and maximize efficiency.", description: "COD Power Group offers reliable shipping and warehousing solutions for your customers.", date: "February 16, 2024", readTime: "10" },
//   { id: 3, blogPhoto: Rectangle703, category: "Shipping", title: "Enhance customer support and maximize efficiency.", description: "COD Power Group offers reliable shipping and warehousing solutions for your customers.", date: "February 16, 2024", readTime: "10" },
//   { id: 4, blogPhoto: Rectangle703, category: "Shipping", title: "Enhance customer support and maximize efficiency.", description: "COD Power Group offers reliable shipping and warehousing solutions for your customers.", date: "February 16, 2024", readTime: "10" },
// ];

const AllRessources = ({blogPosts, data}) => {
// const [blogPosts, setBlogPosts] = useState([]);
//   useEffect (() => {
//     const fetchBlogsData = async () => {
//       const blogs = await fetchBlogs();
//       setBlogPosts(blogs);
//       console.log("AllRessources -> blogs", blogs);
//     };
//     fetchBlogsData();
//   }
//   , []);


  return (
    <div className="container font-Montserrat mx-auto mt-8 sm:mt-[103px] px-4">
            <img src={Bg} className="absolute w-[100%] z-[-10]"/>

      <motion.h2
        className="text-2xl sm:text-3xl lg:text-[50px] font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {data?.generalSection?.heading || "All Ressources"}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {blogPosts.map((blog, index) => (
          <Blog key={index} index={index} blog={blog} blogPosts={blogPosts} />
        ))}
      </motion.div>

      <motion.button
        className="flex justify-center items-center text-white border text-xs sm:text-sm lg:text-[16px] font-Montserrat rounded-lg sm:rounded-[19.01px] lg:rounded-[30px] w-[100px] sm:w-[155.23px] lg:w-[245px] h-[30px] sm:h-[38.02px] lg:h-[60px] mx-auto mt-8 sm:mt-[82px] gap-2 hover:bg-white/20 hover:border-white/20 transition-colors duration-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        type="button"
      >
        Loading More
      </motion.button>
    </div>
  );
};

export default AllRessources;

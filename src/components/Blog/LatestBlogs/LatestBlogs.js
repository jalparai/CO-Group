import React, { useEffect, useState } from "react";
import Rectangle703 from "../../../assets/Blog/LatestBlogs/Rectangle703.png";
import headphones from "../../../assets/Blog/categoriesIcons/headphones.svg";
import boxes from "../../../assets/Blog/categoriesIcons/boxes.svg";
import packag from "../../../assets/Blog/categoriesIcons/package.svg";
import truck from "../../../assets/Blog/categoriesIcons/truck.svg";
import boxtimes from "../../../assets/Blog/categoriesIcons/boxtimes.svg";
import cod from "../../../assets/Blog/categoriesIcons/cod.svg";
import Warehousing from "../../../assets/Blog/categoriesIcons/Warehousing.svg";
import shoppingbasket from "../../../assets/Blog/categoriesIcons/shoppingbasket.svg";
import Affiliation from "../../../assets/Blog/categoriesIcons/Affiliation.svg";
import trophystar from "../../../assets/Blog/categoriesIcons/trophystar.svg";

import BlogGuides from "./BlogGuides";
import Bg from "../../../assets/Dashboard/spera16.svg"

import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Blog = ({blog, blogPosts, url}) => {
  const navigate = useNavigate();
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <motion.div
      className="font-Montserrat cursor-pointer"
      onClick={() => navigate(`/${url}/${blog.slug}`, {state: {blog, blogPosts} })}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mb-[29px] lg:mb-[38px] overflow-hidden rounded-[25px]">
        <motion.img
          className="w-[400px] lg:w-auto h-auto"
          src={blog.blogPhoto}
          alt={blog.category}
          whileHover={{ scale: 1.05 }} // Zoom effect on hover
          transition={{ duration: 0.2 }} // Smooth transition
        />
      </div>
      <div className="p-4">
        <div className="text-[15px] lg:text-[20px] text-[#6F6F6F] font-extralight">
          <span className="font-semibold tracking-[5px] text-[#338AF3]">
           {blog.subtitle}
          </span>{" "}
          - {blog.readTime} min read
        </div>
        <h3 className="text-[22px] lg:text-[25px] font-bold my-[24px] lg:my-[34px]">
          {blog.title}
        </h3>
        <p className="text-[20px] font-light text-[#A5A5A5] mb-[24px] lg:mb-[34px]">
          {blog.description}
        </p>
        <div className="text-[15px] font-light text-[#6F6F6F]">{formatDate(blog.date)}</div>
      </div>
    </motion.div>
  );
};

export const blogPosts = [
  {
    id: 1,
    blogPhoto: Rectangle703,
    category: "Shipping",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 2,
    blogPhoto: Rectangle703,
    category: "Shipping",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 3,
    blogPhoto: Rectangle703,
    category: "Shipping",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 4,
    blogPhoto: Rectangle703,
    category: "Shipping",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 5,
    blogPhoto: Rectangle703,
    category: "Shipping",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 6,
    blogPhoto: Rectangle703,
    category: "Getting Started",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 202enial 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 7,
    blogPhoto: Rectangle703,
    category: "Getting Started",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 8,
    blogPhoto: Rectangle703,
    category: "Getting Started",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
  {
    id: 9,
    blogPhoto: Rectangle703,
    category: "Getting Started",
    title: "Enhance customer support and maximize efficiency.",
    description:
      "COD Power Group offers reliable shipping and warehousing solutions for your customers.",
    date: "February 16, 2024",
    readTime: "10",
    creator: "Amine M’GHARI",
    blogDetails: "",
  },
];





const LatestBlogs = ({blogs, setBlogs, isGuidesPage=false, data}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();
  const url = location.pathname.split("/")[1]; // Get the URL path (e.g., "blog" or "guides")
  const categories = [
    {
      name: "All",
      icon: "",
    },
    {
      name: "Call Center",
      icon: headphones,
    },
    {
      name: "Fulfillment",
      icon: boxes,
    },
    {
      name: "Logistic Services",
      icon: packag,
    },
    {
      name: "Shipping",
      icon: truck,
    },
    {
      name: "Sourcing Goods",
      icon: boxtimes,
    },
    {
      name: "Cash on Delivery",
      icon: cod,
    },
    {
      name: "Warehousing",
      icon: Warehousing,
    },
    {
      name: "E-commerce",
      icon: shoppingbasket,
    },
    {
      name: "Affiliation",
      icon: Affiliation,
    },
    {
      name: "Winning Products",
      icon: trophystar,
    },
  ];

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("latest-blogs-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check if the section is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const filterByCategory = (e) => {
    const selected = e.target.innerText;
    setSelectedCategory(selected);
    if (selected === "All") {
      setFilteredBlogs(blogs);
    } else {
      const filteredBlogs = blogs.filter(
        (blog) => blog.category === selected
      );
      setFilteredBlogs(filteredBlogs);
    }
  }
 
  return (
    <motion.div
      id="latest-blogs-section"
      className="container font-Montserrat mx-auto mt-[53px] lg:mt-[103px] px-4 lg:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
            <img src={Bg} className="absolute w-[100%] z-[-10]"/>

      <h2 className="text-[28px] lg:text-[50px] font-bold text-white">
        {data? data?.title : isGuidesPage ? "Explore Our Guides" : "Latest Blogs"}
      </h2>

      <div className="flex flex-wrap gap-4 mt-[40px] mb-[58px] lg:mb-[179px] justify-start">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className={`flex items-center py-[12px] px-[11px] lg:py-[14px] lg:px-[48px] rounded-[35px] text-[14px] lg:text-[20px] xl:text-[25px] ${
              category.name === selectedCategory
                ? "bg-white text-black px-[30px]"
                : "bg-[#CCCCCC]/10 hover:bg-[#CCCCCC]/20"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            onClick={filterByCategory}
            
          >
            {index !== 0 && (
              <img
                src={category.icon}
                alt={category.name}
                className={`mr-[10px] w-[14px] lg:w-auto ${category.name === selectedCategory ? "brightness-0" // Makes the icon white
      : "opacity-70"}`}
              />
            )}
            {category.name}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.slice(0, 6).map((blog, index) => (
          <Blog key={index} blog={blog} blogPosts={blogs} url={url.toLowerCase().startsWith("blog") ? "blog" : "guides"} />
        ))}
      </div>

      {/* <BlogGuides /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.slice(6).map((blog, index) => (
          <Blog key={index + 6} blog={blog} url={url.toLowerCase().startsWith("blog") ? "blog" : "guides"}/>
        ))}
      </div>

      <motion.button
        className="flex justify-center items-center text-white border text-[10.14px] lg:text-[16px] font-Montserrat rounded-[19.01px] lg:rounded-[30px] w-[155.23px] h-[38.02px] lg:w-[245px] lg:h-[60px] mx-auto mt-[40px] lg:mt-[82px] gap-2 hover:bg-white/20 hover:border-white/20 transition-colors duration-500"
        type="button"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Loading More
      </motion.button>

    </motion.div>
  );
};

export default LatestBlogs;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import map from "../../../assets/Blog/LatestBlogs/map.svg";

const BlogGuides = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set up an IntersectionObserver to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger animation when 30% of the component is visible
    );

    const element = document.getElementById("blog-guides");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      id="blog-guides"
      className="relative flex flex-col my-9 lg:my-[88px]"
    >
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row w-full"
        initial={{ opacity: 0, y: 100 }} // initial state: invisible and slightly lower
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 100, // Move up or down based on visibility
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative flex flex-col lg:flex-row lg:space-x-[160px] rounded-[30px]">
          {/* Left Section: Title and Guides */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="mb-[30px] lg:mb-0">
              <div
                className="text-white text-[20px] lg:text-[32px] font-Montserrat font-light inline-flex items-center transition-colors duration-500"
                type="button"
              >
                <img
                  src={map}
                  alt="map"
                  className="w-[30px] lg:w-auto h-auto mr-2"
                />
                Guides
              </div>
              <h1 className="text-[23px] lg:text-[40px] font-Montserrat font-bold tracking-normal leading-8 lg:leading-10 w-auto lg:w-[690px]">
                Our comprehensive guides provide in-depth knowledge and
                actionable insights
              </h1>
            </div>
          </div>

          {/* Right Section: Description */}
          <div className="flex items-center w-full max-w-[402px]">
            <p className="text-[12px] lg:text-[24px] leading-4 lg:leading-7 text-[#6F6F6F] font-light font-Montserrat">
              We offer rich insights and practical advice on all aspects of COD
              and e-commerce.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogGuides;

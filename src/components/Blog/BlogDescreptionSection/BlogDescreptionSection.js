import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Rectangle from "../../../assets/AboutUsItems/AboutUsDescreptionSection/Rectangle.png";

const BlogDescreptionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Allow it to trigger both on entering and leaving the viewport
    threshold: 0.1,      // Trigger when 10% of the section is in view
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center mt-[58px] lg:mt-[134px] px-4 md:px-8"
    >
      <div className="max-w-[1232px] w-full mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-[30px] lg:space-x-[50px]"
          initial={{ opacity: 0, y: 100 }}  // Initial state when section is out of view
          animate={{
            opacity: inView ? 1 : 0,      // Fade in when in view, fade out when out of view
            y: inView ? 0 : 100,           // Fade-up when in view, fade-down when out of view
          }}
          transition={{ duration: 1 }}      // Smooth transition effect
        >
          <img
            src={Rectangle}
            alt="Rectangle"
            className="w-full md:w-1/2 max-w-[100%] md:max-w-[100%] lg:max-w-none"
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <button
              className="text-[#7C7C7C] border border-[#7C7C7C] text-[10.14px] md:text-[12px] lg:text-[16px] font-Montserrat rounded-[30px] lg:rounded-[40px] px-[20px] py-[12px] lg:px-[30px] lg:py-[21px] gap-2 inline-flex justify-center items-center hover:bg-white/20 hover:border-white/20 transition-colors duration-500"
              type="button"
            >
              Products / Cash on Delivery
            </button>

            <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-Montserrat font-semibold max-w-full md:max-w-[500px] lg:max-w-[672.07px] w-full my-4 md:my-[20px] lg:my-[30px]">
              Why digital marketing assets are essential to your brand?
            </h3>
            <p className="text-[#6F6F6F] text-[12px] md:text-[16px] lg:text-[20px] font-Montserrat font-normal w-full max-w-[500px] sm:max-w-[595px] mx-auto md:mx-0">
              COD Power Group offers reliable shipping services to deliver
              orders to your customers worldwide. We partner with trusted
              shipping carriers to offer a range of shipping options to meet
              your specific needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDescreptionSection;

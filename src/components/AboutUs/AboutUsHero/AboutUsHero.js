import { motion } from "framer-motion";

const AboutUsHero = ({data}) => {
  return (
    <div className="relative flex flex-col items-center mt-[36px] md:mt-[200px] px-4 w-full">
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center w-full max-w-[1496px] mx-auto">
        {/* Main Content Wrapper */}
        <div className="relative flex flex-col md:flex-row items-center w-full lg:w-auto px-4 sm:px-[26px] py-[36px] lg:py-[54px] lg:px-[42px] rounded-[20px] lg:rounded-[30px] shadow-md">
          {/* Left Section: Title and Button */}
          <div className="flex-1 flex justify-center lg:justify-start w-full lg:w-auto mb-6 lg:mb-0">
            <div className="w-full max-w-[672px]">
              {/* Breadcrumb Button */}
              <motion.button
                className="text-white border text-sm lg:text-base font-Montserrat rounded-[20px] lg:rounded-[30px] w-[140px] lg:w-[240px] h-[40px] lg:h-[60px] gap-2 inline-flex justify-center items-center hover:bg-white/20 hover:border-white/20 transition-colors duration-500"
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {data?.title || "Home / About Us"}
              </motion.button>

              {/* Heading */}
              <motion.h1
                className="mt-6 mb-4 lg:mt-[48px] lg:mb-[30px] text-[28px] sm:text-[32px] lg:text-[45px] font-Montserrat font-bold tracking-normal leading-[36px] sm:leading-[40px] lg:leading-[60px] dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {data?.generalSection?.heading || "We Empower Your Digital Success"}
              </motion.h1>
            </div>
          </div>

          {/* Right Section: Description */}
          <motion.div
            className="flex justify-center lg:justify-end w-auto md:max-w-[472px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[30px] text-gray-600 font-light font-Montserrat">
              {data?.generalSection?.description || "This is your trusted partner in the realm of online business."+
              "Providing e-commerce and dropshipping services, we are committed"+
              "to helping you achieve your business goals efficiently and"+
              "effectively. With a passion for excellence, we strive relentlessly"+
              "to deliver solutions that drive your digital success."}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;

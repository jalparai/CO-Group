import { motion } from "framer-motion";
import lifeRing from "../../../assets/HelpCenterIcons/lifeRing.svg";
import Bg from "../../../assets/Dashboard/spera13.svg"

const HelpCenterHero = ({data}) => {
  return (
    <section className="relative flex flex-col items-center md:mt-9 lg:mt-[140px] px-4">
            <img src={Bg} className="absolute w-[100%]"/>

      <div className="relative z-10 flex flex-col lg:flex-row items-center">

        <div
          className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
          //   backgroundBlendMode: "overlay",
          // }}
        ></div>

        {/* Main Content with fade-up/fade-down animation */}
        <motion.div
          className="relative flex flex-col lg:flex-row items-center lg:space-x-[200px] w-full max-w-[400px] lg:max-w-none huge:w-[1496px] p-6 lg:px-[42.5px] lg:py-[54.5px] huge:px-[113px] huge:py-[118.5px] rounded-[30px]"
          initial={{ opacity: 0, y: 50 }} // Initial state: fully transparent and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade-up animation when in view
          exit={{ opacity: 0, y: -50 }} // Fade-down animation when out of view
          viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is in view
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition for both
        >
          {/* Left Section - Icon and Heading */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div>
              <div
                className="flex items-center gap-2 mt-8"
                aria-label="Help Center Icon and Title"
              >
                <img
                  src={data?.generalSection?.image || lifeRing}
                  alt="Help Center Icon"
                  className="w-[38.4px] lg:w-auto h-auto"
                />
                <span className="text-white/50 text-[25.6px] md:text-[20px] lg:text-[40px] font-light font-Montserrat">
                  {data?.generalSection?.heading || "Help Center"}
                </span>
              </div>
              <h1 className="my-4 md:my-6 lg:my-12 text-[28px] md:text-[32px] lg:text-[45px] font-Montserrat font-bold tracking-normal leading-snug lg:leading-[60px] dark:text-white">
                {data?.generalSection?.description || "Welcome to Our Help Center"}
              </h1>
            </div>
          </div>
          {/* Right Section - Description */}
          <div className="flex justify-center items-center lg:justify-end w-full max-w-[472px]">
            <p className="text-[14px] md:text-[20px] lg:text-[25px] font-Montserrat font-extralight md:px-0">
              {data?.generalSection?.caption || "Find answers to all your questions. Whether you need assistance"+
              "with account management, billing, technical support, or more."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpCenterHero;

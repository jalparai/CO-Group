import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonIcon from "../../../../assets/WarehousingAndFulfillmentHeroItems/ButtonIcon.svg";
import Rectangl from "../../../../assets/WarehousingAndFulfillmentHeroItems/Rectangl.png";
import { useInView } from "react-intersection-observer";
import Bg from "../../../../assets/Dashboard/Blue-carve.svg"

const WarehousingAndFulfillmentHero = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // This ensures the fade effect only triggers when the element comes into view
    threshold: 0.2, // Adjust this to make the element start fading when it's 20% in the viewport
  });
   useEffect(() => {}, [data]);
  return (
    <div className="relative flex flex-col items-center lg:mt-[140px] px-4">
                          {/* <img src={Bg} className="absolute w-[100%] top-[100px] lg:top-[300px]"/> */}

      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-[1200px] w-full">
        <div
          ref={ref}
          className="relative flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 w-full px-6 py-8 lg:px-10 lg:py-12 rounded-[30px]"
        >
          {/* Text and Button Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: inView ? 1 : 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col items-start text-left"
          >
            <motion.div
              initial={{
                background: "linear-gradient(to right, #53ACFF, #282E6A)",
              }}
              animate={{
                background: isHovered
                  ? "linear-gradient(to right, #282E6A, #53ACFF)"
                  : "linear-gradient(to right, #53ACFF, #282E6A)",
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="rounded-full inline-flex items-center justify-center mt-8"
            >

              <button
                className="text-white text-[10.24px] lg:text-[16px] font-medium font-Montserrat rounded-[30px] w-auto h-[38px] lg:h-[60px] px-4 lg:px-[16px] flex justify-center items-center gap-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                type="button"
              >
                <img
                  src={ButtonIcon}
                  alt="ButtonIcon"
                  className="w-[17.52px] lg:w-auto h-auto"
                />
                {data?.title? data.title : "Solutions / Warehousing & Fulfillment"}
              </button>
            </motion.div>
            <h1 className="mt-[19px] lg:mt-[30px] text-[25px] lg:text-[50px] font-bold font-Montserrat leading-tight lg:leading-tight lg:w-[634px] dark:text-white">
            {data?.generalSection?.heading? data.generalSection?.heading : "Efficient Warehousing & Fulfillment Solutions"}
            </h1>
            <p className="mt-[19px] lg:mt-[30px] w-full max-w-lg lg:max-w-[724px] text-[12.8px] lg:text-[20px] font-Montserrat leading-relaxed text-gray-600">
              {data?.generalSection?.description ? data.generalSection?.description : 
              "COD Power Group offers reliable warehousing and fulfillment"+
              "services to optimize your inventory management and streamline your"+
              "order fulfillment process. Our strategically located warehouses"+
              "provide secure storage for your products, while our efficient"+
              "fulfillment processes ensure fast and accurate order processing."+
              "With COD Power, you can deliver orders to your customers quickly"+
              "and efficiently, enhancing their shopping experience."}
            </p>
            <a
              href={data?.generalSection?.buttons[0]?.url || "https://get-started.codpowergroup.com/registration"}
              target="blank"
              className="mt-[19px] lg:mt-[30px] text-[16px] lg:text-[25px] font-bold font-Montserrat text-blue-500"
            >
              {data?.generalSection?.buttons[0]?.text || "Get Started Now"}
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: inView ? 1 : 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="relative flex justify-center items-center lg:justify-end mt-6 lg:mt-0 w-full max-w-sm lg:max-w-md"
          >
            <img
              src={data?.generalSection?.image || Rectangl}
              alt="worker"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WarehousingAndFulfillmentHero;

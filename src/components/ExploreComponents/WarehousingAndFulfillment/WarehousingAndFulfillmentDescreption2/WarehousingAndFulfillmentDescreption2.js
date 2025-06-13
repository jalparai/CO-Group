import { motion } from "framer-motion";
import BenefitsofOurWarehousingFulfillmentService from "../../../../assets/WarehousingAndFulfillmentDescreption2Items/BenefitsofOurWarehousingFulfillmentService.png";
import Bg from "../../../../assets/Dashboard/Spher-7.svg"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WarehousingAndFulfillmentDescreption2 = ({data}) => {
  return (
    <div className="relative flex flex-col items-center mt-[41px] lg:mt-[134px] mb-[58px] px-4 sm:px-6 lg:px-8">
      {/* Section label */}
      <img src={Bg} className="absolute w-[100%] lg:top-[-900px]"/>

      <motion.div
        className="flex justify-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[18px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
      >
        <div className="text-[#E61D2D] text-[12.8px] sm:text-[15.76px] lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]">
          {data?.title || "WAREHOUSING BENEFITS"}
        </div>
      </motion.div>

      {/* Main heading */}
      <motion.div
        className="relative text-center mb-[26px] sm:mb-[30px] lg:mb-[79px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
      >
        <h1 className="whitespace-pre-line text-[28.8px] sm:text-[39.4px] lg:text-[50px] font-Montserrat font-bold leading-[38.3px] sm:leading-[47.15px] lg:leading-[60px]">
        {data?.generalSection?.heading || 
          <>
          Benefits of
          <br className="block lg:hidden" />
          Our Warehousing
          <br className="hidden lg:block" />{" "}
          &amp; Fulfillment Service
          </>}
        </h1>
      </motion.div>

      <div className="max-w-[1232px] w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[50px] lg:space-x-[100px]">
          {/* Text content */}
          <motion.div
            className="whitespace-pre-line md:ml-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariants}
          >
            <h3 className="text-[18px] sm:text-[26px] md:text-[29px] font-Montserrat font-semibold mb-[20px] sm:mb-[30px]">
            {data?.generalSection?.description || "Streamlined Order Fulfillment"}
            </h3>
            <p className="text-[#6F6F6F] text-[15px] sm:text-[18px] md:text-[24px] font-Montserrat font-normal max-w-[378.24px] md:max-w-[450px] lg:max-w-[591px]">
            {data?.generalSection?.caption || "We streamline the order fulfillment process, allowing you to focus on"+
              "growing your business while we handle the rest."}
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            src={BenefitsofOurWarehousingFulfillmentService}
            alt="BenefitsofOurWarehousingFulfillmentService"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariants}
          />
        </div>
      </div>
    </div>
  );
};

export default WarehousingAndFulfillmentDescreption2;

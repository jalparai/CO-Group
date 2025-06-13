import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const DescreptionTitle = ({data}) => {
  return (
    <div className="relative flex flex-col items-center mt-[121px] lg:mt-[134px] mb-[58px]">
      {/* Button with fade-up animation */}
      <motion.div
        className="flex justify-center mb-[27px] sm:mb-[13.745px] lg:mb-[43px]"
        initial={{ opacity: 0, y: 50 }} // Initial hidden state
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
      >
        <button
          className="text-white text-[12px] sm:text-[18px] lg:text-[20px] font-bold font-DMSans border rounded-full py-[13px] sm:py-[10px] px-[13px] sm:px-[21px] gap-2 inline-flex hover:bg-white/20 hover:border-white/5 transition-colors duration-500 items-center"
          type="button"
          onClick={() => { 
            window.open(data?.generalSection?.buttons[0].url || "#", "_blank");
          }}
        >
          {data?.generalSection?.buttons[0]?.text || "Get Started Today"}
          <GoArrowUpRight />
        </button>
      </motion.div>

      {/* Heading with fade-up animation */}
      <motion.div
        className="relative text-center mb-[9.49px] sm:mb-[13.745px] lg:mb-[51px]"
        initial={{ opacity: 0, y: 50 }} // Initial hidden state
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] text-white/80 max-w-[90%] md:max-w-[80%] lg:max-w-[1137px] mx-auto font-Montserrat font-bold leading-[30px] sm:leading-[40px] lg:leading-[50px]">
          {data?.generalSection?.heading  ? data?.generalSection?.heading
          :
          <>Simplify your cash flow management and ensure timely remittance of
          your <span className="text-[#305BF3]">COD payments</span> with COD
          Power Group's COD remittance service.</>}
        </h1>
      </motion.div>
    </div>
  );
};

export default DescreptionTitle;

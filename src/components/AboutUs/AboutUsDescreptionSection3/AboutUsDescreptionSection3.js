import { motion } from "framer-motion";
import Rectangle697 from "../../../assets/AboutUsItems/AboutUsDescreptionSection3/Rectangle697.png";

const AboutUsDescreptionSection3 = ({data}) => {
  return (
    <div className="lg:min-h-screen mt-[65px] flex flex-col items-center justify-center text-white relative px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <motion.div
        className="text-center lg:mt-[190px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-Montserrat font-bold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] max-w-[1146px] w-full mx-auto">
          {data?.generalSection?.heading || "Join us at COD Power Group and experience the difference that our"+
          "services can make for your e-commerce business."}
        </h1>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex justify-center items-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Mock Image */}
        <img
          src={data?.generalSection?.image || Rectangle697}
          alt="NFT platform"
          className="max-w-full h-auto lg:max-w-auto"
        />
      </motion.div>

      {/* Button */}
      <motion.button
        className="bg-[#282E6A] hover:bg-[#2E2BE5] absolute bottom-0 lg:bottom-14 font-Montserrat text-[16px] text-white font-medium px-[30px] sm:px-[50px] lg:px-[70px] py-[14px] sm:py-[18px] lg:py-[21px] rounded-[30px] transition"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        onClick={() => window.open(data?.generalSection?.buttons[0].url, "_blank")}
      >
        {data?.generalSection?.buttons[0].text || "Join Us"}
      </motion.button>
    </div>
  );
};

export default AboutUsDescreptionSection3;

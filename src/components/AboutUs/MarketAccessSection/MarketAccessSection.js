import { motion } from "framer-motion";
import Rectangle705 from "../../../assets/AboutUsItems/MarketAccessSection/Rectangle705.png";

const MarketAccessSection = ({data}) => {
  return (
 <>

    <section className="container mx-auto mt-[135px] px-4 sm:px-8 font-Montserrat text-center">
      {/* Heading */}

      <motion.h2
        className="text-white text-[40px] sm:text-[50px] font-bold mb-10 sm:mb-[94px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {data?.cardSection?.heading || "Access Every Market with Ease"}
      </motion.h2>

      {/* Images Section */}
      <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-[67px]">
        <motion.div
          className="w-full sm:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={data?.cardSection?.cards[0].image || Rectangle705}
            alt="Market Access"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full sm:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={data?.cardSection?.cards[1].image || Rectangle705}
            alt="Market Access"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        className="text-white text-[18px] sm:text-[25px] max-w-[1068px] mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
      >
        Our portal offers simplicity, intuitiveness, and remarkable power. We've
        prioritized user-friendliness in both design and functionality. Within
        moments of logging into your account, you'll feel at ease and fully in
        command of your business.
      </motion.p>
    </section>
 </>
  );
};

export default MarketAccessSection;

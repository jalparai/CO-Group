import { motion } from "framer-motion";
import shieldStar from "../../../assets/AboutUsItems/WhyChooseUs/shieldStar.svg";
import Group from "../../../assets/AboutUsItems/WhyChooseUs/Group.svg";
import lightbulb from "../../../assets/AboutUsItems/WhyChooseUs/lightbulb.svg";
import { useEffect, useState } from "react";

const WhyChooseUs = ({data}) => {
  const cards = [
    {
      icon: shieldStar,
      title: "Reliability",
      description:
        "We are committed to providing reliable services that meet the highest standards of quality and efficiency.",
    },
    {
      icon: Group,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We strive to exceed their expectations and deliver exceptional service.",
    },
    {
      icon: lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate to stay ahead of industry trends and provide cutting-edge solutions.",
    },
  ];

  const [list, setList] = useState(cards);

  useEffect(() => {
    setList(data?.cardSection?.cards || cards);
  }
, [data]);


  return (
    <section className="font-Montserrat mt-[210px]">

      <div className="container mx-auto px-4 lg:px-8 text-center max-w-screen-lg">
        {/* Title Section with Fade-in Animation */}
        <motion.h2
          className="text-[40px] md:text-[60px] font-bold text-white mb-[60px] md:mb-[98px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {data?.cardSection?.heading || "Why Choose Us?"}
        </motion.h2>

        {/* Cards Section with Staggered Fade-in Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
          }}
          viewport={{ once: true }}
        >
          {list.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#544F4F]/5 border border-[#878787] backdrop-blur-md hover:bg-[#7A828C]/30 hover:border-[#878787] transition-colors duration-500 rounded-[30px] p-8 md:p-[58px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 md:mb-[18px]">
                <img
                  src={card?.image || card.icon}
                  alt={card.title}
                  className="w-12 md:w-16"
                />
              </div>
              <h3 className="text-[20px] md:text-[30px] font-bold text-white mb-4 md:mb-[30px]">
                {card.title}
              </h3>
              <p className="text-[14px] md:text-[15px] font-light text-[#D1D1D1]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

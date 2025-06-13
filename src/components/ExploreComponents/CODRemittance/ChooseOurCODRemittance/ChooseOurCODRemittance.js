import { motion } from "framer-motion";
import ConvenientReporting from "../../../../assets/ChooseOurCODRemittanceItems/ConvenientReporting.svg";
import DedicatedSupport from "../../../../assets/ChooseOurCODRemittanceItems/DedicatedSupport.svg";
import QuickAccesstoFunds from "../../../../assets/ChooseOurCODRemittanceItems/QuickAccesstoFunds.svg";
import SecureTransactions from "../../../../assets/ChooseOurCODRemittanceItems/SecureTransactions.svg";
import { useState, useEffect } from "react";
const cardData = [
  {
    img: SecureTransactions,
    alt: "Secure Transactions",
    title: "Secure Transactions",
    description:
      "Our platform ensures that all COD payments are processed securely.",
    background: "bg-[#338AF3]/20 hover:bg-[#338AF3]/20",
  },
  {
    img: QuickAccesstoFunds,
    alt: "Quick Access to Funds",
    title: "Quick Access to Funds",
    description:
      "Get quick access to your funds with our fast remittance process.",
    background: "bg-[#FFD234]/20 hover:bg-[#FFD234]/20",
  },
  {
    img: ConvenientReporting,
    alt: "Convenient Reporting",
    title: "Convenient Reporting",
    description:
      "Easily track and manage your COD payments through our online platform.",
    background: "bg-[#F15C2D]/20 hover:bg-[#F15C2D]/20",
  },
  {
    img: DedicatedSupport,
    alt: "Dedicated Support",
    title: "Dedicated Support",
    description:
      "Our team is available to assist you with any questions or issues you may have regarding your COD payments.",
    background: "bg-[#7033F3]/20 hover:bg-[#7033F3]/20",
  },
];

const ChooseOurCODRemittance = ({data}) => {
  const [whyus, setWhyus] = useState(data?.cardSection?.cards || cardData );

  useEffect(() => {
    if (data?.cardSection?.cards) {
      setWhyus(data.cardSection.cards);
    } else {
      setWhyus(cardData);
    }
  }
  , [data]);

  return (
    <div className="relative flex flex-col items-center px-4 sm:px-8 lg:px-16">
      {/* Heading with Fade-Up Animation */}
      <motion.div
        className="text-center mt-[84px] lg:mt-[106px] mb-[54px] lg:mb-[67px]"
        initial={{ opacity: 0, y: 50 }} // initial state: hidden and shifted down
        whileInView={{ opacity: 1, y: 0 }} // trigger animation when in view
        viewport={{ once: true, amount: 0.2 }} // trigger animation when 20% of the element is in view
        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-[26px] sm:text-3xl lg:text-[50px] font-Montserrat font-bold leading-[38px] lg:leading-[60px]">
          {data?.title ? data.title
          : <>
          Why Choose Our
          <br /> COD Remittance Service?</>}
        </h1>
      </motion.div>


      {/* First Row */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full max-w-screen-lg">
        {whyus.slice(0, 2).map((card, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center opacity-40 hover:opacity-100 ${cardData[index]?.background} transition-all duration-700 p-[19px] sm:p-8 lg:p-[29px] rounded-2xl w-full lg:w-[calc(50%-12px)]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 50,
              delay: index * 0.3, // Adds a delay based on the index
            }}
          >
            <img
              src={card.image || card.img}
              alt={card.alt}
              className="w-[72.96px] sm:w-14 lg:w-[114px]"
            />
            <h3 className="text-[19px] sm:text-xl lg:text-[30px] font-Montserrat font-bold text-center my-[19px] lg:my-[30px] hover:text-white">
              {card.title}
            </h3>
            <p className="text-[12px] sm:text-[20px] font-Montserrat font-extralight text-center hover:text-white w-[197.12px] lg:w-[308px]">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full max-w-screen-lg mt-6">
        {whyus.slice(2).map((card, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center opacity-40 hover:opacity-100 ${cardData[index+2]?.background} transition-all duration-700 p-[19px] sm:p-8 lg:p-[29px] rounded-2xl w-full lg:w-[calc(50%-12px)]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 50,
              delay: (index + 2) * 0.3, // Adds delay for second row cards
            }}
          >
            <img
              src={card.image || card.img}
              alt={card.alt}
              className="w-[72.96px] sm:w-14 lg:w-[114px]"
            />
            <h3 className="text-[19px] sm:text-xl lg:text-[30px] font-Montserrat font-bold text-center my-[19px] lg:my-[30px] hover:text-white">
              {card.title}
            </h3>
            <p className="text-[12px] sm:text-[20px] font-Montserrat font-extralight text-center hover:text-white w-[197.12px] lg:w-[308px]">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChooseOurCODRemittance;

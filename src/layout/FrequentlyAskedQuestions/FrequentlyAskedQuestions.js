import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { apiclient } from "../../apiConfig/apiConfig"

// FAQItem Component
const FAQItem = ({ question, answer, isActive, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`py-[16.83px] border-[#303D49] px-[20.5px] lg:py-[27px] lg:px-[47.86px] mb-[12.67px] lg:mb-[22px] relative ${
        isActive
          ? "bg-[#0587FF]/20 rounded-[30px]"
          : "bg-[#0587FF]/10 border-[1px] border-[#303D49] rounded-[50px] hover:transition-colors hover:duration-700 hover:bg-[#0587FF]/20"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer relative"
        onClick={onToggle}
      >
        <h1
          className={`font-semibold font-Montserrat text-[12.67px] lg:text-[22px] ${
            isActive
              ? "text-[#FFFFFF]"
              : "text-[#939393] hover:text-[#FFFFFF]/70 hover:transition-colors hover:duration-700"
          }`}
        >
          {question}
        </h1>
        <div className="flex items-center justify-center">
          <motion.div
            className={`flex items-center justify-center w-[20.43px] h-[20.43px] lg:w-10 lg:h-10 rounded-full ${
              isActive ? "bg-[#0587FF]/20" : "bg-[#0587FF]"
            } `}
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiPlus
              className={`text-[10.64px] lg:text-xl ${
                isActive ? "text-[#0587FF]" : "text-white"
              }`}
            />
          </motion.div>
        </div>
      </div>
      {isActive && (
        <motion.p
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{ opacity: 1, maxHeight: 200 }}
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-[8.34px] lg:mt-[16px] w-[281.81px] lg:w-[597.02px] text-[10.37px] lg:text-[18px] font-Montserrat text-[#4D719B]"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

// [
//   {
//     question: "What is COD service?",
//     answer:
//       "The COD service enables your customers to pay for their orders directly on delivery, reinforcing their confidence in your store.",
//   },
//   {
//     question: "What are the benefits of offering COD to my customers?",
//     answer:
//       "COD increases conversion rates by reducing customers' reluctance to pay online.",
//   },
//   {
//     question: "How much does it cost to use COD?",
//     answer:
//       "Charges depend on order size and delivery zone. Contact us for a detailed price list.",
//   },
//   {
//     question: "In which geographical areas is COD available?",
//     answer:
//       "Our COD service is available in Belgium, Spain, Italy, Portugal and other countries. Please contact us for more information.",
//   },
//   {
//     question: "When will I receive payment after a successful COD delivery?",
//     answer:
//       "Payments are usually transferred to your account within 3 to 7 working days of delivery.",
//   },
// ]


const fetchFAQs = async () => {
  const res = await apiclient.get("/faq")
  console.log(res.data.data);
  return res.data.data;
}

// FrequentlyAskedQuestions Component
const FrequentlyAskedQuestions = ({data}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [faqs, setFaqs] = useState([])

  const toggleText = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        let faqRes = await fetchFAQs();
        faqRes = faqRes.sort((a, b) => a.row - b.row);
        console.log(faqRes); // Corrected to log faqRes instead of faqs
        setFaqs(faqRes);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
  
    fetchFaqs();
  }, []);
  


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:w-[950px] w-[400px] mx-auto mt-[57px] lg:mt-[191.3px] text-white"
    >
      {/* Heading Fade-Up */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center"
      >
        <h1 className="whitespace-pre-line text-[28px] lg:text-[50px] font-bold font-Montserrat leading-tight sm:leading-snug lg:leading-none">
          {data & data?.generalSection? data.generalSection.heading:"Frequently Asked Questions"}
        </h1>
      </motion.div>

      {/* Description Fade-Up */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="whitespace-pre-line mt-[21.89px] lg:mt-[38px] text-[11.52px] lg:text-[20px] font-Montserrat text-center text-[#5C5B5B] w-[413.57px] lg:w-[718px] mx-auto"
      >

{data & data?.generalSection? data.generalSection.description: <>
        Everything you need to know about cash on delivery (COD),
        <br />
        online business and more
        </>}
      </motion.p>

      <div className="w-[400px] lg:w-[950px] mx-auto mt-[48px] lg:mt-[80px]">
        {faqs.map((faq, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={index}
          >
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={expandedIndex === index}
              onToggle={() => toggleText(index)}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-[48.08px] lg:mt-[80px] gap-4 relative z-[1000]">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white border text-[10.14px] lg:text-[16px] font-Montserrat rounded-[19.01px] lg:rounded-[30px] w-[155.23px] h-[38.02px] lg:w-[245px] lg:h-[60px] gap-2 inline-flex justify-center items-center bg-white/20 border-white/5 hover:bg-white/0 hover:border-white transition-colors duration-500"
          type="button"
          onClick={() => window.open("https://codpowergroup.com/RessourceCenter", "_blank")}
        >
          Learn Documentation
          <GoArrowUpRight className="text-[15.21px] lg:text-[20px]" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FrequentlyAskedQuestions;

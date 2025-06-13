import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import image from "../../../../assets/ContactSales/ContactSalesSectionItems/image.png";

const content = {
  title:
    "Streamline your sourcing process and find high-quality products at competitive prices with COD Power Group's sourcing service.",
  description: "Contact us today to learn more and get started.",
  icon: image,
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Card = ({ title, description, icon, isVisible, buttons }) => {
  return (
    <div
      className={`backdrop-blur-sm bg-[#151515] lg:w-[90%] huge:w-[85%] w-[95%] max-w-[1230px] rounded-[20px] lg:rounded-[30px] mt-[50px] lg:mt-[106px] flex flex-col-reverse lg:flex-row items-center text-left px-4 py-[24px] lg:p-8 transition-opacity duration-[1000ms] ease-in-out`}
    >
      <motion.div
        className={`flex flex-col justify-center mx-auto w-full lg:w-[634px] lg:h-[408px] mt-[35px] lg:mt-0`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <button
        onClick={() => {window.open(buttons[0]?.url, "_blank")}}
        className="text-[#0587FF] font-normal bg-[#0052B4] hover:bg-[#0052B4]/50 transition-all duration-700 text-[12.8px] lg:text-[16px] font-Montserrat rounded-full w-[128px] lg:w-[200px] py-[13px] px-[20px] lg:py-[21px] lg:px-[31px] gap-2 bg-opacity-20 inline-flex justify-center items-center">
          {buttons[0]?.text || "Contact Sales"}
        </button>
        <h3 className="text-white font-bold font-Montserrat text-[19px] lg:text-[27px] my-[17px] lg:my-[27px]">
          {title}
        </h3>
        <p className="text-[#FFFFFF] font-Montserrat text-[16px] lg:text-[23px] font-thin lg:w-[572px]">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="relative w-full lg:w-[50%] h-auto mt-6 lg:mt-0 flex justify-center lg:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <img
          className="w-[80%] lg:w-auto lg:absolute lg:-bottom-[150px] lg:left-0"
          src={icon}
          alt={title}
        />
      </motion.div>
    </div>
  );
};

const ContactSalesSection = ({data}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {}, [data]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="lg:col-span-2 flex justify-center">
      <Card
        title={data?.generalSection?.heading || content.title}
        description={data?.generalSection?.description || content.description}
        icon={data?.generalSection?.image || content.icon}
        isVisible={isVisible}
        buttons={data?.generalSection?.buttons || [{ text: "Contact Sales", url: "#" }]}
      />
    </div>
  );
};

export default ContactSalesSection;

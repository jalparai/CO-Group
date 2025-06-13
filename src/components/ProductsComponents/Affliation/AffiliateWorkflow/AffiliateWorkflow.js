import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Bg from "../../../../assets/Dashboard/spera17.svg";
import Img1 from "../../../../assets/FormImage.svg";

const fetchData = async () => {
  // Dummy fallback if no external fetch is used
  return {
    cardSection: {
      heading: "Does the Product\nAffiliate Program Work?",
      description:
        "Tools & Features That Serve All Your eCommerce Needs. Say goodbye to 10s of partners & tools, and save yourself from all the hassle of getting these partners & tools speak with each other.",
      cards: [
        {
          title: "Quick Registration",
          description:
            "Sign up for our affiliate program and get instant access to our platform.",
          image: Img1,
        },
        {
          title: "Product Selection",
          description:
            "Browse through our product catalog and choose the ones you want to promote on your website & social media.",
          image: Img1,
        },
        {
          title: "Promote Products",
          description:
            "Promote the products using your affiliate links on your website, social media, newsletters, etc.",
          image: Img1,
        },
      ],
    },
  };
};

const AffiliateWorkflow = ({ data: externalData }) => {
  const [data, setData] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!externalData) {
      fetchData().then((res) => setData(res));
    } else {
      setData(externalData);
    }
  }, [externalData]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    }),
  };

  const stepsState = data?.cardSection?.cards || [];

  return (
    <>
      <img src={Bg} className="absolute w-[100%] z-[-10]" alt="background" />
      <motion.div
        ref={ref}
        variants={fadeUpVariants}
        initial="hidden"
        animate={controls}
        custom={0}
        className="min-h-screen text-white p-4 md:p-8 mt-16 md:mt-24"
      >
        <motion.div variants={fadeUpVariants} custom={0.2} className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div className="text-center mb-12 md:mb-20">
            <motion.h1
              variants={fadeUpVariants}
              custom={0.4}
              className="whitespace-pre-line text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-montserrat"
            >
              {data?.cardSection?.heading || (
                <>
                  Does the Product
                  <br />
                  <span className="text-[#E61D2D]">Affiliate</span> Program Work?
                </>
              )}
            </motion.h1>
            <motion.p className="text-[#E3E3E3] text-lg md:text-2xl font-thin font-montserrat max-w-4xl mx-auto px-4">
              {data?.cardSection?.description ||
                "Tools & Features That Serve All Your eCommerce Needs. Say goodbye to 10s of partners & tools, and save yourself from all the hassle of getting these partners & tools speak with each other."}
            </motion.p>
          </motion.div>
 <motion.div className="space-y-8 md:space-y-20">
<motion.div 
   variants={fadeUpVariants}
          custom={0.2}
className="lg:flex items-center gap-[65px]">
<div className="lg:w-[50%] w-auto">
<motion.h2   variants={fadeUpVariants}
            custom={0.4} className="lg:text-[28px] text-[18px] text-[#ffffff] hover:text-[#0587FF] cursor-default font-bold">{data?.cardSection?.cards[0]?.title || "Quick Registration"}</motion.h2>
<motion.p   variants={fadeUpVariants}
            custom={0.4} className="lg:text-[22px] text-[16px] text-[#ffffff86] font-light">{data?.cardSection?.cards[0]?.description || "Sign up for our affiliate program and get instant access to our platform."}</motion.p>

<motion.h2   variants={fadeUpVariants}
            custom={0.4} className="mt-5 lg:text-[28px] text-[18px] text-[#ffff] hover:text-[#0587FF] cursor-default font-bold">{data?.cardSection?.cards[1]?.title || "Products Selection"}</motion.h2>
<motion.p   variants={fadeUpVariants}
            custom={0.4} className="mt-1 lg:text-[22px] text-[16px] text-[#ffffff86] font-light">{data?.cardSection?.cards[1]?.description || "Browse through our product catalog and choose the ones you want to promote on your website or social media."}</motion.p>

<motion.h2   variants={fadeUpVariants}
            custom={0.4} className="mt-5 lg:text-[28px] text-[18px] text-[#ffff] hover:text-[#0587FF] cursor-default font-bold">{data?.cardSection?.cards[2]?.title || "Promotion of Products"}</motion.h2>
<motion.p   variants={fadeUpVariants}
            custom={0.4} className="lg:text-[22px] text-[16px] text-[#ffffff86] font-light mt-1">{data?.cardSection?.cards[2]?.description || "Promote the products by importing them on your website, social media, newsletters, etc."}</motion.p>


</div>
<motion.div>
  <motion.img   variants={fadeUpVariants}
            custom={0.4} src={data?.cardSection?.cards[0]?.image || Img1}/>
</motion.div>
</motion.div>
  </motion.div>
          {/* Steps Section */}
          {/* <div className="space-y-8 md:space-y-20">
            {stepsState.map((step, index) => (
              <WorkflowStep key={index} step={step} idx={index} />
            ))}
          </div> */}
        </motion.div>
      </motion.div>
    </>
  );
};

const WorkflowStep = ({ step, idx }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariants}
      className={`flex flex-col md:flex-row ${
        idx % 2 !== 0 ? "md:justify-end" : "md:justify-start"
      } items-center gap-4 md:gap-8 max-w-6xl mx-auto`}
    >
      {/* Image */}
      <div
        className={`w-full md:w-1/2 h-48 md:h-[345px] bg-white/5 rounded-2xl md:rounded-[30px] ${
          idx % 2 === 0 ? "md:order-last" : "md:order-first"
        }`}
      >
        <img
          src={step.image || Img1}
          alt={step.title}
          className="w-full h-full object-cover rounded-2xl md:rounded-[30px]"
        />
      </div>

      {/* Text Content */}
      <div className="relative backdrop-blur-sm rounded-lg p-4 md:p-6 w-full md:w-1/2">
        <div className="w-full md:max-w-[377px] mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 font-montserrat">
            {step.title}
          </h3>
          <p className="text-lg md:text-2xl font-thin font-montserrat">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AffiliateWorkflow;

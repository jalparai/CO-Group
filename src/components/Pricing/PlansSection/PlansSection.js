import { GoArrowUpRight } from "react-icons/go";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation from framer-motion
import trophyStar from "../../../assets/PlansSectionIcons/trophyStar.svg";
import crownAlt from "../../../assets/PlansSectionIcons/crownAlt.svg";
import Check from "../../../assets/PlansSectionIcons/Check.svg";
import { apiclient } from "../../../apiConfig/apiConfig";

// Plan Features
const plansBasic = [
  "Seamless integration with your e-commerce store",
  "Access to our network of trusted suppliers for sourcing products",
  "Efficient customs clearance process to minimize delays",
  "Secure warehousing and fulfillment services for your inventory",
  "Reliable shipping options with tracking and monitoring capabilities",
  "Dedicated customer support for COD transactions",
  "Access to our online tracking system for order management",
  "Comprehensive return policy for COD orders",
];

const plansGrowth = [
  "All features of the COD plan",
  "Access to our Affiliate Marketing platform for expanding market reach",
  "Personalized customer support for both COD and affiliate transactions",
  "Advanced analytics and reporting tools for tracking affiliate sales",
  "Customizable affiliate commission rates to suit your business goals",
  "Marketing resources and materials to promote affiliate products",
  "Integration with popular e-commerce platforms for seamless affiliate management",
  "Regular updates and new features to enhance your affiliate program",
  "Networking opportunities with other affiliates and e-commerce experts",
  "Training and support for maximizing your affiliate marketing efforts",
];

// Plan Card Component
const PlanCard = ({
  imgSrc,
  planTitle,
  price,
  duration,
  planFeatures,
  bgColor,
  iconBgColor,
  iconAlt,
  borderColor,
  descreotion,
}) => (
  <div
    className={`text-white p-8 md:p-12 rounded-3xl border shadow-lg w-full max-w-[598px] flex flex-col justify-between`}
    style={{
      backgroundColor: `${bgColor}30`,
      borderColor: `${bgColor}70`,
    }}
  >
    <div>
      <div className="flex flex-row space-x-[20px] md:space-x-6">
        <div className="lg:w-[72px] w-[46.08px]">
          <img
            src={imgSrc}
            alt={iconAlt}
            className={`lg:p-2 p-1 bg-[${iconBgColor}] rounded-lg`}
          />
        </div>
        <div>
          <h2 className="text-[19px] md:text-[28px] font-Montserrat leading-tight font-bold">
            {planTitle}
          </h2>
          <p className="text-[28px] md:text-[56px] font-Montserrat font-bold">
            {price}
            <span className="text-[14px] md:text-[20px] font-Montserrat leading-none font-medium">
              / {duration}
            </span>
          </p>
        </div>
      </div>
      <p className="text-[12px] md:text-[18px] font-Montserrat font-extralight leading-relaxed w-[254.85px] md:w-[392px] mt-4 md:mt-6">
        {descreotion}
      </p>
      <hr
        className={`w-full md:w-[396px] mx-auto mb-8 md:mb-12 mt-6 md:mt-8 border `}
        style={{
          borderColor: `${borderColor}70`,
        }}
      />
      <ul className="space-y-4 md:space-y-6 w-full max-w-[396px]">
        {planFeatures.map((feature, index) => (
          <li key={index}>
            <div className="flex flex-row items-center space-x-6">
              <div className="relative">
                <div
                  className={`rounded-full w-[18.3px] h-[18.3px] md:w-[26px] md:h-[26px] bg-[${borderColor}] flex items-center justify-center`}
                >
                  <img
                    src={Check}
                    alt="Check"
                    className="w-[8.28px] h-[8.28px] md:w-[14px] md:h-[14px]"
                  />
                </div>
              </div>
              <p className="text-[12px] md:text-[18px] font-Montserrat font-medium leading-tight">
                {feature}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <a href='https://get-started.codpowergroup.com/registration'
    target="_blank"
      className={`mt-8 w-full ${
        planTitle === "Growth"
          ? "bg-gradient-to-l from-[#E61D2D] to-[#53ACFF]/40"
          : "bg-gradient-to-r from-[#338AF3] to-[#53ACFF]"
      } lg:py-5 py-[14px] rounded-full text-[14px] md:text-[20px] font-Montserrat font-medium flex justify-center items-center space-x-2`}
    >
      Get Started <GoArrowUpRight className="ml-2" />
    </a>
  </div>
);


// fetch all plans
const fetchPlans = async () => {
  try {
    const response = await apiclient.get("/pricingModel/get");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching plans: ", error);
    return [];
  }
};

const PlansSection = ({data}) => {
  const [activeButton, setActiveButton] = useState("button1");
  const [plans, setPlans] = useState([]);
  const controls = useAnimation(); // Create animation controls

  useEffect(() => {
    fetchPlans().then((plans) => {
      console.log(plans);
      setPlans(plans);
    });
  }, []);


  const renderContent = () => {
    const planDuration = activeButton === "button1" ? "month" : "year";
    return (
      <div className="flex justify-center space-x-8 py-16 px-4 overflow-x-auto scrollbar-hide lg:overflow-visible">
        <div className="flex space-x-4 lg:space-x-8 min-w-[100%]">
          {Array.isArray(plans) && plans.length > 0 ? (
            plans.map((plan) => {
              // Determine styling based on plan name
              const isBasicPlan = plan.planName === "Basic";
              
              return (
                <PlanCard
                  key={plan._id}
                  imgSrc={isBasicPlan ? trophyStar : crownAlt}
                  planTitle={plan.planName}
                  price={activeButton === "button1" ? `$${plan.monthlyPrice}` : `$${plan.yearlyPrice}`}
                  duration={activeButton === "button1" ? "month" : "year"}
                  planFeatures={isBasicPlan ? plan.features : plan.features}
                  bgColor={isBasicPlan ? "#0052B4" : "#A2001D"}
                  iconBgColor={isBasicPlan ? "#0587FF" : "#E61D2D"}
                  iconAlt={isBasicPlan ? "trophyStar" : "crownAlt"}
                  borderColor={isBasicPlan ? "#0587FF" : "#E61D2D"}
                  descreotion={plan.description}
                />
              );
            })
          ) : (
            
            // Fallback to hardcoded cards 
            <>
              <PlanCard
                imgSrc={trophyStar}
                planTitle="Basic"
                price="$39"
                duration={planDuration}
                planFeatures={plansBasic}
                bgColor="#0052B4"
                iconBgColor="#0587FF"
                iconAlt="trophyStar"
                borderColor="#0587FF"
                descreotion="Enjoy a Bonus Month at No Extra Cost ! (1month free) - (Price Monthly)"
              />
              <PlanCard
                imgSrc={crownAlt}
                planTitle="Growth"
                price="$69"
                duration={planDuration}
                planFeatures={plansGrowth}
                bgColor="#A2001D"
                iconBgColor="#E61D2D"
                iconAlt="crownAlt"
                borderColor="#E61D2D"
                descreotion="COD and Affiliate Bundle for Just $69/ month! (Price Monthly)"
              />
            </>
          )}
        </div>
      </div>
    );
  };
  
  const handleClick = (button) => {
    setActiveButton(button);
  };

  const translateXValue = activeButton === "button1" ? "0%" : "100%";

  // Effect to handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (scrollY + windowHeight > document.getElementById("plans-section").offsetTop) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      id="plans-section"
      className="relative flex justify-center items-center mt-[100px] lg:mt-[169px]"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={controls} // Use animation controls
      exit={{ opacity: 0, y: 50 }} // Exit state
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="absolute top-[-60px] lg:top-[-89px] flex flex-wrap justify-start lg:w-fit bg-[#0587FF]/10 border border-[#0587FF] py-[6px] px-[6px] lg:py-[15.5px] lg:px-[17.5px] rounded-[100px] z-10">
        <div className="relative w-[266px] lg:w-[416px] h-[41px] lg:h-[65.2px] rounded-[100px] overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-[50%] rounded-[100px] bg-[#0587FF] transition-transform duration-300"
            style={{
              transform: `translateX(${translateXValue})`,
            }}
          ></div>
          <button
            onClick={() => handleClick("button1")}
            className={`absolute top-0 left-0 w-[50%] h-full text-white text-[12px] lg:text-[19px] font-Montserrat z-10 flex items-center justify-center transition-colors duration-300 ${
              activeButton === "button1" ? "font-medium" : "font-extralight"
            }`}
          >
            Monthly plan
          </button>
          <button
            onClick={() => handleClick("button2")}
            className={`absolute top-0 right-0 w-[50%] h-full text-white text-[12px] lg:text-[19px] font-Montserrat z-10 flex items-center justify-center transition-colors duration-300 ${
              activeButton === "button2" ? "font-medium" : "font-extralight"
            }`}
          >
            Annual plan
          </button>
        </div>
      </div>
      {renderContent()}
      <p className="absolute -bottom-10 text-[11.5px] md:text-[18px] font-DMSans text-[#3A3939] leading-[19.2px] md:leading-[30px] text-center w-full md:w-[958px] px-4 md:px-0">
        {data?.generalSection?.description || "Please note that additional fees for call center services, shipping, and"+
        "sourcing may apply based on your country. Contact our specialists to get"+
        "detailed information and sign a contract tailored to your needs."}
      </p>
    </motion.div>
  );
};

export default PlansSection;
import Vector from "../../../assets/Blog/NewsletterSection/Vector.svg";
import megaphone from "../../../assets/Blog/NewsletterSection/megaphone.svg";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useState } from "react"; // Import useState from react
import { apiclient } from "../../../apiConfig/apiConfig";

const NewsletterSection = ({data}) => {
  const [email, setEmail] = useState(""); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) 
    {
      alert("Please input a valid email address");
      return;
    }

    apiclient.post("/postNewsletter", { email })
    .then((res) => {
      if (res.status === 201) {
        alert("Subscribed successfully");
      }
    });
  }
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-between font-Montserrat bg-[#FFFFFF]/5 mt-[57px] lg:mt-[8rem] backdrop-blur-huge border rounded-[2rem] py-[2.5rem] px-[1.5rem] lg:py-[3rem] lg:px-[4rem]  mx-auto"
      initial={{ opacity: 0, y: 50 }} // Start from invisible and below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of the section is in view
      transition={{ duration: 0.6 }} // Smooth transition for opacity and y-axis movement
    >
      {/* Left Section */}
      <div className="text-white lg:w-[60%] mb-6 lg:mb-0 lg:mr-8">
        <img
          src={megaphone}
          alt="megaphone"
          className="w-[61.5px] lg:w-auto mb-4"
        />
        <h2 className="text-[1rem] lg:text-[1rem] huge:text-[1.25rem] tracking-widest text-[#53ACFF] uppercase mb-3">
          {data?.title || "Newsletter"}
        </h2>
        <h3 className="text-[29px] lg:text-[2.2rem] huge:text-[2.5rem] font-bold leading-tight mb-4">
          {data?.generalSection?.description || "Get a list of winner products monthly."}
        </h3>
        <p className="text-[12.8px] lg:text-[1rem] huge:text-[1.2rem] font-thin">
          {data?.generalSection?.caption || "Stay Connected and Informed: Subscribe to Our Newsletter"}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-auto relative flex flex-col">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            onChange={handleEmailChange}
            className="w-full lg:w-[25rem] huge:w-[30rem] py-[1rem] px-[1.5rem] border border-[#3C3C3C] rounded-[1.25rem] text-[1rem] huge:text-[1.2rem] text-black outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src={Vector}
            alt="Vector"
            className="absolute bottom-1/2 right-[1.5rem] transform translate-y-1/2 w-[1.5rem]"
          />
        </div>
        <button
          type="button"
          onClick={handleSubscribe}
          className="w-full mt-4 py-[1rem] huge:py-[1.25rem] text-[1.2rem] huge:text-[1.5rem] font-bold rounded-[1.25rem] bg-[#393939] hover:bg-[#0587FF] text-[#898989] hover:text-white transition duration-200"
        >
          Subscribe
        </button>
      </div>
    </motion.div>
  );
};

export default NewsletterSection;

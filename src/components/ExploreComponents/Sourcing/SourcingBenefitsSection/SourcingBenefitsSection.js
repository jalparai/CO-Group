import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Products from "../../../../assets/SourcingBenefitsIcons/Products.svg";
import Solutions from "../../../../assets/SourcingBenefitsIcons/Solutions.svg";
import Support from "../../../../assets/SourcingBenefitsIcons/Support.svg";
import logistics from "../../../../assets/SourcingBenefitsIcons/logistics.svg";
import quality from "../../../../assets/SourcingBenefitsIcons/quality.svg";

const cardData = [
  { img: Products, alt: "simplified", title: "Wide Range of Products", description: "Access to a wide range of products from trusted suppliers." },
  { img: Solutions, alt: "enhance", title: "Cost-Effective Solutions", description: "Get the best prices and terms through our negotiation process." },
  { img: Support, alt: "increase", title: "Ongoing Support", description: "Continuous support to help you manage your inventory effectively." },
  { img: logistics, alt: "enhance", title: "Logistics Expertise", description: "Seamless logistics support for timely delivery." },
  { img: quality, alt: "increase", title: "Quality Assurance", description: "Rigorous quality control checks to ensure product quality." },
];

const Card = ({ card, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600" 
      data-aos-delay={`${index * 250}`} 
      className="group flex flex-col justify-center items-center px-[16px] md:px-[24px] lg:px-[35.5px] rounded-[20px] w-full md:w-[300px] lg:w-[440px] h-[267px] md:h-[280px] lg:h-[300px]"
    >
      <img
        src={card.image || card.img}
        alt={card.title}
        className="w-[53.86px] md:w-[55px] lg:w-auto opacity-40 group-hover:opacity-100 transition-opacity duration-300"
      />
      <h3 className="text-[18px] sm:text-[20px] md:text-[21px] lg:text-[28px] group-hover:text-[#F3F3F3] text-[#F3F3F3]/40 text-center my-[20px] md:my-[22px] lg:my-[25px] font-Montserrat font-bold transition-colors duration-300">
        {card.title}
      </h3>
      <p className="text-[18px] md:text-[19px] lg:text-[20px] w-[280px] md:w-[280px] lg:w-[300px] font-Montserrat leading-[24px] group-hover:text-[#636365] text-[#636365]/50 text-center transition-colors duration-300">
        {card.description}
      </p>
    </div>
  );
};

const SourcingBenefitsSection = ({data}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [benefits, setBenefits] = useState(data?.cardSection?.cards || cardData);

  useEffect(() => {
    data?.cardSection?.cards?.forEach((d)=> console.log("CARD", d));
    setBenefits(data?.cardSection?.cards || cardData);
  }, [data]);


  useEffect(()=>{
    console.log("THESE ARE THE BENEFITS", benefits)
  }, [benefits])

  console.log(benefits);
  console.log(data)

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.4, 
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      AOS.init({ offset: 200, once: true });
      AOS.refresh();
    }
  }, [isVisible]);

  return (
    <div className="relative flex flex-col items-center" ref={sectionRef}>
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-center md:space-x-[16px] lg:space-x-[30px]">
        {benefits.slice(0, 3).map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:mt-[32px] lg:mt-[50px] md:flex-row justify-center md:space-x-[16px] lg:space-x-[30px]">
        {benefits.slice(3).map((card, index) => (
          <Card key={index + 3} card={card} index={index + 3} />
        ))}
      </div>
    </div>
  );
};

export default SourcingBenefitsSection;

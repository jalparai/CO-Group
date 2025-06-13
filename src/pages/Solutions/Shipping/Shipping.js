import {
  ShippingHero,
  SippingProcess,
  ShippingOptions,
  ShippingBenefits,
  ShippingDashboard,
  ShippingGetStarted,
} from "../../../components/ExploreComponents";

import BgImg from "../../../assets/CallCenter/BgImg.png";
import { useEffect, useState } from "react";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../../layout";
import { apiclient } from "../../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { DownloadNow } from "../../../components/Banners/DownloadNow";
import { Reserve } from "../../../components/Banners/Reserve";


const fetchSections = async () => {
  try {
    const response = await apiclient.get("/sections/shipping");
    console.log("Fetched sections:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
  }
};

const Shipping = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sections, setSections] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const layout = await fetchSections();
      if (layout) {
        setSections(layout.sections);
        setMetaDescription(layout.metaDescription);
        setMetaKeywords(layout.metaKeywords);
        setMetaTags(layout.metaTags);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
        <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
      <div
        className="md:bg-contain bg-no-repeat top-[100px]"
        style={{
          backgroundImage: isMobile ? "none" : `url(${BgImg})`,
          backgroundPosition: "0px 150px",
        }}
      >
        <ShippingHero data={sections[0]}/>
        <SippingProcess data={sections[1]}/>
        <ShippingOptions data={sections[2]}/>
        <ShippingBenefits data={sections[3]}/>
        <ShippingDashboard data={sections[4]}/>
        <ShippingGetStarted data={sections[5]}/>
 <DownloadNow /> 
        <div className="relative">
            <CoutriesHomeSection />
            <ClientsReviewDescreption />
            {/* <img src={ArrowImg} className="absolute top-[1926px] w-[100%]" alt="Arrow" /> */}
            <ClientsReview />
            <FrequentlyAskedQuestions />

            <div
              className="bg-contain lg:bg-cover bg-no-repeat top-[100px]"
              style={{
                backgroundImage: `url(${BgImg})`,
                backgroundPosition: "0px 150px",
              }}
            >
              <HomeDescreptionHero4 />
                              <Reserve />

              <Footer />
            </div>
          </div>


      </div>
    </>
  );
};

export default Shipping;

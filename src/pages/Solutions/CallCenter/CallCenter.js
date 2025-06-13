import { useEffect, useState } from "react";
import {
  CallCenterHero,
  CallCenterOfferings,
  CallCenterAdvantags,
  CallCenterDashboard,
  CallCenterBenefits,
  CallCenterBenefitsDescreption,
} from "../../../components/ExploreComponents";
import BgImg from "../../../assets/CallCenter/BgImg.png";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../../layout";
import { apiclient } from "../../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { DownloadNow } from "../../../components/Banners/DownloadNow";
import { Reserve } from "../../../components/Banners/Reserve";

const fetchData = async () => {
  const response = await apiclient.get("/sections/call-center");
  console.log(response.data);
  return response.data;
} 



const CallCenter = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [callCenterData, setCallCenterData] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  console.log(callCenterData);
  useEffect(() => {
    const fetch = async () => {
      const layout = await fetchData();
      setCallCenterData(layout.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
    };
    fetch();
  }
  , []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
        <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
      <div
        className="md:bg-cover bg-no-repeat top-[100px]"
        style={{
          backgroundImage: isMobile ? "none" : `url(${BgImg})`,
          backgroundPosition: "0px 150px",
        }}
      >
        <CallCenterHero data={callCenterData? callCenterData[0] : null}/>
        <CallCenterOfferings data={callCenterData? callCenterData[1] : null}/>
      </div>
      <CallCenterAdvantags data={callCenterData? callCenterData[2] : null}/>
      <CallCenterDashboard data={callCenterData? callCenterData[3] : null}/>
      <CallCenterBenefits data={callCenterData? callCenterData[4] : null}/>
      <CallCenterBenefitsDescreption data={callCenterData? callCenterData[5] : null}/>
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
  );
};

export default CallCenter;

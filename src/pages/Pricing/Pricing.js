import {
  PlansSection,
  PricingDescreption,
  PricingDescreption2,
} from "../../components/Pricing";
import BackgroundImage_1 from "../../assets/backgrounds/home_background.webp";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../layout";
import BgImg from "../../assets/CallCenter/BgImg.png";
import { useEffect, useState } from "react";
import { apiclient } from "../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { Reserve } from "../../components/Banners/Reserve";
import { DownloadNow } from "../../components/Banners/DownloadNow";

const fetchBlogs = async () => {
  try { 
    const layoutResponse = await apiclient.get("/sections/pricing");
    console.log("Layout Response: ", layoutResponse.data);
    return layoutResponse.data;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
};

const Pricing = () => {

  const [layout, setLayout] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const layout = await fetchBlogs();
      setLayout(layout.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
    };
    fetchData();
  }, []);


  return (
    <div className="bg-contain bg-no-repeat pt-20"   style={{
      backgroundImage: `url(${BackgroundImage_1})`,
    }}>
        <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
      <PricingDescreption data={layout[0]}/>
      <PlansSection data={layout[1]}/>
      <PricingDescreption2 data={layout[2]}/>
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

export default Pricing;

import BackgroundImage_1 from "../../../assets/backgrounds/home_background.webp";

import {
  ProductHero,
  HomeDescreptionHero1,
  StatisticsImgHero,
  CustomizeSection,
  DescreptionSection1,
  DescreptionSection2,
  CardsSection,
} from "../../../components/ProductsComponents/index";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../../layout";
import BgImg from "../../../assets/CallCenter/BgImg.png";
import { apiclient } from "../../../apiConfig/apiConfig";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DownloadNow } from "../../../components/Banners/DownloadNow";
import { Reserve } from "../../../components/Banners/Reserve";

const fetchSections = async () => {
  try {
    const response = await apiclient.get("/sections/cod-platforms");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
  }
};

const CashOnDelivery = () => {
  const [data, setData] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const layout = await fetchSections();
        setData(layout.sections);
        setMetaDescription(layout.metaDescription);
        setMetaKeywords(layout.metaKeywords);
        setMetaTags(layout.metaTags);
      } catch (error) {
        console.error("Error fetching sections:", error);
      } 
    };
    fetchData();
  }, []);

  return (
    <div>
        <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
      {/* Main background image */}
      <div
        className="relative bg-contain bg-no-repeat lg:pt-28"
        style={{
          backgroundImage: `url(${BackgroundImage_1})`,
        }}
      >
        {/* Absolute gradient overlay */}
        <div
          className="absolute inset-0 bg-black/90 blur-[500px] -z-10"
         
        ></div>
        <ProductHero data={data ? data[0] : null }/>
        <HomeDescreptionHero1 data={data ? data[1] : null }/>
        <StatisticsImgHero data={data ? data[1] : null }/>
        <CustomizeSection data={data ? data[2] : null }/>
        <DescreptionSection1 data={data ? data[3] : null }/>
        <DescreptionSection2 data={data ? data[4] : null }/>
        <CardsSection data={data ? data[4] : null }/>
      </div>
    
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

export default CashOnDelivery;

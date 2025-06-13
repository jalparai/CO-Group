import BackgroundImage_1 from "../../assets/backgrounds/home_background.webp";
import {
  CompaniesHomeSlide,
  HomeCardes,
  HomeDescreptionHero1,
  HomeDescreptionHero2,
  HomeDescreptionHero3,
  HomeHero,
  HomeServicesSlider,
  ProfitsHomeHero,
  AnswersHomeHero,
  AnswersHomeHero2,
} from "../../components/HomeComponents/index";
import BgImg from "../../assets/CallCenter/BgImg.png";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../layout";
import { apiclient } from "../../apiConfig/apiConfig";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { DownloadNow } from "../../components/Banners/DownloadNow";
import { Reserve } from "../../components/Banners/Reserve";

const fetchData = async () => {
    const response = await apiclient.get("/sections/home");
    console.log(response.data);
    return response.data;
  }

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const layout = await fetchData();
      setHomeData(layout.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
    }
    fetch();
  }
  , []);
  return (
    <div
      className=" bg-contain bg-no-repeat pt-20 bg-black main_bg"
      style={{
        backgroundImage: `url(${BackgroundImage_1})`,
      }}
    >
        <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
      <HomeHero data={homeData?.length>0? homeData[0]: null}/>
      <CompaniesHomeSlide />
      <HomeDescreptionHero1 data={homeData?.length>0 ? homeData[1] : null}/>
      <ProfitsHomeHero data={homeData?.length>0 ? homeData[1] : null} />
      <HomeDescreptionHero2 />
      <HomeDescreptionHero3 data={homeData?.length>0 ? homeData[2] : null} />
      <HomeServicesSlider />
      <HomeCardes data={homeData?.length>0 ? homeData[3] : null} />
      <div
        className="absolute -top-[500px] left-[350px] inset-0 bg-black/90 blur-[150px] -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <AnswersHomeHero data={homeData?.length>0 ? homeData[4]: null}/>
      <AnswersHomeHero2 data={homeData?.length>0 ? homeData[5]: null}/>

      {/* Chat Button */}
      <div
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50"
        onClick={() => alert("Chat button clicked!")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path d="M21 15a2 2 0 01-2 2H6.83l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
        </svg>
      </div>
   <DownloadNow /> 
      <div className="relative">

            <CoutriesHomeSection data={homeData?.length>0 ? homeData[6]: null}/>
            <ClientsReviewDescreption data={homeData?.length>0 ? homeData[7]: null} />
            {/* <img src={ArrowImg} className="absolute top-[1926px] w-[100%]" alt="Arrow" /> */}
            <ClientsReview data={homeData?.length>0 ? homeData[8]: null}/>
            <FrequentlyAskedQuestions data={homeData?.length>0 ? homeData[9]: null}/>

            <div
              className="bg-contain lg:bg-cover bg-no-repeat top-[100px]"
              style={{
                backgroundImage: `url(${BgImg})`,
                backgroundPosition: "0px 150px",
              }}
            >
              <HomeDescreptionHero4 data={homeData?.length>0 ? homeData[10]: null} />
                <Reserve />
              <Footer />
            </div>
          </div>

    </div>
  );
};

export default Home;

import React, {useEffect, useState} from "react";
import { useMediaQuery } from "react-responsive";
import BackgroundImage_2 from "../../../assets/DashboardHeroImage/background.webp";

import {
  ExploreSourcingHero,
  DescreptionSection1,
  CardsSection,
  DescreptionSection2,
  SourcingBenefitsSection,
  NewRequestSection,
  OfferNowSection,
} from "../../../components/ExploreComponents";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../../layout";
import BgImg from "../../../assets/CallCenter/BgImg.png";
import { apiclient } from "../../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { DownloadNow } from "../../../components/Banners/DownloadNow";
import { Reserve } from "../../../components/Banners/Reserve";

const fetchSections = async () => {
  try {
    const response = await apiclient.get("/sections/sourcing-purchasing", {
      responseType: "text"
    }).then((data) => {
      console.log("original", data.data)
      const parsedData=JSON.parse(data.data)

      
      // console.log()
      console.log("asdfgnhjhgfdfghjdfghjhgfdsdfgnmjngfdsfghjk,jhekjewrtjkjhgfdrghjkhgfdghjnmgfdsdfghj", parsedData)

      const parse = JSON.parse(JSON.stringify(parsedData));
      console.log("asdfgnhjhgfdfghjdfghjhgfdsdfgnmjngfdsfghjk,jhekjewrtjkjhgfdrghjkhgfdghjnmgfdsdfghj", parse)

      
      return parsedData;
    })
    response.sections[2].cardSection.cards.forEach((d)=> console.log("ITEM ", d))
    return response;
  } catch (error) {
    console.error("Error fetching sections:", error);
  }
};


const Sourcing = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [sections, setSections] = useState([]);
  const [cards, setCards] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const layout = await fetchSections();
      if (layout) {
        setCards(layout.sections[2].cardSection.cards);
        setSections(layout.sections);
        setMetaDescription(layout.metaDescription);
        setMetaKeywords(layout.metaKeywords);
        setMetaTags(layout.metaTags);
      }
    };
    fetchData();
  }
  , []);


  return (
    <div>
      <Helmet>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="tags" content={metaTags} />
      </Helmet>
      
      <ExploreSourcingHero data={sections[0]}/>
       <DescreptionSection1 data={sections[1]}/>
      {!isMobile && (
        <div
          className="bg-contain top-[100px] bg-no-repeat"
          style={{
            backgroundImage: `url(${BackgroundImage_2})`,
            backgroundPosition: "0px 1100px",
          }}
        >
          <CardsSection data={sections[1]}/>
          <DescreptionSection2 data={sections[2]}/>
          <SourcingBenefitsSection data={sections[2]}/>
           <NewRequestSection data={sections[3]}/>
        </div>
      )}
      {isMobile && (
        <div>
          <CardsSection data={sections[1]}/>
          <DescreptionSection2 data={sections[2]}/>
          <SourcingBenefitsSection data={sections[2]}/>
          <NewRequestSection data={sections[3]}/>
        </div>
      )}
      <OfferNowSection data={sections[4]}/>  
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

export default Sourcing;

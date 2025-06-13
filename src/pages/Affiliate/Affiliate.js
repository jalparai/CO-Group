import React, { useEffect, useState } from "react";
import {
  AffliationHero,
  AffiliateWorkflow,
  AffiliateProgramBenefits,
  AffiliateProgramSteps,
  AffiliateBanner,
} from "../../components/ProductsComponents";
import BackgroundImage_1 from "../../assets/backgrounds/home_background.webp";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../layout";
import BgImg from "../../assets/CallCenter/BgImg.png";
import { apiclient } from "../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";


const fetchSections = async () => {
  try {
    const response = await apiclient.get("/sections/affiliate-shipping");
    console.log("eioewijfiiwj933333333333333333333333333333333333333333", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
  }
};


const Affliate = () => {
  const [sections, setSections] = useState(null);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const  getSections = () =>{
      fetchSections()
        .then((layout) => {
          setSections(layout.sections);
          setMetaDescription(layout.metaDescription);
          setMetaKeywords(layout.metaKeywords);
          setMetaTags(layout.metaTags);
        })
        .catch((error) => {
          console.error("Error fetching sections:", error);
        });
    }   
    getSections();
  }, []);

  return (
    <div  className=" bg-contain bg-no-repeat pt-20 bg-black main_bg"
    style={{
      backgroundImage: `url(${BackgroundImage_1})`,
    }}>
        <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
      <AffliationHero data={sections ? sections[0] : null}/>
      <AffiliateWorkflow data={sections ? sections[1] : null}/>
      <AffiliateProgramBenefits data={sections ? sections[2] : null}/>
      <AffiliateProgramSteps data={sections ? sections[3] : null}/>
      <AffiliateBanner data={sections ? sections[4] : null}/>
    
     
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
              <Footer />
            </div>
          </div>

    </div>
  );
};

export default Affliate;

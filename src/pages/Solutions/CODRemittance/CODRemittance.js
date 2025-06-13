import {
  CODRemittanceHero,
  CODRemittanceDescreptionSection1,
  OfferNowSection2,
  ChooseOurCODRemittance,
  DescreptionTitle,
  ContactUsSection,
} from "../../../components/ExploreComponents";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../../layout";
import BgImg from "../../../assets/CallCenter/BgImg.png";
import { useEffect, useState } from "react";
import { apiclient } from "../../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { DownloadNow } from "../../../components/Banners/DownloadNow";
import { Reserve } from "../../../components/Banners/Reserve";

const fetchSections = async () => {
  try {
    const response = await apiclient.get("/sections/COD-remittance");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
  }
};

const CODRemittance = () => {
  const [data,setData] = useState(null);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const layout = await fetchSections();
      setData(layout.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
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
      <CODRemittanceHero data={data? data[0]: null} />
      <CODRemittanceDescreptionSection1 data={data? data[1]: null}/>
      <OfferNowSection2 data={data? data[1]: null}/>
      <ChooseOurCODRemittance data={data? data[2]: null}/>
      <DescreptionTitle data={data? data[3]: null}/>
      <ContactUsSection data={data? data[4]: null}/>
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

export default CODRemittance;

import {
  CountriesCoveredDescreption,
  RegionSection,
  DashboardStock,
} from "../../../components/ExploreComponents";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../../layout";
import BgImg from "../../../assets/CallCenter/BgImg.png";
import { useEffect, useState } from "react";
import { apiclient } from "../../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { DownloadNow } from "../../../components/Banners/DownloadNow";
import { Reserve } from "../../../components/Banners/Reserve";

const fetchBlogs = async () => {
  try { 
    const layoutResponse = await apiclient.get("/sections/countries-covered");
    return layoutResponse.data
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
};


const CountriesCovered = () => {
  const [layoutt, setLayout] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const fetchBlogsData = async () => {
      const layout = await fetchBlogs();
      console.log(layout);
      setLayout(layout.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
    }
    fetchBlogsData();
  }, [])

  return (
    <div>
        <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
      <CountriesCoveredDescreption data={layoutt[0]} />
      <RegionSection data={layoutt[0]}/>
      <DashboardStock data={layoutt[1]}/>
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

export default CountriesCovered;

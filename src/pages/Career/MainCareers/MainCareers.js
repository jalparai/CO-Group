import {
  MainCareersDescreption,
  JobListings,
  ConnectOnLinkedin,
  MainCareersDescreption2,
  OfficesLocationsSection,
} from "../../../components/MainCareers";
import { ClientsReview, ClientsReviewDescreption, CoutriesHomeSection, Footer, FrequentlyAskedQuestions, HomeDescreptionHero4 } from "../../../layout";
import BgImg from "../../../assets/CallCenter/BgImg.png";
import { useState, useEffect } from "react";
import { apiclient } from "../../../apiConfig/apiConfig";

const fetchBlogs = async () => {
  try { 
    const layoutResponse = await apiclient.get("/sections/career-main");
    console.log("Layout Response: ", layoutResponse.data);
    return layoutResponse.data;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
};
 


const MainCareers = () => {

  const [data, setData] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const layout = await fetchBlogs();
      setData(layout.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
    };
    fetchData();
  }, []);

  return (
   <>
    <div>
      <MainCareersDescreption data={data[0]}/>
       <JobListings data={data[1]}/>
      <ConnectOnLinkedin data={data[2]}/>
      <MainCareersDescreption2 data={data[3]}/>
      <OfficesLocationsSection data={data[4]}/>
    </div>
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
    </>

  );
};

export default MainCareers;

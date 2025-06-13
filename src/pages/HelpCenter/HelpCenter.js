import {
  HelpCenterHero,
  HelpCenterSearch,
  HelpCenterCards,
  HelpCenterCommunitySupport,
  PopularTopicsSection,
  NeedHelpSection,
} from "../../components/HelpCenter";
import { Footer } from "../../layout";
import {useState, useEffect}  from "react"
import { apiclient } from "../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { Reserve } from "../../components/Banners/Reserve";

const fetchBlogs = async () => {
  try { 
    const layoutResponse = await apiclient.get("/sections/help-center");
    console.log("Layout Response: ", layoutResponse.data);
    return layoutResponse.data;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
};
 


const HelpCenter = () => {

  const [layout, setLayout] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlogs();
      setLayout(data.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
    };
    fetchData();
  }, []);


  return (
   <>
     <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
    <div>
      <HelpCenterHero data={layout[0]}/>
      <HelpCenterSearch data={layout[1]} />
      <HelpCenterCards data={layout[1]} />
      <HelpCenterCommunitySupport data={layout[2]} />
      <PopularTopicsSection data={layout[3]} />
      <NeedHelpSection data={layout[4]} />
    </div>
                    <Reserve />

    <Footer />
   </>
  );
};

export default HelpCenter;

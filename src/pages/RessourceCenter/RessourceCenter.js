import {
  RessourceCenterHero,
  RessourceCenterSearch,
  RessourceCenterCardSection,
  AllRessources,
  RessourceCenterDescreption,
} from "../../components/RessourceCenter";
import { useState, useEffect } from "react";
import { apiclient } from "../../apiConfig/apiConfig";
import { Footer } from "../../layout";
import { Helmet } from "react-helmet-async";
import { Reserve } from "../../components/Banners/Reserve";
import { DownloadNow } from "../../components/Banners/DownloadNow";

const fetchBlogs = async () => {
  try {
    const response = await apiclient.get("/blog/get/resource-center");
    const layoutResponse = await apiclient.get("/sections/resource-center");
    return {response: response.data, layout: layoutResponse.data};
  } catch (error) {
    console.error("fetchBlogs -> error", error);
  }
};

const RessourceCenter = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [layout, setLayout] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
      const fetchBlogsData = async () => {
        const {response, layout} = await fetchBlogs();
        console.log(layout);
        setBlogs(response);
        setSearchedBlogs(response);
        setLayout(layout.sections);
        setMetaDescription(layout.metaDescription);
        setMetaKeywords(layout.metaKeywords);
        setMetaTags(layout.metaTags);
      }
      fetchBlogsData();
    }
    , []) 


  return (
  <>
    <Helmet>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="tags" content={metaTags} />
    </Helmet>

    <div>
      <RessourceCenterHero data={layout[0]}/>
      <RessourceCenterSearch blogs={searchedBlogs} setSearchedBlogs={setSearchedBlogs} />
      <RessourceCenterCardSection data={layout[1]}/>
      <AllRessources blogPosts={searchedBlogs} data={layout[2]}/>
       <DownloadNow /> 
      <RessourceCenterDescreption data={layout[3]}/>
    </div>
                    <Reserve />

    <Footer />
  </>
  );
};

export default RessourceCenter;

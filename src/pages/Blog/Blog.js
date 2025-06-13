import {
  BlogSearchSection,
  BlogDescreptionSection,
  LatestBlogs,
  Podcasts,
  NewsletterSection,
} from "../../components/Blog";
import React, { useEffect, useState } from "react";
import { apiclient } from "../../apiConfig/apiConfig"
import { Footer } from "../../layout";
import { Helmet } from "react-helmet-async";
import { Reserve } from "../../components/Banners/Reserve";
import { DownloadNow } from "../../components/Banners/DownloadNow";
const fetchBlogs = async () => {
  try { 
    const response = await apiclient.get("/blog/get");
    const layoutResponse = await apiclient.get("/sections/blogs");
    return {response: response.data, layout: layoutResponse.data};
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
};



const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [layoutt, setLayout] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  useEffect(() => {
    const fetchBlogsData = async () => {
      const {response, layout} = await fetchBlogs();
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
      <BlogSearchSection blogs={blogs} setSearchedBlogs={setSearchedBlogs} data={layoutt[0]} />
      {/* <BlogDescreptionSection /> */}
      <LatestBlogs blogs={searchedBlogs} setBlogs={setSearchedBlogs} data={layoutt[1]}/>
       <DownloadNow /> 
      <Podcasts data={layoutt[2]}/>
      <div className="lg:w-[80%] w-[95%] m-auto">

      <NewsletterSection data={layoutt[3]}/>

      </div>
    </div>
       <Reserve />
   <Footer /> </>
  );
};

export default Blog;

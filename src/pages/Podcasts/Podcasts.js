import { useEffect, useState } from "react";
import {
  PodcastsHero,
  PodcastsSearch,
  PodcastsImage,
  LatestPodcasts,
  PodcastsDescreption,
} from "../../components/Podcasts";
import { apiclient } from "../../apiConfig/apiConfig";
import { Footer } from "../../layout";
import { Helmet } from "react-helmet-async";
import { Reserve } from "../../components/Banners/Reserve";
import { DownloadNow } from "../../components/Banners/DownloadNow";

const fetchPodcasts = async () => {
  const response = await apiclient.get("/podcast/get");
  console.log(response.data);
  const layoutResponse = await apiclient.get("/sections/podcasts");
  console.log(layoutResponse.data);
  return {response: response.data, layout: layoutResponse.data};
};

const Podcasts = () => {
  const [podcastsItems, setPodcastsItems] = useState([]);
  const [heroSec, setHeroSec] = useState([]);
  const [layout, setLayout] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const {response, layout} = await fetchPodcasts();
      setPodcastsItems(response.podcasts);
      setHeroSec(response.hero);
      setLayout(layout.sections);
      setMetaDescription(layout.metaDescription);
      setMetaKeywords(layout.metaKeywords);
      setMetaTags(layout.metaTags);
    };
    fetchData();
  }
  , []);
  console.log(podcastsItems);

  return (
  <>
    <Helmet>
         <meta name="description" content={metaDescription} />
         <meta name="keywords" content={metaKeywords} />
          <meta name="tags" content={metaTags} />
  </Helmet>
  <div>
      <PodcastsHero data={layout[0]}/>
      <PodcastsSearch/>
      <PodcastsImage podcastImg={heroSec} />
      <LatestPodcasts podcasts={podcastsItems} data={layout[1]}/>
       <DownloadNow /> 
      <PodcastsDescreption data={layout[2]}/>
    </div>
                    <Reserve />

    <Footer />
  </>
  
);
};

export default Podcasts;

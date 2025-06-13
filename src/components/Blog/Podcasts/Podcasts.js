import Podcast1 from "../../../assets/Podcasts/LatestPodcasts/Podcast1.png";
import Podcast2 from "../../../assets/Podcasts/LatestPodcasts/Podcast2.png";
import Podcast3 from "../../../assets/Podcasts/LatestPodcasts/Podcast3.png";

import Ellipse from "../../../assets/Blog/Podcasts/Ellipse.svg";

import PodcastsDescreption from "./PodcastsDescreption";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useEffect, useState } from "react";
import {apiclient} from "../../../apiConfig/apiConfig";

const PodcastItem = ({podcast}) => (
  <motion.div
  onClick={() => window.open(podcast.url, "_blank")}
    className="rounded-lg font-Montserrat overflow-hidden"
    initial={{ opacity: 0, y: 50 }} // Start from invisible and below
    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when in view
    viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of the section is in view
    transition={{ duration: 0.6 }} // Smooth transition for opacity and y-axis movement
  >
    <div className="relative mb-[30px] lg:mb-[34px]">
      <img
        className="h-full w-full object-cover"
        src={podcast.cover}
        alt={podcast.category}
      />
    </div>
    <div className="p-4">
      <h3 className="text-[22px] lg:text-[25px] font-bold mb-[34px]">
        {podcast.title}
      </h3>
      <div className="flex flex-1 space-x-[21px]">
        <img src={Ellipse} alt="Ellipse" className="w-[40px] lg:w-auto" />
        <div>
          <p className="text-[16px] lg:text-[20px] font-medium">{podcast.user.FName + "  " + podcast.user.LName}</p>
          <p className="text-[12px] lg:text-[15px] text-[#484848] font-extralight">
            {podcast.formattedDate}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const fetchPodcasts = async () => {
  const response = await apiclient.get("/podcast/get");
  return response.data;
};


const Podcasts = ({data}) => {
  const [PodcastsItems, setPodcastsItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      const data = await fetchPodcasts();
      setPodcastsItems(data.podcasts);
        // setHeroSec(data.hero);
    };
    fetchData();
  }, []);
  return (
    <div className="container font-Montserrat mx-auto mt-[53px] lg:mt-[103px] px-4 lg:px-0">
      <div
        className="absolute top-2/4 inset-0 h-screen bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
      ></div>
      <PodcastsDescreption data={data}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PodcastsItems.slice(0, 6).map((Podcast, index) => (
          <PodcastItem key={index} podcast={Podcast}/>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;

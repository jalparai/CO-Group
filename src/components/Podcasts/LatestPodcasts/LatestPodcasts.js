import Podcast1 from "../../../assets/Podcasts/LatestPodcasts/Podcast1.png";
import Podcast2 from "../../../assets/Podcasts/LatestPodcasts/Podcast2.png";
import Podcast3 from "../../../assets/Podcasts/LatestPodcasts/Podcast3.png";
import creatorPhoto from "../../../assets/Podcasts/LatestPodcasts/creatorPhoto.png";
import calendar from "../../../assets/Podcasts/LatestPodcasts/icons/calendar.svg";
import eyes from "../../../assets/Podcasts/LatestPodcasts/icons/eyes.svg";
import Bg2 from "../../../assets/Dashboard/spera16.svg"

import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const PodcastCard = ({
 podcast
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="shadow-lg rounded-lg font-Montserrat overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => window.open(podcast.url, "_blank")}

      >
      <div className="relative mb-4 lg:mb-6">
        {/* Podcast Image */}
        <img
          className="w-full h-48 md:h-64 lg:h-72 object-cover"
          src={podcast.cover}
          alt={podcast.category}
        />

        {/* Overlay Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
          <FaPlay className="text-white text-2xl lg:text-4xl" />
        </div>
      </div>
      <div className="p-4 lg:p-6 text-white">
        {/* Live Now and Category Labels */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="flex justify-center items-center bg-[#0587FF]/20 text-[#0587FF] px-3 py-2 lg:px-4 lg:py-2 rounded text-sm lg:text-base font-medium">
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#FF0D0D] mr-1.5"></div>
            LIVE NOW
          </span>
          <span className="bg-[#0587FF]/10 text-white px-3 py-2 lg:px-4 lg:py-2 rounded text-sm lg:text-base font-medium">
            {podcast.category}
          </span>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 line-clamp-2">
          {podcast.title}
        </h3>

        <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
          <img
            src={podcast?.user?.pfp || creatorPhoto}
            alt={podcast?.user?.FName + "  " + podcast?.user?.LName}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-base lg:text-lg font-medium">{podcast?.user?.FName + " " + podcast?.user?.LName}</p>
            {/* <p className="text-sm lg:text-base text-[#484848] font-light">
              {members} members joined
            </p> */}
          </div>
        </div>

        <div className="flex justify-between items-center text-[#0587FF] text-sm lg:text-base font-medium">
          <div className="flex items-center">
            <img src={eyes} alt="eyes" className="w-4 h-4 lg:w-5 lg:h-5" />
            <p className="ml-2 lg:ml-3">WATCH NOW</p>
          </div>
          <div className="flex items-center">
            <img
              src={calendar}
              alt="calendar"
              className="w-4 h-4 lg:w-5 lg:h-5"
            />
            <p className="ml-2 lg:ml-3">{podcast.formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const podcastPosts = [
  {
    id: 1,
    podcastPhoto: Podcast1,
    category: "Business",
    title: "Building Trust and Driving Sales",
    creator: "Amine M'GHARI",
    creatorPhoto: creatorPhoto,
    members: "12k",
    date: "May 10, 2024",
  },
  {
    id: 2,
    podcastPhoto: Podcast2,
    category: "Marketing",
    title: "Spain's E-commerce Legislation",
    creator: "John Doe",
    creatorPhoto: creatorPhoto,
    members: "8k",
    date: "April 25, 2024",
  },
  {
    id: 3,
    podcastPhoto: Podcast3,
    category: "Marketing",
    title: "Decoding E-commerce Fulfillment",
    creator: "John Doe",
    creatorPhoto: creatorPhoto,
    members: "8k",
    date: "April 25, 2024",
  },
  // More podcast entries...
];

const LatestPodcasts = ({podcasts, data}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
            <img src={Bg2} className="absolute w-[100%] z-[-10]"/>

      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 lg:mb-12">
      {data?.generalSection?.heading || "Latest Podcasts"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {podcasts.slice(0, 6).map((podcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </div>

      <button
        className="flex justify-center items-center text-white border border-white/60 text-base lg:text-lg font-medium rounded-full py-3 px-8 mx-auto mt-12 lg:mt-16 hover:bg-white/10 transition-colors duration-300"
        type="button"
      >
        Load More
      </button>
    </section>
  );
};

export default LatestPodcasts;

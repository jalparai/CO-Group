import microphoneStand from "../../../assets/Podcasts/PodcastsHero/microphoneStand.svg";
import Bg from "../../../assets/Dashboard/spera14.svg"

const PodcastsHero = ({data}) => {
  return (
    <section className="w-full  mt-4 lg:mt-36">
            <img src={Bg} className="absolute w-[100%] z-[-10]"/>

      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-6 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col items-start">
              {/* Podcast Label */}
              <div className="inline-flex items-center gap-2 mb-6">
                <img
                  src={data?.generalSection?.image || microphoneStand}
                  alt="Microphone"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <span className="text-white/50 text-xl lg:text-4xl font-light font-Montserrat">
                  {data?.generalSection?.heading || "Podcasts"}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl lg:text-[45px] font-bold font-Montserrat leading-tight lg:leading-[60px] text-left dark:text-white">
                {data?.generalSection?.description || "Your Go-To Source for E- commerce Knowledge"}
              </h1>
            </div>

            {/* Right Column */}
            <div className="max-w-lg lg:max-w-xl">
              <p className="text-xl lg:text-2xl font-Montserrat text-left">
                {data?.generalSection?.caption || "Stay updated with the latest trends, tips, and industry news"+
                "across various e-commerce domains"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastsHero;

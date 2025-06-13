import microphone from "../../../assets/Blog/LatestBlogs/microphone.svg";

const PodcastsDescreption = ({data}) => {
  return (
    <div className="relative flex flex-col my-9 lg:my-[88px]">
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        <div className="relative flex flex-col lg:flex-row lg:space-x-[160px] rounded-[30px]">
          {/* Left Section: Title and Guides */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="mb-[30px] lg:mb-0">
              <div
                className="text-white text-[20px] lg:text-[32px] font-Montserrat font-light inline-flex items-center transition-colors duration-500"
                type="button"
              >
                <img
                  src={microphone}
                  alt="microphone"
                  className="w-[30px] lg:w-auto h-auto mr-2"
                />
                {data? data.title : "Podcasts"}
              </div>
              <h1 className="text-[23px] lg:text-[40px] font-Montserrat font-bold tracking-normal leading-8 lg:leading-10 w-auto lg:w-[690px]">
                {data?.generalSection?.description || "Listen to our  featuring industry experts and thought leaders"}
              </h1>
            </div>
          </div>

          {/* Right Section: Description */}
          <div className="flex items-center w-full max-w-[402px]">
            <p className="text-[12px] lg:text-[24px] leading-4 lg:leading-7 text-[#6F6F6F] font-light font-Montserrat">
              We share valuable insights, expertise, and perspectives on key
              topics. Watch, listen, and learn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastsDescreption;

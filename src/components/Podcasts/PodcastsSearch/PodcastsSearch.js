import SearchIcon from "../../../assets/HelpCenterIcons/SearchIcon.svg";

const PodcastsSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-[67px]">
      <div className="flex items-center w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1205px] border-[0.5px] border-[#3C3C3C] rounded-full bg-[#09090F]">
        <input
          type="text"
          placeholder="Search for articles ? ..."
          className="flex-grow w-full px-[20px] sm:px-[25px] md:px-[28px] lg:px-[31px] py-[15px] sm:py-[30px] md:py-[35px] lg:py-[41px] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-white font-light font-Montserrat bg-transparent focus:outline-none rounded-l-full"
        />
        <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-Montserrat text-white py-[8px] sm:py-[10px] md:py-[12px] lg:py-[15px] px-[20px] sm:px-[25px] md:px-[28px] lg:px-[31px] m-[15px] sm:m-[20px] md:m-[22px] lg:m-[25px] rounded-full">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="mr-2 w-[20px] md:w-[22px] lg:w-auto h-auto"
          />
          Search
        </button>
      </div>
    </div>
  );
};

export default PodcastsSearch;

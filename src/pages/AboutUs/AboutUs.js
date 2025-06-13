import {
  AboutUsHero,
  AboutUsCompaniesSlide,
  AboutUsDescreptionSection,
  MarketAccessSection,
  AboutUsDescreptionSection2,
  TeamOfferSection,
  WhyChooseUs,
  AboutUsDescreptionSection3,
} from "../../components/AboutUs";
import Bg from "../../assets/Dashboard/spera15.svg"
import { useState } from "react";
import { useEffect } from "react";
import {apiclient} from "../../apiConfig/apiConfig"
import { Footer } from "../../layout";
import { Reserve } from "../../components/Banners/Reserve";
import { BokDemoCall } from "../../components/Banners/BokDemoCall";

const fetchData = async () => {
  try {
    const response = await apiclient.get("/sections/about-us");
    return response.data;
    } catch (error) {
    console.log(error);
    }
};


const AboutUs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {
      setData(data.sections);
    });
  }, []);

  return (
  <>
    <div>
      <AboutUsHero data={data[0]} />
      <AboutUsCompaniesSlide />

      <AboutUsDescreptionSection data={data?.slice(1,3)} />
      <img src={Bg} className="absolute w-[100%] z-[-10]"/>

      <MarketAccessSection data={data[3]}/>
      <AboutUsDescreptionSection2 data={data?.slice(4,6)}/>
      <TeamOfferSection data={data[6]} />
      <br />
      <BokDemoCall />
      <WhyChooseUs data={data[7]} />
      <AboutUsDescreptionSection3 data={data[8]}/>
    </div>
       <Reserve />
    <Footer />
    </>
  );
};

export default AboutUs;

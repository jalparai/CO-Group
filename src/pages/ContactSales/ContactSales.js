import { useEffect, useState } from "react";
import {
  ContactSalesDescreption,
  ContactSalesCompaniesSlide,
  ContactSalesInformationSection,
  ContactSalesContact,
} from "../../components/ContactSales";
import { Footer } from "../../layout";
import { apiclient } from "../../apiConfig/apiConfig";
import { Helmet } from "react-helmet-async";
import { Reserve } from "../../components/Banners/Reserve";

const fetchBlogs = async () => {
  try { 
    const layoutResponse = await apiclient.get("/sections/contact-sales");
    console.log("Layout Response: ", layoutResponse.data);
    return layoutResponse.data;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
};
const ContactSales = () => {
  const [data, setData] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
    const [metaTags, setMetaTags] = useState("");
    const [metaKeywords, setMetaKeywords] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBlogs();
      setData(response.sections);
      setMetaDescription(response.metaDescription);
      setMetaKeywords(response.metaKeywords);
      setMetaTags(response.metaTags);
    };
    fetchData();
  }
  , []);


  return (
    <div>
        <Helmet>
               <meta name="description" content={metaDescription} />
               <meta name="keywords" content={metaKeywords} />
                <meta name="tags" content={metaTags} />
        </Helmet>
      <ContactSalesDescreption data={data[0]}/>
      <ContactSalesCompaniesSlide data={data[1]} />
      <ContactSalesInformationSection data={data[2]} />
      <ContactSalesContact data={data[3]} nextData={data[4]} />
   <Reserve />
      <div className="relative">
                       

      <Footer />
          </div>
    </div>
  );
};

export default ContactSales;

import { useEffect, useState } from "react";
import { apiclient } from "../../apiConfig/apiConfig"
import { Footer } from "../../layout";

const fetchdata = async () => {
  try {
    const response = await apiclient.get("/guides/get/67d33af7742e280b82c7b6b0");
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

const TermsofUse = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchdata().then((data) => setData(data));
  }, []);
  
  return (
 <>
    <div className="w-full max-w-[1272px] mx-auto px-4">
      {/* Navigation Button */}
      <div className="flex justify-left mt-[48.08px] lg:mt-[290px] gap-4">
        <button
          className="text-white border text-[10px] sm:text-[12px] lg:text-[16px] font-Montserrat rounded-[30px] px-[21.56px] py-[13.2px] lg:px-[38px] lg:py-[21px] gap-2 inline-flex justify-center items-center hover:bg-white/20 hover:border-white/20 transition-colors duration-500"
          type="button"
        >
          Home / Terms of Use
        </button>
      </div>

      <div className="my-[74px]" dangerouslySetInnerHTML={{ __html: data?.content }}>
      </div>

      {/* Title and Last Modified Info */}
      {/* <div className="my-[74px]">
        <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#989898] font-bold font-Montserrat">
          Terms of Use
        </h1>
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Purpose
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The website www.codpowergroup.com (referred to as the "Website"),
          published by COD Power Group company (referred to as "COD Power
          Group"), serves as COD Power Group's corporate platform, presenting
          its solutions and services.
          <br />
          <br />
          Accessing, browsing, or using the Website constitutes full acceptance
          of this document (referred to as the "General Conditions of Use") by
          any individual accessing, browsing, or using all or part of the
          Website (referred to as the "User").
          <br />
          <br />
          Hence, before utilizing the Website, the User is encouraged to review
          these General Conditions of Use. If the User declines any provision of
          these General Conditions of Use, they are requested not to use the
          Website and its services.
          <br />
          <br />
          These General Conditions of Use are readily available on the Website
          at all times.
          <br />
          For inquiries, please contact COD Power Group directly by sending an
          email to contact@codpowergroup.com.
        </p>
      </div> */}

      {/* Appointment Section */}
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Intellectual Property Rights
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Website, along with all its elements or those provided to Users,
          including trademarks, logos, photographs, programs, source codes,
          data, databases, images (animated or static), sounds, drawings,
          graphics, videos, texts, and downloadable resources from the Website,
          layout, appearance, structure, as well as any other element not
          associated with links to third-party websites, are either owned by COD
          Power Group or subject to a license granted to it by intellectual
          property rights holders.
          <br />
          <br />
          All these elements are governed by French and international
          intellectual property regulations and are protected against
          unauthorized use by law or these General Conditions of Use, with legal
          action taken in case of non-compliance.
          <br />
          <br />
          COD Power Group grants each User a personal, non-exclusive,
          royalty-free license to use the Website solely for their own purposes
          as authorized herein. However, the use of the Website does not imply
          the transfer of rights related to its elements to the User. Any
          unauthorized copying, reproduction, adaptation, modification,
          distribution, or use of the Website or its content, in whole or in
          part, by any means and on any medium, is illegal without prior written
          authorization from COD Power Group or the intellectual property rights
          holder.
          <br />
          <br />
          Violation of these provisions, particularly for commercial purposes,
          may result in legal action, including claims for damages. COD Power
          Group reserves the right to seek compensation for damages.
        </p>
      </div>

      {/* Terms Section */}
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Access to the Website and Services
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Website is technically accessible 24/7, except in cases of force
          majeure, technical breakdowns, or maintenance operations necessary for
          its proper functioning.
          <br />
          <br />
          The User acknowledges possessing the necessary skills and means to
          access and use the Website and its services, including a computer or
          any device with Internet access, configured to ensure the proper
          functioning of the Website and its services.
          <br />
          <br />
          The User acknowledges the risks associated with browsing websites and
          using online services, including the potential interception or
          alteration of information, regardless of COD Power Group's intentions.
          <br />
          <br />
          Hence, Users are advised to take necessary precautions, such as
          installing updated virus detection software, to protect against
          hacking and other security risks.
        </p>
      </div>

      {/* Payment and Invoicing */}
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Services Offered on the Website
        </h2>
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          4.1. Access Conditions for Website Services
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          To access all services offered on the Website, Users must: Be of legal
          age;
          <br />
          Have the capacity to benefit from the services;
          <br />
          Use the Website and its services in accordance with these General
          Conditions of Use. <br />
          Users must also complete mandatory fields in the service request form
          to access Website services. Users are responsible for the accuracy and
          truthfulness of the information provided. For more information on the
          use of personal information by COD Power Group, Users are advised to
          consult the Website's Privacy Policy.
        </p>
      </div>

      {/* Invoicing Section */}
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          4.2. Access to Available Resources on the Website
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Website offers various downloadable resources (analyst reports,
          blog posts, brochures, case studies, eBooks, videos, white papers) on
          various subjects. These resources aim to provide Users with
          information on market trends and best practices from COD Power Group
          experts and industry analysts. Intellectual property rights granted to
          Users for these resources are outlined in Article 2 of these General
          Conditions of Use.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          5.3. Product Billing
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          All fees due for the cost of the Product must be paid directly to the
          Company by the end user. Under no circumstances will COD POWER GROUP
          accept, receive, or be responsible for payments made by an end user in
          exchange for the Product.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#958D8D] font-bold mt-[10px] sm:mt-[12px] md:mt-[15px]">
          4.3. Registration for COD Power Group's Organized Events
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Throughout the year, COD Power Group organizes and participates in
          several events. Users can register for these events via the Website.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          General Obligations of the User
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Users agree to use the Website and its services in accordance with
          these General Conditions of Use and not for commercial, prospecting,
          solicitation, or advertising purposes.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Users also agree not to:
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Engage in behavior that could compromise the integrity, functionality,
          or security of the Website and its services;
          <br />
          Attempt to intrude into COD Power Group's information systems;
          <br />
          Attack or attempt to attack the authentication and security measures
          of the Website;
          <br />
          Collect, extract, or use Website information in any way;
          <br />
          Act in a manner that could infringe upon COD Power Group's rights and
          interests. <br /> <br />
          In case of breach or fraudulent use of the Website observed by COD
          Power Group, COD Power Group reserves the right to terminate the
          contractual relationship without notice or compensation, and to block
          User accounts and future access to the Website and its service
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Disclaimer of Liability
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Website and its services are provided to Users free of charge.
          Despite efforts in its design and content analysis, the Website may
          contain errors, periods of unavailability, faults, or defects. COD
          Power Group does not guarantee the accuracy, quality, legality, or
          suitability for a particular purpose of the Website, its services, or
          published content.
          <br />
          <br />
          Users are solely responsible for their use of the Website and for
          safeguarding the security and integrity of their data, hardware, and
          software. COD Power Group cannot be held liable for any malfunction of
          User equipment during or after browsing the Website, or for temporary
          unavailability of the Website.
          <br />
          <br />
          COD Power Group is not liable for electronic or phone communication
          expenses incurred by Users. Additionally, COD Power Group is not
          responsible for the contents of third-party websites accessed through
          hyperlinks on the Website, nor for any indirect damages incurred by
          Users.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Modification
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          These General Conditions of Use are dated and may be modified and
          updated by COD Power Group at any time, particularly in the event of
          changes to the Website's services or applicable regulations. Users are
          advised to review the General Conditions of Use each time they access
          the Website.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Termination of the Website or Services
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          COD Power Group reserves the right to temporarily or permanently
          suspend access to all or part of the Website or its services,
          particularly in the event of cessation of Website-related activities
          or insolvency proceedings.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Contract Assignment
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Users agree that these General Conditions of Use, binding them to COD
          Power Group, may be assigned, transferred, or provided to a third
          party in accordance with applicable law. In case of company transfer,
          these General Conditions of Use will automatically apply to the
          assignee.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Hyperlinks
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Website may contain hypertext links to third-party websites,
          authorized by COD Power Group. However, COD Power Group is not
          responsible for the content of third-party websites accessed through
          these links.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Governing Law/Jurisdiction
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          These General Conditions of Use are governed by French law. In case of
          dispute, COD Power Group and Users shall seek an amicable agreement
          before seeking legal recourse. If no agreement is reached within two
          (2) months, the Courts of Paris (France) have jurisdiction.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TermsofUse;

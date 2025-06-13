import { useEffect, useState } from "react";
import { apiclient } from "../../apiConfig/apiConfig"
import { Footer } from "../../layout";

const fetchdata = async () => {
  try {
    const response = await apiclient.get("/guides/get/67d33ae3742e280b82c7b6ac");
    console.log("Response: ", response);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
const CookiePolicy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchdata().then((data) => {
      setData(data);
    });
  }
  , []);

  return (
<>
<div className="w-full max-w-[1272px] mx-auto px-4">
      {/* Navigation Button */}
      <div className="flex justify-left mt-[48.08px] lg:mt-[290px] gap-4">
        <button
          className="text-white border text-[10px] sm:text-[12px] lg:text-[16px] font-Montserrat rounded-[30px] px-[21.56px] py-[13.2px] lg:px-[38px] lg:py-[21px] gap-2 inline-flex justify-center items-center hover:bg-white/20 hover:border-white/20 transition-colors duration-500"
          type="button"
        >
          Home / Cookies Policy
        </button>
      </div>
      <div className="my-[74px]" dangerouslySetInnerHTML={{ __html: data?.guide.content }}></div>

      {/* <div className="my-[74px]">
        <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#989898] font-bold font-Montserrat">
          Cookies Policy
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          This Cookie Policy elucidates how COD POWER GROUP Inc. and its
          subsidiaries and affiliates (collectively referred to as "COD Power
          Group", "us" or "we") employ cookies, web beacons, tracking pixels,
          clear gifs, and other analogous tracking technologies (collectively
          referred to as "Cookies") when you visit websites owned and operated
          by COD Power Group hat are linked to this Cookie Policy (each referred
          to as a "Website" and collectively as "Websites"). It delineates the
          nature of these technologies, their purposes, and why we utilize them,
          as well as mechanisms for controlling our utilization of them.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          This Cookie Policy is an integral component of our Privacy Policy,
          which delineates how and why we generally gather, store, utilize, and
          distribute personal data, as well as your entitlements regarding your
          personal data. Kindly refer to our Privacy Policy for details on these
          matters.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          By opting to utilize the Website, you acknowledge that we may deploy
          strictly necessary Cookies (outlined below) on your computer or other
          devices to operate and manage the Website. Additionally, with your
          consent, we may also deploy certain Cookies that are not strictly
          necessary, as described below. Should you have any queries regarding
          this Cookie Policy or our Privacy Policy, please do not hesitate to
          Contact Us.
        </p>
      </div>

      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          What Are Cookies?
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Cookies are small pieces of information, typically text files, that
          websites store on your computer, mobile phone, or any other device
          capable of accessing the Internet when you visit a website. Upon
          subsequent visits to the website, cookies allow it to recognize your
          browser. These cookies may retain user preferences and other
          information, such as login details. They can also gather statistics on
          users' website usage or ensure the proper display of graphic elements
          and functionality
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Cookies can persist on your computer or mobile device for varying
          durations. Some are known as 'session cookies,' meaning they are
          stored temporarily and are automatically deleted once you close your
          browser. Others are 'persistent cookies,' which remain on your device
          even after closing your browser, enabling websites to recognize your
          computer upon subsequent visits.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Cookies set by the website owner, in this instance, Cod Power Group,
          are termed “first-party cookies.” Those set by parties other than the
          website owner are referred to as “third-party cookies.” Third-party
          cookies facilitate the provision of third-party features or
          functionalities on the website, such as advertising, interactive
          content, and analytics. The entities that set these third-party
          cookies can identify your computer when you visit the specific website
          and certain other websites.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The duration for which a cookie remains on your computer or mobile
          device is outlined in our cookie preference center. The lifespan of
          first-party cookies is determined by COD Power Group to fulfill the
          purpose for which the cookie was set.
        </p>
      </div>

      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          What Purposes Does COD Power Group Utilize Cookies For?
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          We utilize both first-party and third-party cookies for various
          purposes. Some cookies are essential for technical reasons to ensure
          the proper functioning of our Website; we categorize these as
          "essential" or "strictly necessary" cookies. Others aid us in
          enhancing your experience on our Website by enabling us to monitor
          which pages you find valuable and tailor our Website to your
          preferences, likes, and dislikes by collecting and remembering
          information about your preferences.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          COD POWER GROUP employs cookies for the following objectives:
        </h2>
        <ul className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] w-full max-w-[1180px] mx-auto list-disc mt-[30px]">
          <li>
            Providing our Website services, allowing for the adaptation of
            content or display of services to your device to enhance navigation
            and optimize our Website.
          </li>
          <li>
            Storing information related to completed forms (e.g., user accounts)
            or products, services, or information about our services (e.g.,
            consulted content).
          </li>
          <li>
            Customizing our content and advertising based on your interests.
          </li>
          <li>
            Anonymizing your personal information for statistical and analytical
            purposes.
          </li>
          <li>
            Gathering statistics and audience measurements on the usage of our
            Website.
          </li>
          <li>
            Managing the security of our services by detecting/tracing any
            malicious attempts, computer intrusions, or violations of our terms
            of service.
          </li>
          <li>
            Fulfilling our legal obligations, including responding to requests
            from third parties empowered by law to request navigation data
            and/or personal data of users of our services.
          </li>
        </ul>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Further details regarding the types of cookies used on the Website are
          provided below.
        </p>
      </div>

      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          What Kinds of Cookies Are Utilized?
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          The Website employs various types of cookies as detailed below:
        </p>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          Strictly Necessary Cookies:
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          These cookies are essential for ensuring the proper functioning of the
          Websites and providing services available through our Website. They
          are typically activated in response to actions performed by you, such
          as setting privacy preferences, logging in, or completing forms. The
          data gathered through these cookies is not utilized for marketing
          purposes. Since these cookies are indispensable for Website
          functionality, they cannot be disabled. While you can configure your
          browser to block or notify you about these cookies (refer to "How to
          control or delete cookies" for more information), doing so may result
          in certain parts of the Website not functioning.
        </p>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          Functionality Cookies:
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Functionality cookies enable the Website to recall user preferences
          and selections made on the Website, including usernames, regions, and
          languages. This facilitates the provision of personalized features.
          They are anonymous and do not track browsing activity across other
          websites. Functionality cookies may encompass first-party,
          third-party, persistent, or session cookies.
        </p>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          Performance/Analytics Cookies:
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Performance/analytics cookies are utilized to assess how the Website
          is accessed, used, or performing, with the aim of enhancing user
          experience and continually improving the Website's operation. For
          instance, these cookies enable us to:
        </p>
        <ul className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] w-full max-w-[1180px] mx-auto list-disc mt-[30px]">
          <li>
            Gain insights into Website visitors to enhance content presentation.
          </li>
          <li>
            Experiment with various design concepts for specific pages, such as
            the homepage.
          </li>
          <li>
            Gather data about Website visitors, including their geographic
            location and browser usage.
          </li>
          <li>Determine the number of unique Website users.</li>
          <li>Enhance the Website by assessing any occurring errors.</li>
          <li>Conduct research and diagnostics to refine product offerings.</li>
        </ul>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          Marketing Cookies:
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          These cookies enable us to deliver advertising messages to visitors on
          third-party websites and evaluate the effectiveness of our marketing
          endeavors. We adhere to industry-standard best practices concerning
          the use of marketing cookies.
        </p>
      </div>

      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          How to Manage or Remove Cookies?
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Cookie Preference Center: You have the option to accept or decline
          cookies other than strictly necessary cookies. You can manage your
          cookie preferences by clicking on the "Cookie Settings" button on our
          cookie banner.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Browser Controls: You can adjust your browser settings to delete
          previously set cookies and reject new ones. To learn more about how to
          do this, refer to the help pages of your browser:
        </p>
        <ul className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] w-full max-w-[1180px] mx-auto list-disc mt-[30px]">
          <li>
            Chrome: Visit https://support.google.com/chrome/answer/95647?hl=en
          </li>
          <li>
            Firefox: Visit
            https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer
          </li>
          <li>
            Internet Explorer: Visit
            https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-11
          </li>
          <li>
            Opera: Visit https://help.opera.com/en/latest/web-preferences/
          </li>
          <li>
            Safari: Visit
            https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
          </li>
          <li>Conduct research and diagnostics to refine product offerings.</li>
        </ul>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          For additional information on disabling or blocking cookies, you can
          visit http://www.aboutcookies.org/Default.aspx?page=2.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Disabling Most Interest-Based Advertising: Additionally, many
          advertising networks provide an opt-out option for targeted
          advertising. To learn more, visit http://www.aboutads.info/choices/ or
          http://www.youronlinechoices.com. If you're located in the European
          Union or the United Kingdom, you can click here:
          http://www.youronlinechoices.eu/. However, please note that opting out
          of targeted advertising does not mean you won't receive any
          advertisements; you'll still receive generic ads.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Please be aware that deleting or refusing cookies may limit your
          ability to use some or all of our features, prevent you from saving
          preferences, and affect the proper display of certain pages.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Given the constant development of new devices such as tablets and
          phones, it's impractical to list every browser for each device. It's
          recommended to consult the manufacturer's website for further guidance
          on managing cookies.
        </p>
        <h3 className="text-[20px] text-[#958D8D] font-bold mt-[15px]">
          Previously Set Cookies:
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          If you have disabled one or more cookies, we may still utilize
          information gathered from cookies prior to your preference adjustment.
          However, we will cease using the disabled cookie to gather any further
          information.
        </p>
      </div>

      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          What about Other Tracking Technologies, Such as Pixel Tags?
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Cookies are not the sole method for recognizing or tracking visitors
          to a website. Occasionally, we may employ other similar technologies,
          known as pixel tags (or web beacons or clear gifs). These are small
          graphic files containing a unique identifier that enables us to
          identify when someone has visited our websites and track the online
          movements of website users. This assists us in better managing the
          website by providing insights into the effectiveness of content and
          enhancing the efficiency of our marketing campaigns. Unlike cookies,
          which are stored on a user's computer hard drive, pixels are embedded
          on website pages. In many cases, these technologies rely on cookies to
          function properly, so rejecting cookies may impair their
          functionality.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Third Party Website Cookies
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          When using our Website, you may be directed to other websites ("Third
          Party Sites") for such activities as surveys, for job applications,
          and to view content hosted on those sites such as an embedded video or
          news article. The Third Party Sites may use their own cookies or
          similar technologies. We do not have control over the placement of
          cookies or other technologies by Third Party Sites you visit, even if
          you are directed to them from our Website. The information that you
          share with Third Party Sites will be governed by the specific privacy
          policies, cookie policies and terms of service of the Third Party
          Sites and not by this Cookie Policy.
        </p>
      </div>
      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Updates to this Cookies Policy
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          This Cookies Policy may be updated regularly as and when new Cookies
          are implemented, or existing Cookies removed. If necessary, we will
          draw the changes to your attention when you next visit the Website.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          We may also update this Cookie Policy based upon Cookie best practices
          and legal requirements.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          You are encouraged to check back here in order to keep up-to-date with
          the latest version of this Cookie Policy.
        </p>
      </div>

      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Third-Party Website Cookies
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          While using our website, you may be directed to other websites
          ("Third-Party Sites") for various activities such as surveys, job
          applications, or to access content hosted on those sites, such as
          embedded videos or news articles. These Third-Party Sites may employ
          their own cookies or similar technologies. We do not have control over
          the placement of cookies or other technologies by the Third-Party
          Sites you visit, even if you are redirected to them from our website.
          The information you share with Third-Party Sites will be subject to
          the specific privacy policies, cookie policies, and terms of service
          of those sites, rather than this Cookie Policy.
        </p>
      </div>

      <div className="font-Montserrat text-justify my-[30px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#989898] font-bold font-Montserrat mt-[20px] md:mt-[25px] lg:mt-[30px]">
          Updates to this Cookies Policy
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          This Cookies Policy will be regularly updated to reflect the
          implementation of new cookies or removal of existing ones. If
          significant changes are made, we will bring them to your attention
          upon your next visit to the website.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          Additionally, we may update this Cookie Policy in line with cookie
          best practices and legal requirements.
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#958D8D] font-Montserrat mt-[10px] md:mt-[12px] lg:mt-[15px]">
          We encourage you to revisit this page periodically to stay informed
          about the latest version of this Cookie Policy.
        </p>
      </div> */}
    </div>
    <Footer />
    </>
  );
};

export default CookiePolicy;

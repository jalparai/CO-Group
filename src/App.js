// App.js
import "./App.css";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  Home,
  CashOnDelivery,
  Sourcing,
  CODRemittance,
  CustomClearance,
  WarehousingAndFulfillment,
  Shipping,
  CallCenter,
  CountriesCovered,
  Pricing,
  ContactSales,
  PrivacyPolicy,
  TermsofUse,
  CookiePolicy,
  HelpCenter,
  MainCareers,
  JobDetails,
  AboutUs,
  Blog,
  BlogDetails,
  RessourceCenter,
  Podcasts,
  JobContact,
  Affliation,
  Guides,
  GuideDetails,
} from "./pages";

import {
  ClientsReview,
  ClientsReviewDescreption,
  CoutriesHomeSection,
  DashboardHero,
  Footer,
  FrequentlyAskedQuestions,
  HomeDescreptionHero4,
  Navbar,
} from "./layout/index";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Affliate from "./pages/Affiliate/Affiliate";


function App() {


  return (
    <HelmetProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // List of pages that should show the footer
  const pagesWithFooter = [
    "/contactsales",
    "/privacypolicy",
    "/termsofuse",
    "/cookiepolicy",
    "/helpcenter",
    "/aboutus",
    "/blog",
    "/ressourcecenter",
    "/podcasts",
    "/guides"
  ];

  const showFooter =
    pagesWithFooter.includes(path) || path.startsWith("/job/") || path.startsWith("/blog/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top on route change

  return (
    <div className="App">
    <div className="lg:fixed lg:z-10 lg:w-full">
      {/* Disable pointer events on RedNavbar where it might overlap Navbar toggle */}
    

      {/* Bring Navbar above RedNavbar with high z-index for collapse button interactions */}
      <div className="relative z-50">
        <Navbar />
      </div>
    </div>
      <div className="content mt-[110px] md:mt-0">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="CashOnDelivery" element={<CashOnDelivery />} />
          {/* <Route path="Affiliate" element={<Affliate />} /> */}
          <Route path="Affiliation" element={<Affliate />} />
          <Route path="Sourcing" element={<Sourcing />} />
          <Route path="CODRemittance" element={<CODRemittance />} />
          <Route path="CustomClearance" element={<CustomClearance />} />
          <Route path="WarehousingAndFulfillment" element={<WarehousingAndFulfillment />} />
          <Route path="Shipping" element={<Shipping />} />
          <Route path="CallCenter" element={<CallCenter />} />
          <Route path="CountriesCovered" element={<CountriesCovered />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="ContactSales" element={<ContactSales />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="TermsofUse" element={<TermsofUse />} />
          <Route path="CookiePolicy" element={<CookiePolicy />} />
          <Route path="HelpCenter" element={<HelpCenter />} />
          <Route path="MainCareers" element={<MainCareers />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/job/contact/:id" element={<JobContact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/RessourceCenter" element={<RessourceCenter />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetails />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

      {/* {showFooter ? (
        <div className="footer-background z-[2000]">
          <Footer />
        </div>
      ) : (
        <div className="relative">
          <CoutriesHomeSection />
          <ClientsReviewDescreption />
          <img src={ArrowImg} className="absolute top-[1926px] w-[100%]" alt="Arrow" />
          <ClientsReview />
          <FrequentlyAskedQuestions />
          <div
            className="bg-contain lg:bg-cover bg-no-repeat top-[100px]"
            style={{
              backgroundImage: `url(${BgImg})`,
              backgroundPosition: "0px 150px",
            }}
          >
            <HomeDescreptionHero4 />
            <Footer />
          </div>
        </div>
      )} */}
    </div>
  );
}


export default App;

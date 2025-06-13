import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { blogPosts } from "../../../components/Blog/LatestBlogs/LatestBlogs";
import Bg from "../../../assets/Dashboard/spera14.svg";
import Bg2 from "../../../assets/Dashboard/spera16.svg";
import { Helmet } from "react-helmet-async";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  BlogDetailsJoinUsSection,
  NewsletterSection,
} from "../../../components/Blog";
import { Footer } from "../../../layout";

const GuideDetails = () => {
  // const { slug } = useParams();
  const { state } = useLocation();
  // const blog = blogPosts.find((post) => post.id === parseInt(id));
  const navigate = useNavigate();

  if (!state) return <div>Blog not found</div>;
  console.log(state.blogPosts);
  // Find the current blog index
  const currentIndex = state.blogPosts.findIndex(
    (post) => post._id === state.blog._id
  );

  // Get the previous blog if it exists
  const previousBlog =
    currentIndex > 0 ? state.blogPosts[currentIndex - 1] : null;

  // Get the next two blogPosts
  const nextBlogs = state.blogPosts.slice(currentIndex + 1, currentIndex + 3);

  return (
    <>
      <Helmet>
        <meta name="description" content={state.blog.metaDescription} />
        <meta property="og:image" content="/favicon.png" />
      </Helmet>
      <img src={Bg} className="absolute w-[100%] z-[-10]" />

      <div className="min-h-screen lg:mt-[220px] lg:p-10 p-5 text-white font-Montserrat">
        {/* Job Details Header */}

        <div className="mt-[92px] lg:mt-20 px-4 sm:w-[624px] lg:w-[80%] mx-auto ">
          <div className="mb-6">
            <h3 className="text-[#338AF3] uppercase text-[20px] tracking-[10px] font-semibold">
              {state.blog.subtitle} -{" "}
              <span className="text-[#6F6F6F] font-normal tracking-[0px]">
                {state.blog.readTime} Min Read
              </span>
            </h3>
            <h1 className="lg:text-[50px] text-[26px] font-bold mt-[34px]">
              {state.blog.title}
            </h1>
          </div>

          {/* Job Overview Section */}
          <div className="mt-[38px]">
            <p className="lg:text-[30px] text-[16px] text-[#A5A5A5] leading-[40px] mb-[60px]">
              {state.blog.description}
            </p>
          </div>

          {/* Job Info Section */}
          <div className="w-full flex">
            <div className="w-full flex  justify-between text-[20px] text-[#FFFFFF] ">
              <p className="mr-[40px]">
                <span className="lg:text-[18px] text-[12px] text-[#6F6F6F] font-light mb-2 block">
                  WRITTEN BY
                </span>
                <div className="lg:text-[18px] text-[12px]">{state.blog.creator}</div>
              </p>
              <p className="mr-[40px]">
                <span className="lg:text-[18px] text-[12px] text-[#6F6F6F] font-light mb-2 block">
                  PUBLISHED ON
                </span>
                <div className="lg:text-[18px] text-[12px]">{state.blog.date.split("T")[0]}</div>
              </p>
              <p className="mr-[40px]">
                <span className="lg:text-[18px] text-[12px] text-[#6F6F6F] font-light mb-2 block">
                  CATEGORIE
                </span>
                <div className="lg:text-[18px] text-[12px]">{state.blog.category}</div>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[92px] lg:mt-20 px-4 sm:w-[624px] lg:w-[80%] mx-auto">
          <img
            src={state.blog.blogPhoto}
            alt="blog"
            className="lg:w-[100%] lg:h-[650px] h-[200px] w-full  rounded-xl"
          />
        </div>
        <img src={Bg2} className="absolute w-[100%] z-[-10] " />
        <div
          className="font-Montserrat text-justify my-[30px] mt-[92px] text_content lg:mt-20 px-4 sm:w-[624px] lg:w-[80%] mx-auto"
          style={{ fontSize: "initial", fontWeight: "initial" }}
          dangerouslySetInnerHTML={{ __html: state.blog.content }}
        ></div>
        {/* Job Description Section */}
        {/* <div className="font-Montserrat text-justify my-[30px] mt-[92px] lg:mt-20 px-4 sm:w-[624px] lg:w-[80%] mx-auto">
          <h2 className="lg:text-[35px] text-[22px] text-[#FFFFFF] font-bold">
            Enhance customer support and maximize efficiency.
          </h2>
          <p className="text-[20px] text-[#E9E9E9] font-light mt-[30px]">
            The Company hereby engages COD POWER GROUP to provide, and COD POWER
            GROUP hereby agrees to provide, the services (as defined below) to
            the Company for the duration of the period and renewal period
            described in Article 2. The conduct of the Parties during the term
            and any renewal period shall be subject to the terms and conditions
            of this agreement, including compliance with the various policies of
            COD POWER GROUP.
          </p>
        </div>
        <div className="font-Montserrat text-justify my-[30px] mt-[92px] lg:mt-20 px-4 sm:w-[624px] lg:w-[80%] mx-auto">
          <h2 className="text-[35px] text-[#FFFFFF] font-bold">Terms.</h2>
          <p className="text-[20px] text-[#E9E9E9] font-light mt-[30px]">
            This agreement shall become effective on the effective date and
            shall last for one year, unless terminated earlier in accordance
            with the provisions of this agreement or applicable law ("Term").
            This agreement shall automatically renew for additional successive
            one (1) year periods at the expiration of the term, unless either
            party gives written notice of termination at least thirty (30) days
            prior to the end of the current term, or unless earlier terminated
            in accordance with this agreement or applicable law (each such
            period being called a "Renewal Period"). If the term is renewed for
            one or more renewal periods in accordance with this section, the
            terms and conditions of this agreement, as well as any attachments,
            shall be the same as those in effect immediately prior to renewal.
          </p>
          <div className="font-Montserrat text-justify my-[30px] ">
            <h2 className="text-[35px] text-[#FFFFFF] font-bold">
              COD Power Group Services.
            </h2>
            <p className="text-[20px] text-[#E9E9E9] font-light mt-[30px]">
              This agreement shall become effective on the effective date and
              shall last for one year, unless terminated earlier in accordance
              with the provisions of this agreement or applicable law ("Term").
              This agreement shall automatically renew for additional successive
              one (1) year periods at the expiration of the term, unless either
              party gives written notice of termination at least thirty (30)
              days prior to the end of the current term, or unless earlier
              terminated in accordance with this agreement or applicable law
              (each such period being called a "Renewal Period"). If the term is
              renewed for one or more renewal periods in accordance with this
              section, the terms and conditions of this agreement, as well as
              any attachments, shall be the same as those in effect immediately
              prior to renewal.
            </p>
          </div>
          <div className="font-Montserrat text-justify my-[30px]">
            <h2 className="text-[35px] text-[#FFFFFF] font-bold">Terms.</h2>
            <p className="text-[20px] text-[#E9E9E9] font-light mt-[30px]">
              This agreement shall become effective on the effective date and
              shall last for one year, unless terminated earlier in accordance
              with the provisions of this agreement or applicable law ("Term").
              This agreement shall automatically renew for additional successive
              one (1) year periods at the expiration of the term, unless either
              party gives written notice of termination at least thirty (30)
              days prior to the end of the current term, or unless earlier
              terminated in accordance with this agreement or applicable law
              (each such period being called a "Renewal Period"). If the term is
              renewed for one or more renewal periods in accordance with this
              section, the terms and conditions of this agreement, as well as
              any attachments, shall be the same as those in effect immediately
              prior to renewal.
            </p>
          </div>
          <div className="font-Montserrat text-justify my-[30px] ">
            <h2 className="text-[35px] text-[#FFFFFF] font-bold">
              COD Power Group Services.
            </h2>
            <p className="text-[20px] text-[#E9E9E9] font-light mt-[30px]">
              This agreement shall become effective on the effective date and
              shall last for one year, unless terminated earlier in accordance
              with the provisions of this agreement or applicable law ("Term").
              This agreement shall automatically renew for additional successive
              one (1) year periods at the expiration of the term, unless either
              party gives written notice of termination at least thirty (30)
              days prior to the end of the current term, or unless earlier
              terminated in accordance with this agreement or applicable law
              (each such period being called a "Renewal Period"). If the term is
              renewed for one or more renewal periods in accordance with this
              section, the terms and conditions of this agreement, as well as
              any attachments, shall be the same as those in effect immediately
              prior to renewal.
            </p>
          </div>
        </div> */}
        <div className="mt-[92px] lg:mt-20 px-4 sm:w-[624px] lg:w-[80%] mx-auto">
          <div className="flex justify-end">
            <p className="text-[15px] text-[#6F6F6F] font-Montserrat font-extralight uppercase tracking-[10px]">
              share
            </p>
          </div>
          <div className="flex justify-end space-x-[14.15px] mt-[17px]">
            <FaFacebookF className="bg-gray-800 p-2 rounded-lg w-[34.85px] h-[34.85px]  opacity-15 transition-all duration-700 hover:opacity-50" />
            <FaTwitter className="bg-gray-800 p-2 rounded-lg w-[34.85px] h-[34.85px]  opacity-15 transition-all duration-700 hover:opacity-50" />
            <FaInstagram className="bg-gray-800 p-2 rounded-lg w-[34.85px] h-[34.85px]  opacity-15 transition-all duration-700 hover:opacity-50" />
            <FaLinkedinIn className="bg-gray-800 p-2 rounded-lg w-[34.85px] h-[34.85px]  opacity-15 transition-all duration-700 hover:opacity-50" />
            <FaYoutube className="bg-gray-800 p-2 rounded-lg w-[34.85px] h-[34.85px]  opacity-15 transition-all duration-700 hover:opacity-50" />
          </div>

          <h2 className="lg:text-[50px] text-[22px] lg:mt-0 mt-[90px] font-bold">
            Read Next
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {previousBlog && (
              <div
                key={previousBlog._id}
                className="shadow-lg rounded-lg font-Montserrat overflow-hidden cursor-pointer"
                onClick={() =>
                  navigate(`/blog/${previousBlog._id}`, {
                    state: { blog: previousBlog, blogPosts: state.blogPosts },
                  })
                }
              >
                <img
                  className="lg:h-[289px] h-[200px]"
                  src={previousBlog.blogPhoto}
                  alt={previousBlog.category}
                />
                <div className="p-4">
                  <div className="text-[20px] text-[#6F6F6F] font-extralight">
                    <span className="font-semibold tracking-[5px] text-[#338AF3]">
                      {previousBlog.category}
                    </span>{" "}
                    - {previousBlog.readTime} min read
                  </div>
                  <h3 className="text-[25px] font-bold my-[34px]">
                    {previousBlog.title}
                  </h3>
                  <p className="text-[20px] font-light text-[#A5A5A5] mb-[34px]">
                    {previousBlog.description}
                  </p>
                  <div className="text-[15px] font-light text-[#6F6F6F]">
                    {previousBlog.date}
                  </div>
                </div>
              </div>
            )}
            {nextBlogs.map((nextBlog) => (
              <div
                key={nextBlog.id}
                className="shadow-lg rounded-lg font-Montserrat overflow-hidden cursor-pointer"
                onClick={() =>
                  navigate(`/blog/${nextBlog._id}`, {
                    state: { blog: nextBlog, blogPosts: state.blogPosts },
                  })
                }
              >
                <img
                  className="lg:h-[289px] h-[200px]"
                  src={nextBlog.blogPhoto}
                  alt={nextBlog.category}
                />
                <div className="p-4">
                  <div className="text-[20px] text-[#6F6F6F] font-extralight">
                    <span className="font-semibold tracking-[5px] text-[#338AF3]">
                      {nextBlog.category}
                    </span>{" "}
                    - {nextBlog.readTime} min read
                  </div>
                  <h3 className="text-[25px] font-bold my-[34px]">
                    {nextBlog.title}
                  </h3>
                  <p className="text-[20px] font-light text-[#A5A5A5] mb-[34px]">
                    {nextBlog.description}
                  </p>
                  <div className="text-[15px] font-light text-[#6F6F6F]">
                    {nextBlog.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <BlogDetailsJoinUsSection />
        </div>
        <div className="relative min-h-[270px] flex justify-center  px-4 sm:w-[624px] lg:w-[100%] mx-auto">
          <div className=" Lg:absolute lg:-top-[260px]">
            <NewsletterSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuideDetails;

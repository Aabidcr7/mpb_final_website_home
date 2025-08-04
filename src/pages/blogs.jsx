import React from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useNavigate } from 'react-router-dom';

const FundingResources = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "A Step-by-Step Guide to Raising Venture Capital",
      description: "Navigate the VC Funding Journey with Confidence and Precision",
      image: "/images/stepby.png",
      author: "Aabid Ibrahim S",
      authorImage: "/images/img_images.png",
      publishedDate: "Jun 4, 2025",
      route: "/founders-insights/a-step-by-step-guide-to-raising-venture-capital"
    },
    {
      id: 2,
      title: "The Right Way to Raise Funds for Your Startup",
      description: "Proven Approaches to Secure Startup Funding with Confidence and Clarity",
      image: "/images/right.png",
      author: "Aabid Ibrahim S",
      authorImage: "/images/img_images.png",
      publishedDate: "May 28, 2025",
      route: "/founders-insights/the-right-way-to-raise-funds-for-your-startup"
    },
    {
      id: 3,
      title: "How to Successfully Raise a Seed Round for Your Startup",
      description: "Essential Strategies and Insights to Secure Your First Round of Startup Funding",
      image: "/images/success.png",
      author: "Aabid Ibrahim S",
      authorImage: "/images/img_images.png",
      publishedDate: "May 21, 2025",
      route: "/founders-insights/how-to-successfully-raise-a-seed-round-for-your-startup"
    },
    {
      id: 4,
      title: "How to Value a Startup: 9 Proven Methods",
      description: "Accurately Determine What Your Startup Is Worth with These Trusted Techniques",
      image: "/images/value.png",
      author: "Aabid Ibrahim S",
      authorImage: "/images/img_images.png",
      publishedDate: "May 14, 2025",
      route: "/founders-insights/how-to-value-a-startup-9-proven-methods"
    },
    {
      id: 5,
      title: "A Step-by-Step Guide to Successful Fundraising",
      description: "Unlock the Secrets to Attracting Investors and Growing Your Venture",
      image: "/images/fund.png",
      author: "Aabid Ibrahim S",
      authorImage: "/images/img_images.png",
      publishedDate: "May 7, 2025",
      route: "/founders-insights/a-step-by-step-guide-to-successful-fundraising"
    },
    {
      id: 6,
      title: "How VCs and Founders see valuation differently",
      description: "Unpacking the mindset gap: What drives investor decisions vs. founder expectations in startup valuation",
      image: "/images/vd.png",
      author: "Aabid Ibrahim S",
      authorImage: "/images/img_images.png",
      publishedDate: "Aug 4, 2025",
      route: "/founders-insights/how-vcs-and-founders-see-valuation-differently"
    }
  ];

  const featuredPost = {
    id: 7,
    title: "The Economics of Term Sheets",
    description: "Decoding investor clauses, founder equity, and the financial implications behind every term.",
    image: "/images/term.png",
    author: "Aabid Ibrahim S",
    authorImage: "/images/img_images_gray_800.png",
    publishedDate: "Apr 30, 2025",
    route: "/founders-insights/the-economics-of-term-sheets"
  };

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    
    <div className="w-full  min-h-screen">
       <Header />
      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[50px] sm:pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="flex flex-col items-center justify-center gap-[30px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px]">
            {/* Blog Badge and Title Section */}
            <div className="flex flex-col items-center justify-center w-full max-w-[800px] px-4 sm:px-6 md:px-8">
              <div className="flex flex-col items-center justify-start gap-2">
                {/* Blog Badge */}
                <div className="bg-[#101010] text-white px-[12px] sm:px-[15px] md:px-[18px] py-[1px] sm:py-[1.5px] md:py-[2px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px]">
                  <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal font-['Poppins'] leading-[20px] sm:leading-[22px] md:leading-[24px]">
                    Blogs
                  </span>
                </div>
                
                {/* Main Title */}
                <div className="flex flex-col items-center justify-start gap-[-15px] sm:gap-[-20px] md:gap-[-30px] mt-2">
                  <h1 className="text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-medium font-['Poppins'] leading-[42px] sm:leading-[52px] md:leading-[60px] lg:leading-[68px] text-center text-[#101010]"   style={{ letterSpacing: '-2px', fontFamily: 'Poppins' }}>
                    Explore founder-focused
                  </h1>
                  <h1 className="text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-medium font-['Poppins'] leading-[42px] sm:leading-[52px] md:leading-[60px] lg:leading-[68px] text-center text-[#101010]">
                    resources for funding success
                  </h1>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal font-['Poppins'] leading-[24px] sm:leading-[27px] md:leading-[30px] text-center text-[#070707] mt-4 sm:mt-6 md:mt-8">
                A collection of top notch blog posts to help you convert.
              </p>
            </div>

            {/* Blog Grid Section */}
            <div className="w-full max-w-[1064px] flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
              {/* Regular Blog Posts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] md:gap-[22px]">
                {blogPosts?.map((post) => (
                  <div
                    key={post?.id}
                    onClick={() => handleCardClick(post?.route)}
                    className="bg-[linear-gradient(180deg,#fff7ec_0%,_#fff7eb66_100%)] border border-[#b8b8b833] rounded-[12px] p-[16px] sm:p-[20px] md:p-[22px] flex flex-col gap-[20px] sm:gap-[24px] md:gap-[28px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#b8b8b866]"
                  >
                    {/* Blog Image */}
                    <img
                      src={post?.image}
                      alt={post?.title}
                      className="w-full h-[180px] sm:h-[200px] md:h-[224px] object-cover rounded-[6px]"
                    />
                    
                    {/* Blog Content */}
                    <div className="flex flex-col gap-[24px] sm:gap-[28px] md:gap-[30px]">
                      {/* Title and Description */}
                      <div className="flex flex-col gap-[8px] sm:gap-[9px] md:gap-[10px]">
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium font-['Poppins'] leading-[26px] sm:leading-[28px] md:leading-[31px] text-left text-[#101010]">
                          {post?.title}
                        </h3>
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] font-normal font-['Poppins'] leading-[17px] sm:leading-[18px] md:leading-[19px] text-left text-[#101010]">
                          {post?.description}
                        </p>
                      </div>
                      
                      {/* Author and Date Row */}
                      <div className="flex flex-row justify-between items-center w-full">
                        {/* Author Section */}
                        <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px]">
                          <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal font-['Poppins'] leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-[#101010b2]">
                            Written by
                          </span>
                          <div className="flex flex-row items-center gap-[8px] sm:gap-[10px] md:gap-[12px]">
                            <img
                              src={post?.authorImage}
                              alt={post?.author}
                              className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px] object-cover"
                            />
                            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-['Poppins'] leading-[18px] sm:leading-[19px] md:leading-[21px] text-left text-[#101010]">
                              {post?.author}
                            </span>
                          </div>
                        </div>
                        
                        {/* Published Date Section */}
                        <div className="flex flex-col gap-[6px] sm:gap-[8px] md:gap-[10px] items-end">
                          <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal font-['Poppins'] leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-[#101010b2]">
                            Published on
                          </span>
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-['Poppins'] leading-[18px] sm:leading-[19px] md:leading-[21px] text-right text-[#101010]">
                            {post?.publishedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Blog Post */}
              <div 
                onClick={() => handleCardClick(featuredPost?.route)}
                className="bg-[linear-gradient(180deg,#fff7ec_0%,_#fff7eb66_100%)] border border-[#b8b8b833] rounded-[12px] p-[20px] sm:p-[22px] md:p-[24px] flex flex-col gap-[20px] sm:gap-[24px] md:gap-[28px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#b8b8b866]"
              >
                {/* Featured Image */}
                <img
                  src={featuredPost?.image}
                  alt={featuredPost?.title}
                  className="w-full h-[300px] sm:h-[400px] md:h-[486px] object-cover rounded-[6px]"
                />
                
                {/* Featured Content */}
                <div className="flex flex-col gap-[24px] sm:gap-[28px] md:gap-[30px]">
                  {/* Title and Description */}
                  <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px]">
                    <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium font-['Poppins'] leading-[30px] sm:leading-[33px] md:leading-[36px] text-left text-[#101010]">
                      {featuredPost?.title}
                    </h2>
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] font-normal font-['Poppins'] leading-[17px] sm:leading-[18px] md:leading-[19px] text-left text-[#101010]">
                      {featuredPost?.description}
                    </p>
                  </div>
                  
                  {/* Author and Date Row */}
                  <div className="flex flex-row justify-between items-center w-full">
                    {/* Author Section */}
                    <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px]">
                      <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal font-['Poppins'] leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-[#101010b2]">
                        Written by
                      </span>
                      <div className="flex flex-row items-center gap-[8px] sm:gap-[10px] md:gap-[12px]">
                        <img
                          src={featuredPost?.authorImage}
                          alt={featuredPost?.author}
                          className="w-[20px] sm:w-[22px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[22px] object-cover"
                        />
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-['Poppins'] leading-[18px] sm:leading-[19px] md:leading-[21px] text-left text-[#101010]">
                          {featuredPost?.author}
                        </span>
                      </div>
                    </div>
                    
                    {/* Published Date Section */}
                    <div className="flex flex-col gap-[8px] sm:gap-[9px] md:gap-[10px] items-end">
                      <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal font-['Poppins'] leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-[#101010b2]">
                        Published on
                      </span>
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-['Poppins'] leading-[18px] sm:leading-[19px] md:leading-[21px] text-right text-[#101010]">
                        {featuredPost?.publishedDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <br />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FundingResources;
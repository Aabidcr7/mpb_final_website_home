
import React from "react";
import FundingCard from "./FundingCard";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export const FundingPlatform = () => {
  const fundingOptions = [
    {
      title: "Debt Fund",
      description: "Access capital without giving up equity. MyProBuddy helps you secure debt funding with expert guidance on loans, terms, and lender negotiations.",
      iconSrc: "/images/debt.png",
    },
    {
      title: "Grants",
      description: "Unlock non-dilutive capital through grants for growth. MyProBuddy simplifies access to government, CSR, and private opportunities.",
      iconSrc: "/images/grant.png",
    },
    {
      title: "Equity Fund",
      description: "Raise equity capital and turn investors into long-term partners. MyProBuddy helps you craft strong pitches and access 550K+ VCs, angels, and HNIs.",
      iconSrc: "/images/equity.png",
    },
  ];

  const handleSelect = (type) => {
    if (type === "Debt Fund") {
      window.open("https://debt.myprobuddy.com", "_blank");
    } else if (type === "Grants") {
      window.open("https://grants.myprobuddy.com", "_blank");
    } else if (type === "Equity Fund") {
      window.open("https://equity.myprobuddy.com", "_blank");
    }
  };

  return (
    <>
      <Header />
      <div 
        className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden"
        style={{ background: "var(--gradient-background)" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-funding-purple/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-funding-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-funding-red/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-6 animate-fade-in">
            <h2
              className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6"
              style={{ letterSpacing: '-2px', fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Explore the Right</span>{' '}
              <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Funding</span>{' '}
              <span className="text-[#fc5109]">Path</span>
              <br />
              <span className="text-primary-purple-2" style={{ color: '#fc5109' }}>for Your Business</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mt-8 leading-relaxed" style={{ letterSpacing: '-1px', fontFamily: 'Poppins, sans-serif' }}>
              From equity to debt to grants , discover tailored capital solutions to accelerate your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {fundingOptions.map((option, index) => (
              <FundingCard
                key={index}
                title={option.title}
                description={option.description}
                iconSrc={option.iconSrc}
                onSelect={() => handleSelect(option.title)}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FundingPlatform;

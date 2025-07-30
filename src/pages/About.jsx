// Vision and Mission SVGs
const VisionIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="14" fill="#5d248f" />
    <path d="M14 8c-4 0-7 3.5-7 6s3 6 7 6 7-3.5 7-6-3-6-7-6zm0 9.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" fill="#fff"/>
    <circle cx="14" cy="14" r="2" fill="#5d248f" />
  </svg>
);
const MissionIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="14" fill="#5d248f" />
    <path d="M14 8v8l5 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
import React, { useState, useEffect } from 'react';

// SVG ICONS
const InvestorReadyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#5d248f" />
    <path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const AccessCapitalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#5d248f" />
    <path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const SupportInfraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="16" rx="4" fill="#5d248f" />
    <circle cx="16" cy="16" r="3" fill="#fff" />
  </svg>
);
const RegulatoryEdgeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#5d248f" />
    <path d="M10 22V12l6-4 6 4v10" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
    <rect x="13" y="16" width="6" height="6" rx="1" fill="#fff" />
  </svg>
);
import Button from '@/components/ui/Button';
import ChipView from '@/components/ui/ChipView';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Counter = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let frame;
    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return count;
};

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const chipItems = [
    'Investor-Ready',
    'Mentorship',
    'Network Access',
    'Valuation Support',
    'Credibility Boost',
  ];

  const impactStats = [
    {
      number: '250',
      suffix: 'CR',
      plus: '+',
      label: 'Fund Raised',
      image: '/images/img_jkvlzyitdnjgyuz.png',
    },
    {
      number: '215',
      suffix: '',
      plus: '+',
      label: 'Startups Funded',
      image: '/images/img_jkvlzyitdnjgyuz.png',
    },
    {
      number: '500',
      suffix: '',
      plus: '+',
      label: 'Industry Mentors',
      image: '/images/img_jkvlzyitdnjgyuz.png',
    },
    {
      number: '7',
      suffix: '',
      plus: '+',
      label: 'Years of experience',
      image: '/images/img_jkvlzyitdnjgyuz.png',
    },
  ];

  const services = [
    {
      icon: <InvestorReadyIcon />, // inline SVG for Investor-Ready Advisory
      title: 'Investor-Ready Advisory',
      description:
        'From refining your business plan to assessing your valuation, we ensure you are presenting your startup in the best possible light.',
    },
    {
      icon: <AccessCapitalIcon />, // inline SVG for Access to Capital
      title: 'Access to Capital',
      description:
        'Connect with over 558,000+ investors—including VCs, angels, HNIs, CSR funds, and impact investors.',
    },
    {
      icon: <SupportInfraIcon />, // inline SVG for Smart Support Infrastructure
      title: 'Smart Support Infrastructure',
      description:
        'We provide resources like Virtual Data Rooms, mock pitches, and credibility-building strategies to accelerate your fundraising journey.',
    },
    {
      icon: <RegulatoryEdgeIcon />, // inline SVG for Regulatory Edge
      title: 'Regulatory Edge',
      description:
        'Benefit from guidance on DPIIT registration, Angel Tax exemptions, and other startup-friendly policies.',
    },
  ];

  const fundingTypes = [
    { icon: '/images/img_icon_wrap.png', label: 'Debt' },
    { icon: '/images/img_icon_wrap.png', label: 'Grants' },
    { icon: '/images/img_icon_wrap.png', label: 'Equity' },
  ];

  return (
    <div
      className="flex flex-col justify-start items-center w-full bg-global-3 overflow-y-auto"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-global-3" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[140px]">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center w-full">
            {/* Hero Content */}
            <div className="flex flex-col justify-center items-center w-full max-w-[700px] text-center">
              <h1 className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-poppins font-medium leading-tight mb-4 sm:mb-6" style={{ letterSpacing: '-1px', fontFamily: 'Poppins' }}>
                <span className="block text-global-4" style={{ color: '#5d248f', fontFamily: 'Poppins' }}>Empowering Entrepreneurs</span>
                <span className="block text-[#fc5109]">to Raise Funds Like a Pro</span>
              </h1>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-relaxed text-global-6 max-w-[500px]">
                At MyProBuddy, we turn visionary founders into investable ventures through expert
                guidance and strategic support.
              </p>
            </div>

            {/* Funding Types */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full">
              {fundingTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    src={type.icon}
                    alt={`${type.label} icon`}
                    className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] rounded-lg"
                  />
                  <span className="text-[12px] sm:text-[14px] font-urbanist font-medium text-global-1">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section
        className="w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-[1200px] mx-auto">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              <h2 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-poppins font-medium leading-tight" style={{ letterSpacing: '-2px', fontFamily: 'Poppins' }}>
                <span className="block text-global-4" style={{ color: '#5d248f', fontFamily: 'Poppins' }} >What Sets Us</span>
                <span className="block text-[#fc5109]">Apart</span>
              </h2>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-global-6 max-w-[500px]">
                We turn startups into compelling investment opportunities through market insight,
                investor access, and hands-on support.
              </p>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <ChipView items={chipItems} />
              </div>
            </div>

            {/* Right Content - Services */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] flex items-center justify-center rounded-full bg-white shadow-md"
                    >
                      <span className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] flex items-center justify-center">
                        {service.icon}
                      </span>
                    </span>
                    <h3 className="text-[18px] sm:text-[22px] font-poppins font-medium text-global-1">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[14px] sm:text-[16px] text-global-6">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="max-w-[1000px] mx-auto space-y-6">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-poppins font-medium leading-tight"style={{ letterSpacing: '-2px', fontFamily: 'Poppins' }}>
                <span className="block text-global-4" style={{ color: '#5d248f', fontFamily: 'Poppins' }}>Our Impact at a</span>
                <span className="block text-[#fc5109]">Glance</span>
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-global-6 max-w-[600px] mx-auto">
                We fuel startup growth with expert leadership and strategic support, driving success
                through experience and innovation.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="bg-white border rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {impactStats.map((stat, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay={index * 120}
                  >
                    <img
                      src={stat.image}
                      alt={`${stat.label} background`}
                      className="w-full h-[120px] sm:h-[160px] md:h-[180px] object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[28px] sm:text-[36px] md:text-[44px] font-inter font-medium text-global-2">
                          <Counter end={parseInt(stat.number)} />
                        </span>
                        {stat.suffix && (
                          <span className="text-[18px] sm:text-[24px] font-inter font-medium text-global-2">
                            {stat.suffix}
                          </span>
                        )}
                        <span className="text-[24px] sm:text-[32px] md:text-[40px] font-inter font-medium text-global-2">
                          {stat.plus}
                        </span>
                      </div>
                      <span className="text-[12px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full bg-global-2 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="space-y-8 sm:space-y-10 md:space-y-12 max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-poppins font-medium leading-tight" style={{ letterSpacing: '-2px', fontFamily: 'Poppins' }}>
                <span className="block text-global-5" style={{ color: '#5d248f', fontFamily: 'Poppins' }}>Fueling Startup Success with</span>
                <span className="block text-[#fc5109]">Purpose</span>
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-global-7 max-w-[600px] mx-auto">
                At MyProBuddy, we empower founders to become investment-ready through mentorship,
                strategy, and investor access.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Vision Card */}
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="flex flex-col items-start gap-2">
                  <span className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] flex items-center justify-center rounded-full bg-white shadow-md mb-2">
                    <span className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] flex items-center justify-center">
                      <VisionIcon />
                    </span>
                  </span>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-urbanist font-semibold">
                    Our Vision
                  </h3>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] text-global-6">
                    To democratize access to startup funding across India by making every founder
                    truly investment-ready.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="flex flex-col items-start gap-2">
                  <span className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] flex items-center justify-center rounded-full bg-white shadow-md mb-2">
                    <span className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] flex items-center justify-center">
                      <MissionIcon />
                    </span>
                  </span>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-urbanist font-semibold">
                    Our Mission
                  </h3>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] text-global-6">
                    To support entrepreneurs with mentorship, strategic guidance, and investor
                    connections that lead to successful fundraises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="max-w-[1000px] mx-auto">
            <div className="bg-[#5d248f] rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-poppins font-medium text-white leading-tight" style={{ letterSpacing: '-2px', fontFamily: 'Poppins' }}>
                  we do not just believe in your <span className="text-[#ef3e25]">vision</span>
                </h2>
                <h2 className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-poppins font-medium text-white leading-tight" style={{ letterSpacing: '-2px', fontFamily: 'Poppins' }}>
                  we help you prove it to the <span className="text-[#ef3e25]">world</span>
                </h2>

                <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white">
                  Let us raise funds like a pro.
                </p>
              </div>

              {/* CTA Button */}
              <a href="/get-started">
                <Button
                  variant="primary"
                  size="medium"
                  rightIcon={{
                    src: '/images/img_primary.svg',
                    width: 22,
                    height: 24,
                  }}
                  className="mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-[14px] sm:text-[16px] md:text-[18px] text-white bg-[#ef3e25] hover:bg-[#ef3e25] focus:bg-[#ef3e25] rounded-xl hover:scale-105 transition-transform"
                  style={{ background: '#ef3e25' }}
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

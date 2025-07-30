import React from 'react';
import Button from '../../../components/ui/Button'; // Import the Button component

const MarqueeLogos = ({ logos, className = '' }) => {
  // Create an extended array with multiple repetitions to ensure smooth looping
  const extendedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: inline-flex;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="w-full overflow-hidden">
        <div className="marquee-container">
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 sm:px-6 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain max-h-[100px] max-w-[200px] ${logo.className || ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecognitionSection = () => {
  const firstSectionLogos = [
    {
      src: '/images/20.png',
      alt: 'IIC Logo',
      className: 'w-[100px] sm:w-[160px] h-[60px] sm:h-[100px] object-contain', // unified size
    },
    {
      src: '/images/21.png',
      alt: 'Ministry Logo',
      className: 'w-[100px] sm:w-[142px] h-[60px] sm:h-[100px] object-contain',
    },
    {
      src: '/images/22.png',
      alt: 'MOE Logo',
      className: 'w-[100px] sm:w-[140px] h-[60px] sm:h-[100px] object-contain',
    },
    {
      src: '/images/23.png',
      alt: 'EDII Logo',
      className: 'w-[100px] sm:w-[166px] h-[60px] sm:h-[100px] object-contain',
    },
    {
      src: '/images/24.png',
      alt: 'AICTE Logo',
      className: 'w-[100px] sm:w-[162px] h-[60px] sm:h-[100px] object-contain',
    },
    {
      src: '/images/25.png',
      alt: 'Additional Logo',
      className: 'w-[100px] sm:w-[142px] h-[60px] sm:h-[100px] object-contain',
    },
    {
      src: '/images/26.png',
      alt: 'Additional Logo',
      className: 'w-[100px] sm:w-[142px] h-[60px] sm:h-[100px] object-contain',
    },
    {
      src: '/images/50.png',
      alt: 'Additional Logo',
      className: 'w-[100px] sm:w-[142px] h-[60px] sm:h-[100px] object-contain',
    },
  ];

  const recognitionLogos = [
    {
      src: '/images/img_item_internet.png',
      alt: 'Internet Recognition',
      className: 'w-[150px] sm:w-[198px] h-[30px] sm:h-10 object-contain',
    },
    {
      src: '/images/img_item_your_story.png',
      alt: 'Your Story Recognition',
      className: 'w-[80px] sm:w-[100px] h-[30px] sm:h-[38px] object-contain',
    },
    {
      src: '/images/img_item_passion_vista.png',
      alt: 'Passion Vista Recognition',
      className: 'w-[150px] sm:w-[200px] h-[50px] sm:h-[68px] object-contain',
    },
    {
      src: '/images/30.png',
      alt: 'Innsurge Recognition',
      className: 'w-[150px] sm:w-[202px] h-[60px] sm:h-[80px] object-contain',
    },
    {
      src: '/images/29.png',
      alt: 'Indian Achievers Recognition',
      className: 'w-[80px] sm:w-[100px] h-[70px] sm:h-[96px] object-contain',
    },
    {
      src: '/images/27.png',
      alt: 'Forbes India Recognition',
      className: 'w-[90px] sm:w-[120px] h-[40px] sm:h-[52px] object-contain',
    },
  ];

  const partnerLogos = [
    {
      src: '/images/img_item_rook_u.png',
      alt: 'Rook U Partner',
      className:
        'w-[80px] sm:w-[100px] lg:w-[138px] h-[50px] sm:h-[70px] lg:h-[106px] object-contain',
    },
    {
      src: '/images/img_item_realm_rook.png',
      alt: 'Realm Rook Partner',
      className:
        'w-[100px] sm:w-[140px] lg:w-[210px] h-[100px] sm:h-[150px] lg:h-[190px] object-contain',
    },
    {
      src: '/images/img_item_prudent_capital.png',
      alt: 'Prudent Capital Partner',
      className:
        'w-[120px] sm:w-[160px] lg:w-[258px] h-[50px] sm:h-[65px] lg:h-[106px] object-contain',
    },
    {
      src: '/images/img_item_parminder.png',
      alt: 'Parminder Partner',
      className:
        'w-[70px] sm:w-[85px] lg:w-[108px] h-[80px] sm:h-[95px] lg:h-[106px] object-contain',
    },
    {
      src: '/images/35.png',
      alt: 'Partner Logo',
      className:
        'w-[70px] sm:w-[85px] lg:w-[108px] h-[80px] sm:h-[95px] lg:h-[106px] object-contain',
    },
    {
      src: '/images/36.jpg',
      alt: 'Partner Logo',
      className:
        'w-[70px] sm:w-[85px] lg:w-[108px] h-[80px] sm:h-[95px] lg:h-[106px] object-contain',
    },
    {
      src: '/images/37.png',
      alt: 'Partner Logo',
      className:
        'w-[150px] sm:w-[190px] lg:w-[290px] h-[60px] sm:h-[80px] lg:h-[90px] object-contain',
    },
    {
      src: '/images/38.png',
      alt: 'Partner Logo',
      className:
        'w-[90px] sm:w-[110px] lg:w-[150px] h-[70px] sm:h-[90px] lg:h-[106px] object-contain',
    },
  ];

  return (
    <div>
      {/* First Logo Section with Marquee */}
      <section className="w-full bg-main overflow-hidden">
        <div
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex flex-row justify-center items-center py-16 lg:py-[90px]">
            <MarqueeLogos logos={firstSectionLogos} />
          </div>
        </div>
      </section>

      {/* Recognition Logos Section with Marquee */}
      <section className="w-full bg-main overflow-hidden">
        <div
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex flex-col gap-12 lg:gap-14 justify-start items-center py-16 lg:py-20">
            <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-center px-4 lg:px-14">
              <h2
                className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6"
                style={{
                  letterSpacing: '-2px',
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center',
                }}
              >
                <span
                  className="text-primary-purple-2"
                  style={{ color: '#5d248f', fontFamily: 'Poppins, sans-serif' }}
                >
                  Recognized for{' '}
                </span>
                <span className="text-[#fc5109]">Redefining</span>
                <span className="text-[#f46d18]" style={{ color: '#5d248f' }}>
                  {' '}
                  Possiblities
                </span>
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl font-poppins font-medium leading-[22px] sm:leading-[30px] text-center text-primary mt-1 sm:mt-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our awards reflect the trust and transformation we deliver to founders,
                institutions, and incubators alike.
              </p>
            </div>

            <MarqueeLogos logos={recognitionLogos} />
          </div>
        </div>
      </section>

      <section className="w-full bg-main">
        <div
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex flex-row justify-start items-center py-16 lg:py-20">
            <div className="flex flex-row justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center w-full bg-primary-purple-2 border border-solid border-[#e7e7e7] rounded-[32px] p-12 lg:p-20">
                <h2
                  className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-poppins font-medium leading-[30px] sm:leading-[42px] md:leading-[51px] lg:leading-[60px] text-center text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Equity Fundraising Made Simple, Smart & Aligned
                </h2>
                <div className="flex flex-col gap-1 lg:gap-1 justify-start items-center mt-2 lg:mt-[10px]">
                  <p
                    className="block lg:hidden text-sm font-inter font-normal leading-[20px] text-center text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Experience AI powered Investor Matchmaking and automated outreach for seamless
                    meetings with investors.
                  </p>
                  <p
                    className="hidden lg:block text-sm lg:text-base font-inter font-normal leading-[20px] text-center text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Experience AI powered Investor Matchmaking and automated outreach for
                  </p>
                  <p
                    className="hidden lg:block text-sm lg:text-base font-inter font-normal leading-[20px] text-center text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    seamless meetings with investors.
                  </p>
                </div>{' '}
                <a href="https://equity.myprobuddy.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="orange"
                    size="large"
                    className="text-sm lg:text-base font-poppins font-medium leading-[20px] text-center text-white bg-[#ff5200] hover:bg-[#fc520c] px-6 lg:px-[34px] py-3 lg:py-3 rounded-[22px] mt-5 lg:mt-6 transition-all duration-200 hover:opacity-90"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Start Your Fundraising Journey Today
                  </Button>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section with Marquee */}
      <section className="w-full bg-main overflow-hidden">
        <div
          className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-14"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex flex-col justify-start items-center pt-8 sm:pt-12 lg:pt-20 pb-4 sm:pb-6 lg:pb-8">
            <div className="flex flex-row justify-center items-center w-full">
              <div className="flex flex-col gap-2 sm:gap-1 lg:gap-[6px] justify-start items-center px-2 sm:px-4 lg:px-14 w-full">
                <h2
                  className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6"
                  style={{
                    letterSpacing: '-2px',
                    fontFamily: 'Poppins, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
                    Get Expert{' '}
                  </span>
                  <span className="text-[#fc5109]">Mentorship</span>
                  <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
                    {' '}
                    with our trusted{' '}
                  </span>
                  <span className="text-[#fc5109]">partners</span>
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl font-poppins font-medium leading-[22px] sm:leading-[30px] text-center text-primary mt-1 sm:mt-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  While you build your product, we make sure you are investible and ready.
                </p>

                <div className="w-full mt-4">
                  <MarqueeLogos logos={partnerLogos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section added after recognition logos */}

      {/* Expert Mentorship Section */}
    </div>
  );
};

export default RecognitionSection;

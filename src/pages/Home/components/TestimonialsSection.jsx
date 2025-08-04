import React from 'react';
import RatingBar from '../../../components/ui/RatingBar';

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-main" data-aos="fade-up" data-aos-delay="0">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[52px] justify-start items-center py-12 md:py-16 lg:py-[138px]">
          {/* Section Header */}
          <h2
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium leading-tight mb-6"
            style={{ letterSpacing: '-1px', fontFamily: 'Poppins' }}
          >
            <span style={{ color: '#5d248f', fontFamily: 'Poppins' }}>What </span>
            <span style={{ color: '#fc5109', fontFamily: 'Poppins' }}>Entrepreneurs</span>
            <span style={{ color: '#5d248f', fontFamily: 'Poppins' }}> Say</span>
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 lg:gap-[18px] w-full">
              {/* Card 1 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_ubwbbtb.png"
                    alt="Surender Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl text-[#292929]" style={{ fontFamily: 'Poppins' }}>
                      Surender
                    </h4>
                    <p className="text-sm text-[#636363]" style={{ fontFamily: 'Poppins' }}>Hawky. ai</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#636363] mb-4" style={{ fontFamily: 'Poppins' }}>
                  Raising funds is never easy, but with MyProBuddy, the process became streamlined
                  and outcome-driven. Thanks to their focused approach and strong investor network,
                  we successfully closed our equity round and are now positioned for accelerated
                  growth at Hawky.ai.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>

              {/* Card 2 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_w5ozrsg.png"
                    alt="Arun Kumar Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl text-[#292929]" style={{ fontFamily: 'Poppins' }}>
                      Arun Kumar
                    </h4>
                    <p className="text-sm text-[#636363]" style={{ fontFamily: 'Poppins' }}>Founder, EV91</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#636363] mb-4" style={{ fontFamily: 'Poppins' }}>
                  Navigating the regulatory landscape and attracting investors in the electric
                  vehicle industry is challenging. MyProBuddy&apos;s in-depth knowledge of the
                  sector and their ability to connect us with strategic investors were crucial to
                  our success.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 lg:gap-[18px] w-full">
              {/* Card 3 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_2hldso2.png"
                    alt="Emin Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl text-[#292929]" style={{ fontFamily: 'Poppins' }}>
                      Emin
                    </h4>
                    <p className="text-sm text-[#636363]" style={{ fontFamily: 'Poppins' }}>Founder, Job Corp</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#636363] mb-4" style={{ fontFamily: 'Poppins' }}>
                  MyProBuddy did not just help us raise funds  they helped us think bigger. What I
                  appreciated most was their speed, precision, and ability to simplify the complex.
                  With their guidance, we secured the capital we needed and walked away with a
                  stronger business foundation.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>

              {/* Card 4 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_yc550ga.png"
                    alt="Praveen Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl text-[#292929]" style={{ fontFamily: 'Poppins' }}>
                      Praveen
                    </h4>
                    <p className="text-sm text-[#636363]" style={{ fontFamily: 'Poppins' }}>Phosphene Ai</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#636363] mb-4" style={{ fontFamily: 'Poppins' }}>
                  MyProBuddy&apos;s expertise in the AI and technology sector was instrumental in
                  securing our funding round. Their guidance throughout the process, from investor
                  relations to deal negotiations, was invaluable.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 lg:gap-[18px] w-full">
              {/* Card 5 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_etu0ian.png"
                    alt="Ashwin Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl text-[#292929]" style={{ fontFamily: 'Poppins' }}>
                      Ashwin
                    </h4>
                    <p className="text-sm text-[#636363]" style={{ fontFamily: 'Poppins' }}>Co-Founder, ICM</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#636363] mb-4" style={{ fontFamily: 'Poppins' }}>
                  "We struggled to demonstrate our scalability. My Pro Buddy helped us
                  highlight our traction in a specific region and our plan for expansion, securing a
                  seed round from a VC firm focused on emerging markets. Their support truly changed
                  everything. We&apos;re grateful for their guidance. Excited for what lies
                  ahead."
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>

              {/* Card 6 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_o94obkq.png"
                    alt="Vlad Vtoc Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl text-[#292929]" style={{ fontFamily: 'Poppins' }}>
                      Vlad Vtoc
                    </h4>
                    <p className="text-sm text-[#636363]" style={{ fontFamily: 'Poppins' }}>
                      Founder, MAIA Biotech
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#636363] mb-4" style={{ fontFamily: 'Poppins' }}>
                  The services and team are quick, professional, and effective. We were able to
                  generate good investor leads through MPB. I am very satisfied with the customer
                  service. Strongly recommend their services to startups looking to raise.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

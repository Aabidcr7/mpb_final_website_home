import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const Foundersseevaluation = () => {
  return (
    <div className="w-full bg-secondary" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Header />
      {/* Main Content Container */}
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="pt-[10px] sm:pt-[18px] md:pt-[24px] pb-[25px] sm:pb-[37px] md:pb-[50px] px-4 sm:px-6 md:px-8">
          <div className="mt-[0px] sm:mt-[0px] md:mt-[0px] mx-auto max-w-[520px] sm:max-w-[720px] md:max-w-[920px]">
            {/* Back Button */}
           <button className="text-[16px] font-medium leading-[24px] text-left text-black mb-[35px] sm:mb-[50px] md:mb-[69px] hover:text-gray-600 transition-colors">
  <a href="/founders-insights">&lt;Back</a>
</button>


            {/* Title Section */}
            <div className="mx-auto max-w-[320px] sm:max-w-[520px] md:max-w-[720px]">
              <div className="px-[11px] sm:px-[16px] md:px-[22px]">
                <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-normal leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-primary" style={{ letterSpacing: '-2px', fontFamily: 'Poppins'}}>
     How VCs and Founders see   {' '}
                </h1>
                <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-normal leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-primary -mt-[15px] sm:-mt-[22px] md:-mt-[30px]">
    valuation differently 
                </h1>
              </div>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[30px] text-center text-primary mt-[20px] sm:mt-[25px] md:mt-[30px]">
       Unpacking the mindset gap: What drives investor decisions vs. founder expectations in startup valuation
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-center text-primary mt-[8px] sm:mt-[10px] md:mt-[12px]">
Apr 24, 2025
              </p>
            </div>

            {/* Main Image */}
           <div className="mx-auto mt-[30px] sm:mt-[40px] md:mt-[50px] max-w-[320px] sm:max-w-[520px] md:max-w-[936px]">
  <img 
    src="/images/vd.png" 
    alt="Venture Capital Guide" 
    className="w-full h-[180px] sm:h-[300px] md:h-[526px] object-contain rounded-[20px]"
  />
</div>


            {/* Content Section */}
          <div className="mt-[40px] sm:mt-[60px] md:mt-[80px] mx-auto max-w-[320px] sm:max-w-[600px] md:max-w-[820px]">

              <div className="space-y-[18px] sm:space-y-[20px] md:space-y-[22px]">
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Raising venture capital can be a game-changer. It gives startups the fuel to scale, expand, and dominate their industry. But here’s the catch—venture capital isn’t just about getting funds; it’s about structuring the right deal.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">One of the biggest misunderstandings between founders and venture capitalists (VCs) is valuation—how much a startup is worth and how much ownership founders actually keep after investment.</p>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">The Startup Valuation Gap: Founders vs. VCs</h2>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Most founders think, “Higher valuation = Better deal.”</li>
                  <li>VCs think, “Risk-adjusted return = Smart investment.”</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">The result? Founders often celebrate a high valuation without realizing that the fine print in the deal could dilute their ownership significantly.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Here’s what VCs look at beyond just the numbers:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Option Pools – Reserved shares for future employees that often come from the founder’s stake.</li>
                  <li>Liquidation Preferences – Determines who gets paid first when the company exits.</li>
                  <li>Anti-Dilution Protections – Safeguards investors but can severely cut founder equity.</li>
                  <li>Governance Terms – Controls like board seats and voting rights that impact key decisions.</li>
                </ul>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">The Catch with High Valuations</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">A high valuation looks great on paper, but it comes with trade-offs. If your valuation is too aggressive:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Future fundraising rounds become harder.</li>
                  <li>Investors may expect unrealistic growth.</li>
                  <li>Down-rounds (lower valuation in the next round) can wipe out your equity.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">VCs don’t just hand over money—they structure deals to maximize their upside while reducing risk. That’s why understanding the fine print is just as important as negotiating the number on the term sheet.</p>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">The Option Pool Trick: How Your Valuation Shrinks Without You Noticing</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">One of the most overlooked ways VCs tweak valuations is through the option pool shuffle.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Let’s break it down with an example:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>You’re raising $1M at a $3M pre-money valuation. That means the post-money valuation is $4M.</li>
                  <li>The VC requires a 15% option pool post-investment.</li>
                  <li>Sounds fair? Not so fast. That 15% is deducted from your pre-money valuation, effectively reducing it to $2.4M.</li>
                  <li>Instead of keeping 75% equity post-funding, you end up with 60%—a major difference.</li>
                </ul>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">How Founders Can Protect Themselves</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Push for option pools after investment, so the dilution is shared.</li>
                  <li>Always calculate your real pre-money valuation, factoring in the option pool impact.</li>
                  <li>Work with a startup-savvy lawyer to structure fair terms.</li>
                </ul>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">Liquidation Preferences: The Silent Killer of Founder Payouts</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Imagine building your startup for years, selling it for $10M, and realizing you walk away with… nothing.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">That’s the power of liquidation preferences, a clause that dictates how investors get paid in an exit.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Here’s what different liquidation preferences look like:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>1x Non-Participating – Investors get their money back first, then the rest is split based on equity.</li>
                  <li>1x Participating Preferred (The Double Dip) – Investors take their money back AND a share of the remaining funds.</li>
                  <li>3x Participating Preferred – Investors get three times their investment before founders see a dollar.</li>
                </ul>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">Startup Exit Example:</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Let’s say you raise $6M and later sell your company for $10M.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>1x Non-Participating → Investors take $6M, and the remaining $4M is split based on ownership.</li>
                  <li>1x Participating → Investors take $6M, plus a percentage of the remaining $4M, reducing the founder’s share.</li>
                  <li>3x Participating → Investors get $18M, even if the sale price was just $10M—meaning founders get zero.</li>
                </ul>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">The Smart Founder’s Move</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Always negotiate for a 1x non-participating preference—this is the fairest deal.</li>
                  <li>Avoid participating preferences at all costs.</li>
                  <li>Read the fine print—what looks like a great deal could leave you with nothing.</li>
                </ul>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">Hidden Clauses That Can Catch Founders Off Guard</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">VC term sheets are loaded with fine print, but some clauses can have huge consequences. Here’s what to watch for:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Anti-Dilution Clauses – If your valuation drops in the future, investors get extra shares, cutting your ownership.</li>
                  <li>Drag-Along Rights – Investors can force you to sell, even if you don’t want to.</li>
                  <li>Redemption Clauses – Investors can demand their money back after a certain time, which can bankrupt your startup.</li>
                  <li>Board Control Provisions – If VCs control your board, they control your company.</li>
                </ul>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">Common Founder Mistakes – And How to Avoid Them</h2>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Chasing the highest valuation – If it’s too high, future rounds will be tough.</li>
                  <li>Ignoring dilution traps – Option pools and liquidation preferences can cut your stake significantly.</li>
                  <li>Underestimating VC deal structures – Investors design deals to protect themselves, not you.</li>
                </ul>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">How to Stay in Control of Your Startup</h2>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Calculate your real valuation – Don’t just accept the VC’s number; factor in dilution.</li>
                  <li>Negotiate liquidation preferences – Stick to 1x non-participating.</li>
                  <li>Scrutinize every term sheet clause – Small print can have big consequences.</li>
                  <li>Work with founder-friendly investors – The right VC is a partner, not just a financier.</li>
                  <li>Get a great lawyer – The best investment you’ll make is in legal protection.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Raising venture capital isn’t just about getting money—it’s about structuring a deal that ensures you stay in control of your company.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">At Myprobuddy, we help startups navigate funding negotiations, ensuring that founders get the best deal without losing ownership.</p>
              </div>

              {/* Author Card */}
              <div className="mt-[40px] sm:mt-[50px] md:mt-[63px] p-[20px] sm:p-[25px] md:p-[30px] rounded-[12px] bg-[linear-gradient(180deg,#e6e6fa_0%,_#e5e5fa99_100%)]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[16px] sm:gap-[20px] md:gap-[24px]">
                    <div className="w-[50px] sm:w-[55px] md:w-[60px] h-[50px] sm:h-[55px] md:h-[60px] rounded-[25px] sm:rounded-[27px] md:rounded-[30px] border border-[#b7b7b7] flex items-center justify-center">
                      <img 
                        src="/images/img_ojjgqo9by4xjuep.png" 
                        alt="Author" 
                        className="w-[50px] sm:w-[55px] md:w-[60px] h-[50px] sm:h-[55px] md:h-[60px] rounded-[25px] sm:rounded-[27px] md:rounded-[30px]"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-medium leading-[20px] sm:leading-[21px] md:leading-[23px] text-left text-primary">
                          Aabid Ibrahim S
                        </h4>
                        <div className="flex items-center gap-[10px] sm:gap-[11px] md:gap-[12px]">
                          <img src="/images/img_link_x_logo.png" alt="X" className="w-[18px] sm:w-[19px] md:w-[20px] h-[18px] sm:h-[19px] md:h-[20px]" />
                          <img src="/images/img_svg_1992157690_634.svg" alt="LinkedIn" className="w-[18px] sm:w-[19px] md:w-[20px] h-[18px] sm:h-[19px] md:h-[20px]" />
                          <img src="/images/img_svg913236615_403.svg" alt="Website" className="w-[18px] sm:w-[19px] md:w-[20px] h-[18px] sm:h-[19px] md:h-[20px]" />
                        </div>
                      </div>
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] text-left text-primary mt-[6px] sm:mt-[7px] md:mt-[8px]">
                        Social Media Specialist at MyProBuddy
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[18px] sm:leading-[20px] md:leading-[23px] text-left text-primary mt-[16px] sm:mt-[18px] md:mt-[20px]">
                  Aabid leads social media strategy and performance analysis at Convert to boost brand
                  visibility and engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Posts Section */}
         <div className="w-full bg-secondary pt-[50px] sm:pt-[65px] md:pt-[80px] pb-[50px] sm:pt-[65px] md:pb-[80px] px-4 sm:px-6 md:px-8 mb-[40px] sm:mb-[48px] md:mb-[56px]">
          <div className="px-[20px] sm:px-[40px] md:px-[56px]">
            <div className="px-[20px] sm:px-[40px] md:px-[56px]">
              <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-medium leading-[48px] sm:leading-[63px] md:leading-[78px] text-center text-[#ef3e25]">
                Latest posts
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] text-center text-primary -mt-[3px] sm:-mt-[4px] md:-mt-[6px]">
                Discover other pieces of writing in our blog
              </p>
            </div>

            {/* Blog Cards */}
           
            <div className="flex flex-col lg:flex-row gap-[12px] sm:gap-[14px] md:gap-[16px] mt-[35px] sm:mt-[44px] md:mt-[52px] mx-auto max-w-[320px] sm:max-w-[720px] lg:max-w-none">
              {/* Card 1 */}
               <a href='/founders-insights/the-right-way-to-raise-funds-for-your-startup'>
              <div className="w-full lg:w-[388px] p-[18px] sm:p-[21px] md:p-[24px] border border-[#b8b8b833] rounded-[12px] bg-[linear-gradient(180deg,#fff7ec_0%,_#fff7eb66_100%)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
                <img 
                  src="/images/right.png" 
                  alt="Blog post" 
                  className="w-full h-[120px] sm:h-[141px] md:h-[162px] object-cover rounded-[6px]"
                />
                <div className="mt-[20px] sm:mt-[24px] md:mt-[28px]">
                  <div className="space-y-[24px] sm:space-y-[28px] md:space-y-[32px]">
                    <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px]">
                      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[20px] sm:leading-[23px] md:leading-[26px] text-left text-primary">
                        The Right Way to Raise Funds for 
                        Your Startup
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] text-left text-primary">
                        Proven Approaches to Secure Startup Funding 
                        with Confidence and Clarity
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px]">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-muted">
                          Written by
                        </p>
                        <div className="flex items-center">
                          <img src="/images/img_images_gray_800.png" alt="Author" className="w-[20px] sm:w-[22px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[22px]" />
                          <div className="px-[10px] sm:px-[11px] md:px-[12px]">
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-primary">
                              Aabid Ibrahim S
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px] text-right">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-muted">
                          Published on
                        </p>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-primary">
                          May 28, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> </a>

              {/* Card 2 */}  <a href='/founders-insights/how-to-successfully-raise-a-seed-round-for-your-startup'>
              <div className="w-full lg:w-[388px] p-[18px] sm:p-[21px] md:p-[24px] border border-[#b8b8b833] rounded-[12px] bg-[linear-gradient(180deg,#fff7ec_0%,_#fff7eb66_100%)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
                <img 
                  src="/images/success.png" 
                  alt="Blog post" 
                  className="w-full h-[120px] sm:h-[141px] md:h-[162px] object-cover rounded-[6px]"
                />
                <div className="mt-[20px] sm:mt-[24px] md:mt-[28px]">
                  <div className="space-y-[24px] sm:space-y-[28px] md:space-y-[32px]">
                    <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px]">
                      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[20px] sm:leading-[23px] md:leading-[26px] text-left text-primary">
                        How to Successfully Raise a Seed 
                        Round for Your Startup
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] text-left text-primary">
                        Essential Strategies and Insights to Secure 
                        Your First Round of Startup Funding
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px]">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-muted">
                          Written by
                        </p>
                        <div className="flex items-center">
                          <img src="/images/img_images_gray_800.png" alt="Author" className="w-[20px] sm:w-[22px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[22px]" />
                          <div className="px-[10px] sm:px-[11px] md:px-[12px]">
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-primary">
                              Aabid Ibrahim S
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px] text-right">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-muted">
                          Published on
                        </p>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-primary">
                          May 21, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</a>
              {/* Card 3 */}
              <a href='/founders-insights/how-to-value-a-startup-9-proven-methods'>
              <div className="w-full lg:w-[388px] p-[18px] sm:p-[21px] md:p-[24px] rounded-[12px] bg-[linear-gradient(180deg,#fff7ec_0%,_#fff7eb66_100%)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
                <img 
                  src="/images/value.png" 
                  alt="Blog post" 
                  className="w-full h-[120px] sm:h-[141px] md:h-[162px] object-cover rounded-[6px]"
                />
                <div className="mt-[20px] sm:mt-[24px] md:mt-[28px]">
                  <div className="space-y-[24px] sm:space-y-[28px] md:space-y-[32px]">
                    <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px]">
                      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[20px] sm:leading-[23px] md:leading-[26px] text-left text-primary">
                        How to Value a Startup: 9 Proven 
                        Methods
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] text-left text-primary">
                        Accurately Determine What Your Startup Is 
                        Worth with These Trusted Techniques
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px]">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-muted">
                          Written by
                        </p>
                        <div className="flex items-center">
                          <img src="/images/img_images_gray_800.png" alt="Author" className="w-[20px] sm:w-[22px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[22px]" />
                          <div className="px-[10px] sm:px-[11px] md:px-[12px]">
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-primary">
                              Aabid Ibrahim S
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-[6px] sm:space-y-[7px] md:space-y-[8px] text-right">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-muted">
                          Published on
                        </p>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-right text-primary">
                          May 14, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> </a>
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

export default Foundersseevaluation;

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const TheEconomics = () => {
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
    The Economics of Term   {' '}
                </h1>
                <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-normal leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-primary -mt-[15px] sm:-mt-[22px] md:-mt-[30px]">
  Sheets 
                </h1>
              </div>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[30px] text-center text-primary mt-[20px] sm:mt-[25px] md:mt-[30px]">
      Decoding investor clauses, founder equity, and the financial implications behind every term.
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-center text-primary mt-[8px] sm:mt-[10px] md:mt-[12px]">
Apr 24, 2025
              </p>
            </div>

            {/* Main Image */}
           <div className="mx-auto mt-[30px] sm:mt-[40px] md:mt-[50px] max-w-[320px] sm:max-w-[520px] md:max-w-[936px]">
  <img 
    src="/images/term.png" 
    alt="Venture Capital Guide" 
    className="w-full h-[180px] sm:h-[300px] md:h-[526px] object-contain rounded-[20px]"
  />
</div>


            {/* Content Section */}
          <div className="mt-[40px] sm:mt-[60px] md:mt-[80px] mx-auto max-w-[320px] sm:max-w-[600px] md:max-w-[820px]">

              <div className="space-y-[18px] sm:space-y-[20px] md:space-y-[22px]">
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Securing venture capital isn’t just about raising money—it’s about setting the foundation for your startup’s future. The terms you agree to can impact everything from ownership and decision-making power to your eventual exit. While valuation grabs the most attention, other critical clauses in a term sheet can significantly affect your control and financial outcome.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Many founders unknowingly accept terms that dilute their stake or limit their authority, only realizing the consequences when it’s too late. That’s why understanding the economics of term sheets is essential before finalizing any deal—ensuring you retain control and maximize your startup’s long-term potential.</p>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">Why Term Sheets Matter More Than Just Valuation</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">A term sheet is essentially a blueprint of your investment agreement. While it is not legally binding, it sets the stage for how the final deal will be structured. Founders often celebrate high valuations but fail to consider other terms that could significantly impact their ownership and decision-making power.</p>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">Key factors a term sheet determines:</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>How much of your company you own after investment</li>
                  <li>Who has control over key decisions</li>
                  <li>What happens in future funding rounds and exits</li>
                </ul>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">The risks of ignoring key clauses:</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>You could end up with far less equity than expected due to hidden dilution.</li>
                  <li>Investors might gain significant control, limiting your ability to make business decisions.</li>
                  <li>Your payout in an acquisition could be reduced, even if you build a successful company.</li>
                  <li>Founders who only focus on valuation often realize too late that they have signed away control or financial upside.</li>
                </ul>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">Key Economic Terms That Can Impact Your Startup</h2>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">1. Understanding Pre-Money vs. Post-Money Valuation</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">The valuation of your company before and after investment is a critical factor in how much ownership you retain.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Pre-Money Valuation = The value of your startup before investors invest.</li>
                  <li>Post-Money Valuation = Pre-Money + Investment Amount.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Common mistake: Many founders fail to account for dilution from option pools and investor preferences when calculating post-investment ownership.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Why this matters: A higher post-money valuation may seem attractive, but it can sometimes come with terms that significantly dilute the founders' stake.</p>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">2. The Option Pool Dilemma: How Your Ownership Shrinks</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Investors often require a portion of equity to be set aside as an option pool for future employees. However, this is usually deducted from the pre-money valuation, meaning it impacts the founders more than investors.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Example:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>You raise $2 million at an $8 million pre-money valuation → Post-money = $10 million.</li>
                  <li>Investor demands a 15% option pool post-investment.</li>
                  <li>This effectively reduces your true pre-money valuation to $6.8 million, decreasing your ownership more than expected.</li>
                </ul>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">How to negotiate:</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Founders should push to have the option pool included in the post-money valuation, ensuring dilution is shared fairly between investors and founders.</p>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">3. Liquidation Preferences: Who Gets Paid First in an Exit?</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Liquidation preferences define who gets paid first when the company is sold or liquidated. These terms are often overlooked, but they can drastically impact how much founders receive in an acquisition.</p>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] text-left text-primary mt-2 mb-1">Common liquidation structures:</h4>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>1x Non-Participating: Investors get their money back first, and the remaining amount is shared among other shareholders. (Founder-friendly)</li>
                  <li>1x Participating: Investors get their money back plus a share of the remaining profits (this can significantly reduce the founder’s payout).</li>
                  <li>2x or 3x Participating: Investors get 2x or 3x their investment first, which can leave little to nothing for founders.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Why this matters: If you raise $6 million and sell your company for $10 million, a 3x liquidation preference means investors take $18 million first, leaving zero for the founders.</p>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] text-left text-primary mt-2 mb-1">How to protect yourself:</h4>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Always negotiate for a 1x Non-Participating liquidation preference, which ensures investors get a fair return while still allowing founders to benefit from a successful exit.</p>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">4. Anti-Dilution Clauses: Investors Protect Themselves at Your Expense</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">If your startup raises money at a lower valuation in the future (a down round), anti-dilution clauses protect investors by adjusting their ownership—which means more dilution for you.</p>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] text-left text-primary mt-2 mb-1">Types of anti-dilution clauses:</h4>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Full Ratchet: If your company raises money at a lower valuation, investors’ shares are adjusted as if they invested at the lower price—effectively giving them more shares for free. (Very investor-friendly, highly dilutive to founders)</li>
                  <li>Weighted Average: A fairer approach that considers the total number of new shares issued rather than adjusting all previous shares.</li>
                </ul>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] text-left text-primary mt-2 mb-1">What founders should do:</h4>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Negotiate for Weighted Average Anti-Dilution to avoid excessive dilution in the event of a down round.</p>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">5. Board Control & Governance Rights: Who Really Runs the Company?</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">While equity ownership is important, board control and governance rights determine who has decision-making power in the company.</p>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] text-left text-primary mt-2 mb-1">Key considerations:</h4>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Who holds board seats? Do investors control a majority of the board?</li>
                  <li>Can investors override key founder decisions?</li>
                  <li>Are there veto rights on acquisitions, hiring, or additional funding rounds?</li>
                </ul>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] text-left text-primary mt-2 mb-1">What founders should watch for:</h4>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Investors often ask for too much control too early. If founders lose majority board control, they could be forced out of their own company.</p>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] text-left text-primary mt-2 mb-1">How to negotiate:</h4>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Ensure founders keep majority control in early rounds to maintain decision-making authority.</p>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">How to Negotiate a Founder-Friendly Term Sheet</h2>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Read every detail—don’t just focus on valuation.</li>
                  <li>Negotiate dilution terms—especially regarding option pools and liquidation preferences.</li>
                  <li>Work with a startup-savvy lawyer to identify hidden investor-friendly clauses.</li>
                  <li>Choose the right investors—seek partners, not just financiers.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">One important rule: The first term sheet you receive is almost never the best deal. Always negotiate.</p>
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">Final Thoughts: The Right Term Sheet Can Define Your Startup’s Future</h2>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Founders retain enough ownership to stay motivated.</li>
                  <li>Investors receive fair returns—without gaining excessive control.</li>
                  <li>The company maintains flexibility for future growth and funding rounds.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Venture capital isn’t just about raising money—it’s about structuring deals that allow founders to build and scale their startups without losing control.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">If you’re raising funding, take the time to understand every term before signing a deal. The right negotiation now can save you from losing equity, control, and financial upside in the future.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Would you like guidance on structuring a founder-friendly deal? We help startups navigate venture capital negotiations. Get in touch to learn how you can raise capital on the best possible terms.</p>
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

export default TheEconomics;

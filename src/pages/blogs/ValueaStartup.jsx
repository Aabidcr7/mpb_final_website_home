import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const ValueaStartup = () => {
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
              How to Value a Startup    {' '}
                </h1>
                <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-normal leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-primary -mt-[15px] sm:-mt-[22px] md:-mt-[30px]">
         9 Proven Methods
                </h1>
              </div>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[30px] text-center text-primary mt-[20px] sm:mt-[25px] md:mt-[30px]">
           Accurately Determine What Your Startup Is Worth with These Trusted Techniques
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-center text-primary mt-[8px] sm:mt-[10px] md:mt-[12px]">
  August 4, 2025
              </p>
            </div>

            {/* Main Image */}
           <div className="mx-auto mt-[30px] sm:mt-[40px] md:mt-[50px] max-w-[320px] sm:max-w-[520px] md:max-w-[936px]">
  <img 
    src="/images/value.png" 
    alt="Venture Capital Guide" 
    className="w-full h-[180px] sm:h-[300px] md:h-[526px] object-contain rounded-[20px]"
  />
</div>


            {/* Content Section */}
          <div className="mt-[40px] sm:mt-[60px] md:mt-[80px] mx-auto max-w-[320px] sm:max-w-[600px] md:max-w-[820px]">

              <div className="space-y-[18px] sm:space-y-[20px] md:space-y-[22px]">
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Determining a startup's value is one of the most critical aspects of fundraising and investment decisions. Unlike established businesses with steady revenues and financial histories, startups are valued based on potential ,potential for growth, innovation, and market impact.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">So, when a founder approaches an investor and says: "We need $1 million in funding, and in return, you get X% equity in our company," the big question is ,how much should X be?</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">This is where startup valuation methods come into play. Whether you're a founder preparing to raise capital or an investor evaluating an opportunity, understanding different valuation approaches is essential. Here are nine widely used startup valuation methods, each with its strengths and ideal use cases.</p>

                {/* 1. The Berkus Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">1. The Berkus Method – Assessing Potential Before Revenue</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">The Berkus Method provides a structured way to estimate a startup's worth based on five key factors:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Idea – Is the startup solving a real problem?</li>
                  <li>Prototype – Has the product been developed or tested?</li>
                  <li>Management Team – Does the team have the expertise to execute?</li>
                  <li>Strategic Relationships – Are there partnerships that drive growth?</li>
                  <li>Product Rollout or Sales – Is there a go-to-market strategy in place?</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Each factor is assigned a value, with the total pre-money valuation capped at $2 million.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Early-stage startups with no revenue</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Provides a quick and structured way to estimate a startup’s potential without relying on financial statements.</p>

                {/* 2. The Risk Factor Summation Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">2. The Risk Factor Summation Method – Adjusting for Uncertainty</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">This method expands on the Berkus Method by considering 12 risk factors, including:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Management expertise</li>
                  <li>Market competition</li>
                  <li>Technology development risks</li>
                  <li>Funding challenges</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Each risk factor adds or subtracts $250K to $500K from an initial estimated valuation.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Pre-revenue startups</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Helps investors assess the level of risk before committing funds.</p>

                {/* 3. The Scorecard Valuation Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">3. The Scorecard Valuation Method – Comparing with Similar Startups</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">This method evaluates a startup by comparing it with similar ventures in the same industry. The valuation is adjusted based on factors such as:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Market potential and competition</li>
                  <li>Strength of the founding team</li>
                  <li>Product innovation</li>
                  <li>Scalability and funding potential</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Pre-revenue startups</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Provides an investor-friendly approach by benchmarking against industry peers.</p>

                {/* 4. The Comparable Transactions Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">4. The Comparable Transactions Method – Market-Based Valuation</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Much like real estate pricing, this approach values a startup by looking at recent funding deals of similar companies. Investors analyze metrics such as:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>SaaS startups: Monthly Recurring Revenue (MRR)</li>
                  <li>Tech platforms: Number of users or engagement levels</li>
                  <li>Biotech startups: Number of patents</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Pre-revenue and post-revenue startups</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Aligns valuation with current market trends, making it a practical approach.</p>

                {/* 5. The Book Value Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">5. The Book Value Method – Valuing Tangible Assets</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">This traditional accounting method calculates valuation based on:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Tangible assets – Equipment, inventory, real estate</li>
                  <li>Liabilities – Debt and financial obligations</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">However, most startups derive value from intellectual property, software, and brand equity, which are not captured in this approach.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Startups with significant physical assets</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Useful for asset-heavy businesses but not ideal for tech-driven startups.</p>

                {/* 6. The Liquidation Value Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">6. The Liquidation Value Method – Estimating Worst-Case Scenarios</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">This method determines how much a startup’s assets would be worth if the company shut down and sold everything.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Real estate, equipment, inventory – Sold at a discount</li>
                  <li>Intellectual property and brand value – Often lose most of their worth</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Assessing financial risk</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Helps investors understand the downside before investing.</p>

                {/* 7. The Discounted Cash Flow (DCF) Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">7. The Discounted Cash Flow (DCF) Method – Predicting Future Profits</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">DCF calculates a startup’s valuation based on future expected cash flows, discounted to their present value using a risk-adjusted rate.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Formula: <span className="font-bold">📌 DCF = (Future Cash Flows) ÷ (1 + Discount Rate) ^ Years</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">This method considers:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Projected revenues and profit margins</li>
                  <li>Expected growth rate</li>
                  <li>Industry risks</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Post-revenue startups</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Provides a data-driven approach but relies on accurate financial projections.</p>

                {/* 8. The First Chicago Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">8. The First Chicago Method – Scenario-Based Valuation</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">This method evaluates a startup under three different scenarios:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Worst Case – Minimal revenue, slow growth</li>
                  <li>Base Case – Expected growth and moderate profitability</li>
                  <li>Best Case – Rapid expansion, market leadership</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Each scenario is valued separately, and the final valuation is a weighted average of all three.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Startups with uncertain growth trajectories</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Gives a realistic picture by factoring in different outcomes.</p>

                {/* 9. The Venture Capital Method */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">9. The Venture Capital Method – Aligning with Investor Expectations</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">VCs aim for high returns, often 10X or more on their investments. This method calculates valuation based on:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Future exit value – The price at which the startup could be sold</li>
                  <li>Target ROI – The investor’s expected return</li>
                  <li>Expected dilution – The equity lost in future funding rounds</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Formula: <span className="font-bold">📌 Pre-Money Valuation = (Exit Value ÷ Expected ROI) ÷ Expected Dilution</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Best for: <span className="font-bold">Startups seeking venture capital funding</span></p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Why use it? Ensures valuation aligns with investor goals.</p>

                {/* Which Startup Valuation Method Should You Use? */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">Which Startup Valuation Method Should You Use?</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">There’s no one-size-fits-all answer. The best approach depends on your startup’s stage, industry, and revenue status.</p>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">For Pre-Revenue Startups:</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>✔ Berkus Method</li>
                  <li>✔ Risk Factor Summation</li>
                  <li>✔ Scorecard Valuation</li>
                </ul>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">For Post-Revenue Startups:</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>✔ Comparable Transactions</li>
                  <li>✔ DCF Method</li>
                  <li>✔ First Chicago Method</li>
                </ul>
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold leading-[28px] text-left text-primary mt-4 mb-2">For Investor-Led Valuations:</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>✔ Venture Capital Method</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Ultimately, a startup is worth what someone is willing to pay for it. The key is to back up your valuation with solid data, logical reasoning, and market insights to gain investor confidence.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">At MyProBuddy, we specialize in helping startups prepare for fundraising, develop financial strategies, and navigate the investment landscape.</p>
                <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-medium leading-[30px] text-left text-primary mt-4 mb-2">Looking for expert guidance?</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Reach out to MyProBuddy today!</p>
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

export default ValueaStartup;

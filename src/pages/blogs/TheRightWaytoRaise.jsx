import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const TheRightWaytoRaisePage = () => {
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
                  The Right Way to Raise {' '}
                </h1>
                <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-normal leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-primary -mt-[15px] sm:-mt-[22px] md:-mt-[30px]">
             Funds for Your Startup
                </h1>
              </div>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[30px] text-center text-primary mt-[20px] sm:mt-[25px] md:mt-[30px]">
              Proven Approaches to Secure Startup Funding with Confidence and Clarity
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-center text-primary mt-[8px] sm:mt-[10px] md:mt-[12px]">
            May 28, 2025
              </p>
            </div>

            {/* Main Image */}
           <div className="mx-auto mt-[30px] sm:mt-[40px] md:mt-[50px] max-w-[320px] sm:max-w-[520px] md:max-w-[936px]">
  <img 
    src="/images/right.png" 
    alt="Venture Capital Guide" 
    className="w-full h-[180px] sm:h-[300px] md:h-[526px] object-contain rounded-[20px]"
  />
</div>


            {/* Content Section */}
          <div className="mt-[40px] sm:mt-[60px] md:mt-[80px] mx-auto max-w-[320px] sm:max-w-[600px] md:max-w-[820px]">

              <div className="space-y-[18px] sm:space-y-[20px] md:space-y-[22px]">
               

                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Every startup dreams of securing investment, but is raising capital really the key to success? Many founders believe that once they get funding, everything will fall into place. The truth? Raising money is not the finish lineit’s just the beginning.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Funding can help accelerate growth, but it also comes with expectations, pressure, and the challenge of proving that every dollar raised will generate returns. Many startups rush into fundraising without a clear strategy, leading to equity dilution, loss of control, and unnecessary distractions from building a strong business.</p>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">So, how do you approach fundraising in a way that maximizes your startup’s potential while avoiding common mistakes? Let’s break it down step by step.</p>

                {/* 1. Should You Even Raise Money? */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">1. Should You Even Raise Money?</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Before you start pitching investors, take a step back and ask yourself whether external funding is necessary. Not every startup needs venture capital to succeed. Some of the most successful companies, like Mailchimp, Basecamp, and Zoho, focused on building profitable businesses before ever considering outside investment.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Do you need funding to scale, or can you bootstrap?</li>
                  <li>Will outside capital significantly accelerate your growth?</li>
                  <li>Are you building something that investors actively fund?</li>
                  <li>Can you demonstrate early traction or a clear path to revenue?</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Raising money too soon can lead to unnecessary dilution and loss of control. The best time to seek investment is when you have proof that funding will help you scale exponentially.</p>

                {/* 2. Treat Fundraising Like a Full-Time Job */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">2. Treat Fundraising Like a Full-Time Job</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">One of the most common mistakes founders make is treating fundraising as a side project while building their product. If you want to raise capital successfully, you need to dedicate focused time and effort to the process.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Set a clear timeline (e.g., 6-8 weeks) for raising funds.</li>
                  <li>Create urgencyinvestors are more likely to commit when they feel they might miss out.</li>
                  <li>Keep building your business in the background to maintain momentum and show progress.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">The best time to raise money is when you don’t desperately need it. Start building investor relationships early, so when the time comes to raise, you’re not starting from scratch.</p>

                {/* 3. Build the Right Investor Network */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">3. Build the Right Investor Network</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Cold emails rarely work in the world of venture capital. Investors rely on their networks and prefer warm introductions from people they trust. If you’re an unknown founder, your chances of raising money are much higher if you get a direct introduction.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Leverage startup accelerators like Y Combinator, Techstars, and 500 Startups.</li>
                  <li>Network with angel investors in your industry.</li>
                  <li>Get referrals from fellow founders who have successfully raised capital.</li>
                  <li>Build relationships with startup advisors, VCs, and mentors.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">If you don’t have an established network, start by adding valueengage with investors’ content, attend industry events, and build connections with their portfolio founders. The more you invest in relationships, the easier fundraising becomes.</p>

                {/* 4. Learn to Recognize Soft Rejections */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">4. Learn to Recognize Soft Rejections</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Investors rarely say "no" outright. Instead, they give vague responses like:</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>“Let’s stay in touch.”</li>
                  <li>“We’re interested, but it’s too early for us.”</li>
                  <li>“Keep us updated on your progress.”</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">These are not real commitments. If an investor hasn’t given you a clear "yes" in the form of a term sheet or a check, assume they are saying "no."</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Ask direct questions like, “What would make you comfortable investing?”</li>
                  <li>Keep movingdon’t wait for weeks hoping an investor will come around.</li>
                  <li>Talk to multiple investors simultaneously to create competition and urgency.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Momentum is key in fundraising. Investors move faster when they fear missing out on a great opportunity.</p>

                {/* 5. Secure the First Commitment to Unlock the Rest */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">5. Secure the First Commitment to Unlock the Rest</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">The hardest part of fundraising is getting the first investor to commit. Most investors hesitate to be the first ones in because they want to see social proof. However, once you get one investor on board, it becomes much easier to convince others.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Start with angel investors or smaller funds that can move quickly.</li>
                  <li>Secure a commitment, even if it’s a small amount.</li>
                  <li>Use that initial commitment to build credibility and attract larger investors.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Fundraising is like a domino effectonce the first investor commits, others will feel more confident jumping in.</p>

                {/* 6. Focus on Money in the Bank, Not Verbal Promises */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">6. Focus on Money in the Bank, Not Verbal Promises</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Many founders make the mistake of celebrating fundraising success too soon. Just because investors show interest doesn’t mean you’ve secured the funding. Deals fall apart all the time, and verbal commitments mean nothing until the money is actually wired.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Get term sheets signed as soon as possible.</li>
                  <li>Set clear deadlines for investors to transfer funds.</li>
                  <li>Keep pushing until every check clears.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Until the money is in your bank account, keep your fundraising efforts active. Never assume a deal is final until it’s officially closed.</p>

                {/* 7. Find a Lead Investor – Avoid Those Who "Don’t Lead" */}
                <br />
                <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[35px] text-left text-black mt-10 mb-2">7. Find a Lead Investor – Avoid Those Who "Don’t Lead"</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Some investors express interest but won’t commit until someone else leads the round. These are follower investors, and while they can be helpful, you don’t want to build an entire round with investors who are waiting for someone else to take the first step.</p>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Focus on securing a lead investor who is willing to set the terms.</li>
                  <li>Negotiate with your lead investor before approaching others.</li>
                  <li>Once you have a lead investor, use that credibility to bring in additional investors.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray mb-4">Having a strong lead investor increases your chances of closing your funding round faster.</p>

                {/* Final Thoughts */}
                <br />
 <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold leading-[28px] sm:leading-[35px] md:leading-[42px] text-left text-black mt-[50px] sm:mt-[65px] md:mt-[86px]">Final Thoughts: Raise Smart, Not Just Fast</h2>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">Fundraising is not just about securing a checkit’s about finding the right partners who believe in your vision and can help you grow. Investors don’t just bet on ideas; they bet on founders. Your ability to execute, adapt, and sell your vision is just as important as your product.</p>
                <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-medium leading-[30px] text-left text-primary mt-4 mb-2">Key Takeaways:</h3>
                <ul className="list-disc pl-6 text-[15px] md:text-[16px] text-gray mb-2 space-y-1">
                  <li>Only raise money if it’s essential for scaling your business.</li>
                  <li>Treat fundraising as a full-time job with a clear timeline.</li>
                  <li>Warm introductions are far more effective than cold emails.</li>
                  <li>Assume "no" until you get a definite "yes" with a term sheet.</li>
                  <li>The first investor commitment is crucialsecure it early.</li>
                  <li>Get funds wired before considering a deal closed.</li>
                  <li>Focus on securing a strong lead investor to attract others.</li>
                </ul>
                <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-medium leading-[30px] text-left text-primary mt-4 mb-2">Are You Raising Funds for Your Startup?</h3>
                <p className="text-[15px] md:text-[16px] font-normal leading-[25px] text-left text-gray">At MyProBuddy, we help startups navigate the fundraising process with the right strategies, connections, and execution plans. Whether you’re looking for investor outreach, pitch deck reviews, or growth strategies, we’re here to support you.</p>
                <p className="text-[15px] md:text-[16px] leading-[20px] text-left text-gray">📩 <span className="font-bold">Need help with fundraising? Let’s talk! reach out to us today.</span></p>
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

export default TheRightWaytoRaisePage;

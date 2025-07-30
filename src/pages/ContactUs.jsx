import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EditText from '../components/ui/EditText';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxUIe4ZvsWDCVsixByyJR0FV78rG7FZt0pm7DDGM_6JNJVZsC3EeHyUmU_fGU3VySKs/exec';

const faqs = [
  {
    question: 'What makes MyProBuddy different from other fundraising platforms?',
    answer:
      'Unlike traditional advisory firms, we work closely with you throughout the entire funding journey. Our services include mock pitches, investor networking, business plan development, valuation advisory, and strategic mentorship tailored to your unique needs.',
  },
  {
    question: 'Can I access mentorship through MyProBuddy?',
    answer:
      'Absolutely. Our curated mentorship program connects you with industry leaders who offer guidance, share insights, and help you navigate challenges in your fundraising and business journey.',
  },
  {
    question: 'How can I connect with investors through MyProBuddy?',
    answer:
      'We provide access to a curated network of 558K+ investors, including VCs, angel investors, HNIs, and super angels. Our platform bridges the gap between startups and capital.',
  },
  {
    question: 'Is there a specific industry or sector MyProBuddy focuses on?',
    answer:
      'No. We work with startups across diverse industries including tech, fintech, edtech, healthtech, D2C brands, sustainability, and more. Our investor network is equally broad, catering to various sectors.',
  },
];

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80, easing: 'ease-in-out' });
  }, []);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);
    try {
      const now = new Date();
      const pad = (n) => n.toString().padStart(2, '0');
      const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
      const form = new FormData();
      form.append('Date', dateStr);
      form.append('Email', formData.email);
      form.append('Phone Number', formData.phone);
      form.append('Company Name', formData.company);
      form.append('Website', formData.website);
      form.append('Last Name', formData.lastName);
      form.append('First Name', formData.firstName);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
      });
      setToast({
        type: 'success',
        message: 'Thank you for reaching out! Our team will contact you within 24 hours.',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
      });
    } catch (error) {
      setToast({
        type: 'error',
        message: 'There was an error submitting your form. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us-section" className="w-full relative overflow-hidden" data-aos="fade">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 relative" data-aos="fade-up">
        <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-center px-4 lg:px-14" data-aos="fade-up">
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
                  Get in{' '}
                </span>
                <span className="text-[#fc5109]">Touch</span>
               
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl font-poppins font-medium leading-[22px] sm:leading-[30px] text-center text-primary mt-1 sm:mt-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                 We’re a team of funding specialists helping founders become investable and access the right capital.
              </p>
            </div>

        
       
        <div className="flex flex-col lg:flex-row justify-center items-start py-10 sm:py-14 lg:py-24 gap-0 lg:gap-8" data-aos="fade-up" data-aos-delay="200">
          {/* Left: Contact Info */}
          <div className="w-full lg:w-[28%] flex flex-col gap-4 lg:gap-8 items-center lg:items-start">
            <div className="w-full flex flex-col items-center lg:items-start">
              <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-4 text-black text-center lg:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Information</h3>
              <div className="flex flex-col gap-4 w-full items-center lg:items-start">
                <div className="flex items-center gap-3 h-12 justify-center lg:justify-start w-full">
                  <span className="w-11 h-11 flex items-center justify-center rounded-full bg-[#5d248f]">
                    <svg width="40" height="40" fill="none" viewBox="0 0 22 22">
                      <circle cx="11" cy="11" r="11" fill="#5d248f" />
                      <path d="M7.5 8.5h7M7.5 11h7M7.5 13.5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="text-[18px] font-poppins font-medium text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>reachus@myprobuddy.com</span>
                </div>
                <div className="flex items-center gap-3 h-12 justify-center lg:justify-start w-full">
                  <span className="w-11 h-11 flex items-center justify-center rounded-full bg-[#5d248f]">
                    <svg width="40" height="40" fill="none" viewBox="0 0 22 22">
                      <circle cx="11" cy="11" r="11" fill="#5d248f" />
                      <path d="M8.5 10.5c.5 1.5 2 3 3.5 3.5l1-1a1 1 0 0 1 1-.25c.5.13 1.5.5 1.5.5a1 1 0 0 1 .5 1.25c-.25.75-1.25 2-3.5 2-2.25 0-4.5-2.25-4.5-4.5 0-2.25 1.25-3.25 2-3.5a1 1 0 0 1 1.25.5s.37 1 .5 1.5a1 1 0 0 1-.25 1l-1 1Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="text-[18px] font-poppins font-medium text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>+91-99522-37700</span>
                </div>
               
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="w-full lg:w-[40%] max-w-xl lg:ml-6 xl:ml-10">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold leading-[28px] sm:leading-[36px] text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Get Started Now
                  </h3>
                  <p className="text-sm sm:text-base text-[#666666]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {toast && (
                    <div className={`w-full text-center rounded-lg py-2 px-4 ${toast.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {toast.message}
                    </div>
                  )}
                  {/* Name Fields */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-semibold text-[#333333]">Full Name *</label>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <EditText
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 text-black"
                        required
                      />
                      <EditText
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 text-black"
                        required
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-semibold text-[#333333]">Business Email *</label>
                    <EditText
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 text-black"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-semibold text-[#333333]">Phone Number *</label>
                    <EditText
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 text-black"
                      required
                    />
                  </div>
                  {/* Company & Website */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-sm font-semibold text-[#333333]">Company Name *</label>
                      <EditText
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-sm font-semibold text-[#333333]">Website</label>
                      <EditText
                        type="url"
                        placeholder="www.yourcompany.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 text-black"
                      />
                    </div>
                  </div>
                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#fc5109] to-[#ff6b35] hover:from-[#e04108] hover:to-[#ff5722] rounded-xl px-6 py-3 sm:px-8 sm:py-4 transition-all hover:shadow-xl hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Start Your Fundraising Journey'}
                  </button>
                  {/* Trust Indicators */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      Free Consultation
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      No Upfront Fees
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mt-16" data-aos="fade-up" data-aos-delay="400">
          <h2
            className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6"
            style={{ letterSpacing: '-2px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
          >
            <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
              Frequently Asked
            </span>
            <span className="text-[#f46d19]"> </span>
            <span className="text-[#fc5109]">Questions</span>
            <span className="text-[#f46d19]"> </span>
          </h2>
          <div className="flex flex-col gap-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <span className="text-base font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="#5d248f"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-sm text-gray-700 font-poppins font-normal" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10 sm:h-16 lg:h-24" />
      <Footer />
    </section>
  );
};

export default ContactUs;

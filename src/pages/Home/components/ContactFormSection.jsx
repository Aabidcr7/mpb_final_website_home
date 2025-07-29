import React, { useState } from 'react';
import EditText from '../../../components/ui/EditText';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxUIe4ZvsWDCVsixByyJR0FV78rG7FZt0pm7DDGM_6JNJVZsC3EeHyUmU_fGU3VySKs/exec';

const ContactFormSection = () => {
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
    <section className="w-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center py-8 lg:py-24 gap-6 lg:gap-16">
          {/* Left Content - Call to Action */}
          <div className="w-full lg:w-[45%] flex flex-col gap-2 lg:gap-8 justify-start items-start text-center lg:text-left">
            <div className="flex flex-col gap-0 lg:gap-3">
              <h2
                className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-0 sm:mb-2 lg:mb-3"
                style={{ letterSpacing: '-2px', color: '#5d248f' , fontFamily: 'Poppins, sans-serif' }}
              >
                Let's Make it
                <span className="text-[#ff6b35]"> Happen</span>
              </h2>
              <p className="text-xl lg:text-2xl font-poppins font-medium leading-[32px] lg:leading-[36px] mb-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Start your fundraising journey today!
              </p>
              <p className="text-base lg:text-lg font-poppins font-normal leading-[26px] lg:leading-[30px] text-white/75 max-w-lg">
                Join thousands of successful entrepreneurs who have transformed their startups with
                our expert guidance and investor network.
              </p>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="w-full lg:w-[45%] max-w-md lg:max-w-lg">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold leading-[28px] sm:leading-[36px] text-[#333333]">
                    Get Started Now
                  </h3>
                  <p className="text-sm sm:text-base text-[#666666]">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
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
      </div>
    </section>
  );
};

export default ContactFormSection;
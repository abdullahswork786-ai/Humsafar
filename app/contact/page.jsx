"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    destination: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        destination: "",
        message: ""
      });
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] mx-auto">
        
        {/* Modern Structure Contact Box matching user reference image */}
        <div className="bg-[#ECEFF2] rounded-[28px] sm:rounded-[44px] lg:rounded-[48px] border border-gray-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.03)] p-4 xs:p-6 sm:p-10 lg:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 xl:gap-24 items-center">
            
            {/* Left Column: Heading, Subtitle & Direct Contacts */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div>
                {/* Top Pill Badge with Brand Red Accent */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-red-200 bg-red-50/80 shadow-sm mb-5">
                  <div className="w-5 h-5 rounded-full bg-[#E31B23] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-[#E31B23] uppercase tracking-wider font-heading">
                    Start Your Journey
                  </span>
                </div>

                {/* Main Large Heading matching reference structure */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#101C2A] uppercase tracking-tight leading-[1.28] font-heading">
                  Let's Build Your <br />
                  Global Future
                </h1>
              </div>

              {/* Description Paragraph */}
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed max-w-lg">
                Ready to start your visa, immigration, or study abroad application? Fill out the form or reach out directly to start a conversation about your goals and how our counselors can assist you.
              </p>

              {/* Direct Contact Badges with Brand Red Circle Icons */}
              <div className="space-y-3.5 pt-2">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  {/* Phone */}
                  <a
                    href="tel:+923001234567"
                    className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#101C2A] hover:text-[#E31B23] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#E31B23] group-hover:bg-[#C8141B] text-white flex items-center justify-center shrink-0 shadow-sm transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>+92 (300) 123-4567</span>
                  </a>

                  {/* Location */}
                  <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#101C2A]">
                    <div className="w-8 h-8 rounded-full bg-[#E31B23] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span>Islamabad & Lahore, PK</span>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <a
                    href="mailto:info@humsafar.com"
                    className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#101C2A] hover:text-[#E31B23] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#E31B23] group-hover:bg-[#C8141B] text-white flex items-center justify-center shrink-0 shadow-sm transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span>info@humsafar.com</span>
                  </a>
                </div>
              </div>

              {/* Working Hours Footnote */}
              <div className="pt-2 flex items-center space-x-2 text-xs text-gray-500 font-medium">
                <Clock className="w-4 h-4 text-[#008A4B]" />
                <span>Operating Hours: Monday – Saturday (9:00 AM – 6:00 PM PKT)</span>
              </div>
            </div>

            {/* Right Column: Branded Solid Card Form (Wider lg:col-span-7) */}
            <div className="lg:col-span-7">
              <div className="bg-[#101C2A] text-white p-5 xs:p-7 sm:p-9 lg:p-11 rounded-[24px] sm:rounded-[36px] shadow-xl border border-[#1A2D42] relative overflow-hidden">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#008A4B]/20 border border-[#008A4B] text-[#008A4B] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-white font-heading">
                      Inquiry Submitted!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                      Thank you. A HUMSAFAR counselor will review your inquiry and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                    
                    {/* Field 1: Your Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/40 text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                      />
                    </div>

                    {/* Field 2 & 3: Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Your Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Phone / WhatsApp"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/40 text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="yourname@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/40 text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Field 4 & 5: Services & Country Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Services *
                        </label>
                        <div className="relative">
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            required
                            className="w-full px-5 py-3.5 rounded-2xl bg-[#1A2D42] border border-white/20 focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/40 text-white text-sm focus:outline-none transition-all cursor-pointer appearance-none"
                          >
                            <option value="" disabled>Select a service</option>
                            <option value="Study Abroad & Student Visa">Study Abroad & Student Visa</option>
                            <option value="Tourist & Visit Visa">Tourist & Visit Visa</option>
                            <option value="Business & Investor Visa">Business & Investor Visa</option>
                            <option value="Work Visa & Employment">Work Visa & Employment</option>
                            <option value="Immigration & Permanent Residency">Immigration & PR</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Destination Country
                        </label>
                        <div className="relative">
                          <select
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                            className="w-full px-5 py-3.5 rounded-2xl bg-[#1A2D42] border border-white/20 focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/40 text-white text-sm focus:outline-none transition-all cursor-pointer appearance-none"
                          >
                            <option value="">Select country (Optional)</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="United States">United States</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                            <option value="UAE">United Arab Emirates</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Field 6: Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your requirements or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/40 text-white placeholder-gray-400 text-sm focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Pill Button in Brand Red */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 bg-[#E31B23] hover:bg-[#C8141B] text-white font-extrabold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
                      >
                        <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#E31B23] transition-colors">
                          <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-heading">Submit</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

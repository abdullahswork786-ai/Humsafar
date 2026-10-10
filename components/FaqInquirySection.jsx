"use client";

import { useState } from "react";
import { Plus, Minus, Send, CheckCircle2 } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FaqInquirySection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "UK",
    service: "Student Visa",
    message: ""
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        destination: "UK",
        service: "Student Visa",
        message: ""
      });
    }, 5000);
  };

  return (
    <section className="relative py-24 bg-[#101C2A] text-white overflow-hidden border-t border-[#1A2D42]">
      {/* City Skyline Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backgrounds/city-skyline.jpg"
          alt="International destinations skyline"
          className="w-full h-full object-cover object-center filter brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101C2A]/95 via-[#101C2A]/90 to-[#101C2A]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Questions & Answers */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E31B23]">
                FREQUENTLY ASKED
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white mt-1 font-heading">
                Questions & Answers
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Have questions about the visa evaluation process or documentation? Here are common answers.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.slice(0, 5).map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.id}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-bold text-white text-sm sm:text-base hover:text-[#E31B23] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className="p-1 rounded-full bg-white/10 text-white flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Send Your Message / Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E31B23]">
                  GET IN TOUCH
                </span>
                <h3 className="text-2xl font-black uppercase text-white mt-1 font-heading">
                  Send Your Message
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Tell us your destination and our counselor will get back to you.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#008A4B]/20 border border-[#008A4B] text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#008A4B] mx-auto" />
                  <h4 className="font-bold text-white text-base">Inquiry Submitted!</h4>
                  <p className="text-xs text-gray-200">
                    Thank you. A HUMSAFAR counselor will review your inquiry and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-200 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-200 mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-200 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-200 mb-1.5">
                          Destination
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#1A2D42] border border-white/20 focus:border-[#E31B23] text-white text-sm focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="USA">United States</option>
                          <option value="Germany">Germany</option>
                          <option value="Italy">Italy</option>
                          <option value="UAE">UAE</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-200 mb-1.5">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#1A2D42] border border-white/20 focus:border-[#E31B23] text-white text-sm focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="Student Visa">Study Abroad & Student Visa</option>
                          <option value="Tourist Visa">Tourist & Visit Visa</option>
                          <option value="Business Visa">Business Visa</option>
                          <option value="Work Visa">Work Visa</option>
                          <option value="Immigration">Immigration & PR</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-200 mb-1.5">
                        Your Message / Inquiry
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#E31B23] text-white placeholder-gray-400 text-sm focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Pill Button matching user reference image */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center space-x-3 bg-white hover:bg-gray-100 text-[#101C2A] font-extrabold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#101C2A] text-white flex items-center justify-center group-hover:bg-[#E31B23] transition-colors">
                          <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-heading">Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

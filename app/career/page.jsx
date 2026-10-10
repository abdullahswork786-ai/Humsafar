"use client";

import { useState } from "react";
import { Briefcase, Send, CheckCircle2, UploadCloud } from "lucide-react";

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Visa Counselor",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
            <span>JOIN OUR TEAM</span>
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Build Your Career with HUMSAFAR
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            We are interested in hearing from motivated professionals who want to work in visa consultancy, student counselling, customer support, sales, operations or related areas.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-5 xs:p-7 sm:p-12 rounded-2xl sm:rounded-3xl shadow-card border border-gray-100">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto" />
                <h3 className="text-2xl font-black text-brand-navy uppercase">Application Received!</h3>
                <p className="text-sm text-gray-600">
                  Thank you for your interest in joining HUMSAFAR. Our recruitment team will review your credentials and reach out if your profile matches an open opportunity.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Position of Interest *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  >
                    <option value="Visa Counselor">Visa & Immigration Counselor</option>
                    <option value="Student Counselor">Study Abroad / Student Counselor</option>
                    <option value="Documentation Officer">Documentation & Filing Specialist</option>
                    <option value="Customer Support">Customer Support / Reception</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Upload Resume / CV (PDF or DOC)
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-brand-red transition-colors cursor-pointer bg-gray-50">
                    <UploadCloud className="w-8 h-8 text-brand-red mx-auto mb-2" />
                    <span className="text-xs font-bold text-brand-navy block">Click to upload or drag & drop</span>
                    <span className="text-[11px] text-gray-400">PDF, DOC, DOCX up to 10MB</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Cover Note / Experience Summary
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly introduce your experience and why you would be a great fit for HUMSAFAR..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-4 px-6 rounded-xl shadow-red-glow hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2 uppercase tracking-wider text-sm"
                >
                  <span>Submit Job Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

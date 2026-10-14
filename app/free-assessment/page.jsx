"use client";

import { useState } from "react";
import { CheckCircle2, Send, ShieldCheck, ArrowRight, Plane, Loader2 } from "lucide-react";

export default function FreeAssessmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    currentCountry: "Pakistan",
    preferredDestination: "United Kingdom",
    serviceRequired: "Study Abroad & Student Visa",
    purpose: "",
    contactMethod: "WhatsApp",
    additionalMessage: "",
    privacyConsent: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit assessment. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || "Failed to submit assessment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
            <span>INITIAL EVALUATION</span>
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Get Your Free Assessment
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Tell us about your travel, study, work or immigration goal. Our team will review the information and explain the next steps that may be relevant.
          </p>
        </div>
      </div>

      {/* Assessment Form Container */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-5 xs:p-7 sm:p-12 rounded-2xl sm:rounded-3xl shadow-card border border-gray-100">
            {submitted ? (
              <div className="p-10 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-black text-brand-navy uppercase">
                  Assessment Request Submitted!
                </h3>
                <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. An authorized HUMSAFAR consultant will evaluate your profile and contact you via {formData.contactMethod} within 24–48 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-navy text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-brand-red transition-colors"
                  >
                    Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-lg font-bold text-brand-navy uppercase">
                    1. Applicant Personal Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full legal name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Current Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pakistan, UAE, Saudi Arabia"
                      value={formData.currentCountry}
                      onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-4 pt-4">
                  <h3 className="text-lg font-bold text-brand-navy uppercase">
                    2. Destination & Visa Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Preferred Destination *
                    </label>
                    <select
                      value={formData.preferredDestination}
                      onChange={(e) => setFormData({ ...formData, preferredDestination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-brand-red"
                    >
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="United States">United States</option>
                      <option value="Germany">Germany</option>
                      <option value="Italy">Italy</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Other / Undecided">Other / Undecided</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-brand-red"
                    >
                      <option value="Study Abroad & Student Visa">Study Abroad & Student Visa</option>
                      <option value="Tourist & Visit Visa">Tourist & Visit Visa</option>
                      <option value="Business Visa">Business Visa</option>
                      <option value="Work Visa">Work Visa</option>
                      <option value="Immigration & PR">Immigration & PR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                    Purpose of Travel / Study / Work / Immigration
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pursuing Master's degree in Computer Science, family visit, or skilled migration"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-4 pt-1">
                    {["WhatsApp", "Phone Call", "Email"].map((method) => (
                      <label key={method} className="flex items-center space-x-2 text-xs font-semibold text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                          className="text-brand-red focus:ring-brand-red"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                    Additional Information / Educational / Work Background
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any details about your qualification, GPA, IELTS score, or work experience..."
                    value={formData.additionalMessage}
                    onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red resize-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-1 text-brand-red focus:ring-brand-red rounded"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      I consent to HUMSAFAR contacting me regarding my assessment request. I understand that HUMSAFAR provides advisory services and that visa grants remain subject to official immigration rules.
                    </span>
                  </label>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-red hover:bg-brand-red-hover disabled:bg-gray-400 text-white font-black py-4 px-6 rounded-xl shadow-red-glow hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2 uppercase tracking-wider text-sm cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Assessment...</span>
                    </>
                  ) : (
                    <>
                      <span>REQUEST MY FREE ASSESSMENT</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

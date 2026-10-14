"use client";

import Link from "next/link";
import { ArrowRight, ThumbsUp, Headset, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: 1 Image on Mobile, 3-Image Collage on Desktop (Order 2 on mobile, Order 1 on Desktop) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            {/* Mobile View: Single Clean Image (Visible on mobile only < sm) */}
            <div className="sm:hidden relative w-full max-w-[320px] mx-auto pt-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="/images/about/consultant-male.jpg"
                  alt="HUMSAFAR Consultant in office"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-3 right-4 z-20 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 text-center">
                <span className="block text-2xl font-black text-[#E31B23] leading-none font-heading">
                  10+
                </span>
                <span className="block text-[8px] font-black text-[#101C2A] uppercase tracking-widest mt-0.5 leading-tight font-heading">
                  YEARS OF<br />EXPERIENCE
                </span>
              </div>
            </div>

            {/* Tablet & Desktop View: Full 3-Image Collage (Hidden on mobile < sm) */}
            <div className="hidden sm:block relative w-full max-w-[440px] lg:max-w-[500px] mx-auto min-h-[400px] lg:min-h-[500px]">
              {/* Image 1 (Top Center/Left): Professional Male Visa Advisor */}
              <div className="absolute top-0 left-8 lg:left-12 w-52 lg:w-60 h-52 lg:h-60 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10 group">
                <img
                  src="/images/about/consultant-male.jpg"
                  alt="HUMSAFAR Consultant in office"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Image 2 (Bottom Left): Young Male Student / Traveler */}
              <div className="absolute bottom-4 left-0 w-36 lg:w-44 h-36 lg:h-44 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                <img
                  src="/images/about/student-male.jpg"
                  alt="Student visa applicant"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Image 3 (Bottom Right): Happy Male Traveler / Client */}
              <div className="absolute bottom-0 right-2 lg:right-4 w-40 lg:w-48 h-40 lg:h-48 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10 group">
                <img
                  src="/images/about/traveler-male.jpg"
                  alt="Successful visa applicant"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 z-30 bg-white px-5 py-3.5 rounded-2xl shadow-2xl border border-gray-100 text-center min-w-[130px]">
                <span className="block text-4xl lg:text-5xl font-black text-[#E31B23] leading-none font-heading">
                  10+
                </span>
                <span className="block text-[9.5px] font-black text-[#101C2A] uppercase tracking-widest mt-1.5 leading-tight font-heading">
                  YEARS OF<br />EXPERIENCE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Features (Order 1 on mobile, Order 2 on Desktop) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs md:text-sm font-bold uppercase tracking-widest mb-2 font-heading">
                <span className="w-6 h-0.5 bg-[#E31B23] rounded-full" />
                <span>ABOUT HUMSAFAR</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#101C2A] leading-tight uppercase font-heading">
                Leading Visa, Immigration & Study Abroad Consultancy.
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              HUMSAFAR is a professional visa, immigration and study abroad consultancy helping individuals and families understand international travel, study, work and immigration pathways with complete transparency and step-by-step guidance.
            </p>

            {/* 2 Next-Level Feature Rows matching reference */}
            <div className="space-y-5 pt-2">
              {/* Feature 1: Trusted by Clients */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 p-3 rounded-2xl bg-red-50 text-[#E31B23] flex-shrink-0 group-hover:bg-[#E31B23] group-hover:text-white transition-all duration-300 shadow-xs border border-red-100 flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#101C2A] font-heading group-hover:text-[#E31B23] transition-colors">
                    Trusted by Clients Worldwide
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1">
                    We evaluate your academic, financial and professional profile to provide tailored, realistic pathways with 100% document accuracy.
                  </p>
                </div>
              </div>

              {/* Feature 2: Dedicated Support */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 p-3 rounded-2xl bg-blue-50 text-[#101C2A] flex-shrink-0 group-hover:bg-[#101C2A] group-hover:text-white transition-all duration-300 shadow-xs border border-blue-100 flex items-center justify-center">
                  <Headset className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#101C2A] font-heading group-hover:text-[#E31B23] transition-colors">
                    Dedicated Expert Guidance
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1">
                    From university admissions and SOP drafting to appointment scheduling and embassy checklist verification, we stand by you.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-[#101C2A] hover:bg-[#E31B23] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

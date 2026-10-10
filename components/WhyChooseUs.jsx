"use client";

import { Shield, Target, Compass } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-[#E31B23]" />,
      title: "Personalized Strategy",
      desc: "Every applicant's background is unique. We tailor our visa and education advice specifically to your qualifications and career goals."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#E31B23]" />,
      title: "100% Transparent Review",
      desc: "We provide realistic feedback without false promises or fabricated guarantees. Integrity and client trust come first."
    },
    {
      icon: <Compass className="w-8 h-8 text-[#E31B23]" />,
      title: "End-to-End Assistance",
      desc: "From profile assessment and document preparation to interview tips and post-landing guidance, we stand with you."
    }
  ];

  return (
    <section className="relative py-24 bg-[#101C2A] text-white overflow-hidden border-y border-[#1A2D42]">
      {/* Subtle Dark Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-[#E31B23] rounded-full" />
            <span>WHY CHOOSE HUMSAFAR</span>
            <span className="w-8 h-0.5 bg-[#E31B23] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight font-heading">
            We Provide Tailor-Made Guidance <br /> For Every Profile
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Our experienced team helps you navigate complex international visa regulations with clarity, precision, and dedication.
          </p>
        </div>

        {/* 3 Dark Elevated Feature Cards without scale animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E31B23]/50 hover:bg-white/[0.07] backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#E31B23]/20 transition-all duration-300 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E31B23] transition-colors font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-[#E31B23] uppercase tracking-wider">
                <span>Certified Methodology</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

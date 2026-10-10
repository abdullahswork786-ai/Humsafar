"use client";

import { FileSearch, UserCheck, FolderCheck, Send, ArrowRight } from "lucide-react";

export default function ProcessStrip() {
  const steps = [
    {
      num: "01",
      title: "Initial Assessment",
      desc: "Discuss your travel, study, or immigration goals and evaluate baseline requirements.",
      icon: FileSearch,
    },
    {
      num: "02",
      title: "Profile Review",
      desc: "In-depth evaluation of your academic, professional, and financial background.",
      icon: UserCheck,
    },
    {
      num: "03",
      title: "Document Prep",
      desc: "Organize complete checklist, SOP drafting, and 100% verified application files.",
      icon: FolderCheck,
    },
    {
      num: "04",
      title: "Application Support",
      desc: "Embassy appointment scheduling, submission, and continuous follow-up guidance.",
      icon: Send,
    },
  ];

  return (
    <section className="relative bg-[#E31B23] text-white py-20 overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-white/80 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 font-heading">
            <span className="w-6 h-0.5 bg-white/70 rounded-full" />
            <span>HOW HUMSAFAR WORKS</span>
            <span className="w-6 h-0.5 bg-white/70 rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight font-heading">
            Our Simple 4-Step Process
          </h2>
          <p className="text-red-100 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            A structured and transparent pathway guiding you smoothly from initial consultation to final visa submission.
          </p>
        </div>

        {/* 4 Full-Width Process Cards with Increased Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-7 sm:p-8 rounded-3xl bg-white/10 hover:bg-white/18 backdrop-blur-md border border-white/25 hover:border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon Squircle + Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#E31B23] group-hover:shadow-lg transition-all duration-300">
                      <Icon className="w-6 h-6 transition-colors duration-300" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-white/40 group-hover:text-white transition-colors font-mono">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 font-heading">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-red-50/90 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Progress Line Indicator */}
                <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-red-100">
                  <span>Step {step.num} of 04</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

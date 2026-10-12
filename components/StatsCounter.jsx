"use client";

import { FileCheck, Globe, Users, ShieldCheck, Award } from "lucide-react";
import { stats } from "@/data/stats";

export default function StatsCounter() {
  const getStatIcon = (iconName) => {
    switch (iconName) {
      case "FileCheck": return <FileCheck className="w-6 h-6 text-brand-red" />;
      case "Globe": return <Globe className="w-6 h-6 text-brand-red" />;
      case "Users": return <Users className="w-6 h-6 text-brand-red" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-brand-red" />;
      case "Award": return <Award className="w-6 h-6 text-brand-red" />;
      default: return <Award className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center group last:col-span-2 sm:last:col-span-1 md:last:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-3 group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
                {getStatIcon(item.icon)}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-brand-red font-mono tracking-tight mb-1">
                {item.value}
              </div>
              <div className="font-bold text-brand-navy text-xs sm:text-sm uppercase tracking-wide">
                {item.label}
              </div>
              <p className="text-[11px] text-gray-500 mt-0.5 hidden sm:block">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

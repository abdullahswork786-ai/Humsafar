"use client";

import { Globe, Award, Shield, CheckCircle, BookOpen } from "lucide-react";

export default function PartnersStrip() {
  const partners = [
    { name: "Global Visa Advisory Network", icon: <Globe className="w-5 h-5" /> },
    { name: "Certified Education Counselors", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Compliant Document Standards", icon: <Shield className="w-5 h-5" /> },
    { name: "Recognized Study Portals", icon: <Award className="w-5 h-5" /> },
    { name: "Verified Case Methodology", icon: <CheckCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="py-10 bg-brand-light border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 opacity-75">
          {partners.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-gray-600 hover:text-brand-navy transition-colors text-xs font-bold uppercase tracking-wider"
            >
              <div className="p-2 rounded-lg bg-white shadow-xs text-brand-red">
                {item.icon}
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

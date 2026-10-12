"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowDownRight, ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";

export default function CountryServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const updateVisible = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setVisibleItems(1);
        } else if (window.innerWidth < 1024) {
          setVisibleItems(2);
        } else if (window.innerWidth < 1280) {
          setVisibleItems(3);
        } else {
          setVisibleItems(4);
        }
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, countries.length - visibleItems);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* High-Definition Subtle World Map Watermark matching reference image */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex items-center justify-center">
        <img
          src="/images/backgrounds/world-map.jpg"
          alt="World map watermark"
          className="w-full h-full object-cover filter grayscale contrast-200"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls matching reference image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-200/70 mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs font-black uppercase tracking-widest mb-2 font-heading">
              <span className="w-5 h-0.5 bg-[#E31B23] rounded-full" />
              <span>COUNTRIES WE OFFER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#101C2A] uppercase tracking-tight font-heading">
              Services for Following Countries
            </h2>
          </div>

          {/* Square Navigation Controls with smooth action */}
          <div className="flex items-center space-x-2.5 mt-5 md:mt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Countries"
              className="w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-[#E31B23] hover:text-white hover:border-[#E31B23] text-[#101C2A] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Countries"
              className="w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-[#E31B23] hover:text-white hover:border-[#E31B23] text-[#101C2A] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smooth Sliding Carousel Track */}
        <div className="overflow-hidden -mx-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {countries.map((country) => (
              <div
                key={country.id}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="flex flex-col justify-between h-full group bg-transparent">
                  <div>
                    {/* 3D-Look Circular Flag Badge without hover scale */}
                    <div className="mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center ring-1 ring-gray-200/60 p-0">
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover object-center block"
                        />
                      </div>
                    </div>

                    {/* Eyebrow Category */}
                    <span className="text-xs sm:text-[12px] font-extrabold text-[#E31B23] uppercase tracking-wider block mb-1.5 font-heading">
                      IMMIGRATION, IMMIGRATE TO
                    </span>

                    {/* Country Name */}
                    <h3 className="text-2xl sm:text-[26px] font-black text-[#101C2A] group-hover:text-[#E31B23] transition-colors font-heading mb-3 tracking-tight">
                      <Link href={`/countries/${country.slug}`}>
                        {country.name}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-[14.5px] text-gray-600 leading-relaxed line-clamp-3 mb-6">
                      {country.description}
                    </p>

                    {/* Slanted Arrow Visa Checkpoints matching reference image */}
                    <div className="space-y-2.5 border-t border-gray-100 pt-5">
                      {country.visaTypes.slice(0, 3).map((vType, idx) => (
                        <Link
                          key={idx}
                          href={`/countries/${country.slug}`}
                          className="flex items-center space-x-2.5 text-sm font-semibold text-gray-700 hover:text-[#E31B23] transition-colors group/item"
                        >
                          <ArrowDownRight className="w-4 h-4 text-gray-400 group-hover/item:text-[#E31B23] transform group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition-transform flex-shrink-0" />
                          <span className="line-clamp-1">{vType}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Explore Link */}
                  <div className="pt-6 mt-4">
                    <Link
                      href={`/countries/${country.slug}`}
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-black text-[#101C2A] group-hover:text-[#E31B23] uppercase tracking-wider transition-colors font-heading"
                    >
                      <span>Explore {country.shortName || country.name}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Countries Link */}
        <div className="text-center mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/countries"
            className="inline-flex items-center space-x-2 bg-[#101C2A] hover:bg-[#E31B23] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <span>View All Global Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

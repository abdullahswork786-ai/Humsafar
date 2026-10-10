"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setVisibleItems(1);
        } else if (window.innerWidth < 1024) {
          setVisibleItems(2);
        } else {
          setVisibleItems(3);
        }
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Squircle Next/Prev Buttons matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-200/70 mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
              <span className="w-6 h-0.5 bg-[#E31B23] rounded-full" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101C2A] uppercase tracking-tight font-heading">
              Feedback From Our Clients
            </h2>
          </div>

          {/* Squircle Buttons matching Image 2 */}
          <div className="flex items-center space-x-2.5 mt-5 md:mt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#E31B23] hover:text-white hover:border-[#E31B23] text-[#101C2A] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#E31B23] hover:text-white hover:border-[#E31B23] text-[#101C2A] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smooth Sliding Testimonials Carousel Track */}
        <div className="overflow-hidden -mx-4 pt-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="relative p-7 sm:p-8 rounded-3xl bg-[#FAFCFE] border border-gray-200/80 shadow-[0_2px_12px_-3px_rgba(16,28,42,0.04)] hover:border-gray-300 transition-all duration-300 flex flex-col justify-between h-full group">
                  {/* Red Quote Accent Badge */}
                  <div className="absolute -top-3.5 right-7 w-10 h-10 rounded-2xl bg-[#E31B23] text-white flex items-center justify-center shadow-xs">
                    <Quote className="w-4 h-4 fill-white" />
                  </div>

                  <div>
                    {/* Golden Stars Rating */}
                    <div className="flex items-center space-x-1 mb-4 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review Quote Text */}
                    <p className="text-gray-700 text-sm italic leading-relaxed mb-6">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  {/* Client Profile Section */}
                  <div className="flex items-center space-x-3.5 pt-5 border-t border-gray-100">
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs ring-1 ring-gray-200"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 bg-[#008A4B] text-white p-0.5 rounded-full ring-2 ring-white">
                        <CheckCircle2 className="w-3 h-3" />
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="font-extrabold text-[#101C2A] text-sm font-heading">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#E31B23] font-bold mt-0.5">
                        {item.destination}
                      </p>
                      <p className="text-[11px] text-gray-500 line-clamp-1">
                        {item.service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

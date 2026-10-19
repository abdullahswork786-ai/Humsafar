"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const slides = [
    {
      title: "STUDY IN GLOBALLY RECOGNIZED UNIVERSITIES",
      subtitle: "From course & university selection to application preparation and student visa guidance, explore top education pathways worldwide.",
      buttonText: "MORE DETAILS",
      href: "/study-abroad",
      badgeText: "STUDY ABROAD & IMMIGRATION",
    },
    {
      title: "LOOKING TO SETTLE IN WORLD'S BEST COUNTRIES",
      subtitle: "Planning to travel, study, work, do business or settle abroad? Our experienced team provides professional guidance to navigate your application.",
      buttonText: "EXPLORE PATHWAYS",
      href: "/services/immigration",
      badgeText: "PR & SKILLED IMMIGRATION",
    },
    {
      title: "YOUR TRUSTED PARTNER FOR VISA CONSULTANCY",
      subtitle: "Transparent profile assessment, destination-specific document checklists, and end-to-end guidance for Canada, UK, Australia, USA & Europe.",
      buttonText: "GET FREE ASSESSMENT",
      href: "/free-assessment",
      badgeText: "VISA & IMMIGRATION",
    }
  ];

  const goToSlide = (nextIndex) => {
    if (isTransitioning || nextIndex === currentSlide) return;
    setIsTransitioning(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setCurrentSlide(nextIndex);
      setIsTransitioning(false);
    }, 220);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 220);
    }, 6500);

    return () => {
      clearInterval(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="relative bg-[#101C2A] overflow-hidden">
      {/* Responsive Hero Banner fitting with TopBar and Navbar */}
      <div className="relative min-h-[calc(100vh-108px)] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
        {/* Background Image with Deep Navy & Subtle Red Ambient Blend */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="International study and travel"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          />

          {/* Deep Navy #101C2A Gradient Blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B131C]/95 via-[#101C2A]/85 to-[#0B131C]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101C2A]/90 via-transparent to-[#0B131C]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,27,35,0.25)_0%,rgba(16,28,42,0.9)_100%)]" />
        </div>

        {/* Carousel Left & Right Arrow Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous Slide"
          className="hidden md:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-black/40 hover:bg-[#E31B23] border border-white/20 items-center justify-center text-white transition-all duration-200 backdrop-blur-md shadow-xl active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next Slide"
          className="hidden md:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-black/40 hover:bg-[#E31B23] border border-white/20 items-center justify-center text-white transition-all duration-200 backdrop-blur-md shadow-xl active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          {/* Official Logo Stamp Emblem */}
          <div className="inline-block mb-4 sm:mb-5 animate-fade-in">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full border-2 border-white/90 bg-white p-1 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="/images/logo.jpg"
                alt="HUMSAFAR Official Emblem"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Animated Hero Text with Blur Fade Transition */}
          <div
            className={`w-full flex flex-col items-center will-change-[opacity,filter,transform] transition-all duration-500 ease-out ${
              isTransitioning
                ? "opacity-0 blur-md -translate-y-2 scale-[0.98]"
                : "opacity-100 blur-0 translate-y-0 scale-100"
            }`}
          >
            {/* Main Hero Title */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight md:leading-none max-w-4xl mx-auto mb-4 sm:mb-5 drop-shadow-xl font-heading">
              {active.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow">
              {active.subtitle}
            </p>
          </div>

          {/* Action Buttons (Subtle & gentle transition, no heavy blur) */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-300 ease-out ${
              isTransitioning
                ? "opacity-85 translate-y-[2px]"
                : "opacity-100 translate-y-0"
            }`}
          >
            <Link
              href={active.href}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white hover:text-[#101C2A] text-white border-2 border-white font-extrabold px-8 py-3.5 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm backdrop-blur-xs shadow-xl transform hover:-translate-y-0.5"
            >
              <span className={`transition-opacity duration-200 ${isTransitioning ? "opacity-60" : "opacity-100"}`}>
                {active.buttonText}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/free-assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#E31B23] hover:bg-[#C2131A] text-white font-extrabold px-8 py-3.5 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-red-glow hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <span>FREE ASSESSMENT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                disabled={isTransitioning}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-[#E31B23]" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

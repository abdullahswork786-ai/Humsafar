"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, User, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
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

  const maxIndex = Math.max(0, blogPosts.length - visibleItems);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Squircle Next/Prev Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-200/70 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs md:text-sm font-bold uppercase tracking-widest mb-2 font-heading">
              <span className="w-6 h-0.5 bg-[#E31B23] rounded-full" />
              <span>OUR BLOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101C2A] uppercase tracking-tight font-heading">
              Read Our Latest Insights
            </h2>
          </div>

          {/* Squircle Buttons */}
          <div className="flex items-center space-x-2.5 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Article"
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#E31B23] hover:text-white hover:border-[#E31B23] text-[#101C2A] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Article"
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#E31B23] hover:text-white hover:border-[#E31B23] text-[#101C2A] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smooth Sliding Blog Carousel Track */}
        <div className="overflow-hidden -mx-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <article className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(16,28,42,0.06)] hover:shadow-[0_12px_30px_-4px_rgba(16,28,42,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
                  <div>
                    {/* Image with Date Ribbon Badge */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Red Date Ribbon Badge */}
                      <div className="absolute top-0 left-4 bg-[#E31B23] text-white px-3.5 py-2.5 text-center rounded-b-xl shadow-md z-10">
                        <span className="block text-sm font-black leading-tight uppercase font-heading">
                          {post.date.split(" ")[0]}
                        </span>
                        <span className="block text-xs uppercase font-bold text-red-100 font-heading">
                          {post.date.split(" ")[1]}
                        </span>
                      </div>

                      {/* Category Tag */}
                      <div className="absolute bottom-3 right-3 bg-[#101C2A]/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm">
                        {post.category}
                      </div>
                    </div>

                    {/* Content with Enhanced Readable Typography */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center space-x-3.5 text-xs sm:text-sm font-medium text-gray-500 mb-3.5">
                        <span className="flex items-center space-x-1.5">
                          <User className="w-4 h-4 text-[#E31B23]" />
                          <span className="font-semibold text-gray-700">{post.author}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1.5">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-[22px] font-bold text-[#101C2A] group-hover:text-[#E31B23] transition-colors line-clamp-2 mb-3.5 leading-snug font-heading">
                        {post.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 sm:p-7 pt-0 border-t border-gray-100">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-sm font-extrabold text-[#101C2A] group-hover:text-[#E31B23] transition-colors uppercase tracking-wider pt-4 font-heading"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* View All Articles Link */}
        <div className="text-center mt-12 pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-[#101C2A] hover:bg-[#E31B23] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <span>View All Insights & Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

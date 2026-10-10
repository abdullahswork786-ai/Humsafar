"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Office & Workspace", "Team", "Seminars & Sessions", "University Events", "Client Moments"];

  const galleryItems = [
    {
      id: 1,
      title: "Student Counseling Session",
      category: "Seminars & Sessions",
      image: "/images/gallery/gallery-1.jpg",
    },
    {
      id: 2,
      title: "Advisory Team Consultation",
      category: "Office & Workspace",
      image: "/images/gallery/gallery-2.jpg",
    },
    {
      id: 3,
      title: "Study Abroad Seminar",
      category: "University Events",
      image: "/images/gallery/gallery-3.jpg",
    },
    {
      id: 4,
      title: "Client Document Review",
      category: "Team",
      image: "/images/gallery/gallery-4.jpg",
    },
    {
      id: 5,
      title: "Successful Visa Lodgment Meet",
      category: "Client Moments",
      image: "/images/gallery/gallery-5.jpg",
    },
    {
      id: 6,
      title: "Modern Consultancy Front Office",
      category: "Office & Workspace",
      image: "/images/gallery/gallery-6.jpg",
    },
  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
            <span>MEDIA & ACTIVITIES</span>
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            HUMSAFAR Gallery
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Take a look inside our offices, seminar events, counseling sessions, and memorable moments.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-brand-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-brand-red text-white shadow-sm"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

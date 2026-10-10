import Link from "next/link";
import { Target, Eye, Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | HUMSAFAR Visa & Immigration Consultancy",
  description: "Learn about HUMSAFAR - our story, mission, vision, and client-focused approach to international visa, immigration, and study abroad pathways.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <div className="bg-[#101C2A] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs md:text-sm font-bold uppercase tracking-widest mb-3 font-heading">
            <span className="w-8 h-0.5 bg-[#E31B23] rounded-full" />
            <span>WHO WE ARE</span>
            <span className="w-8 h-0.5 bg-[#E31B23] rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">
            About HUMSAFAR
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Professional guidance for individuals and families pursuing international travel, education, career, and settlement pathways.
          </p>
        </div>
      </div>

      {/* Main Story & Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
                <img
                  src="/images/about/team-meeting.jpg"
                  alt="HUMSAFAR Consultancy team meeting"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs font-bold uppercase tracking-widest font-heading">
                <span>OUR STORY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#101C2A] uppercase font-heading">
                Dedicated to Transparent & Ethical Advisory
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                HUMSAFAR was established with a singular mission: to eliminate ambiguity and misinformation in international visa applications and foreign university admissions.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Navigating the immigration rules of countries like the UK, Canada, Australia, the USA, and Europe requires rigorous attention to documentation and realistic appraisal of individual profiles. Our team focuses on giving applicants clear, practical, and step-by-step roadmaps.
              </p>

              <div className="pt-2">
                <Link
                  href="/free-assessment"
                  className="inline-flex items-center space-x-2 bg-[#E31B23] hover:bg-[#C8141B] text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md text-xs sm:text-sm uppercase tracking-wider font-heading"
                >
                  <span>Request Profile Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Our Mission */}
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-gray-200/80 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(16,28,42,0.06)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E31B23] text-white flex items-center justify-center mb-6 shadow-md shadow-red-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101C2A] mb-3.5 font-heading">
                  Our Mission
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To provide transparent, accurate, and ethical visa and educational counseling that empowers applicants to make informed life-changing decisions.
                </p>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-gray-200/80 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(16,28,42,0.06)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E31B23] text-white flex items-center justify-center mb-6 shadow-md shadow-red-500/20">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101C2A] mb-3.5 font-heading">
                  Our Vision
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be recognized as the most dependable and honest overseas consultancy known for client integrity, document precision, and structured pathways.
                </p>
              </div>
            </div>

            {/* Card 3: Our Approach */}
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-gray-200/80 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(16,28,42,0.06)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E31B23] text-white flex items-center justify-center mb-6 shadow-md shadow-red-500/20">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101C2A] mb-3.5 font-heading">
                  Our Approach
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We believe in thorough profile assessment first. We never advise on pathways that do not fit the applicant&apos;s academic or professional reality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

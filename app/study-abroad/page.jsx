import Link from "next/link";
import { ArrowRight, GraduationCap, Clock, DollarSign, Briefcase } from "lucide-react";
import { studyDestinations } from "@/data/studyDestinations";

export const metadata = {
  title: "Study Abroad & Student Visa | HUMSAFAR Consultancy",
  description: "Explore top study destinations including UK, Canada, Australia, USA, Germany, and Italy. Get guidance on universities, admissions, and student visas.",
};

export default function StudyAbroadPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
            <span>STUDY ABROAD CONSULTANCY</span>
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Study in World&apos;s Top Destinations
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            From destination and course selection to application preparation and student visa guidance, our team helps you understand the journey before you make your next move.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={dest.coverImage}
                      alt={`Study in ${dest.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-navy/90 text-white backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow text-xs font-bold">
                      <GraduationCap className="w-4 h-4 text-brand-red" />
                      <span>{dest.name}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                      Study in {dest.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {dest.tagline}
                    </p>

                    <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                        <span><strong>Tuition:</strong> {dest.avgTuition}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                        <span><strong>Work Rights:</strong> {dest.workPermit}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/study-abroad/${dest.slug}`}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-navy group-hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors"
                  >
                    <span>View Study Options</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

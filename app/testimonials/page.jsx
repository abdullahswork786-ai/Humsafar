import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Client Testimonials | HUMSAFAR Visa & Immigration",
  description: "Read genuine feedback and reviews from students, professionals, and families who consulted HUMSAFAR for their visa and study applications.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
            <span>REAL EXPERIENCES</span>
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            What Our Clients Say
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Honest feedback from applicants who trusted HUMSAFAR with their international travel, education, and immigration journeys.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative p-8 rounded-3xl bg-white border border-gray-200/80 shadow-[0_2px_12px_-3px_rgba(16,28,42,0.04)] hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="absolute -top-3.5 right-7 w-10 h-10 rounded-2xl bg-[#E31B23] text-white flex items-center justify-center shadow-xs">
                  <Quote className="w-4 h-4 fill-white" />
                </div>

                <div>
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm italic leading-relaxed mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-3.5 pt-5 border-t border-gray-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs ring-1 ring-gray-200 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-extrabold text-[#101C2A] text-sm font-heading">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#E31B23] font-bold mt-0.5">
                      {item.destination}
                    </p>
                    <p className="text-[11px] text-gray-500 line-clamp-1">
                      {item.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/free-assessment"
              className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-md"
            >
              <span>Start Your Own Application Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { countries } from "@/data/countries";

export const metadata = {
  title: "Global Destinations | HUMSAFAR Visa & Immigration",
  description: "Explore visa, study, and immigration pathways for Canada, United Kingdom, Australia, USA, Germany, Italy, and UAE.",
};

export default function CountriesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
            <span>GLOBAL REACH</span>
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Destinations & Countries We Support
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            Professional visa assessment, document checklist verification, and application guidance for major worldwide destinations.
          </p>
        </div>
      </div>

      {/* Countries Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div
                key={country.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={country.coverImage}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-2 shadow">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-xs font-bold text-brand-navy">{country.name}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      {country.description}
                    </p>

                    <div className="space-y-2 border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                        Popular Pathways:
                      </span>
                      {country.visaTypes.map((vType, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                          <span>{vType}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/countries/${country.slug}`}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-navy group-hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors"
                  >
                    <span>Explore {country.name}</span>
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

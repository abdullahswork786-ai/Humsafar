import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Shield, Globe, Award, BookOpen } from "lucide-react";
import { countries } from "@/data/countries";

export function generateStaticParams() {
  return countries.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const country = countries.find((c) => c.slug === resolvedParams?.slug);
  if (!country) return { title: "Country Not Found" };
  return {
    title: `Visa & Immigration for ${country.name} | HUMSAFAR`,
    description: country.description,
  };
}

export default async function CountryDetailPage({ params }) {
  const resolvedParams = await params;
  const country = countries.find((c) => c.slug === resolvedParams?.slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <Link href="/countries" className="hover:underline">Destinations</Link>
            <span>/</span>
            <span>{country.name}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-4">
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-8 h-8 rounded-full object-cover border-2 border-brand-red flex-shrink-0"
            />
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              {country.name} Visa & Immigration
            </h1>
          </div>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {country.description}
          </p>
        </div>
      </div>

      {/* Main Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              <div className="rounded-3xl overflow-hidden shadow-lg h-72 sm:h-96">
                <img
                  src={country.coverImage}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-brand-navy uppercase mb-4">
                  Why Choose {country.name}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {country.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-brand-light border border-gray-100 flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa Options */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="text-xl font-bold text-brand-navy uppercase flex items-center">
                  <span className="w-2 h-2 rounded-full bg-brand-red mr-2"></span>
                  Supported Visa Categories for {country.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.visaTypes.map((v, idx) => (
                    <div key={idx} className="p-3.5 bg-white rounded-xl shadow-xs border border-gray-100 flex items-center space-x-2 text-xs font-bold text-brand-navy">
                      <Globe className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Abroad link if available */}
              {country.studyAbroadAvailable && (
                <div className="p-8 rounded-3xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-xs uppercase font-bold text-brand-red tracking-wider">
                      HIGHER EDUCATION
                    </span>
                    <h4 className="text-xl font-bold">Interested in Studying in {country.name}?</h4>
                    <p className="text-xs text-gray-300">
                      Explore top university admissions, intakes, and student visa checklists.
                    </p>
                  </div>
                  <Link
                    href={`/study-abroad/${country.slug}`}
                    className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md flex-shrink-0"
                  >
                    <span>Study in {country.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4 shadow-xl">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-red">
                  APPLY FOR {country.name}
                </span>
                <h3 className="text-xl font-black uppercase">
                  Free Assessment
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Have our consultants review your profile eligibility for {country.name}.
                </p>
                <Link
                  href="/free-assessment"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3.5 px-4 rounded-xl transition-all uppercase tracking-wider text-xs shadow-md"
                >
                  <span>Start Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-6 rounded-3xl bg-brand-light border border-gray-100">
                <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-4">
                  All Destinations
                </h4>
                <div className="space-y-2">
                  {countries.map((c) => (
                    <Link
                      key={c.id}
                      href={`/countries/${c.slug}`}
                      className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        c.slug === country.slug
                          ? "bg-brand-red text-white"
                          : "bg-white text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <img src={c.flag} alt="" className="w-4 h-4 rounded-full object-cover" />
                      <span>{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

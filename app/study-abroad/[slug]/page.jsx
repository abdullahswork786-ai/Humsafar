import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, GraduationCap, Calendar, DollarSign, Briefcase, BookOpen, Shield } from "lucide-react";
import { studyDestinations } from "@/data/studyDestinations";

export function generateStaticParams() {
  return studyDestinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const dest = studyDestinations.find((d) => d.slug === resolvedParams?.slug);
  if (!dest) return { title: "Study Destination Not Found" };
  return {
    title: `Study in ${dest.name} | HUMSAFAR Student Visa Guidance`,
    description: dest.overview,
  };
}

export default async function StudyDetailPage({ params }) {
  const resolvedParams = await params;
  const dest = studyDestinations.find((d) => d.slug === resolvedParams?.slug);

  if (!dest) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <Link href="/study-abroad" className="hover:underline">Study Abroad</Link>
            <span>/</span>
            <span>{dest.name}</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Study in {dest.name}
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            {dest.tagline}
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
                  src={dest.coverImage}
                  alt={`Study in ${dest.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-brand-navy uppercase mb-4">
                  Overview of Higher Education in {dest.name}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {dest.overview}
                </p>
              </div>

              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-brand-light border border-gray-100">
                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block mb-1">
                    Major Intakes
                  </span>
                  <ul className="text-xs text-gray-700 space-y-1 font-medium">
                    {dest.intakes.map((intake, i) => (
                      <li key={i}>• {intake}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-brand-light border border-gray-100">
                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block mb-1">
                    Tuition Range
                  </span>
                  <p className="text-xs text-gray-700 font-semibold">{dest.avgTuition}</p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-light border border-gray-100">
                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block mb-1">
                    Post-Study Work
                  </span>
                  <p className="text-xs text-gray-700 font-semibold">{dest.workPermit}</p>
                </div>
              </div>

              {/* Popular Programs */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="text-xl font-bold text-brand-navy uppercase flex items-center">
                  <span className="w-2 h-2 rounded-full bg-brand-red mr-2"></span>
                  Popular Study Fields & Courses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dest.popularPrograms.map((prog, idx) => (
                    <div key={idx} className="p-3.5 bg-white rounded-xl shadow-xs border border-gray-100 flex items-center space-x-2 text-xs font-bold text-brand-navy">
                      <GraduationCap className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6-Step Admission & Visa Process */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-navy uppercase">
                  Our 6-Step Student Visa Process for {dest.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "1. Profile & Academic Assessment",
                    "2. Course & University Selection",
                    "3. Application & Offer Letter (CAS/I-20/LOA)",
                    "4. Financial & Sponsor Documentation",
                    "5. Statement of Purpose (SOP) Guidance",
                    "6. Student Visa Lodgment & Follow-Up"
                  ].map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center space-x-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4 shadow-xl">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-red">
                  STUDENT COUNSELING
                </span>
                <h3 className="text-xl font-black uppercase">
                  Apply for {dest.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Get in touch with our student counseling department to assess your academic background and scholarship possibilities.
                </p>
                <Link
                  href="/free-assessment"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3.5 px-4 rounded-xl transition-all uppercase tracking-wider text-xs shadow-md"
                >
                  <span>Student Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-6 rounded-3xl bg-brand-light border border-gray-100">
                <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-4">
                  Other Study Destinations
                </h4>
                <div className="space-y-2">
                  {studyDestinations.map((d) => (
                    <Link
                      key={d.id}
                      href={`/study-abroad/${d.slug}`}
                      className={`block px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        d.slug === dest.slug
                          ? "bg-brand-red text-white"
                          : "bg-white text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Study in {d.name}
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

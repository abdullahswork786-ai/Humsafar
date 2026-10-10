import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Briefcase, FileCheck, Globe, GraduationCap } from "lucide-react";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services | HUMSAFAR Visa & Immigration Consultancy",
  description: "Explore our comprehensive visa and immigration services: Tourist & Visit Visa, Business Visa, Work Visa, Immigration & PR, and Study Abroad.",
};

export default function ServicesPage() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-6 h-6 text-brand-red" />;
      case "Briefcase": return <Briefcase className="w-6 h-6 text-brand-red" />;
      case "FileCheck": return <FileCheck className="w-6 h-6 text-brand-red" />;
      case "Globe": return <Globe className="w-6 h-6 text-brand-red" />;
      case "GraduationCap": return <GraduationCap className="w-6 h-6 text-brand-red" />;
      default: return <FileCheck className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
            <span>EXPERT SOLUTIONS</span>
            <span className="w-8 h-0.5 bg-brand-red rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Visa, Immigration & Study Abroad Services
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            Whether you are planning a short visit, business trip, overseas employment, long-term immigration or international study, HUMSAFAR provides structured guidance around your destination and goals.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm p-3 rounded-xl">
                    {getIcon(service.icon)}
                  </div>
                </div>
              </div>

              {/* Text info */}
              <div className={`lg:col-span-7 space-y-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                    SERVICE CATEGORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-brand-navy uppercase mt-1">
                    {service.title}
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Support points */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    What We Help With:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.supportPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-sm"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/free-assessment"
                    className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-brand-navy text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                  >
                    <span>Get Assessment</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

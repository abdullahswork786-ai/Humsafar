import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams?.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | HUMSAFAR Visa Consultancy`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams?.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {service.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10">
              <div className="rounded-3xl overflow-hidden shadow-lg h-72 sm:h-96">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-brand-navy uppercase mb-4">
                  Overview of {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.fullDesc}
                </p>
              </div>

              {/* What HUMSAFAR Helps With */}
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-brand-navy uppercase mb-6 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-brand-red mr-2"></span>
                  What HUMSAFAR Helps With
                </h3>
                <div className="space-y-3">
                  {service.supportPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Destinations */}
              <div>
                <h3 className="text-xl font-bold text-brand-navy uppercase mb-4">
                  Popular Destinations for this Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.popularDestinations.map((dest, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-gray-100 text-brand-navy font-bold text-xs uppercase tracking-wider"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Disclaimer */}
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start space-x-3">
                <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Please Note:</strong> Visa rules and criteria vary significantly depending on country regulations, applicant profile, and consulate discretion. HUMSAFAR provides documentation support and application assistance, but cannot guarantee visa outcomes.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4 shadow-xl">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-red">
                  GET STARTED
                </span>
                <h3 className="text-xl font-black uppercase">
                  Ready to Apply?
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Request a free profile review from our visa counseling specialists.
                </p>
                <Link
                  href="/free-assessment"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3.5 px-4 rounded-xl transition-all uppercase tracking-wider text-xs shadow-md"
                >
                  <span>Free Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-6 rounded-3xl bg-brand-light border border-gray-100">
                <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-4">
                  Other Services
                </h4>
                <div className="space-y-2">
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className={`block px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        s.slug === service.slug
                          ? "bg-brand-red text-white"
                          : "bg-white text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {s.title}
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

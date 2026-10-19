"use client";

import Link from "next/link";
import { Plane, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { services } from "@/data/services";
import { countries } from "@/data/countries";
import { navigation } from "@/data/navigation";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#101C2A] text-white pt-10 pb-6 overflow-hidden border-t border-[#1A2D42]">
      {/* Airplane Silhouette Background Watermark */}
      <div className="absolute right-0 bottom-10 opacity-5 pointer-events-none transform translate-x-1/4">
        <Plane className="w-[500px] h-[500px] text-white -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-8 border-b border-white/10">
          {/* Column 1: Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              HUMSAFAR is a professional visa, immigration and study abroad consultancy helping individuals and families understand international travel, study, work and immigration pathways.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E31B23] flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E31B23] flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E31B23] flex items-center justify-center text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E31B23] flex items-center justify-center text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Visa Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center font-heading">
              <span className="w-2 h-2 rounded-full bg-[#E31B23] mr-2"></span>
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              {services.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-[#E31B23] hover:pl-1 transition-all inline-block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Countries */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center font-heading">
              <span className="w-2 h-2 rounded-full bg-[#E31B23] mr-2"></span>
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              {countries.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/countries/${c.slug}`}
                    className="hover:text-[#E31B23] hover:pl-1 transition-all inline-block"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center font-heading">
              <span className="w-2 h-2 rounded-full bg-[#E31B23] mr-2"></span>
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#E31B23] mt-0.5 flex-shrink-0" />
                <span>{navigation.contactInfo.address}</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#E31B23] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">Official Phone Number</span>
                  <a href={`tel:${navigation.contactInfo.officialPhone}`} className="text-white hover:text-[#E31B23] transition-colors font-medium">
                    {navigation.contactInfo.officialPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#E31B23] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">Official Mobile Number</span>
                  <a href={`tel:${navigation.contactInfo.officialMobile}`} className="text-white hover:text-[#E31B23] transition-colors font-medium">
                    {navigation.contactInfo.officialMobile}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <svg className="w-4 h-4 fill-[#25D366] mt-0.5 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">WhatsApp Number</span>
                  <a href={navigation.contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] transition-colors font-medium">
                    {navigation.contactInfo.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#E31B23] flex-shrink-0" />
                <a href={`mailto:${navigation.contactInfo.email}`} className="hover:text-white transition-colors">
                  {navigation.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#E31B23] mt-0.5 flex-shrink-0" />
                <span>{navigation.contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Copyright Bar */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-white">HUMSAFAR</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/free-assessment" className="hover:text-[#E31B23] transition-colors font-bold">
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

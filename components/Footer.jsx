"use client";

import Link from "next/link";
import { Plane, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { services } from "@/data/services";
import { countries } from "@/data/countries";
import { navigation } from "@/data/navigation";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#101C2A] text-white pt-16 pb-8 overflow-hidden border-t border-[#1A2D42]">
      {/* Airplane Silhouette Background Watermark */}
      <div className="absolute right-0 bottom-10 opacity-5 pointer-events-none transform translate-x-1/4">
        <Plane className="w-[500px] h-[500px] text-white -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
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
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#E31B23] flex-shrink-0" />
                <span>{navigation.contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#E31B23] flex-shrink-0" />
                <span>{navigation.contactInfo.email}</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#E31B23] mt-0.5 flex-shrink-0" />
                <span>{navigation.contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
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

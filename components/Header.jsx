"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Globe,
  FileCheck,
  Compass,
  Briefcase,
  Phone,
  Mail
} from "lucide-react";
import { navigation } from "@/data/navigation";
import Logo from "@/components/Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [headerBottom, setHeaderBottom] = useState(68);
  const headerRef = useRef(null);
  const pathname = usePathname();

  // Scroll listener for sticky header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update header height/bottom position on resize or scroll
  const updateHeaderPosition = () => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setHeaderBottom(Math.round(rect.bottom));
    }
  };

  useEffect(() => {
    updateHeaderPosition();
    window.addEventListener("resize", updateHeaderPosition, { passive: true });
    return () => window.removeEventListener("resize", updateHeaderPosition);
  }, []);

  // Automatically close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [pathname]);

  // Lock body scroll and update position when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      updateHeaderPosition();
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (label) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-4 h-4 text-[#E31B23]" />;
      case "Briefcase": return <Briefcase className="w-4 h-4 text-[#E31B23]" />;
      case "FileCheck": return <FileCheck className="w-4 h-4 text-[#E31B23]" />;
      case "Globe": return <Globe className="w-4 h-4 text-[#E31B23]" />;
      case "GraduationCap": return <GraduationCap className="w-4 h-4 text-[#E31B23]" />;
      default: return <FileCheck className="w-4 h-4 text-[#E31B23]" />;
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#101C2A]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 lg:py-3.5 border-b border-[#1A2D42]"
            : "bg-[#101C2A] shadow-lg py-3 sm:py-3.5 lg:py-4 border-b border-[#1A2D42]/60"
        }`}
      >
        {/* Header Content Bar */}
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Official HUMSAFAR Logo */}
            <Logo className="mr-3 sm:mr-8 xl:mr-12" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[13px] font-bold text-white uppercase tracking-wider flex-1 justify-center">
              {navigation.mainNav.map((item) => {
                const hasDropdown = Boolean(item.dropdown);
                const isActive = pathname === item.href;

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`hover:text-[#E31B23] transition-colors duration-200 py-1 whitespace-nowrap relative ${
                        isActive ? "text-[#E31B23]" : "text-white/95"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#E31B23] rounded-full" />
                      )}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 py-1 text-white/95 hover:text-[#E31B23] transition-colors duration-200 whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E31B23] transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 px-2 text-[#101C2A] normal-case tracking-normal">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-red-50 hover:text-[#E31B23] text-gray-700 text-xs font-semibold transition-all group/sub"
                          >
                            {subItem.icon && (
                              <span className="p-1.5 rounded-lg bg-gray-50 group-hover/sub:bg-white transition-colors">
                                {getServiceIcon(subItem.icon)}
                              </span>
                            )}
                            {subItem.code && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 group-hover/sub:bg-[#E31B23] group-hover/sub:text-white transition-colors">
                                {subItem.code}
                              </span>
                            )}
                            <span className="flex-1">{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Clean Red ENQUIRY Button on Desktop */}
            <div className="hidden lg:flex items-center flex-shrink-0 ml-8 xl:ml-12">
              <Link
                href="/free-assessment"
                className="inline-flex items-center space-x-1.5 bg-[#E31B23] hover:bg-[#C2131A] text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-red-glow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>ENQUIRY</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger / X Button & ENQUIRY CTA */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
              <Link
                href="/free-assessment"
                className="bg-[#E31B23] hover:bg-[#C2131A] text-white text-[11px] sm:text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm transition-transform active:scale-95 whitespace-nowrap"
              >
                ENQUIRY
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 active:bg-white/20 focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between items-center">
                  <span
                    className={`block h-0.5 w-6 rounded-full transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "bg-[#E31B23] rotate-45 translate-y-2" : "bg-white"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 rounded-full transition-all duration-200 ease-in-out ${
                      mobileMenuOpen ? "opacity-0 -translate-x-2" : "bg-white opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 rounded-full transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "bg-[#E31B23] -rotate-45 -translate-y-2" : "bg-white"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Full-Screen Mobile Drawer with Smooth Transitions */}
      <div
        data-lenis-prevent="true"
        className={`lg:hidden fixed inset-x-0 bottom-0 z-40 bg-[#0B131C] flex flex-col justify-between overflow-y-auto overscroll-contain transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
        style={{
          top: `${headerBottom}px`,
          height: `calc(100dvh - ${headerBottom}px)`,
        }}
      >
        {/* Navigation Item List */}
        <div className="px-4 sm:px-6 pt-4 pb-2 space-y-1.5 flex-1">
          {navigation.mainNav.map((item) => {
            const hasDropdown = Boolean(item.dropdown);
            const isExpanded = activeMobileDropdown === item.label;
            const isActive = pathname === item.href;

            if (!hasDropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-[#E31B23]/15 text-[#E31B23] border-l-2 border-[#E31B23]"
                      : "text-white/90 hover:text-white hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? "text-[#E31B23]" : "text-gray-500"
                    }`}
                  />
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-[#1A2D42]/40 pb-1">
                {/* Accordion Toggle Header */}
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown(item.label)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors duration-200 ${
                    isExpanded
                      ? "bg-white/5 text-white"
                      : "text-white/90 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={isExpanded}
                >
                  <span className="text-sm font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? "bg-[#E31B23] text-white rotate-180 shadow-sm"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Animated Accordion Content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="my-1.5 ml-2 pl-3 border-l-2 border-[#E31B23]/70 space-y-1 bg-[#101C2A]/60 rounded-r-xl p-2 border border-white/5">
                      {/* Main section overview link */}
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-[#E31B23] hover:bg-white/5 transition-colors"
                      >
                        <span>Explore All {item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Dropdown Items */}
                      {item.dropdown.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                              isSubActive
                                ? "bg-[#E31B23]/15 text-[#E31B23] font-bold"
                                : "text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10"
                            }`}
                          >
                            {subItem.icon && (
                              <span className="p-1 rounded-md bg-[#E31B23]/10 text-[#E31B23] flex-shrink-0">
                                {getServiceIcon(subItem.icon)}
                              </span>
                            )}
                            {subItem.code && (
                              <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-black/40 text-gray-300 border border-white/10 flex-shrink-0">
                                {subItem.code}
                              </span>
                            )}
                            <span className="flex-1">{subItem.label}</span>
                            <ChevronRight className="w-3 h-3 text-gray-500 flex-shrink-0" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom App-Style Quick Actions */}
        <div className="p-4 sm:p-5 border-t border-[#1A2D42] bg-[#080E16] space-y-2.5 mt-2 pb-8 sm:pb-6">
          {/* Free Assessment Action */}
          <Link
            href="/free-assessment"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center space-x-2 bg-[#E31B23] hover:bg-[#C2131A] text-white font-black py-3 px-4 rounded-xl shadow-lg shadow-red-950/40 text-xs uppercase tracking-wider transition-all transform active:scale-[0.98]"
          >
            <span>REQUEST FREE ASSESSMENT</span>
            <ChevronRight className="w-4 h-4" />
          </Link>

          {/* WhatsApp Direct Consultation */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2.5 bg-[#101C2A] hover:bg-[#152335] text-white border border-[#25D366]/40 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all transform active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-[#25D366] flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

          {/* Contact Hotline */}
          <div className="pt-1.5 flex items-center justify-between text-[11px] text-gray-400">
            <a
              href="tel:+920000000000"
              className="hover:text-white flex items-center space-x-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>{navigation.contactInfo.phone}</span>
            </a>
            <a
              href="mailto:info@humsafar.com"
              className="hover:text-white flex items-center space-x-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

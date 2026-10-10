"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    });

    // Auto-discover sections and headings to animate without manual bloat
    const selector = "section, .reveal-on-scroll, .reveal-heading, h2, .reveal-card";
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      // Avoid re-animating hero top banner to keep initial paint instantaneous
      if (el.closest("#hero") || el.hasAttribute("data-no-reveal")) {
        return;
      }
      el.classList.add("reveal-ready");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}


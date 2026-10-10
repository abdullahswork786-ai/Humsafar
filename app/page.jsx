import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import ProcessStrip from "@/components/ProcessStrip";
import CountryServices from "@/components/CountryServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsCounter from "@/components/StatsCounter";
import ContactInquirySection from "@/components/ContactInquirySection";
import BlogSection from "@/components/BlogSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with 3 Floating Cards (Matching Reference) */}
      <Hero />

      {/* 2. Services / About HUMSAFAR Intro Section */}
      <AboutIntro />

      {/* 3. 4-Step Process Strip (Red Banner) */}
      <ProcessStrip />

      {/* 4. Services for Following Countries (World Map Background) */}
      <CountryServices />

      {/* 5. Why Choose HUMSAFAR / Tailor-Made Services (Deep Navy) */}
      <WhyChooseUs />

      {/* 6. Feedback From Our Clients (Testimonials) */}
      <TestimonialsSection />

      {/* 7. Numbers / Stats Milestones Strip (Hidden for now) */}
      {/* <StatsCounter /> */}

      {/* 8. Read Our Latest Insights (Blog) */}
      <BlogSection />

      {/* 9. Modern 2-Column Contact Inquiry Section (Matching Reference UI) */}
      <ContactInquirySection />
    </>
  );
}

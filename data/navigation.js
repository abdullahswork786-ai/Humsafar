export const navigation = {
  mainNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Tourist & Visit Visa", href: "/services/tourist-visit-visa", icon: "Compass" },
        { label: "Business Visa", href: "/services/business-visa", icon: "Briefcase" },
        { label: "Work Visa", href: "/services/work-visa", icon: "FileCheck" },
        { label: "Immigration & PR", href: "/services/immigration", icon: "Globe" },
        { label: "Study Abroad & Student Visa", href: "/services/study-abroad-student-visa", icon: "GraduationCap" },
      ]
    },
    {
      label: "Countries",
      href: "/countries",
      dropdown: [
        { label: "Canada", href: "/countries/canada", code: "CA" },
        { label: "United Kingdom", href: "/countries/uk", code: "GB" },
        { label: "Australia", href: "/countries/australia", code: "AU" },
        { label: "United States", href: "/countries/usa", code: "US" },
        { label: "Germany", href: "/countries/germany", code: "DE" },
        { label: "Italy", href: "/countries/italy", code: "IT" },
        { label: "UAE", href: "/countries/uae", code: "AE" },
      ]
    },
    {
      label: "Study Abroad",
      href: "/study-abroad",
      dropdown: [
        { label: "Study in Canada", href: "/study-abroad/canada" },
        { label: "Study in UK", href: "/study-abroad/uk" },
        { label: "Study in Australia", href: "/study-abroad/australia" },
        { label: "Study in USA", href: "/study-abroad/usa" },
        { label: "Study in Germany", href: "/study-abroad/germany" },
        { label: "Study in Italy", href: "/study-abroad/italy" },
      ]
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ],
  contactInfo: {
    officialPhone: "+92-41-5635004",
    officialMobile: "+92-317-7757357",
    whatsapp: "+92-317-7757357",
    whatsappLink: "https://wa.me/923177757357",
    phone: "+92-41-5635004",
    email: "humsafarpk212@gmail.com",
    address: "Jarranwala Road, Faisalabad",
    hours: "10:00 AM - 10:00 PM",
  },
  socials: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "YouTube", href: "#" },
  ]
};

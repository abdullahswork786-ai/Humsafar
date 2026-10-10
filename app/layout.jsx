import "./globals.css";
import { Manrope } from "next/font/google";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HotlineBar from "@/components/HotlineBar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "HUMSAFAR | Visa, Immigration & Study Abroad Consultancy",
  description: "Your trusted partner for visa, immigration, and study abroad services. Transparent guidance for UK, Canada, Australia, USA, Germany, Italy, and UAE.",
  keywords: [
    "Visa consultancy",
    "Immigration services",
    "Study abroad",
    "Student visa",
    "UK study visa",
    "Canada student visa",
    "Australia visa",
    "HUMSAFAR consultancy"
  ],
  authors: [{ name: "HUMSAFAR" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} font-sans`}>
      <body className="antialiased min-h-screen flex flex-col justify-between font-sans">
        <SmoothScroll />
        <ScrollRevealProvider />
        <div>
          <TopBar />
          <Header />
          <main>{children}</main>
        </div>
        <div>
          <HotlineBar />
          <Footer />
        </div>
      </body>
    </html>
  );
}

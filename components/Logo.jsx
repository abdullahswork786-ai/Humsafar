import Link from "next/link";

export default function Logo({ className = "", size = "default" }) {
  const isLarge = size === "large";

  return (
    <Link href="/" className={`inline-flex items-center space-x-2.5 sm:space-x-3.5 group ${className}`}>
      {/* Official Circular Logo Emblem (Prominent so internal text is legible) */}
      <div className={`relative rounded-full overflow-hidden bg-white p-0.5 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border-2 border-[#E31B23] ${
        isLarge
          ? "w-20 h-20 sm:w-24 sm:h-24"
          : "w-14 h-14 sm:w-[72px] sm:h-[72px] md:w-[76px] md:h-[76px]"
      }`}>
        <img
          src="/images/logo.jpg"
          alt="HUMSAFAR Immigration & Visa Consultants"
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Typography representation kept small and sleek */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center leading-none">
          <span className="text-base sm:text-xl font-black text-white tracking-wider font-heading">
            HUM
          </span>
          <span className="text-base sm:text-xl font-black text-[#E31B23] tracking-wider font-heading">
            SAFAR
          </span>
        </div>
        <span className="text-[7.5px] sm:text-[8.5px] md:text-[9px] font-bold text-gray-300 tracking-wider uppercase mt-0.5 sm:mt-1">
          Immigration & Visa Consultants
        </span>
      </div>
    </Link>
  );
}

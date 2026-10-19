import { Headphones } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function TopBar() {
  return (
    <div className="bg-[#E31B23] text-white py-2.5 text-xs border-b border-red-700/50 relative z-50">
      {/* Full-width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Left: Hotline Banner */}
        <div className="flex items-center space-x-2 text-[11px] sm:text-xs">
          <Headphones className="w-3.5 h-3.5 text-white/95 flex-shrink-0" />
          <span className="hidden sm:inline text-white/90">Need Assistance:</span>
          <a
            href={`tel:${navigation.contactInfo.phone}`}
            className="text-white hover:underline font-bold tracking-wide"
          >
            {navigation.contactInfo.phone}
          </a>
          <span className="hidden md:inline text-white/70">or</span>
          <a
            href={`mailto:${navigation.contactInfo.email}`}
            className="hidden md:inline text-white hover:underline"
          >
            {navigation.contactInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
}

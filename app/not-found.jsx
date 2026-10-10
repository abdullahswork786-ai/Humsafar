import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-7xl sm:text-8xl font-black text-[#E31B23] font-heading block">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-[#101C2A] uppercase font-heading">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-[#101C2A] hover:bg-[#E31B23] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


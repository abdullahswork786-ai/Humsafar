import Link from "next/link";
import { ArrowRight, User, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Visa, Immigration & Study Abroad Insights | HUMSAFAR Blog",
  description: "Read expert articles, document checklists, visa policy updates, and study abroad guides from the HUMSAFAR Advisory Team.",
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-[#101C2A] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs md:text-sm font-bold uppercase tracking-widest mb-3 font-heading">
            <span className="w-8 h-0.5 bg-[#E31B23] rounded-full" />
            <span>KNOWLEDGE BASE</span>
            <span className="w-8 h-0.5 bg-[#E31B23] rounded-full" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">
            Visa, Immigration & Study Abroad Insights
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            Practical advice, document preparation guides, and updates to help you prepare strong visa applications.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(16,28,42,0.06)] hover:shadow-[0_12px_30px_-4px_rgba(16,28,42,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Red Date Ribbon Badge */}
                    <div className="absolute top-0 left-4 bg-[#E31B23] text-white px-3.5 py-2.5 text-center rounded-b-xl shadow-md z-10">
                      <span className="block text-sm font-black leading-tight uppercase font-heading">
                        {post.date.split(" ")[0]}
                      </span>
                      <span className="block text-xs uppercase font-bold text-red-100 font-heading">
                        {post.date.split(" ")[1]}
                      </span>
                    </div>
                    {/* Category Tag */}
                    <div className="absolute bottom-3 right-3 bg-[#101C2A]/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center space-x-3.5 text-xs sm:text-sm font-medium text-gray-500 mb-3.5">
                      <span className="flex items-center space-x-1.5">
                        <User className="w-4 h-4 text-[#E31B23]" />
                        <span className="font-semibold text-gray-700">{post.author}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1.5">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-[#101C2A] group-hover:text-[#E31B23] transition-colors line-clamp-2 mb-3.5 leading-snug font-heading">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-gray-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-sm font-extrabold text-[#101C2A] group-hover:text-[#E31B23] transition-colors uppercase tracking-wider pt-4 font-heading"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

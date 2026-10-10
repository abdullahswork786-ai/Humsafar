import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams?.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | HUMSAFAR Insights`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-[#101C2A] text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-[#E31B23] text-xs md:text-sm font-bold uppercase tracking-widest mb-3 font-heading">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight font-heading">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Single Blog Container matching Reference Template */}
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Author & Category Meta Header (Image 1) */}
          <div className="flex items-center space-x-3.5 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-sky-100 border-2 border-white shadow-xs flex-shrink-0">
              <img
                src={post.authorAvatar || "/images/testimonials/avatar-1.jpg"}
                alt={post.author || "admin"}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider font-heading">
                  {post.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                Post By: <span className="text-gray-700 capitalize">{post.author || "admin"}</span>
              </p>
            </div>
          </div>

          {/* Featured Hero Image (Image 1) */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm mb-8 border border-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 mb-8">
            {post.intro ? (
              post.intro.map((p, idx) => (
                <p key={idx} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Subsections with Solid Red Dot Bullets (Image 1) */}
          {post.subsections && post.subsections.length > 0 && (
            <div className="space-y-6 my-8">
              {post.subsections.map((sub, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23] flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#101C2A] font-heading">
                      {sub.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-5.5">
                    {sub.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Bullet Points with Hollow Red Rings (Image 2) */}
          {post.bulletPoints && post.bulletPoints.length > 0 && (
            <ul className="space-y-3.5 my-8 pl-5.5">
              {post.bulletPoints.map((bullet, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-[#E31B23] mt-1.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Main Section Heading & Explanations (Image 2) */}
          {post.mainSection && (
            <div className="my-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C2A] tracking-tight font-heading">
                {post.mainSection.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {post.mainSection.content}
              </p>
              {post.mainSection.content2 && (
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {post.mainSection.content2}
                </p>
              )}
            </div>
          )}

          {/* Stylized Red-Bordered Quote Box with Corner Quotes (Image 2) */}
          {post.quote && (
            <div className="relative my-12 p-8 sm:p-12 border border-[#E31B23]/70 rounded-xl bg-white shadow-xs">
              {/* Top Left Red Quote Mark */}
              <div className="absolute -top-4.5 left-6 bg-white px-2 text-[#E31B23] flex items-center space-x-0.5">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Centered Quote Content */}
              <div className="py-2 px-2 sm:px-6 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#101C2A] leading-snug font-heading">
                  {post.quote.text}
                </p>
                <span className="mt-4 inline-block text-sm sm:text-base font-bold text-[#E31B23] font-heading">
                  ~ {post.quote.author}
                </span>
              </div>

              {/* Bottom Right Red Quote Mark */}
              <div className="absolute -bottom-4.5 right-6 bg-white px-2 text-[#E31B23] flex items-center space-x-0.5 rotate-180">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          )}

          {/* Concluding Paragraph (Image 2) */}
          {post.conclusion && (
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed my-8">
              {post.conclusion}
            </p>
          )}

          {/* Tags & Social Share Bar (Image 2) */}
          <div className="mt-12 pt-6 pb-6 border-t border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Tags Section */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#101C2A] mr-2 font-heading">
                TAGS
              </span>
              {post.tags && post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-md bg-[#F1F3F5] hover:bg-gray-200 text-gray-700 text-xs font-semibold cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Social Share Section */}
            <div className="flex items-center space-x-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#101C2A] mr-1 font-heading">
                SHARE
              </span>
              <div className="flex items-center space-x-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-9 h-9 rounded-lg bg-[#3B5998] hover:bg-[#2d4373] text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="w-9 h-9 rounded-lg bg-[#00ACEE] hover:bg-[#0092ca] text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.18 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#0077B5] hover:bg-[#005885] text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                {/* Pinterest */}
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Pinterest"
                  className="w-9 h-9 rounded-lg bg-[#CB2027] hover:bg-[#a6171d] text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.241-.188.293-.433.177-1.614-.75-2.623-3.1-2.623-4.99 0-4.062 2.951-7.794 8.514-7.794 4.47 0 7.944 3.186 7.944 7.443 0 4.441-2.799 8.016-6.684 8.016-1.305 0-2.533-.679-2.953-1.482l-.805 3.069c-.291 1.118-1.08 2.52-1.608 3.373 1.215.375 2.505.578 3.843.578 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Assessment Box */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#101C2A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl font-bold font-heading uppercase">Have Questions About Your Visa File?</h4>
              <p className="text-sm text-gray-300">
                Speak directly with an experienced HUMSAFAR counselor today.
              </p>
            </div>
            <Link
              href="/free-assessment"
              className="inline-flex items-center space-x-2 bg-[#E31B23] hover:bg-[#C8141B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-md flex-shrink-0 font-heading"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101C2A] hover:text-[#E31B23] transition-colors font-heading"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all articles</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}

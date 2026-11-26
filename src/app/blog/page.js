import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { websiteData } from "@/data/siteData";

export const metadata = {
  title: "Blog | Barrownz Learning Academy – IT & Career Tips",
  description: "Read latest articles on Web Development trends, Digital Marketing updates, SEO strategies, and career tips.",
};

export default function BlogIndexPage() {
  const blogs = websiteData.blogPosts || [];

  return (
    <div className="w-full bg-[#F5F8FC]">
      <section className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden border-b border-[#E2E8F0]">
        <Image
          src="/images/BLA_3_.webp"
          alt="Barrownz Learning Academy Blog & Tech Insights"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20243A]/92 via-[#2E3192]/80 to-[#0071BC]/65" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-xs font-bold uppercase tracking-widest text-white mb-3">
            Knowledge &amp; Career Insights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Academy Blog &amp; Tech Insights
          </h1>
          <p className="text-sm sm:text-base text-blue-100 mt-3 max-w-2xl mx-auto leading-relaxed">
            Latest industry tutorials, market analysis, and career advice from our mentors.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {blogs.map((b) => (
              <article
                key={b.slug}
                className="bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0071BC]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <Link href={`/blog/${b.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Link>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="bg-[#EAF4FC] text-[#0071BC] font-bold px-2.5 py-0.5 rounded-md border border-[#E5EAF2]">
                        {b.tag}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {b.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {b.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#0071BC] transition leading-snug">
                      <Link href={`/blog/${b.slug}`}>{b.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/blog/${b.slug}`}
                      className="text-xs font-bold text-[#0071BC] flex items-center gap-1.5 hover:underline"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

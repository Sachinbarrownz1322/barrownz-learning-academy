import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, PhoneCall } from "lucide-react";
import { websiteData } from "@/data/siteData";

export function generateStaticParams() {
  return (websiteData.blogPosts || []).map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = (websiteData.blogPosts || []).find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Article Not Found | Barrownz Learning Academy" };
  }
  return {
    title: `${post.title} | Barrownz Learning Academy`,
    description: post.desc,
  };
}

export default function BlogDetailPage({ params }) {
  const posts = websiteData.blogPosts || [];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="w-full bg-[#F5F8FC]">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#20243A] via-[#2E3192] to-[#0071BC] text-white py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-300 mb-5 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-300 font-semibold truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
            <span className="bg-amber-500 text-slate-950 font-extrabold px-2.5 py-0.5 rounded-md">
              {post.tag}
            </span>
            <span className="flex items-center gap-1 text-slate-200">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-slate-200">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold max-w-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <article className="lg:col-span-8 bg-white rounded-2xl border border-[#E5EAF2] shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              <div className="p-6 sm:p-10 space-y-5">
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed border-l-4 border-[#0071BC] pl-4 bg-slate-50 py-3 rounded-r-lg">
                  {post.desc}
                </p>

                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  {post.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0071BC] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to All Articles</span>
                  </Link>
                  <Link
                    href="/RegisterForEnrollment"
                    className="bla-btn-primary text-xs sm:text-sm px-5 py-2.5"
                  >
                    <span>Enroll in Career Track</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-[#20243A] to-[#2E3192] text-white p-6 rounded-2xl shadow-md space-y-4">
                <h2 className="text-base font-bold">Start Practical IT Training</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Join our upcoming Lucknow classroom or hybrid batch with live project mentorship and placement preparation.
                </p>
                <div className="space-y-2.5 pt-1">
                  <Link
                    href="/RegisterForEnrollment"
                    className="w-full block text-center bg-[#0071BC] hover:bg-[#005a96] text-white text-xs font-bold py-3 rounded-xl transition"
                  >
                    Register for Training
                  </Link>
                  <a
                    href="tel:+919076760009"
                    className="w-full flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white text-xs font-bold py-2.5 rounded-xl transition"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>+91 9076760009</span>
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E5EAF2] shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="block group"
                    >
                      <span className="text-[10px] font-bold uppercase text-[#0071BC]">{rel.tag}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0071BC] transition leading-snug mt-0.5">
                        {rel.title}
                      </h4>
                      <span className="text-[11px] text-slate-400 block mt-1">{rel.date}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

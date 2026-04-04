"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Article = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col animate-pulse">
      <div className="bg-stone-200 h-44 w-full" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 bg-stone-200 rounded w-1/3" />
        <div className="h-5 bg-stone-200 rounded w-full" />
        <div className="h-5 bg-stone-200 rounded w-4/5" />
        <div className="h-3 bg-stone-200 rounded w-full mt-1" />
        <div className="h-3 bg-stone-200 rounded w-2/3" />
      </div>
    </div>
  );
}

export default function NoteArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/note-rss")
      .then((r) => r.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="note" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            BLOG
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            noteの最新記事
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            教室の日常・STEAM教育のヒントを発信しています。
          </p>
        </div>

        {/* Error state */}
        {error && (
          <p className="text-center text-stone-400 text-sm py-12">
            記事の取得に失敗しました。しばらく経ってからご確認ください。
          </p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : articles.map((article) => (
                <a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-orange-50">
                        <span className="text-5xl">📝</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Date */}
                    {article.pubDate && (
                      <p className="text-xs text-stone-400 font-medium mb-2">
                        {formatDate(article.pubDate)}
                      </p>
                    )}

                    {/* Title */}
                    <h3 className="font-black text-stone-800 text-base leading-snug mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>

                    {/* Description */}
                    {article.description && (
                      <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 flex-1">
                        {article.description}
                      </p>
                    )}

                    {/* Link label */}
                    <div className="mt-4 flex items-center gap-1 text-teal-600 text-sm font-bold">
                      記事を読む
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
        </div>

        {/* Link to note */}
        {!loading && !error && articles.length > 0 && (
          <div className="text-center">
            <a
              href="https://note.com/nagara_steamlab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold px-8 py-3 rounded-full transition-all text-sm"
            >
              noteでもっと読む
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

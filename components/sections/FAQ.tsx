"use client";

import { useState } from "react";

const faqs = [
  {
    q: "何歳から参加できますか？",
    a: "4歳から中学生までが対象です。学年に合わせたコース設計を行っており、年中のお子さまでも安心して参加できます。",
  },
  {
    q: "プログラミング未経験でも大丈夫ですか？",
    a: "はい、まったく問題ありません。「プログラミングって何？」というところから、楽しく体験できるよう設計されています。難しい操作は一切ありません。",
  },
  {
    q: "体験後に入会を強制されますか？",
    a: "いいえ、一切ありません。体験後はゆっくりとご家庭で話し合っていただき、納得してからご検討ください。その後のしつこいセールスもありません。",
  },
  {
    q: "体験レッスンに必要な持ち物は？",
    a: "手ぶらでお越しください。筆記用具があれば十分です。服装も動きやすければ何でもOKです。すべての教材はこちらでご用意します。",
  },
  {
    q: "定員はありますか？",
    a: "少人数制のため、各回1〜6名の定員を設けています。人気の時間帯はすぐに埋まることがありますので、お早めにお申し込みください。",
  },
  {
    q: "教室はどこにありますか？",
    a: "岐阜市長良にあります。詳しい住所と地図は、お申し込み後にご案内します。駐車場もご用意していますので、お車でもお越しいただけます。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            よくある質問
          </h2>
          <p className="text-stone-500">
            ご不明な点はお気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-stone-50 transition-colors"
              >
                <span className="flex-shrink-0 w-7 h-7 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-black text-sm">
                  Q
                </span>
                <span className="font-bold text-stone-700 flex-1 text-left">
                  {faq.q}
                </span>
                <span
                  className={`text-orange-400 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-black text-sm">
                    A
                  </span>
                  <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

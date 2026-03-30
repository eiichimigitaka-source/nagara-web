export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/25 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-bold px-4 py-2 rounded-full mb-6 border border-orange-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            無料体験 受付中
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-800 leading-tight mb-6">
            <span className="text-orange-500">「好き」</span>が見つかる。
            <br />
            <span className="text-teal-600">「できた」</span>が積み重なる。
          </h1>

          {/* Sub headline */}
          <p className="text-xl text-stone-600 leading-relaxed mb-3">
            岐阜市長良の
            <span className="font-bold text-stone-700">STEAM教育教室</span>が、
            <br className="hidden sm:block" />
            はじめての方向けに
            <span className="font-bold text-orange-600">無料体験</span>
            を開催しています。
          </p>
          <p className="text-base text-stone-500 mb-8">
            ロボット・実験・AIを通じて、お子さんの好奇心に火をつけます。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200"
            >
              無料体験に申し込む
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-700 font-bold text-lg px-8 py-4 rounded-2xl border-2 border-stone-200 transition-all hover:-translate-y-0.5"
            >
              体験内容を見る
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "📍", text: "岐阜市長良" },
              { icon: "🏫", text: "小学生専門" },
              { icon: "👥", text: "少人数制（4〜6名）" },
              { icon: "✅", text: "入会強制なし" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-stone-600 text-sm font-medium px-3 py-1.5 rounded-full border border-stone-200 shadow-sm"
              >
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating cards (desktop only) */}
        <div className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 flex-col gap-4 w-64">
          {[
            { icon: "🤖", title: "ロボットプログラミング", desc: "命令を組んでロボットを動かす", border: "border-orange-100" },
            { icon: "🔬", title: "科学実験", desc: "身近な素材で「なぜ？」を探る", border: "border-teal-100", offset: "ml-8" },
            { icon: "🧠", title: "AI体験", desc: "最新AIツールに触れて学ぶ", border: "border-purple-100" },
          ].map((card) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl shadow-xl p-5 border ${card.border} ${card.offset ?? ""}`}
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <h3 className="font-bold text-stone-700 text-sm mb-1">{card.title}</h3>
              <p className="text-xs text-stone-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

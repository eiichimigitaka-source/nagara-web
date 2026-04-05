export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video: スマホ用（縦長） */}
      <div className="block sm:hidden absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/image/steamlab_sp.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Background video: デスクトップ用（横長） */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
      >
        <source src="/image/steamlab.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay: top dark for header, center semi-dark for readability, bottom dark for fade */}
      <div className="absolute inset-0 bg-orange-950/30 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 w-full pt-32">
        <div className="max-w-2xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
            </span>
            無料体験 受付中
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            <span className="block"><span className="text-orange-400">「好き」</span>が見つかる。</span>
            <span className="block"><span className="text-teal-300">「できた」</span>が重なる。</span>
          </h1>

          {/* Sub headline */}
          <p className="text-xl text-white/90 leading-relaxed mb-3 drop-shadow">
            岐阜市長良の
            <span className="font-bold text-white">STEAM教育教室</span>が、
            <br className="hidden sm:block" />
            はじめての方向けに
            <span className="font-bold text-orange-300">無料体験</span>
            を開催しています。
          </p>
          <p className="text-base text-white/70 mb-8">
            ロボット・マイクラ・工作を通じて、お子さんの好奇心に火をつけます。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              無料体験に申し込む
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-2xl border border-white/30 transition-all hover:-translate-y-0.5"
            >
              体験内容を見る
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "📍", text: "岐阜市長良" },
              { icon: "🏫", text: "４歳から中学生まで" },
              { icon: "👥", text: "少人数制（1〜6名）" },
              { icon: "✅", text: "入会強制なし" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/25"
              >
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

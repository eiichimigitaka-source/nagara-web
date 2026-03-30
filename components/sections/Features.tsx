const features = [
  {
    icon: "🤖",
    title: "ロボットプログラミング",
    desc: "命令を組み合わせてロボットを動かす体験。「動いた！」の感動が、プログラミングへの第一歩になります。",
    color: "bg-orange-50",
    border: "border-orange-100",
    badge: "人気No.1",
    badgeColor: "bg-orange-500",
  },
  {
    icon: "🔬",
    title: "科学実験",
    desc: "身近な材料で「なぜ？」を探る実験。好奇心が爆発する瞬間をご体験ください。",
    color: "bg-teal-50",
    border: "border-teal-100",
    badge: "子ども大好き",
    badgeColor: "bg-teal-500",
  },
  {
    icon: "🧠",
    title: "AI体験",
    desc: "最新のAIツールに触れながら、未来の技術との付き合い方を楽しく学びます。",
    color: "bg-purple-50",
    border: "border-purple-100",
    badge: "最先端",
    badgeColor: "bg-purple-500",
  },
  {
    icon: "👩‍🏫",
    title: "丁寧な少人数指導",
    desc: "各回4〜6名の少人数制。お子さん一人ひとりのペースと興味に合わせてサポートします。",
    color: "bg-amber-50",
    border: "border-amber-100",
    badge: "安心",
    badgeColor: "bg-amber-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            無料体験で体験できること
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            まずは1回、お子さんの反応を見てみてください。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.color} ${f.border} border rounded-2xl p-6 relative flex flex-col`}
            >
              <span
                className={`${f.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full absolute top-4 right-4`}
              >
                {f.badge}
              </span>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-black text-stone-700 text-lg mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-1">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-10 py-4 rounded-2xl shadow-lg shadow-orange-100 transition-all hover:-translate-y-0.5"
          >
            無料で体験に申し込む
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-stone-400 text-sm mt-3">
            所要時間60分 / 費用0円 / 入会強制なし
          </p>
        </div>
      </div>
    </section>
  );
}

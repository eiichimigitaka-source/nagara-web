const points = [
  {
    icon: "🎯",
    title: "遊びながら学ぶ探究型カリキュラム",
    desc: "「やってみたい！」という気持ちから始まる授業。好奇心が学びをぐんぐん加速させます。",
  },
  {
    icon: "💪",
    title: "失敗を楽しむ、安心の学習環境",
    desc: "失敗は成長のチャンス。間違いを恐れず何度でも挑戦できる、温かい雰囲気を大切にしています。",
  },
  {
    icon: "👩‍🏫",
    title: "少人数制で一人ひとりに寄り添う",
    desc: "各回1〜6名の少人数制。お子さんのペースと興味に合わせた丁寧な指導を行います。",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-teal-600 font-bold text-sm uppercase tracking-wider mb-3">
              SOLUTION
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-6 leading-tight">
              だから、
              <span className="text-orange-500">「遊び」</span>
              <br />
              から始めるんです。
            </h2>

            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 mb-6">
              <p className="text-teal-700 font-bold text-lg italic">
                「遊びは未来をひらく最高の学び」
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed mb-8 text-lg">
              教科書もテストもありません。
              ロボットを動かし、プログラミングし、工作を体験する中で、
              子どもたちは自然と
              <strong className="text-stone-700">
                「考える力」「創る力」「挑戦する力」
              </strong>
              を身につけていきます。
            </p>

            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-md shadow-orange-100 transition-all hover:-translate-y-0.5"
            >
              無料で体験してみる
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 bg-stone-50 rounded-2xl p-5 border border-stone-100"
              >
                <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-2xl flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-stone-700 mb-1">{point.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

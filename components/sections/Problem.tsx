const problems = [
  {
    icon: "📱",
    title: "ゲームばかりで心配…",
    desc: "スマホやゲームに時間を使いすぎている気がする。もっと創造的な遊びをしてほしいのに。",
    bg: "bg-rose-50",
    border: "border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: "🌍",
    title: "AI時代、将来が不安",
    desc: "AIが仕事を変えていく時代に、うちの子に必要な力って何だろう？先が見えなくて不安。",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "😔",
    title: "やる気が続かない",
    desc: "習い事を始めても、すぐに飽きてしまう。本当に好きなことを見つけてあげたい。",
    bg: "bg-purple-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🤷",
    title: "何から始めればいい？",
    desc: "プログラミングが大事とは聞くけれど、どこで、何を学べばいいかわからない。",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            PROBLEM
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            こんなお悩み、<br className="sm:hidden" />ありませんか？
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            子育て中のお母さんから、よくいただくお声です。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {problems.map((p) => (
            <div
              key={p.title}
              className={`${p.bg} ${p.border} border rounded-2xl p-6 flex gap-4`}
            >
              <div
                className={`${p.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-stone-700 mb-1.5">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl py-8 px-6 text-center">
          <p className="text-xl font-bold">
            そのお悩み、
            <span className="text-yellow-200 underline underline-offset-4 decoration-dotted">
              ながら STEAM LAB
            </span>
            が一緒に解決します。
          </p>
        </div>
      </div>
    </section>
  );
}

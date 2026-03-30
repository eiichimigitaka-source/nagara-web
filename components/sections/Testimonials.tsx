const testimonials = [
  {
    avatar: "👩",
    name: "小学2年生のお母さん",
    text: "最初は恥ずかしがり屋だったのに、今では「もっとやりたい！」と大喜びで通っています。毎週楽しみにしていて、嬉しい変化でした。",
    stars: 5,
  },
  {
    avatar: "👩‍👧",
    name: "小学4年生のお母さん",
    text: "プログラミングって難しいと思っていたけど、楽しく体験できました。先生も子どもの目線に立ってくれて、親としても安心して預けられます。",
    stars: 5,
  },
  {
    avatar: "👩‍👦",
    name: "小学1年生のお母さん",
    text: "体験後すぐに入会しました。子どもが自分から考えて作る姿を見られて嬉しくて。苦手なことも楽しみながら取り組んでいます。",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            保護者の方からのお声
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 flex flex-col"
            >
              <div className="flex mb-3">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-5 flex-1 italic">
                「{t.text}」
              </p>
              <div className="flex items-center gap-3 border-t border-stone-100 pt-4">
                <span className="text-2xl">{t.avatar}</span>
                <span className="text-stone-500 text-sm font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

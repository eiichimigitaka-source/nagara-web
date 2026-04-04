const mainCourses = [
  {
    icon: "🌱",
    subtitle: "はじめてのSTEAM教育",
    name: "First STEAM",
    target: "年中（4歳）〜小学1年生",
    price: "12,100円（税込）",
    frequency: "月3回",
    note: null,
    features: [
      "デジタルアート・ブロック造形・ロボットプログラミング・サイエンス工作の4テーマ",
      "全88レッスンで段階的に学習",
      "はじめてのSTEAM体験に最適",
    ],
    accent: "orange",
    badge: "4歳から",
  },
  {
    icon: "🧠",
    subtitle: "プログラミングデビュー",
    name: "自考力キッズ",
    target: "小学1年生〜3年生",
    price: "11,000円（税込）",
    frequency: "週1回",
    note: "別途教材費が必要です",
    features: [
      "パズル×ロボット×プログラミングを同時に学べる唯一の教室",
      "自分で考える力を育む独自カリキュラム",
      "論理的思考力を楽しく鍛える",
    ],
    accent: "teal",
    badge: "人気No.1",
  },
  {
    icon: "💻",
    subtitle: "マイクラでプログラミング上達",
    name: "V-code",
    target: "小学3年生〜",
    price: "7,700円（月2回）/ 11,000円〜（週1回）",
    frequency: "隔週 or 週1回",
    note: null,
    features: [
      "本格的なプログラミング学習",
      "受講ペースに合わせて選べる2プラン",
      "実践的なコーディングスキルを習得",
    ],
    accent: "stone",
    badge: "本格派",
  },
];

const optionCourses = [
  {
    icon: "🤖",
    subtitle: "ロボット技術者を目指せ",
    name: "エジソンアカデミー",
    target: "小学4年生〜",
    price: "12,100円（税込）",
    frequency: "週1回",
    note: "別途教材費が必要です",
    features: [
      "毎月新しいロボットを組み立て＋プログラミング",
      "全40カリキュラムで体系的に学ぶ",
      "理解力・論理的思考力・創造力・プレゼン力を育む",
    ],
    accent: "amber",
    badge: "上級者向け",
    comingSoon: false,
  },
  {
    icon: "🌐",
    name: "教室で見守るオンライン英会話",
    target: "検討中",
    price: "—",
    frequency: "—",
    note: null,
    features: [
      "教室の安心環境でオンライン英会話",
      "詳細は近日公開予定",
    ],
    accent: "stone",
    badge: "Coming Soon",
    comingSoon: true,
  },
];

function PriceText({ price }: { price: string }) {
  // 「円〜?（...）」を小さく表示する
  const parts = price.split(/(円[〜]?（[^）]*）)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^円[〜]?（[^）]*）$/.test(part) ? (
          <span key={i} className="text-base font-bold text-stone-500">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const accentMap: Record<string, { bg: string; border: string; badge: string; check: string; tag: string }> = {
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-500",
    check: "text-orange-500",
    tag: "bg-orange-100 text-orange-700",
  },
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    badge: "bg-teal-600",
    check: "text-teal-600",
    tag: "bg-teal-100 text-teal-700",
  },
  stone: {
    bg: "bg-stone-50",
    border: "border-stone-200",
    badge: "bg-stone-500",
    check: "text-stone-500",
    tag: "bg-stone-100 text-stone-600",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-500",
    check: "text-amber-500",
    tag: "bg-amber-100 text-amber-700",
  },
};

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            COURSES
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            コース一覧
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            お子さんの年齢・興味に合わせて、ぴったりのコースを選べます。
            <br />
            まずは無料体験でお気軽にお試しください。
          </p>
        </div>

        {/* Main courses */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 bg-stone-200" />
            <span className="text-stone-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">
              メインコース
            </span>
            <span className="h-px flex-1 bg-stone-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {mainCourses.map((course) => {
              const a = accentMap[course.accent];
              return (
                <div
                  key={course.name}
                  className={`${a.bg} ${a.border} border rounded-2xl p-6 relative flex flex-col`}
                >
                  {/* Badge */}
                  <span className={`${a.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full absolute top-4 right-4`}>
                    {course.badge}
                  </span>

                  {/* Icon & name */}
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <p className="text-stone-500 text-sm font-medium mb-0.5">{course.subtitle}</p>
                  <h3 className="font-black text-stone-800 text-xl mb-1">{course.name}</h3>

                  {/* Target */}
                  <p className={`text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-4 w-fit ${a.tag}`}>
                    対象：{course.target}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-black text-stone-700"><PriceText price={course.price} /></span>
                    <span className="text-stone-400 text-sm ml-1">・{course.frequency}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 flex-1">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className={`${a.check} font-black mt-0.5 shrink-0`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  {course.note && (
                    <p className="text-xs text-stone-400 mt-4 border-t border-stone-200 pt-3">
                      ※ {course.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Option courses */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6 mt-10">
            <span className="h-px flex-1 bg-stone-200" />
            <span className="text-stone-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">
              オプションコース
            </span>
            <span className="h-px flex-1 bg-stone-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {optionCourses.map((course) => {
              const a = accentMap[course.accent];
              if (course.comingSoon) {
                return (
                  <div
                    key={course.name}
                    className="bg-stone-100 border border-stone-200 rounded-2xl p-6 relative flex flex-col opacity-60 select-none pointer-events-none"
                  >
                    <span className="bg-stone-400 text-white text-xs font-bold px-2.5 py-1 rounded-full absolute top-4 right-4">
                      Coming Soon
                    </span>
                    <div className="text-4xl mb-3 grayscale">{course.icon}</div>
                    <h3 className="font-black text-stone-500 text-xl mb-1">{course.name}</h3>
                    <p className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-4 w-fit bg-stone-200 text-stone-500">
                      対象：{course.target}
                    </p>
                    <ul className="space-y-2 flex-1">
                      {course.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-stone-400">
                          <span className="text-stone-300 font-black mt-0.5 shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-stone-400 mt-4 border-t border-stone-200 pt-3">
                      近日導入予定
                    </p>
                  </div>
                );
              }
              return (
                <div
                  key={course.name}
                  className={`${a.bg} ${a.border} border rounded-2xl p-6 relative flex flex-col`}
                >
                  <span className={`${a.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full absolute top-4 right-4`}>
                    {course.badge}
                  </span>
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <p className="text-stone-500 text-sm font-medium mb-0.5">{course.subtitle}</p>
                  <h3 className="font-black text-stone-800 text-xl mb-1">{course.name}</h3>
                  <p className={`text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-4 w-fit ${a.tag}`}>
                    対象：{course.target}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-black text-stone-700"><PriceText price={course.price} /></span>
                    <span className="text-stone-400 text-sm ml-1">・{course.frequency}</span>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className={`${a.check} font-black mt-0.5 shrink-0`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {course.note && (
                    <p className="text-xs text-stone-400 mt-4 border-t border-stone-200 pt-3">
                      ※ {course.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* External link: アトリエレゴット */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 bg-stone-200" />
            <span className="text-stone-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">
              関連教室
            </span>
            <span className="h-px flex-1 bg-stone-200" />
          </div>
          <a
            href="https://tajiro.jp/leggodt/class/nagara/top.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-3xl mx-auto bg-white border-2 border-stone-200 hover:border-orange-300 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center transition-all hover:shadow-lg hover:-translate-y-0.5 group"
          >
            <div className="text-5xl shrink-0">🎨</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <p className="text-stone-500 text-sm font-medium">AI時代に必要な創造性を育む</p>
                <h3 className="font-black text-stone-800 text-xl">絵画造形教室アトリエレゴット</h3>
                <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
                  外部サイト
                </span>
              </div>
              <p className="text-xs font-bold text-stone-400 mb-3">対象：年中（4歳）〜小学6年生</p>
              <p className="text-sm text-stone-600 mb-3">
                絵画造形を通じて想像力を育む、STEAM教育のArt部門。月3回・5,500円（税込）。
              </p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-sm text-stone-500">
                  <span className="text-orange-400 font-black">✓</span>
                  絵画・造形を楽しみながら想像力を養う
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-500">
                  <span className="text-orange-400 font-black">✓</span>
                  STEAM教育の「Art（芸術）」を専門に学べる
                </li>
              </ul>
            </div>
            <div className="shrink-0 flex items-center gap-1 text-orange-500 font-bold text-sm group-hover:gap-2 transition-all">
              詳細を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-10 py-4 rounded-2xl shadow-lg shadow-orange-100 transition-all hover:-translate-y-0.5"
          >
            無料体験に申し込む
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            料金について
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            まずは無料でお試しいただけます。
            <br />
            体験後に、ゆっくりご検討ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free trial */}
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl p-8 shadow-xl shadow-orange-100">
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
              まずはこちら
            </div>
            <p className="font-bold text-orange-100 text-sm mb-2">STEP 1</p>
            <h3 className="text-2xl font-black mb-1">体験レッスン</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-5xl font-black">¥0</span>
              <span className="text-orange-200 text-sm line-through pb-1">通常3,300円</span>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "60分の体験レッスン",
                "教材費込み",
                "保護者の同席OK",
                "入会強制なし",
                "個別相談あり",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-orange-200 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="block text-center bg-white text-orange-600 font-black py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              無料体験を申し込む
            </a>
          </div>

          {/* Regular plan */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
            <p className="font-bold text-stone-400 text-sm mb-2">STEP 2</p>
            <h3 className="text-2xl font-black text-stone-700 mb-1">月謝プラン</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-black text-stone-700">¥8,800</span>
              <span className="text-stone-500 pb-1">/月（税込）</span>
            </div>
            <p className="text-stone-400 text-xs mb-4">
              ※ コース・内容により異なります
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "週1回（月4回）",
                "教材費込み",
                "振替制度あり",
                "入会金: 11,000円（税込）",
                "兄弟割引あり",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-stone-500">
                  <span className="text-teal-500 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-stone-400 text-sm py-3 border border-dashed border-stone-200 rounded-xl">
              体験後にゆっくりご検討ください
            </p>
          </div>
        </div>

        <p className="text-center text-stone-400 text-xs mt-8">
          ※ 料金・内容は変更になる場合があります。最新情報はお申し込み後にご案内します。
        </p>
      </div>
    </section>
  );
}

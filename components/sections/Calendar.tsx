export default function Calendar() {
  return (
    <section id="calendar" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            SCHEDULE
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            今月の授業
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            開講スケジュール
          </p>
        </div>

        {/* Calendar embed */}
        <div className="w-full overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=qp33753iutmnmrle8afgisfesk%40group.calendar.google.com&ctz=Asia%2FTokyo"
            width="100%"
            height="600"
            style={{ border: 0 }}
            frameBorder="0"
            scrolling="no"
          />
        </div>

        <p className="text-center text-stone-400 text-xs mt-4">
          ※ スケジュールは変更になる場合があります。最新情報はお申し込み後にご案内します。
        </p>
      </div>
    </section>
  );
}

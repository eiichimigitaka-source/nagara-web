import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "今月の授業 | ながら STEAM LAB",
  description: "ながら STEAM LABの開講スケジュールです。",
};

export default function SchedulePage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 bg-stone-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-10">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
              SCHEDULE
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
              今月の授業
            </h1>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              開講スケジュール
            </p>
          </div>

          {/* Calendar embed */}
          <div className="w-full overflow-hidden rounded-2xl border border-stone-200 shadow-sm bg-white">
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

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/#form"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-10 py-4 rounded-2xl shadow-lg shadow-orange-100 transition-all hover:-translate-y-0.5"
            >
              無料体験に申し込む
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

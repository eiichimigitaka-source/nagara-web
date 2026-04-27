export default function Access() {
  return (
    <section id="access" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            ACCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            アクセス
          </h2>
          <p className="text-stone-500 flex items-center justify-center gap-2">
            <span className="text-teal-500">📍</span>
            岐阜市長良3丁目282番地 グランリーオ長良１F
          </p>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.0678390871387!2d136.7839337239103!3d35.45143532129333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003abd0f3e12bfb%3A0xf0ef8cd4b6a232!2z44Gq44GM44KJU1RFQU0gTEFC!5e0!3m2!1sja!2sjp!4v1776433395761!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="グランリーオ長良 アクセスマップ"
            />
          </div>
          <div className="px-6 py-5 flex items-center gap-3 border-t border-stone-200">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-sm">
              🏠
            </span>
            <div>
              <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-0.5">
                住所
              </p>
              <p className="text-stone-700 font-bold">
                岐阜市長良3丁目282番地 グランリーオ長良１F
              </p>
            </div>
          </div>
          <div className="px-6 py-5 border-t border-stone-200">
            <a
              href="tel:0582954806"
              className="flex items-center justify-center gap-3 w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-bold text-xl rounded-xl py-4 transition-colors"
            >
              <span>📞</span>
              058-295-4806
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

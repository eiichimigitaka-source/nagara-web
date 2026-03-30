export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-black text-lg mb-3">
              ながら STEAM LAB
            </h3>
            <p className="text-sm leading-relaxed">
              岐阜市長良のSTEAM教育教室。
              <br />
              「遊びは未来をひらく最高の学び」を理念に、
              <br />
              小学生の好奇心と創造力を育てています。
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">アクセス</h3>
            <p className="text-sm leading-relaxed space-y-1">
              <span className="block">岐阜市長良</span>
              <span className="block">駐車場あり</span>
              <span className="block">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/nagara_steamlab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  @nagara_steamlab
                </a>
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">リンク</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#form"
                  className="hover:text-white transition-colors"
                >
                  無料体験申し込み
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  よくある質問
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nagara_steamlab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 pt-6 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} ながら STEAM LAB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

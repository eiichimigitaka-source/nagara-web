"use client";

import { useState } from "react";

type FormData = {
  childName: string;
  grade: string;
  parentName: string;
  phone: string;
  email: string;
  preferredDate: string;
  message: string;
  consent: boolean;
};

const inputClass =
  "w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all placeholder:text-stone-300 bg-white";
const labelClass = "block text-sm font-bold text-stone-600 mb-1.5";

export default function CTAForm() {
  const [form, setForm] = useState<FormData>({
    childName: "",
    grade: "",
    parentName: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "【ながらSTEAM LAB】無料体験お申し込みがありました",
          お子様のお名前: form.childName,
          学年: form.grade,
          保護者のお名前: form.parentName,
          電話番号: form.phone,
          メールアドレス: form.email,
          希望日時: form.preferredDate,
          メッセージ: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "送信に失敗しました");
      } else {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError("ネットワークエラーが発生しました。しばらくしてからお試しください。");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="form" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="text-7xl mb-6">🎉</div>
          <h2 className="text-3xl font-black text-stone-800 mb-4">
            申し込みが完了しました！
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            ご申し込みありがとうございます！
            <br />
            <strong className="text-stone-700">2営業日以内</strong>に担当者からご連絡します。
            <br />
            しばらくお待ちください。
          </p>
          <div className="bg-white rounded-2xl border border-orange-100 p-6 text-left space-y-3">
            <p className="text-sm text-stone-600 flex items-start gap-2">
              <span>📧</span>
              <span>確認メールをご登録のアドレスに送信しました</span>
            </p>
            <p className="text-sm text-stone-600 flex items-start gap-2">
              <span>📷</span>
              <span>
                Instagram{" "}
                <a
                  href="https://www.instagram.com/nagara_robot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline font-medium"
                >
                  @nagara_robot
                </a>{" "}
                もぜひフォローしてください！
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
            FREE TRIAL
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-3">
            無料体験を申し込む
          </h2>
          <p className="text-stone-500">
            所要時間1分。入会強制なし。まずはお気軽にどうぞ！
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-orange-50 border border-orange-100 p-6 md:p-8">
          <a
            href="https://lin.ee/saFbFFY"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 text-white font-bold text-base py-4 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "#06C755" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="22" height="22">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで気軽に問い合わせる
          </a>

          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-stone-200" />
            <span className="mx-4 text-stone-400 text-sm">または</span>
            <div className="flex-grow border-t border-stone-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  お子様のお名前 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="childName"
                  value={form.childName}
                  onChange={handleChange}
                  required
                  placeholder="例）田中 太郎"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  学年 <span className="text-orange-500">*</span>
                </label>
                <select
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">選択してください</option>
                  {["年中", "年長", "小学1年生", "小学2年生", "小学3年生", "小学4年生", "小学5年生", "小学6年生", "中学1年生", "中学2年生", "中学3年生"].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>
                保護者のお名前 <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                required
                placeholder="例）田中 花子"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  電話番号 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="090-0000-0000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  メールアドレス <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                ご希望の体験日・時間帯 <span className="text-orange-500">*</span>
              </label>
              <textarea
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                required
                rows={2}
                placeholder="例）土曜日の午前中が希望です。4月初旬であれば都合がつきます。"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                メッセージ・ご質問（任意）
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="何かご質問があればお気軽にどうぞ"
                className={inputClass}
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 accent-orange-500 flex-shrink-0"
              />
              <span className="text-stone-500 text-xs leading-relaxed">
                <a href="#" className="text-orange-500 hover:underline">プライバシーポリシー</a>
                に同意の上、申し込みます。お申し込み情報はながら STEAM LAB の体験レッスンのご案内にのみ使用します。
              </span>
            </label>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-stone-300 text-white font-black text-lg py-4 rounded-2xl shadow-lg shadow-orange-100 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed"
            >
              {loading ? "送信中..." : "無料体験を申し込む →"}
            </button>

            <p className="text-center text-stone-400 text-xs">
              申し込み後、2営業日以内に担当者からご連絡します
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "無料体験申し込み | ながら STEAM LAB",
  description:
    "岐阜市長良のSTEAM教育教室。ロボットプログラミング・科学実験・AI体験を通じて、お子さんの「好き」を「力」に。今なら無料体験受付中！",
  openGraph: {
    title: "無料体験申し込み | ながら STEAM LAB",
    description:
      "遊びは未来をひらく最高の学び。岐阜市長良のSTEAM教育教室で無料体験しませんか？",
    url: "https://freetrial.nagararobot.com",
    siteName: "ながら STEAM LAB",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

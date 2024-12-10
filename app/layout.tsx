import type { Metadata } from "next"
import "./globals.css"
import "../public/lib/sakura.min.css"
import KakakoScript from "./utils/KakaoScript"
import SakuraScript from "./utils/SakuraScript"

declare global {
  interface Window {
    Kakao?: any
  }
}

export const metadata: Metadata = {
  title: "Jiyoung&Yein Wedding Invitation",
  description: "2024.06.02 11:00",
  icons: {
    icon: "/icon_wedding.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="지영 ❤ 예인 결혼식에 초대합니다." />
        <meta
          property="og:description"
          content="2024.06.02 11:00 서울대학교 교수회관 2층 컨벤션홀"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/thumb_img.jpg" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="지영·예인 모바일 청첩장" />
        <meta property="og:url" content="https://jiyoung-yein.vercel.app/" />
      </head>
      <body>{children}</body>
      <SakuraScript />
      <KakakoScript />
    </html>
  )
}

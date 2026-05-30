import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingBall } from "@/components/FloatingBall";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arena Clash | The Future of Tennis-Ball Cricket",
  description:
    "Where local players become recognized athletes. Broadcast-quality competition, Red vs Blue rivalry, and the journey from street to stadium.",
  openGraph: {
    title: "Arena Clash | The Future of Tennis-Ball Cricket",
    description:
      "Where local players become recognized athletes. Broadcast-quality competition, Red vs Blue rivalry.",
    type: "website",
    siteName: "Arena Clash",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arena Clash | The Future of Tennis-Ball Cricket",
    description:
      "Where local players become recognized athletes. Broadcast-quality competition, Red vs Blue rivalry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <FloatingBall />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

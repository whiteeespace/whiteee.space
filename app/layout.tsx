import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./global.scss";
import { baseUrl } from "@/lib/base-url";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "whiteee space ©",
  description: "white space whitee space whiteee space ©. a design studio based in montreal.",
  metadataBase: new URL(baseUrl),
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

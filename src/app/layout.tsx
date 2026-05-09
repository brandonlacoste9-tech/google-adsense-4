import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MarketTicker from "@/components/MarketTicker";

export const metadata: Metadata = {
  title: "Legal Nexus | Institutional Regulatory Intelligence & Counsel",
  description: "The premier repository for global regulatory analysis, intellectual property protection, and corporate compliance intelligence.",
  other: {
    "google-adsense-account": "ca-pub-4276130467303652"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4276130467303652"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-white">
        <MarketTicker />
        <div className="flex flex-col pt-[44px]">
          {children}
        </div>
      </body>
    </html>
  );
}

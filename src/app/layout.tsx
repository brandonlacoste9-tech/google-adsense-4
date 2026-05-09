import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Nexus | Premier Corporate Law & Compliance Intelligence",
  description: "The definitive repository for institutional legal analysis, intellectual property protection, and global regulatory compliance.",
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

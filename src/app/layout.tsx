import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `STLVGMO`,
  description: ``,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          async
          src="https://widgets.givebutter.com/latest.umd.cjs?acct=pMAv5drF6HRYk0aR&p=other"
        ></script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/STLVGMO_logomark.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/STLVGMO_logomark.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/STLVGMO_logomark.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/STLVGMO_logomark.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn(inter.className, "bg-gray-900 text-gray-300")}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

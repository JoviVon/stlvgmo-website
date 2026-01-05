import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import ParallaxBackground from "@/app/_components/parallax-background";
import { StructuredData } from "@/app/_components/structured-data";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://stlvgmo.com"),
  title: "STLVGMO - St. Louis Video Game Music Orchestra",
  description:
    "St. Louis Video Game Music Orchestra brings epic video game soundtracks to life through live orchestral performances. Join us for concerts celebrating gaming music in St. Louis!",
  keywords: [
    "video game music",
    "orchestra",
    "St. Louis",
    "gaming",
    "concerts",
    "VGM",
    "video game orchestra",
    "symphonic gaming music",
  ],
  authors: [{ name: "STLVGMO" }],
  openGraph: {
    title: "STLVGMO - St. Louis Video Game Music Orchestra",
    description:
      "Bringing video game music to life through orchestral performance in St. Louis",
    url: "https://stlvgmo.com",
    siteName: "STLVGMO",
    images: [
      {
        url: "/assets/blog/logos/STLVGMO_wordmark.svg",
        width: 1200,
        height: 630,
        alt: "STLVGMO Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STLVGMO - St. Louis Video Game Music Orchestra",
    description: "Bringing video game music to life in St. Louis",
    images: ["/assets/blog/logos/STLVGMO_wordmark.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <StructuredData />
      </head>
      <body className={cn(inter.className, "bg-gray-900 text-gray-300")}>
        <ParallaxBackground />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="min-h-screen relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

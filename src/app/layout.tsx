import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const STORAGE_KEY = "nextjs-blog-starter-theme";

const noFOUCScript = `
(function() {
  const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];
  
  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);
    return () => {
      if (document.body) {
        getComputedStyle(document.body);
      }
      setTimeout(() => {
        if (document.head.contains(css)) {
          document.head.removeChild(css);
        }
      }, 1);
    };
  };

  const media = matchMedia(\`(prefers-color-scheme: \${DARK})\`);

  window.updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const mode = localStorage.getItem("${STORAGE_KEY}") ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolvedMode = mode === SYSTEM ? systemMode : mode;
    const classList = document.documentElement.classList;
    if (resolvedMode === DARK) classList.add(DARK);
    else classList.remove(DARK);
    document.documentElement.setAttribute("data-mode", mode);
    restoreTransitions();
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.updateDOM);
  } else {
    window.updateDOM();
  }
  media.addEventListener("change", window.updateDOM);
})();
`;

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
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFOUCScript }} />
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
      <body
        className={cn(inter.className, "dark:bg-gray-900 dark:text-gray-300")}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

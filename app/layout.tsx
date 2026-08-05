import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Inder,
  Noto_Sans,
  Flamenco,
  Playwrite_US_Modern,
} from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inder = Inder({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inder",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const flamenco = Flamenco({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-flamenco",
  display: "swap",
});

const playwrite = Playwrite_US_Modern({
  variable: "--font-playwrite",
  display: "swap",
});

const siteUrl = "https://yousrahindbennabi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yousra Hind Bennabi — AI Engineer & Creative Developer",
    template: "%s · Yousra Hind Bennabi",
  },
  description:
    "Portfolio of Yousra Hind Bennabi, a 4th-year Artificial Intelligence Engineering student at ENSIA specializing in Machine Learning, Full Stack Development, and UI/UX Design.",
  keywords: [
    "Yousra Hind Bennabi",
    "AI Engineer",
    "Machine Learning",
    "ENSIA",
    "Full Stack Developer",
    "Flutter",
    "FastAPI",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Yousra Hind Bennabi" }],
  creator: "Yousra Hind Bennabi",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Yousra Hind Bennabi — AI Engineer & Creative Developer",
    description:
      "AI Engineering student at ENSIA building machine learning, full-stack, and design projects with care and curiosity.",
    siteName: "Yousra Hind Bennabi",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yousra Hind Bennabi — AI Engineer & Creative Developer",
    description:
      "AI Engineering student at ENSIA building machine learning, full-stack, and design projects with care and curiosity.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inder.variable} ${notoSans.variable} ${flamenco.variable} ${playwrite.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

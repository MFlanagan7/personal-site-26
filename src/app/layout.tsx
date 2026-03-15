import type { Metadata } from 'next';
import { DM_Sans, Lora, Courier_Prime } from "next/font/google";
import './globals.css';
import Header from '@/sections/Header/Header';
import Footer from '@/sections/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif-loaded",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-loaded",
  display: "swap",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://michaelflanagan.dev"),
  title: {
    default: "Michael Flanagan — Frontend Developer & Marketing Technologist",
    template: "%s | Michael Flanagan",
  },
  description:
    "Frontend developer and marketing technologist based in Oklahoma City. Specializing in HubSpot CMS, React, and building web experiences that drive real business outcomes.",
  keywords: [
    "frontend developer",
    "marketing technologist",
    "HubSpot CMS developer",
    "React developer",
    "Oklahoma City",
    "web developer",
    "HubL",
    "Next.js",
  ],
  authors: [{ name: "Michael Flanagan", url: "https://michaelflanagan.dev" }],
  creator: "Michael Flanagan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://michaelflanagan.dev",
    siteName: "Michael Flanagan",
    title: "Michael Flanagan — Frontend Developer & Marketing Technologist",
    description:
      "Frontend developer and marketing technologist based in Oklahoma City. Specializing in HubSpot CMS, React, and building web experiences that drive real business outcomes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Michael Flanagan — Frontend Developer & Marketing Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Flanagan — Frontend Developer & Marketing Technologist",
    description:
      "Frontend developer and marketing technologist based in Oklahoma City. Specializing in HubSpot CMS, React, and building web experiences that drive real business outcomes.",
    images: ["/og-image.png"],
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
  // Covers: <link rel="shortcut icon" href="/favicon.ico" />
  // and:    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  // and:    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    // Covers: <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  // Covers: <meta name="apple-mobile-web-app-title" content="MyWebSite" />
  appleWebApp: {
    title: "Michael Flanagan",
  },

  // Covers: <link rel="manifest" href="/site.webmanifest" />
  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} ${courierPrime.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-BYVJHNTNVL" />
    </html>
  );
}
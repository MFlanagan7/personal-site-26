import type { Metadata } from 'next';
import { DM_Sans, Lora, Courier_Prime  } from "next/font/google";
import './globals.css';
import Header from '@/sections/Header/Header';
import Footer from '@/sections/Footer/Footer';

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
  title: {
    default: "Michael Flanagan — Frontend Developer & Marketing Technologist",
    template: "%s | Michael Flanagan",
  },
  description:
    "Frontend developer and marketing technologist based in Oklahoma City. Specializing in HubSpot CMS, React, and building web experiences that drive real business outcomes.",
  openGraph: {
    siteName: "Michael Flanagan",
    locale: "en_US",
    type: "website",
  },
}

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
    </html>
  );
}
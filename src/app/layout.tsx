import type { Metadata } from 'next';
import './globals.css';
import Header from '@/sections/Header/Header';

export const metadata: Metadata = {
  title: "Michael Flanagan's Personal Site",
  description: 'Developer at the intersection of code and marketing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
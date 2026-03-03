import type { Metadata } from 'next';
import './globals.css';
import Header from '@/sections/Header/Header';

export const metadata: Metadata = {
  title: 'Your Name',
  description: 'Your tagline here',
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
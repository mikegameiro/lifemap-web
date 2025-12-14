import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import '@/styles/globals.css';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
});

export const metadata: Metadata = {
  title: 'Lifemap - Find Your Purpose, Design Your Life',
  description: 'Lifemap is a personal growth app that helps you slow down, reflect, and reconnect with what truly matters.',
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}

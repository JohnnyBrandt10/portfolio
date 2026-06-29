import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--title-font'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--body-font'
});

export const metadata: Metadata = {
  title: 'Johnny Fanilonantenaïna | Fullstack Developer',
  description:
    'Développeur Fullstack Junior — React, Next.js, Node.js, TypeScript. Basé à Antananarivo, Madagascar.',
  keywords: [
    'fullstack',
    'developer',
    'react',
    'nextjs',
    'nodejs',
    'typescript',
    'madagascar'
  ],
  authors: [{ name: 'Johnny Fanilonantenaïna' }],
  openGraph: {
    type: 'website',
    url: 'https://johnny-dev.vercel.app/',
    title: 'Johnny Fanilonantenaïna | Fullstack Developer',
    description:
      'Développeur Fullstack Junior — React, Next.js, Node.js, TypeScript.',
    images: [{ url: '/img/og-image.jpg' }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="fr"
  className={`${spaceGrotesk.variable} ${inter.variable}`}
  suppressHydrationWarning
>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

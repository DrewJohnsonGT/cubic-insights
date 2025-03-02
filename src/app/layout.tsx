import { type Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DM_Sans } from 'next/font/google';
import {
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_NAME,
  APP_SLOGAN,
} from '~/utils/constants';
import { IMAGES } from '~/utils/images';

import './globals.css';

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/`,
  },
  appleWebApp: {
    startupImage: [{ url: IMAGES.logo.src }],
    title: APP_NAME,
  },
  authors: [
    {
      name: 'Drew Johnson',
      url: 'https://drewj.dev',
    },
    {
      name: 'Madeline Deshazer',
      url: 'https://www.linkedin.com/in/madeline-deshazer-228a2015b',
    },
  ],
  creator: 'Drew Johnson & Madeline Deshazer',
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  openGraph: {
    description: APP_DESCRIPTION,
    locale: 'en_US',
    siteName: APP_NAME,
    title: APP_NAME,
    type: 'website',
    url: process.env.NEXT_PUBLIC_APP_URL,
    images: [{ url: IMAGES.logo.src }],
  },
  title: {
    default: `${APP_NAME} | ${APP_SLOGAN}`,
    template: `%s - ${APP_NAME}`,
  },
  twitter: {
    card: 'summary_large_image',
    description: APP_DESCRIPTION,
    images: [IMAGES.logo.src],
    title: APP_NAME,
  },
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable}`} suppressHydrationWarning>
      <body>
        <NextThemesProvider attribute="class" disableTransitionOnChange>
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}

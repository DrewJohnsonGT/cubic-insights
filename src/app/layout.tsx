import { type Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DM_Sans } from 'next/font/google';
import { APP_DESCRIPTION, APP_KEYWORDS, APP_NAME } from '~/utils/constants';

import './globals.css';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </body>
    </html>
  );
}

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import NavigationBarToggle from '@/components/navigation-bar/NavigationBarToggle';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Swanholm Technology',
  description: 'Swanholm Technology',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>
          <NavigationBarToggle />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

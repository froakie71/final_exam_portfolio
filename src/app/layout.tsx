import { Inter } from "next/font/google";
import { type ReactNode } from 'react';
import "./globals.css";
import ClientLayout from './layout.client';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false
});

export const metadata = {
  title: 'Francis Ampoon - Portfolio',
  description: 'Personal portfolio showcasing my web development projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

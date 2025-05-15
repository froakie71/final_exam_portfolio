import { Inter } from "next/font/google";
import { type ReactNode } from 'react';
import "./globals.css";
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { NotificationProvider } from './context/NotificationContext';
import ClientLayout from './layout.client';
import { metadata as pageMetadata } from './metadata';

export const metadata = pageMetadata;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <NotificationProvider>
              <div className="min-h-screen flex flex-col">
                <ClientLayout>
                  <main className="flex-grow">
                    {children}
                  </main>
                </ClientLayout>
              </div>
            </NotificationProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

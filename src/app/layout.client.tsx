'use client';
import { Navigation } from './components/Navigation';
import CartSidebar from './components/CartSidebar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      <CartSidebar />
    </>
  );
}

'use client';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

function CartButton() {
    const { items, toggleCart } = useCart();
    
    return (
        <button
            onClick={toggleCart}
            className="relative p-2 text-gray-600 hover:text-gray-900"
        >
            <ShoppingCartIcon className="h-6 w-6" />
            {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                </span>
            )}
        </button>
    );
}

export function Navigation() {
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-indigo-600">
                            Guitar Shop
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link href="/#guitars" className="text-gray-600 hover:text-gray-900">
                            Guitars
                        </Link>
                        <Link href="/#about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                            Portfolio
                        </Link>
                        <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </Link>
                        <CartButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

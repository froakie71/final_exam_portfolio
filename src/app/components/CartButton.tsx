'use client';
import { useState, useEffect } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

export function CartButton() {
    const { items, toggleCart } = useCart();
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(items.length);
    }, [items.length]);

    return (
        <button
            onClick={toggleCart}
            className="relative p-2 text-gray-600 hover:text-gray-900"
        >
            <ShoppingCartIcon className="h-6 w-6" />
            {count > 0 && (
                <span 
                    className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    suppressHydrationWarning
                >
                    {count}
                </span>
            )}
        </button>
    );
}

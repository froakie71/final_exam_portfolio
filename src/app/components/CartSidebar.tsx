'use client';
import { useCart } from '../context/CartContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function CartSidebar() {
    const { isCartOpen, toggleCart, items, removeFromCart, updateQuantity, total } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleCart} />
            <div className="absolute inset-y-0 right-0 w-full max-w-md flex">
                <div className="relative w-full bg-white shadow-xl">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between px-4 py-6 border-b">
                            <h2 className="text-lg font-medium">Shopping Cart</h2>
                            <button onClick={toggleCart} className="text-gray-400 hover:text-gray-500">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
                            {items.length === 0 ? (
                                <p className="text-center text-gray-500">Your cart is empty</p>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4">
                                        <div className="relative flex-shrink-0 w-24 h-24">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.name}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium">{item.name}</h3>
                                            <p className="text-sm text-gray-500">{item.brand}</p>
                                            <p className="text-sm font-medium">${item.price}</p>
                                            <div className="flex items-center mt-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-gray-500"
                                        >
                                            <XMarkIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="border-t px-4 py-6">
                            <div className="flex justify-between text-base font-medium">
                                <p>Total</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                            <button
                                className="mt-6 w-full bg-indigo-600 py-3 px-4 rounded-md text-white hover:bg-indigo-700"
                                onClick={() => alert('Checkout functionality coming soon!')}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Guitar } from '../types';

interface GuitarCardProps {
    guitar: Guitar;
}

export default function GuitarCard({ guitar }: GuitarCardProps) {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(guitar.id);

    const handleWishlistClick = () => {
        if (isWishlisted) {
            removeFromWishlist(guitar.id);
        } else {
            addToWishlist(guitar);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >            <Link href={`/guitar/${guitar.id}`} className="relative block aspect-[4/3]">
                <Image
                    src={guitar.imageUrl}
                    alt={guitar.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                />
            </Link>
            <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition-colors">
                {guitar.name}
            </h3>
            <div className="flex items-center mt-1">
                <span className="text-gray-600">{guitar.brand}</span>
                <span className="ml-2 px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                    {guitar.category.charAt(0).toUpperCase() + guitar.category.slice(1)}
                </span>
            </div>
            <p className="mt-2 text-gray-500">{guitar.description}</p>
            <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                        ${guitar.price.toLocaleString()}
                    </span>
                    <div className="flex items-center space-x-2">                        <button 
                            onClick={handleWishlistClick}
                            className={`p-2 rounded-full transition-colors ${
                                isWishlisted 
                                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                                    : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill={isWishlisted ? "currentColor" : "none"} 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => addToCart(guitar)}
                            className="flex-1 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
}

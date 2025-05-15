'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Guitar } from '../types';

interface GuitarCardProps {
    guitar: Guitar;
}

export default function GuitarCard({ guitar }: GuitarCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <Link href={`/guitar/${guitar.id}`} className="relative block aspect-[4/3]">
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
            </div>
        </motion.div>
    );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isZoomed) {
            const element = e.currentTarget;
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePosition({ x, y });
        }
    };

    return (
        <div className="space-y-4">            <div 
                className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
            >
                <Image
                    src={images[selectedImage]}
                    alt={`${productName} view ${selectedImage + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    quality={90}
                    className={`object-cover transition-transform duration-200 ${
                        isZoomed ? 'scale-150' : ''
                    }`}
                    style={isZoomed ? {
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                    } : undefined}
                    priority
                />
                {!isZoomed && (
                    <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                    </div>
                )}
            </div>            <div className="grid grid-cols-4 gap-4">
                {images.map((image, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative aspect-square overflow-hidden rounded-md bg-gray-100 transition-all ${
                            selectedImage === idx 
                                ? 'ring-2 ring-indigo-600' 
                                : 'hover:opacity-75'
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`${productName} thumbnail ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 25vw, 100px"
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

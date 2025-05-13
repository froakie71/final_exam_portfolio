'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Guitar } from '../../types';
import { Review } from '../../types/review';
import { guitars } from '../../data/guitars';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import ImageGallery from '../../components/ImageGallery';
import StockBadge from '../../components/StockBadge';
import RelatedProducts from '../../components/RelatedProducts';
import Reviews from '../../components/Reviews';
import SocialShare from '../../components/SocialShare';

export default function GuitarDetail({ params }: { params: { id: string } }) {
    const [guitar, setGuitar] = useState<Guitar | null>(null);
    const { addToCart } = useCart();
    const { showNotification } = useNotification();
    const [pageUrl, setPageUrl] = useState('');

    useEffect(() => {
        const guitarData = guitars.find(g => g.id === params.id);
        if (guitarData) {
            setGuitar(guitarData);
        }
        // Set the current page URL for sharing
        if (typeof window !== 'undefined') {
            setPageUrl(window.location.href);
        }
    }, [params.id]);

    const handleAddToCart = (guitar: Guitar) => {
        if (guitar.stock === 0) {
            showNotification('Sorry, this item is out of stock', 'error');
            return;
        }
        addToCart(guitar);
        showNotification('Added to cart successfully!', 'success');
    };    const handleAddReview = (_review: Omit<Review, 'id' | 'date'>) => {
        // In a real app, this would call an API
        showNotification('Review submitted successfully!', 'success');
    };

    if (!guitar) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <ImageGallery 
                            images={guitar.images || [guitar.imageUrl]}
                            productName={guitar.name}
                        />
                    </div>

                    <div className="space-y-6">
                        <Link href="/#guitars" className="text-indigo-600 hover:text-indigo-500">
                            ← Back to guitars
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{guitar.name}</h1>
                            <p className="text-lg text-gray-600">{guitar.brand}</p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-indigo-600">
                                    ${guitar.price.toLocaleString()}
                                </span>
                                <StockBadge stock={guitar.stock} />
                            </div>
                        </div>
                        <p className="text-gray-700">{guitar.description}</p>
                        <div className="space-y-4">
                            <button
                                onClick={() => handleAddToCart(guitar)}
                                disabled={guitar.stock === 0}
                                className={`w-full py-3 px-4 rounded-md transition-colors ${
                                    guitar.stock === 0
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                }`}
                            >
                                {guitar.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                            </button>
                            <SocialShare 
                                url={pageUrl}
                                title={`Check out the ${guitar.brand} ${guitar.name}`}
                                description={guitar.description}
                                image={guitar.imageUrl}
                            />
                        </div>

                        <div className="border-t pt-6 mt-6">
                            <h3 className="text-lg font-medium mb-4">Specifications</h3>
                            <dl className="grid grid-cols-1 gap-4">
                                {guitar.specs && Object.entries(guitar.specs).map(([key, value]) => (
                                    <div key={key}>
                                        <dt className="font-medium text-gray-900">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </dt>
                                        <dd className="mt-1 text-gray-500">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                <Reviews 
                    reviews={guitar.reviews || []}
                    onAddReview={handleAddReview}
                    guitarId={guitar.id}
                />

                <RelatedProducts 
                    currentGuitar={guitar}
                    allGuitars={guitars}
                />
            </div>
        </div>
    );
}

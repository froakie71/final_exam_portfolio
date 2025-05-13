'use client';
import { useState } from 'react';
import { Review } from '../types/review';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

interface ReviewsProps {
    reviews: Review[];
    onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
    guitarId: string;
}

export default function Reviews({ reviews, onAddReview, guitarId }: ReviewsProps) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [userName, setUserName] = useState('');

    const averageRating = reviews.length 
        ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
        : 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (rating && comment && userName) {
            onAddReview({
                userId: 'user-' + Date.now(), // In a real app, this would come from auth
                userName,
                rating,
                comment,
                guitarId
            });
            setRating(0);
            setComment('');
            setUserName('');
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            <div className="mb-6">
                <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold mr-2">{averageRating.toFixed(1)}</span>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarSolidIcon
                                key={star}
                                className={`h-6 w-6 ${
                                    star <= averageRating
                                        ? 'text-yellow-400'
                                        : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                        ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
                    </span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mb-8 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className="p-1"
                            >
                                {star <= (hover || rating) ? (
                                    <StarSolidIcon className="h-6 w-6 text-yellow-400" />
                                ) : (
                                    <StarOutlineIcon className="h-6 w-6 text-gray-300" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Your Review
                    </label>
                    <textarea
                        id="comment"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit Review
                </button>
            </form>

            <div className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center mb-2">
                            <div className="flex mr-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarSolidIcon
                                        key={star}
                                        className={`h-5 w-5 ${
                                            star <= review.rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="font-medium">{review.userName}</span>
                            <span className="mx-2">•</span>
                            <span className="text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchAndFilterProps {
    onSearch: (query: string) => void;
    onCategoryChange: (category: string) => void;
}

const categories = [
    { id: 'all', name: 'All Guitars' },
    { id: 'electric', name: 'Electric' },
    { id: 'acoustic', name: 'Acoustic' },
    { id: 'classical', name: 'Classical' },
    { id: 'bass', name: 'Bass' }
];

export default function SearchAndFilter({ onSearch, onCategoryChange }: SearchAndFilterProps) {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        onCategoryChange(categoryId);
    };

    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search guitars..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                                ${activeCategory === category.id
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

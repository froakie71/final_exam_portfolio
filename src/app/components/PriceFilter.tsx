'use client';
import { useState } from 'react';

interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    onPriceChange: (min: number, max: number) => void;
}

export default function PriceFilter({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) {
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= max) {
            setMin(value);
            onPriceChange(value, max);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= min) {
            setMax(value);
            onPriceChange(min, value);
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Price Range</h3>
            <div className="flex items-center space-x-4">
                <div>
                    <label htmlFor="min-price" className="sr-only">
                        Minimum Price
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                            type="number"
                            name="min-price"
                            id="min-price"
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0"
                            value={min}
                            onChange={handleMinChange}
                        />
                    </div>
                </div>
                <span className="text-gray-500">to</span>
                <div>
                    <label htmlFor="max-price" className="sr-only">
                        Maximum Price
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                            type="number"
                            name="max-price"
                            id="max-price"
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="1000"
                            value={max}
                            onChange={handleMaxChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

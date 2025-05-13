'use client';

export default function GuitarCardSkeleton() {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-4 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="flex justify-between items-center pt-4">
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="space-x-2">
                        <div className="h-8 w-8 bg-gray-200 rounded-full inline-block"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded-full inline-block"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

interface StockBadgeProps {
    stock: number;
}

export default function StockBadge({ stock }: StockBadgeProps) {
    const getStockStatus = () => {
        if (stock === 0) {
            return {
                text: 'Out of Stock',
                color: 'bg-red-100 text-red-800'
            };
        }
        if (stock <= 5) {
            return {
                text: `Low Stock - Only ${stock} left`,
                color: 'bg-yellow-100 text-yellow-800'
            };
        }
        return {
            text: 'In Stock',
            color: 'bg-green-100 text-green-800'
        };
    };

    const status = getStockStatus();

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
            {status.text}
        </span>
    );
}

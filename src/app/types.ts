import { type Review } from './types/review';

export interface Guitar {
    id: string;
    name: string;
    brand: string;
    price: number;
    imageUrl: string;
    description: string;
    category: 'electric' | 'acoustic' | 'classical' | 'bass';
    images: string[];
    reviews: Review[];
    specs: {
        bodyType: string;
        neckWood: string;
        bodyWood: string;
        fingerboard: string;
        frets: number;
        pickups: string;
        scale: string;
    };
    stock: number;
}

export interface Category {
    id: string;
    name: string;
    description: string;
}

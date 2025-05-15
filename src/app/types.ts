import { type Review } from './types/review';

export interface Guitar {
    id: string;
    name: string;
    brand: string;
    category: string;
    imageUrl: string;
    description: string;
    images?: string[];
    specs?: {
        [key: string]: string | number;
    };
}

export interface Category {
    id: string;
    name: string;
    description: string;
}

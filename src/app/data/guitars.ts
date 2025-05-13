import { Guitar } from '../types';

export const guitars: Guitar[] = [
    {
        id: '1',
        name: 'Stratocaster Professional',
        brand: 'Fender',
        price: 1499.99,
        imageUrl: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=800',
        description: 'The Fender Stratocaster Professional is a versatile electric guitar with a classic tone.',
        category: 'electric',
        images: [
            'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1619558041249-0523903712e1?auto=format&fit=crop&q=80&w=800'
        ],
        reviews: [],
        specs: {
            bodyType: 'Double Cutaway',
            neckWood: 'Maple',
            bodyWood: 'Alder',
            fingerboard: 'Rosewood',
            frets: 22,
            pickups: '3 Single-coil',
            scale: '25.5"'
        },
        stock: 10
    },
    {
        id: '2',
        name: 'Les Paul Standard',
        brand: 'Gibson',
        price: 2699.99,
        imageUrl: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=800',
        description: 'The Gibson Les Paul Standard delivers rich, powerful sound with outstanding sustain.',
        category: 'electric',
        images: [
            'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=800'
        ],
        reviews: [],
        specs: {
            bodyType: 'Single Cutaway',
            neckWood: 'Mahogany',
            bodyWood: 'Mahogany',
            fingerboard: 'Rosewood',
            frets: 22,
            pickups: '2 Humbucker',
            scale: '24.75"'
        },
        stock: 5
    },
    {
        id: '3',
        name: 'Grand Auditorium',
        brand: 'Taylor',
        price: 1999.99,
        imageUrl: 'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?auto=format&fit=crop&q=80&w=800',
        description: 'The Taylor Grand Auditorium offers exceptional acoustic tone with modern playability.',
        category: 'acoustic',
        images: [
            'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?auto=format&fit=crop&q=80&w=800'
        ],
        reviews: [],
        specs: {
            bodyType: 'Grand Auditorium',
            neckWood: 'Mahogany',
            bodyWood: 'Sitka Spruce',
            fingerboard: 'Ebony',
            frets: 20,
            pickups: 'Expression System 2',
            scale: '25.5"'
        },
        stock: 8
    },
    {
        id: '4',
        name: 'Classical C40',
        brand: 'Yamaha',
        price: 499.99,
        imageUrl: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&q=80&w=800',
        description: 'The Yamaha C40 is a perfect classical guitar for both beginners and intermediate players.',
        category: 'classical',
        images: [
            'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&q=80&w=800'
        ],
        reviews: [],
        specs: {
            bodyType: 'Classical',
            neckWood: 'Nato',
            bodyWood: 'Spruce',
            fingerboard: 'Rosewood',
            frets: 19,
            pickups: 'None',
            scale: '25.6"'
        },
        stock: 15
    }
];

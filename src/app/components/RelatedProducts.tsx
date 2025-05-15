// 'use client';
// import { Guitar } from '../types';
// import GuitarCard from './GuitarCard';

// interface RelatedProductsProps {
//     currentGuitar: Guitar;
//     allGuitars: Guitar[];
//     maxItems?: number;
// }

// export default function RelatedProducts({ 
//     currentGuitar, 
//     allGuitars, 
//     maxItems = 3 
// }: RelatedProductsProps) {
//     const getRelatedGuitars = () => {
//         return allGuitars
//             .filter(guitar => 
//                 guitar.id !== currentGuitar.id && (
//                     guitar.category === currentGuitar.category ||
//                     guitar.brand === currentGuitar.brand ||
//                     Math.abs(guitar.price - currentGuitar.price) <= 500
//                 )
//             )
//             .slice(0, maxItems);
//     };

//     const relatedGuitars = getRelatedGuitars();

//     if (relatedGuitars.length === 0) {
//         return null;
//     }

//     return (
//         <div className="mt-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {relatedGuitars.map(guitar => (
//                     <GuitarCard key={guitar.id} guitar={guitar} />
//                 ))}
//             </div>
//         </div>
//     );
// }

'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Guitar } from '../types';
import { useNotification } from './NotificationContext';

interface WishlistContextType {
    items: Guitar[];
    addToWishlist: (guitar: Guitar) => void;
    removeFromWishlist: (guitarId: string) => void;
    isInWishlist: (guitarId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {    const [items, setItems] = useState<Guitar[]>([]);
    const { showNotification } = useNotification();

    const addToWishlist = (guitar: Guitar) => {
        setItems(prevItems => {
            if (!prevItems.find(item => item.id === guitar.id)) {
                showNotification(`${guitar.name} added to wishlist`, 'success');
                return [...prevItems, guitar];
            }
            showNotification('Item is already in your wishlist', 'error');
            return prevItems;
        });
    };

    const removeFromWishlist = (guitarId: string) => {
        setItems(prevItems => {
            const guitar = prevItems.find(item => item.id === guitarId);
            if (guitar) {
                showNotification(`${guitar.name} removed from wishlist`, 'success');
            }
            return prevItems.filter(item => item.id !== guitarId);
        });
    };

    const isInWishlist = (guitarId: string) => {
        return items.some(item => item.id === guitarId);
    };

    return (
        <WishlistContext.Provider value={{
            items,
            addToWishlist,
            removeFromWishlist,
            isInWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}

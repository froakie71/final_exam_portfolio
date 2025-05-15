'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Guitar } from '../types';
import { useNotification } from './NotificationContext';

interface CartItem extends Guitar {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (guitar: Guitar) => void;
    removeFromCart: (guitarId: string) => void;
    updateQuantity: (guitarId: string, quantity: number) => void;
    isCartOpen: boolean;
    toggleCart: () => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'guitar-shop-cart';

export function CartProvider({ children }: { children: ReactNode }) {    const [items, setItems] = useState<CartItem[]>([]);
    
    useEffect(() => {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        if (saved) {
            setItems(JSON.parse(saved));
        }
    }, []);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { showNotification } = useNotification();

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (guitar: Guitar) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === guitar.id);
            if (existingItem) {
                showNotification(`Added another ${guitar.name} to your cart`, 'success');
                return prevItems.map(item =>
                    item.id === guitar.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            showNotification(`${guitar.name} added to cart`, 'success');
            return [...prevItems, { ...guitar, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (guitarId: string) => {
        setItems(prevItems => {
            const item = prevItems.find(item => item.id === guitarId);
            if (item) {
                showNotification(`${item.name} removed from cart`, 'success');
            }
            return prevItems.filter(item => item.id !== guitarId);        });
    };
    
    const updateQuantity = (guitarId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(guitarId);
            return;
        }
        setItems(prevItems => {
            const item = prevItems.find(item => item.id === guitarId);
            if (item) {
                showNotification(`Updated ${item.name} quantity to ${quantity}`, 'success');
            }
            return prevItems.map(item =>
                item.id === guitarId ? { ...item, quantity } : item
            );
        });
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            isCartOpen,
            toggleCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

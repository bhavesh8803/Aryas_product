'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
    id: string;
    name: { en: string; hi: string; mr: string };
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any, quantity: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('aryas_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('aryas_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: any, quantity: number) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCart(prev => prev.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount
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

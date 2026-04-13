'use client';

import React from 'react';
import { useCart } from '@/lib/cart';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const { t, language } = useI18n();
    const router = useRouter();

    const handleCheckout = () => {
        const itemList = cart.map(item => `- ${item.name[language as keyof typeof item.name] || item.name.en} (x${item.quantity}) - ₹${item.price * item.quantity}`).join('\n');
        const message = `Hi ARYA'S FOOD PRODUCTS, I want to place an order:\n\n${itemList}\n\nTotal: ₹${cartTotal}\n\nPlease confirm my order.`;
        window.open(`https://wa.me/919867415323?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-md mx-auto bg-gray-50 rounded-3xl p-12 border-2 border-dashed border-gray-200">
                    <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                    <button
                        onClick={() => router.push('/products')}
                        className="bg-maroon text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                        Start Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-maroon mb-10">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Cart Items */}
                    <div className="lg:col-span-8 space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                                <div className="w-24 h-24 bg-gray-50 rounded-xl relative overflow-hidden flex-shrink-0">
                                    <Image src={item.image} alt="P" fill style={{ objectFit: 'contain' }} className="p-2" />
                                </div>
                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="text-lg font-bold text-gray-900">{item.name[language as keyof typeof item.name] || item.name.en}</h3>
                                    <p className="text-maroon font-extrabold text-xl mt-1">₹{item.price}</p>
                                </div>
                                <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-1">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="text-maroon font-black text-xl hover:scale-125 transition-transform"
                                    >
                                        -
                                    </button>
                                    <span className="font-extrabold text-lg min-w-[20px] text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="text-maroon font-black text-xl hover:scale-125 transition-transform"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-400 hover:text-red-600 font-bold text-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100">
                            <button
                                onClick={() => router.push('/products')}
                                className="text-gray-400 font-bold hover:text-maroon transition-colors"
                            >
                                &larr; Continue Shopping
                            </button>
                            <button
                                onClick={clearCart}
                                className="text-red-400 font-bold hover:text-red-600 transition-colors"
                            >
                                Clear All Items
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
                            <h2 className="text-2xl font-black text-gray-900 mb-8 border-b pb-4">Order Summary</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-500 font-bold">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-gray-500 font-bold">
                                    <span>Delivery</span>
                                    <span className="text-brand-green font-black">FREE</span>
                                </div>
                                <div className="flex justify-between border-t pt-4">
                                    <span className="text-xl font-black text-gray-900">Grand Total</span>
                                    <span className="text-2xl font-black text-maroon">₹{cartTotal}</span>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-brand-green text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-brand-green/20 hover:bg-opacity-90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.602 6.02L0 24l6.148-1.613a11.77 11.77 0 005.9 1.583h.005c6.634 0 12.048-5.414 12.048-12.05a11.75 11.75 0 00-3.489-8.522z" /></svg>
                                Checkout via WhatsApp
                            </button>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center mt-6">Secure Order Confirmation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

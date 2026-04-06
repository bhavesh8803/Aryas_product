'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

interface QuickViewModalProps {
    product: any | null;
    onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
    const { language } = useI18n();

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.name[language] || product.name.en}
                            className="max-h-80 object-contain hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-maroon mb-1">
                            {product.name[language] || product.name.en}
                        </h2>
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{product.quantity}</div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-black text-maroon">₹{product.price}</span>
                            {product.discount > 0 && (
                                <span className="text-lg text-gray-400 line-through">₹{Math.round(product.price / (1 - product.discount / 100))}</span>
                            )}
                        </div>
                        <p className="text-gray-600 mb-8 leading-relaxed line-clamp-4 italic border-l-4 border-saffron pl-4">
                            "{product.description}"
                        </p>
                        <div className="flex flex-col gap-4">
                            <Link href={`/product/${product.id}`}>
                                <button className="w-full bg-maroon text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all text-center">
                                    View Full Details
                                </button>
                            </Link>
                            <button
                                onClick={onClose}
                                className="w-full bg-gray-100 text-gray-600 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

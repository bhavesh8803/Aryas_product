'use client';

import React from 'react';
import Image from 'next/image';
import { useI18n } from '../lib/i18n';
import { useCart } from '../lib/cart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    product: any;
    onQuickView?: (product: any) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
    const { language, t } = useI18n();
    const { addToCart } = useCart();
    const router = useRouter();

    const name = product.name[language] || product.name.en;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        // Optional: show a toast or animation
    };

    const handleBuyNow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        router.push('/cart');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full relative overflow-hidden">
            {product.discount > 0 && (
                <div className="absolute top-4 left-4 z-10 bg-maroon text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg">
                    {product.discount}% OFF
                </div>
            )}

            <Link href={`/product/${product.id}`} className="relative h-64 overflow-hidden bg-gray-50 block">
                <Image
                    src={product.image}
                    alt={name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onQuickView?.(product);
                        }}
                        className="flex-1 bg-white border border-maroon text-maroon text-xs font-bold py-2 rounded-lg hover:bg-maroon hover:text-white transition-all"
                    >
                        Quick View
                    </button>
                </div>
            </Link>

            <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-turmeric' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                </div>

                <Link href={`/product/${product.id}`}>
                    <h3 className="text-gray-900 font-bold text-lg mb-1 line-clamp-2 hover:text-saffron transition-colors cursor-pointer">
                        {name}
                    </h3>
                </Link>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{product.quantity}</div>

                <div className="flex items-center gap-3 mt-auto mb-4">
                    <span className="text-xl font-extrabold text-maroon">₹{product.price}</span>
                    {product.discount > 0 && (
                        <span className="text-sm text-gray-400 line-through">₹{Math.round(product.price / (1 - product.discount / 100))}</span>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleAddToCart}
                        className="bg-brand-green text-white text-xs font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-md"
                    >
                        {t('addToCart')}
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="bg-saffron text-white text-xs font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-md"
                    >
                        {t('buyNow')}
                    </button>
                </div>
            </div>
        </div>
    );
}

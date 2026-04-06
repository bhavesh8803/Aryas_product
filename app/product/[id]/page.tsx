'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import { useCart } from '@/lib/cart';
import Image from 'next/image';

interface Product {
    id: string;
    name: { en: string; hi: string; mr: string };
    price: number;
    discount?: number;
    rating: number;
    category: string;
    image: string;
    gallery: string[];
    description: string;
    ingredients?: string;
    nutritionalInfo?: string;
    stockStatus: string;
    quantity?: string;
}

export default function ProductDetails() {
    const { id } = useParams();
    const { language, t } = useI18n();
    const { addToCart } = useCart();
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [activeImage, setActiveImage] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products?t=${Date.now()}`);
                const data = await res.json();
                const found = data.find((p: any) => p.id === id);
                if (found) {
                    setProduct(found);
                    setActiveImage(found.image);
                }
            } catch (error) {
                console.error('Failed to fetch product:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div className="p-20 text-center font-bold">Loading Product...</div>;

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <button
                    onClick={() => router.push('/')}
                    className="text-saffron font-bold hover:underline"
                >
                    &larr; Back to Home
                </button>
            </div>
        );
    }

    const name = product.name[language as keyof typeof product.name] || product.name.en;

    const handleWhatsAppOrder = () => {
        const message = `Hi, I want to order ${name} (Quantity: ${quantity}) from ARYA'S FOOD PRODUCTS.`;
        window.open(`https://wa.me/919867415323?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // Optional: Provide feedback like a toast
    };

    const handleBuyNow = () => {
        addToCart(product, quantity);
        router.push('/cart');
    };

    return (
        <div className="bg-white pb-20">
            <div className="container mx-auto px-4 py-10">
                <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
                    <button onClick={() => router.push('/')} className="hover:text-saffron transition-colors">Home</button>
                    <span className="text-gray-300">/</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs uppercase font-bold">{product.category}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-900 font-bold truncate max-w-[200px]">{name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Multi-Image Gallery (Amazon Style) */}
                    <div className="lg:col-span-1 flex lg:flex-col gap-3 order-2 lg:order-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                        {product.gallery?.map((img: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(img)}
                                className={`relative w-20 h-20 rounded-lg border-2 overflow-hidden transition-all shrink-0 ${activeImage === img ? 'border-saffron shadow-md scale-105' : 'border-gray-100 hover:border-gray-300 opacity-70 hover:opacity-100'}`}
                            >
                                <Image src={img} alt={`Gallery ${idx}`} fill style={{ objectFit: 'contain' }} className="p-1" />
                            </button>
                        ))}
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-inner group">
                            <Image
                                src={activeImage || product.image}
                                alt={name}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="p-8 cursor-zoom-in transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:col-span-6 order-3 flex flex-col">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-maroon mb-1 leading-tight">{name}</h1>
                        <div className="text-sm md:text-lg font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">{product.quantity}</div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-turmeric bg-gray-50 px-2 py-1 rounded">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-xs font-bold ml-1">{product.rating}</span>
                            </div>
                            <span className="text-gray-300">|</span>
                            <span className={`text-sm font-bold ${product.stockStatus === 'In Stock' ? 'text-brand-green' : 'text-red-500'}`}>
                                {product.stockStatus}
                            </span>
                        </div>

                        <div className="flex items-baseline gap-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <span className="text-4xl font-extrabold text-maroon">₹{product.price}</span>
                            {product.discount! > 0 && (
                                <>
                                    <span className="text-xl text-gray-400 line-through">₹{Math.round(product.price / (1 - product.discount! / 100))}</span>
                                    <span className="bg-maroon text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">-{product.discount}% Save</span>
                                </>
                            )}
                        </div>

                        <p className="text-gray-600 mb-10 leading-relaxed text-lg italic bg-white border-l-4 border-saffron pl-4">
                            "{product.description}"
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {product.ingredients && (
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 transition-hover hover:border-saffron">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Ingredients</h4>
                                    <p className="text-sm font-medium text-gray-800">{product.ingredients}</p>
                                </div>
                            )}
                            {product.nutritionalInfo && (
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 transition-hover hover:border-saffron">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Nutritional Info</h4>
                                    <p className="text-sm font-medium text-gray-800">{product.nutritionalInfo}</p>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden h-14 w-full sm:w-40 shadow-sm">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="flex-1 bg-white hover:bg-gray-50 h-full font-bold transition-colors text-maroon"
                                >
                                    -
                                </button>
                                <span className="flex-1 text-center font-extrabold text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="flex-1 bg-white hover:bg-gray-50 h-full font-bold transition-colors text-maroon"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="flex-grow h-14 bg-brand-green text-white font-bold rounded-xl hover:bg-opacity-90 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                {t('addToCart')}
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 h-14 bg-maroon text-white font-bold rounded-xl hover:bg-opacity-90 hover:shadow-xl transition-all active:scale-95 text-lg flex items-center justify-center gap-3"
                            >
                                {t('buyNow')}
                            </button>
                            <button
                                onClick={handleWhatsAppOrder}
                                className="flex-1 h-14 bg-saffron text-white font-bold rounded-xl hover:bg-opacity-90 hover:shadow-xl transition-all active:scale-95 text-lg flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.602 6.02L0 24l6.148-1.613a11.77 11.77 0 005.9 1.583h.005c6.634 0 12.048-5.414 12.048-12.05a11.75 11.75 0 00-3.489-8.522z" /></svg>
                                WhatsApp Order
                            </button>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-32 border-t pt-20">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-4xl font-extrabold text-maroon">Customer Stories</h2>
                        <div className="flex-grow h-0.5 bg-gray-100"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[1, 2].map(i => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="flex text-turmeric gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <svg key={j} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                                    "I've been looking for authentic Kashmiri chili for a long time. This is exactly what my mother used to use back home. Exceptional quality!"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-white font-bold">A</div>
                                    <div>
                                        <div className="font-extrabold text-gray-900">Anjali Kulkarni</div>
                                        <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Verified Buyer</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

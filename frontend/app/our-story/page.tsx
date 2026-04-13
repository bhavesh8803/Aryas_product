'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';

export default function OurStory() {
    return (
        <div className="bg-white min-h-screen pb-20 overflow-hidden">
            {/* Hero Section with Parallax-like effect */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/hero-banner.jpg" // Reusing hero banner or a textured background
                        alt="Heritage background"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="scale-110 blur-sm"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 to-black/80 z-1"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-fade-in-up">
                        Our Story
                    </h1>
                    <div className="w-24 h-1.5 bg-saffron mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl md:text-2xl text-gray-200 font-medium italic drop-shadow-md">
                        "Bringing the warmth of home, from our heart to yours."
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Where It All Began */}
            <section className="py-24 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">🌾</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-maroon uppercase tracking-tight">Where It All Began</h2>
                            </div>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                                <p className="text-2xl font-bold text-gray-900 leading-tight">
                                    ARYA'S FOOD PRODUCTS was born from a simple belief — that the true taste of India lives in every home kitchen.
                                </p>
                                <p>
                                    Growing up, we experienced the rich aroma of freshly ground masalas, the golden warmth of haldi in every meal, the spice of red chili, and the comforting flavors of homemade pickles.
                                </p>
                                <p className="bg-gray-50 border-l-4 border-saffron p-6 italic shadow-sm rounded-r-xl">
                                    "These flavors were not just ingredients — they were memories, traditions, and love served on every plate."
                                </p>
                                <p>
                                    We started ARYA'S FOOD PRODUCTS with a mission to bring that same purity, authenticity, and warmth to families across India.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-500">
                            <Image
                                src="/products/turmeric.png" // Using turmeric as it represents "golden warmth"
                                alt="Authentic spices"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="p-12 bg-orange-50"
                            />
                            <div className="absolute inset-0 ring-1 ring-black/5 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment - Interactive Grid */}
            <section className="py-24 bg-maroon text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-saffron font-bold text-sm uppercase tracking-widest mb-4">
                            Quality First
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4">
                            <span className="hidden md:block">🏡</span> Our Commitment
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                            We carefully select quality ingredients and ensure hygienic processing so that every product maintains the soul of home cooking.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                        {[
                            { title: 'Authentic Taste', icon: '✨', desc: 'True Indian flavors' },
                            { title: 'Natural Freshness', icon: '🌿', desc: 'No preservatives' },
                            { title: 'Trusted Quality', icon: '🏆', desc: 'Premium ingredients' },
                            { title: 'Homemade Feel', icon: '❤️', desc: 'Made with love' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group text-center">
                                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-saffron tracking-tight">{item.title}</h3>
                                <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-16 text-center text-xl font-medium max-w-3xl mx-auto text-gray-200 leading-relaxed italic border-t border-white/10 pt-10">
                        "From turmeric and spices to premixes and pickles, every product reflects our dedication to Indian traditions and modern quality standards."
                    </p>
                </div>
            </section>

            {/* Made for Indian Homes / Brand Promise */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative aspect-square rounded-full border-2 border-dashed border-gray-200 p-8 animate-spin-slow">
                                <div className="absolute inset-0 flex items-center justify-center animate-reverse-spin">
                                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-8 border-white">
                                        <Image
                                            src="/products/mango-pickle.png" // Representing complex flavor
                                            alt="Indian Pride"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="bg-red-50 p-12"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-maroon mb-6 flex items-center gap-3">
                                        <span>🇮🇳</span> Made for Indian Homes
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        We proudly serve customers across India, offering products that suit everyday cooking and festive occasions alike. Whether it’s a simple dal-chawal meal or a grand family celebration, our products are made to add flavor and trust to your kitchen.
                                    </p>
                                </div>
                                <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                                    <div className="absolute bottom-0 right-0 opacity-10 -mr-10 -mb-10 group-hover:scale-110 transition-transform">
                                        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-saffron mb-6 flex items-center gap-3">
                                        <span>❤️</span> More Than Just a Brand
                                    </h2>
                                    <p className="text-lg text-gray-300 leading-relaxed font-medium relative z-10">
                                        ARYA'S FOOD PRODUCTS is our promise to deliver honesty, quality, and warmth in every pack. Every order supports a growing Indian brand committed to serving families with care and responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision - Call to Action Style */}
            <section className="py-24 bg-gray-50 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-6xl mb-8">🌟</div>
                    <h2 className="text-4xl md:text-5xl font-black text-maroon mb-8">Our Vision</h2>
                    <p className="text-2xl md:text-3xl text-gray-500 font-bold leading-tight mb-12">
                        To become a trusted household name in India by delivering high-quality products that <span className="text-maroon">bring families together</span> through taste and tradition.
                    </p>
                    <div className="space-y-6 pt-10 border-t border-gray-200">
                        <p className="text-xl font-bold text-gray-800">
                            Thank you for being part of our journey. <br />
                            We are honored to serve your home.
                        </p>
                        <div className="pt-8">
                            <Link href="/products" className="bg-maroon text-white px-12 py-4 rounded-full font-black text-xl hover:bg-opacity-90 transition-all shadow-xl hover:-translate-y-1 block sm:inline-block">
                                Explore Our Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branding Footer */}
            <div className="py-20 flex flex-col items-center justify-center bg-white">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-24 w-auto object-contain mb-4"
                />
                <h3 className="text-3xl font-black text-maroon mb-2">ARYA'S FOOD PRODUCTS</h3>
                <p className="text-saffron font-bold text-lg italic">"Bringing the warmth of home, from our heart to yours."</p>
            </div>
        </div>
    );
}

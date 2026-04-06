'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';
import Image from 'next/image';

import Link from 'next/link';

export default function Hero() {
    const { t } = useI18n();

    return (
        <section className="relative h-[500px] md:h-[600px] overflow-hidden flex items-center group">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-v3.jpg"
                    alt="Indian Spices"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transform transition-transform duration-[2000ms] group-hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-white space-y-6">
                <span className="inline-block bg-saffron text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-fade-in">
                    Premium Quality Products
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold max-w-2xl leading-tight drop-shadow-lg">
                    Pure & Authentic <span className="text-saffron">Indian</span> HomeMade Products
                </h1>
                <p className="text-lg md:text-xl max-w-lg text-gray-200 italic font-medium">
                    "{t('slogan')}"
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/products">
                        <button className="bg-saffron hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
                            {t('shopNow')}
                        </button>
                    </Link>
                    <Link href="/products">
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all">
                            See All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

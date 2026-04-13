'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { useCart } from '../lib/cart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { API_URL } from '../lib/api';

import LoginModal from './LoginModal';

export default function Header() {
    const { language, setLanguage, t } = useI18n();
    const { cartCount } = useCart();
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState<any[]>([]);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch(`${API_URL}/categories`);
            const data = await res.json();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/search?q=${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="bg-saffron text-white py-1 px-4 text-center text-xs sm:text-sm font-medium">
                {t('slogan')}
            </div>
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt={t('brandName')}
                        className="h-12 w-auto object-contain"
                    />
                    <span className="text-xl font-bold text-maroon group-hover:text-saffron transition-colors hidden sm:block">
                        {t('brandName')}
                    </span>
                </Link>

                <form onSubmit={handleSearch} className="flex-1 w-full max-w-xl flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200 focus-within:border-saffron transition-colors">
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        className="bg-transparent border-none outline-none w-full text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="text-gray-500 hover:text-saffron">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>

                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <button className="flex items-center gap-1 font-medium hover:text-saffron transition-colors">
                            {t('categories')}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    href={`/products?category=${cat.id}`}
                                    className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-maroon transition-colors"
                                >
                                    {cat.name[language as keyof typeof cat.name] || cat.name.en}
                                </Link>
                            ))}
                            <Link
                                href="/products"
                                className="block px-4 py-2 text-sm font-bold border-t border-gray-100 hover:bg-orange-50 hover:text-maroon transition-colors"
                            >
                                View All
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 border-l pl-6 border-gray-200">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`text-xs font-bold ${language === 'en' ? 'text-saffron' : 'text-gray-400'}`}
                        >
                            EN
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={() => setLanguage('hi')}
                            className={`text-xs font-bold ${language === 'hi' ? 'text-saffron' : 'text-gray-400'}`}
                        >
                            हिंदी
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={() => setLanguage('mr')}
                            className={`text-xs font-bold ${language === 'mr' ? 'text-saffron' : 'text-gray-400'}`}
                        >
                            मराठी
                        </button>
                    </div>

                    <Link href="/cart" className="relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 group-hover:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-brand-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                            {cartCount}
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsLoginOpen(true)}
                        className="hidden sm:block text-maroon font-semibold border-2 border-maroon px-4 py-1.5 rounded-full hover:bg-maroon hover:text-white transition-all"
                    >
                        Login
                    </button>
                </div>
            </div>
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </header>
    );
}

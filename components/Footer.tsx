'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';
import Link from 'next/link';

export default function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt={t('brandName')}
                            className="h-10 w-auto object-contain brightness-0 invert"
                        />
                        <h2 className="text-xl font-bold text-white tracking-wider">{t('brandName')}</h2>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs italic text-gray-400">
                        "{t('slogan')}"
                    </p>
                    <div className="flex gap-4 pt-4">
                        {/* Social Links Icons */}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-saffron mb-6">{t('aboutUs')}</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-white transition-colors">{t('privacyPolicy')}</Link></li>
                        <li><Link href="/terms-conditions" className="hover:text-white transition-colors">{t('terms')}</Link></li>
                        <li className="text-xs text-gray-500 mt-4">{t('gstDetails')}</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-saffron mb-6">{t('contactUs')}</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            D/302, Pragati Sankul, Subhash Road, Dombivli (West) - 421202, Maharastra, India
                        </li>
                        <li className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 98674 15323
                        </li>
                        <li className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            aryasfood01@gmail.com
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-saffron mb-6">Newsletter</h3>
                    <p className="text-sm mb-4">Subscribe to receive updates and recipes.</p>
                    <div className="flex bg-gray-800 rounded-md overflow-hidden p-1">
                        <input type="email" placeholder="Email" className="bg-transparent border-none outline-none px-3 py-2 text-sm w-full" />
                        <button className="bg-maroon text-white px-4 py-2 text-xs font-bold hover:bg-opacity-90 transition-all uppercase tracking-wider">Join</button>
                    </div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/919867415323?text=${encodeURIComponent(t('whatsappMsg'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl border border-gray-100">
                    Order on WhatsApp
                </span>
            </a>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} {t('brandName')}. All rights reserved. Designed with ❤️ for India.
            </div>
        </footer>
    );
}

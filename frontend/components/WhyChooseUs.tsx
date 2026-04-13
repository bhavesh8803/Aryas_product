'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function WhyChooseUs() {
    const { t } = useI18n();

    const features = [
        { title: t('pureIngredients'), icon: '🌿' },
        { title: t('hygienicallyPacked'), icon: '📦' },
        { title: t('trustedQuality'), icon: '✅' },
        { title: t('madeForIndia'), icon: '🇮🇳' },
        { title: t('codAvailable'), icon: '💰' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-maroon">
                    {t('whyChooseUs')}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-gray-800 leading-tight">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        brandName: "ARYA'S FOOD PRODUCTS",
        slogan: "Bringing the warmth of home, from our heart to yours.",
        searchPlaceholder: "Search for groceries...",
        shopNow: "Shop Now",
        categories: "Categories",
        cart: "Cart",
        featuredProducts: "Featured Products",
        whyChooseUs: "Why Choose Us",
        reviews: "Reviews",
        addToCart: "Add to Cart",
        buyNow: "Buy Now",
        pureIngredients: "100% Pure Ingredients",
        hygienicallyPacked: "Hygienically Packed",
        trustedQuality: "Trusted Quality",
        madeForIndia: "Made for Indian Homes",
        codAvailable: "Cash on Delivery Available",
        aboutUs: "About Us",
        contactUs: "Contact Us",
        privacyPolicy: "Privacy Policy",
        terms: "Terms & Conditions",
        gstDetails: "GST Details: 27AAAAA0000A1Z5",
        whatsappMsg: "Hi, I want to order products from ARYA'S FOOD PRODUCTS.",
    },
    hi: {
        brandName: "आर्याज़ फूड प्रोडक्ट्स",
        slogan: "घर की गर्माहट, हमारे दिल से आपके दिल तक।",
        searchPlaceholder: "किराने का सामान खोजें...",
        shopNow: "अभी खरीदें",
        categories: "श्रेणियां",
        cart: "कार्ट",
        featuredProducts: "चुनिंदा उत्पाद",
        whyChooseUs: "हमें क्यों चुनें",
        reviews: "समीक्षाएं",
        addToCart: "कार्ट में जोड़ें",
        buyNow: "अभी खरीदें",
        pureIngredients: "100% शुद्ध सामग्री",
        hygienicallyPacked: "स्वच्छता से पैक किया गया",
        trustedQuality: "विश्वसनीय गुणवत्ता",
        madeForIndia: "भारतीय घरों के लिए निर्मित",
        codAvailable: "कैश ऑन डिलीवरी उपलब्ध",
        aboutUs: "हमारे बारे में",
        contactUs: "संपर्क करें",
        privacyPolicy: "गोपनीयता नीति",
        terms: "नियम और शर्तें",
        gstDetails: "GST विवरण: 27AAAAA0000A1Z5",
        whatsappMsg: "नमस्ते, मैं आर्याज़ फूड प्रोडक्ट्स से उत्पाद ऑर्डर करना चाहता हूँ।",
    },
    mr: {
        brandName: "आर्याज फूड प्रॉडक्ट्स",
        slogan: "घरातील मायेची ऊब, आमच्या मनापासून तुमच्या मनापर्यंत.",
        searchPlaceholder: "किराणा माल शोधा...",
        shopNow: "आता खरेदी करा",
        categories: "श्रेणी",
        cart: "कार्ट",
        featuredProducts: "वैशिष्ट्यीकृत उत्पादने",
        whyChooseUs: "आम्हाला का निवडावे",
        reviews: "पुनरावलोकने",
        addToCart: "कार्टमध्ये टाका",
        buyNow: "आता खरेदी करा",
        pureIngredients: "100% शुद्ध घटक",
        hygienicallyPacked: "स्वच्छतापूर्वक पॅक केलेले",
        trustedQuality: "विश्वासार्ह गुणवत्ता",
        madeForIndia: "भारतीय घरांसाठी बनवलेले",
        codAvailable: "कॅश ऑन डिलिव्हरी उपलब्ध",
        aboutUs: "आमच्याबद्दल",
        contactUs: "संपर्क साधा",
        privacyPolicy: "गोपनीयता धोरण",
        terms: "अटी आणि शर्ती",
        gstDetails: "GST तपशील: 27AAAAA0000A1Z5",
        whatsappMsg: "नमस्कार, मला आर्याज फूड प्रॉडक्ट्समधून उत्पादने ऑर्डर करायची आहेत.",
    }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}

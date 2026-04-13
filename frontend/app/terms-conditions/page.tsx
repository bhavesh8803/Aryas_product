'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export default function TermsConditions() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header / Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                        <Link href="/" className="hover:text-saffron transition-colors">Home</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 font-bold">Terms & Conditions</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-maroon leading-tight">Terms & Conditions</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 prose prose-maroon">
                    <div className="mb-12 text-center">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-20 w-auto object-contain mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">ARYA'S FOOD PRODUCTS</h2>
                        <p className="text-maroon italic font-medium">"Bringing the warmth of home, from our heart to yours."</p>
                        <div className="mt-6 inline-block bg-gray-50 px-4 py-2 rounded-full text-sm font-bold text-gray-500 border border-gray-100">
                            Effective Date: 03/03/2026
                        </div>
                    </div>

                    <div className="space-y-10 text-gray-700 leading-relaxed">
                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                Introduction
                            </h3>
                            <p>
                                Welcome to ARYA'S FOOD PRODUCTS. These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms.
                            </p>
                            <p className="mt-4 font-bold text-gray-900 border-l-4 border-saffron pl-4">
                                If you do not agree with any part of these terms, please do not use our website.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                Eligibility
                            </h3>
                            <p>By using this website, you confirm that:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2 font-medium">
                                <li>You are at least 18 years old.</li>
                                <li>You are legally capable of entering into a binding contract under Indian law.</li>
                                <li>The information provided by you is accurate and complete.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                                Products & Services
                            </h3>
                            <p>
                                ARYA'S FOOD PRODUCTS sells grocery and FMCG products including soaps, turmeric (haldi), masalas, spices, premixes, pickles, and related items.
                            </p>
                            <div className="mt-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-maroon mb-3 uppercase text-xs tracking-widest">We reserve the right to:</h4>
                                <ul className="space-y-2 text-sm font-medium">
                                    <li>• Modify product prices without prior notice.</li>
                                    <li>• Discontinue any product at any time.</li>
                                    <li>• Limit quantities of any order.</li>
                                </ul>
                            </div>
                            <p className="mt-4 text-sm italic text-gray-500">
                                All product images are for representation purposes only. Actual packaging may vary slightly.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                                Pricing & Payments
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4 font-medium">
                                <li>All prices are listed in Indian Rupees (₹).</li>
                                <li>Prices may change without prior notice.</li>
                            </ul>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-brand-green/5 rounded-xl border border-brand-green/10 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-green text-white rounded-lg flex items-center justify-center font-bold">COD</div>
                                    <span className="font-bold text-gray-800">Cash on Delivery</span>
                                </div>
                                <div className="p-4 bg-saffron/5 rounded-xl border border-saffron/10 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-saffron text-white rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-gray-800">Online Payments</span>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                For online payments, secure third-party payment gateways are used. We do not store your card details.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                                Cash on Delivery (COD)
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 font-medium">
                                <li>COD is available for selected serviceable pin codes in India.</li>
                                <li>Customers must provide accurate delivery details.</li>
                                <li>Repeated refusal of COD orders may result in account restrictions.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                                Order Acceptance & Cancellation
                            </h3>
                            <p>Your order is confirmed only after successful payment or COD confirmation.</p>
                            <h4 className="font-bold mt-4 mb-2">We reserve the right to cancel orders due to:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Incorrect pricing</li>
                                <li>Stock unavailability</li>
                                <li>Suspicious or fraudulent activity</li>
                            </ul>
                            <p className="mt-4 text-sm italic font-medium">In such cases, refunds (if applicable) will be processed.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                                Shipping & Delivery
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 font-medium">
                                <li>Delivery timelines may vary based on location.</li>
                                <li>We are not responsible for delays caused by courier partners or unforeseen circumstances.</li>
                                <li>Customers must provide correct shipping details.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
                                Returns & Refunds
                            </h3>
                            <p>Returns and refunds are subject to our Return & Refund Policy.</p>
                            <p className="mt-2 font-bold text-maroon">
                                Perishable products such as pickles, spices, and food items may not be eligible for return unless damaged or defective upon delivery.
                            </p>
                            <p className="mt-2 text-sm">
                                Customers must report damaged items within 48 hours of delivery.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">9</span>
                                Intellectual Property
                            </h3>
                            <p>All content on this website including Logo, Brand name, Product images, Text content, and Design elements are the property of ARYA'S FOOD PRODUCTS and may not be copied, reproduced, or used without written permission.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">10</span>
                                User Conduct
                            </h3>
                            <p>You agree not to use the website for unlawful purposes, provide false information, attempt to harm or hack the website, or misuse promotional offers. Violation may result in termination of access.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">11</span>
                                Limitation of Liability
                            </h3>
                            <p>ARYA'S FOOD PRODUCTS shall not be liable for indirect or incidental damages, loss of profits or data, or delays beyond our control. All products should be used as per instructions mentioned on packaging.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">12</span>
                                WhatsApp Orders
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 font-medium">
                                <li>Customers must confirm product details and address.</li>
                                <li>Orders are subject to availability.</li>
                                <li>Standard payment and delivery terms apply.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">13</span>
                                Privacy
                            </h3>
                            <p>Your use of this website is also governed by our <Link href="/privacy-policy" className="text-maroon font-bold hover:underline">Privacy Policy</Link>.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">14</span>
                                Governing Law
                            </h3>
                            <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Maharashtra, India.</p>
                        </section>

                        <section className="bg-gray-900 text-white p-8 rounded-3xl mt-12">
                            <h3 className="text-xl font-bold text-saffron mb-6">15. Contact Information</h3>
                            <p className="mb-6 opacity-80">For any queries regarding these Terms & Conditions, please contact:</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-saffron">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold">ARYA'S FOOD PRODUCTS</p>
                                        <p className="text-sm opacity-60">D/302, Pragati Sankul, Subhash Road, Dombivli (West) - 421202, Maharashtra, India.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-saffron">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium">aryasfood01@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-saffron">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium">+91-9867415323</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-16 text-center text-gray-400 text-sm">
                        Thank you for choosing ARYA'S FOOD PRODUCTS.
                    </div>
                </div>
            </div>
        </div>
    );
}

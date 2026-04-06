'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header / Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                        <Link href="/" className="hover:text-saffron transition-colors">Home</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 font-bold">Privacy Policy</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-maroon leading-tight">Privacy Policy</h1>
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
                                Welcome to ARYA'S FOOD PRODUCTS. We value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or purchase our products.
                            </p>
                            <p className="mt-4 font-bold text-gray-900 border-l-4 border-saffron pl-4">
                                By using our website, you agree to the terms outlined in this policy.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                Information We Collect
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-maroon mb-3 uppercase text-xs tracking-widest">A. Personal Information</h4>
                                    <ul className="space-y-2 text-sm font-medium">
                                        <li>• Full Name</li>
                                        <li>• Mobile Number</li>
                                        <li>• Email Address</li>
                                        <li>• Shipping Address</li>
                                        <li>• Billing Address</li>
                                        <li>• Payment Details (only for online payments)</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-maroon mb-3 uppercase text-xs tracking-widest">B. Non-Personal Information</h4>
                                    <ul className="space-y-2 text-sm font-medium">
                                        <li>• Browser type</li>
                                        <li>• Device information</li>
                                        <li>• IP address</li>
                                        <li>• Pages visited</li>
                                        <li>• Time spent on website</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                                How We Use Your Information
                            </h3>
                            <p className="mb-4">We use your information to:</p>
                            <ul className="list-disc pl-6 space-y-2 font-medium">
                                <li>Process and deliver your orders</li>
                                <li>Provide Cash on Delivery services</li>
                                <li>Send order confirmations and updates</li>
                                <li>Respond to customer queries (including WhatsApp inquiries)</li>
                                <li>Improve our website and services</li>
                                <li>Prevent fraud and misuse</li>
                            </ul>
                            <p className="mt-6 p-4 bg-maroon/5 rounded-xl text-maroon font-bold text-center border border-maroon/10">
                                We do not sell or rent your personal information to third parties.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                                Payment Information
                            </h3>
                            <p>
                                For online payments (UPI, cards, net banking), we use secure third-party payment gateways. We do not store your card or banking details on our servers.
                            </p>
                            <p className="mt-2 text-sm italic">
                                Cash on Delivery orders only require contact and delivery information.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                                WhatsApp Communication
                            </h3>
                            <p>
                                If you contact us via WhatsApp, we may store your number and conversation details to process orders and provide customer support. Your information will remain confidential.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                                Cookies Policy
                            </h3>
                            <p>Our website may use cookies to:</p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>Improve user experience</li>
                                <li>Remember cart items</li>
                                <li>Analyze website traffic</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500">
                                You can disable cookies in your browser settings if you prefer.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                                Data Security
                            </h3>
                            <p>
                                We take reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure.
                            </p>
                            <p className="mt-2 text-sm text-gray-500 italic">
                                However, no online system is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
                                Third-Party Services
                            </h3>
                            <p>We may use third-party services such as:</p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>Payment gateways</li>
                                <li>Delivery partners</li>
                                <li>Hosting providers</li>
                            </ul>
                            <p className="mt-4">
                                These third parties only receive necessary information to perform their services.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">9</span>
                                Your Rights
                            </h3>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>Request access to your personal data</li>
                                <li>Request correction of incorrect information</li>
                                <li>Request deletion of your personal data</li>
                            </ul>
                            <p className="mt-4">
                                To make such requests, contact us at the details below.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">10</span>
                                Children's Privacy
                            </h3>
                            <p>
                                Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-saffron text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">11</span>
                                Changes to This Policy
                            </h3>
                            <p>
                                ARYA'S FOOD PRODUCTS may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                            </p>
                        </section>

                        <section className="bg-gray-900 text-white p-8 rounded-3xl mt-12">
                            <h3 className="text-xl font-bold text-saffron mb-6">12. Contact Us</h3>
                            <p className="mb-6 opacity-80">If you have any questions about this Privacy Policy, you can contact us at:</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-saffron">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold">ARYA'S FOOD PRODUCTS</p>
                                        <p className="text-sm opacity-60">D/302, Pragati Sankul, Subhash Road, Dombivli (West) - 421202, Maharastra, India.</p>
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
                                    <p className="font-medium">91-9867415323</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-16 text-center text-gray-400 text-sm">
                        Thank you for trusting ARYA'S FOOD PRODUCTS.
                    </div>
                </div>
            </div>
        </div>
    );
}

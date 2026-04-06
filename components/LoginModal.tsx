'use client';

import React, { useState } from 'react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-maroon"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <h2 className="text-2xl font-black text-maroon mb-6 text-center">
                    {isLogin ? 'Welcome Back!' : 'Join Arya\'s Family'}
                </h2>

                <div className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-saffron transition-colors" />
                        </div>
                    )}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Email Address</label>
                        <input type="email" placeholder="email@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-saffron transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-saffron transition-colors" />
                    </div>

                    <button
                        onClick={() => {
                            alert(isLogin ? 'Logged in successfully! (Mock)' : 'Registered successfully! (Mock)');
                            onClose();
                        }}
                        className="w-full bg-saffron text-white py-4 rounded-xl font-bold mt-4 shadow-lg hover:bg-opacity-90 transition-all"
                    >
                        {isLogin ? 'Login Now' : 'Create Account'}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-maroon font-bold ml-1 hover:underline"
                        >
                            {isLogin ? 'Register' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

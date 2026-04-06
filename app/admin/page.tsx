'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import Image from 'next/image';

interface Category {
    id: string;
    name: { en: string; hi: string; mr: string };
    image: string;
    description: string;
}

interface Product {
    id: string;
    name: { en: string; hi: string; mr: string };
    price: number;
    category: string;
    stockStatus: string;
    image: string;
    gallery: string[];
    description: string;
    discount?: number;
    quantity?: string;
}

export default function AdminPanel() {
    const { t, language } = useI18n();
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [showProductForm, setShowProductForm] = useState(false);
    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
    const [editingCategory, setEditingCategory] = useState<Partial<Category> | null>(null);
    const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const [prodRes, catRes] = await Promise.all([
            fetch('/api/products'),
            fetch('/api/categories')
        ]);
        const [prodData, catData] = await Promise.all([
            prodRes.json(),
            catRes.json()
        ]);
        setProducts(prodData);
        setCategories(catData);
        setLoading(false);
    };

    const handleProductDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            await fetch(`/api/products?id=${id}`, { method: 'DELETE' });
            fetchData();
        }
    };

    const handleCategoryDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this category? This might affect products!')) {
            await fetch(`/api/categories?id=${id}`, { method: 'DELETE' });
            fetchData();
        }
    };

    const handleProductSave = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editingProduct),
        });
        setEditingProduct(null);
        setShowProductForm(false);
        fetchData();
    };

    const handleCategorySave = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/categories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editingCategory),
        });
        setEditingCategory(null);
        setShowCategoryForm(false);
        fetchData();
    };

    if (loading) return <div className="p-20 text-center font-bold">Loading Store Data...</div>;

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">

                {/* Tabs */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`px-8 py-3 rounded-xl font-bold transition-all shadow-sm ${activeTab === 'products' ? 'bg-maroon text-white' : 'bg-white text-gray-400'}`}
                    >
                        Manage Products
                    </button>
                    <button
                        onClick={() => setActiveTab('categories')}
                        className={`px-8 py-3 rounded-xl font-bold transition-all shadow-sm ${activeTab === 'categories' ? 'bg-maroon text-white' : 'bg-white text-gray-400'}`}
                    >
                        Manage Categories
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    <div className="bg-maroon p-8 flex justify-between items-center text-white border-b border-white/10">
                        <div>
                            <h1 className="text-2xl font-bold">{activeTab === 'products' ? 'Product Management' : 'Category Management'}</h1>
                            <p className="text-sm opacity-80">Dynamic Data Persistence Active</p>
                        </div>
                        <button
                            onClick={() => {
                                if (activeTab === 'products') {
                                    setEditingProduct({
                                        id: 'p' + (Date.now()),
                                        name: { en: '', hi: '', mr: '' },
                                        price: 0,
                                        category: categories[0]?.id || 'spices',
                                        stockStatus: 'In Stock',
                                        image: '',
                                        gallery: [],
                                        description: '',
                                        quantity: '100g'
                                    });
                                    setShowProductForm(true);
                                } else {
                                    setEditingCategory({
                                        id: 'c' + (Date.now()),
                                        name: { en: '', hi: '', mr: '' },
                                        image: '',
                                        description: ''
                                    });
                                    setShowCategoryForm(true);
                                }
                            }}
                            className="bg-saffron text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                        >
                            {activeTab === 'products' ? 'Add New Product' : 'Add New Category'}
                        </button>
                    </div>

                    {/* Forms */}
                    {showProductForm && editingProduct && activeTab === 'products' && (
                        <div className="p-8 bg-gray-50 border-b border-gray-200">
                            <h3 className="text-maroon font-extrabold mb-6 uppercase tracking-wider text-sm">Product Details</h3>
                            <form onSubmit={handleProductSave} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Name (EN)</label>
                                    <input type="text" required className="w-full border p-2 rounded font-bold" value={editingProduct.name?.en} onChange={(e) => setEditingProduct({ ...editingProduct, name: { ...editingProduct.name!, en: e.target.value } })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Name (HI)</label>
                                    <input type="text" required className="w-full border p-2 rounded font-bold" value={editingProduct.name?.hi} onChange={(e) => setEditingProduct({ ...editingProduct, name: { ...editingProduct.name!, hi: e.target.value } })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Name (MR)</label>
                                    <input type="text" required className="w-full border p-2 rounded font-bold" value={editingProduct.name?.mr} onChange={(e) => setEditingProduct({ ...editingProduct, name: { ...editingProduct.name!, mr: e.target.value } })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Price (₹)</label>
                                    <input type="number" required className="w-full border p-2 rounded font-bold text-maroon" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: parseInt(e.target.value) })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Main Image URL</label>
                                    <input type="text" required className="w-full border p-2 rounded text-xs" value={editingProduct.image} onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Category</label>
                                    <select className="w-full border p-2 rounded font-bold" value={editingProduct.category} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}>
                                        {categories.map(c => <option key={c.id} value={c.id}>{c.name.en}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Quantity/Weight (e.g. 1kg, 500g)</label>
                                    <input type="text" required className="w-full border p-2 rounded font-bold" value={editingProduct.quantity || ''} onChange={(e) => setEditingProduct({ ...editingProduct, quantity: e.target.value })} />
                                </div>
                                <div className="md:col-span-3">
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Gallery URLs (comma separated)</label>
                                    <input type="text" className="w-full border p-2 rounded text-xs" value={editingProduct.gallery?.join(', ')} onChange={(e) => setEditingProduct({ ...editingProduct, gallery: e.target.value.split(',').map(s => s.trim()) })} />
                                </div>
                                <div className="md:col-span-3">
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Description (EN)</label>
                                    <textarea className="w-full border p-2 rounded text-sm italic" rows={3} value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} />
                                </div>
                                <div className="md:col-span-3 flex justify-end gap-4 border-t pt-6">
                                    <button type="button" onClick={() => setShowProductForm(false)} className="px-8 py-3 text-gray-400 font-bold">Cancel</button>
                                    <button type="submit" className="bg-brand-green text-white px-10 py-3 rounded-lg font-bold shadow-lg">Save Product</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {showCategoryForm && editingCategory && activeTab === 'categories' && (
                        <div className="p-8 bg-gray-50 border-b border-gray-200">
                            <h3 className="text-maroon font-extrabold mb-6 uppercase tracking-wider text-sm">Category Details</h3>
                            <form onSubmit={handleCategorySave} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">ID (Slug)</label>
                                    <input type="text" required className="w-full border p-2 rounded font-mono text-sm" value={editingCategory.id} onChange={(e) => setEditingCategory({ ...editingCategory, id: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Name (EN)</label>
                                    <input type="text" required className="w-full border p-2 rounded font-bold" value={editingCategory.name?.en} onChange={(e) => setEditingCategory({ ...editingCategory, name: { ...editingCategory.name!, en: e.target.value } })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Image URL</label>
                                    <input type="text" required className="w-full border p-2 rounded text-xs" value={editingCategory.image} onChange={(e) => setEditingCategory({ ...editingCategory, image: e.target.value })} />
                                </div>
                                <div className="md:col-span-3 flex justify-end gap-4 border-t pt-6">
                                    <button type="button" onClick={() => setShowCategoryForm(false)} className="px-8 py-3 text-gray-400 font-bold">Cancel</button>
                                    <button type="submit" className="bg-brand-green text-white px-10 py-3 rounded-lg font-bold shadow-lg">Save Category</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Tables */}
                    <div className="p-0 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-[0.2em]">
                                    {activeTab === 'products' ? (
                                        <>
                                            <th className="px-8 py-4">Product</th>
                                            <th className="px-8 py-4">Price</th>
                                            <th className="px-8 py-4">Qty</th>
                                            <th className="px-8 py-4">Category</th>
                                            <th className="px-8 py-4">Gallery</th>
                                            <th className="px-8 py-4 text-right">Actions</th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="px-8 py-4">Category</th>
                                            <th className="px-8 py-4">Slug</th>
                                            <th className="px-8 py-4 text-right">Actions</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {activeTab === 'products' ? (
                                    products.map((product) => (
                                        <tr key={product.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors group">
                                            <td className="px-8 py-6 flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gray-50 rounded-xl overflow-hidden relative border border-gray-100 group-hover:scale-110 transition-transform">
                                                    <Image src={product.image || '/images/hero.png'} alt="P" fill style={{ objectFit: 'contain' }} className="p-1" />
                                                </div>
                                                <span className="font-extrabold text-gray-900">{product.name.en}</span>
                                            </td>
                                            <td className="px-8 py-6 font-black text-maroon text-lg">₹{product.price}</td>
                                            <td className="px-8 py-6 font-bold text-gray-500">{product.quantity}</td>
                                            <td className="px-8 py-6">
                                                <span className="bg-orange-50 text-maroon text-[10px] font-black px-3 py-1 rounded-full uppercase border border-orange-100 italic">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-[10px] font-bold text-gray-300 uppercase tracking-widest">{product.gallery?.length || 0} pics</td>
                                            <td className="px-8 py-6 text-right space-x-3">
                                                <button onClick={() => { setEditingProduct(product); setShowProductForm(true); }} className="text-white bg-blue-500/80 px-4 py-1.5 rounded-lg text-xs font-black hover:bg-blue-600 transition-all">Edit</button>
                                                <button onClick={() => handleProductDelete(product.id)} className="text-white bg-red-400/80 px-4 py-1.5 rounded-lg text-xs font-black hover:bg-red-500 transition-all">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    categories.map((category) => (
                                        <tr key={category.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors group">
                                            <td className="px-8 py-6 flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gray-50 rounded-xl overflow-hidden relative border border-gray-100 group-hover:scale-110 transition-transform">
                                                    <Image src={category.image || '/categories/soaps.png'} alt="C" fill style={{ objectFit: 'contain' }} className="p-1" />
                                                </div>
                                                <span className="font-extrabold text-gray-900">{category.name.en}</span>
                                            </td>
                                            <td className="px-8 py-6 font-mono text-sm text-gray-400">{category.id}</td>
                                            <td className="px-8 py-6 text-right space-x-3">
                                                <button onClick={() => { setEditingCategory(category); setShowCategoryForm(true); }} className="text-white bg-blue-500/80 px-4 py-1.5 rounded-lg text-xs font-black hover:bg-blue-600 transition-all">Edit</button>
                                                <button onClick={() => handleCategoryDelete(category.id)} className="text-white bg-red-400/80 px-4 py-1.5 rounded-lg text-xs font-black hover:bg-red-500 transition-all">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

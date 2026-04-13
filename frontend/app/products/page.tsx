'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import { API_URL } from '@/lib/api';

function ProductsList() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get('category') || '';
    const { t, language } = useI18n();
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(categoryQuery);
    const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [prodRes, catRes] = await Promise.all([
                    fetch(`${API_URL}/products`),
                    fetch(`${API_URL}/categories`)
                ]);
                const [prodData, catData] = await Promise.all([
                    prodRes.json(),
                    catRes.json()
                ]);
                setProducts(prodData);
                setCategories(catData);
            } catch (error) {
                console.error('Fetch failed', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            if (activeCategory) {
                setFilteredProducts(products.filter(p => p.category === activeCategory));
            } else {
                setFilteredProducts(products);
            }
        }
    }, [products, activeCategory]);

    if (loading) return <div className="p-20 text-center font-bold">Loading Products...</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-extrabold text-maroon mb-2">Our Premium Collection</h1>
                    <p className="text-gray-500">Discover authentic Indian flavors and natural products.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveCategory('')}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!activeCategory ? 'bg-maroon text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:border-maroon hover:text-maroon'}`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id ? 'bg-maroon text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:border-maroon hover:text-maroon'}`}
                        >
                            {cat.name[language as keyof typeof cat.name] || cat.name.en}
                        </button>
                    ))}
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-400">No products found in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onQuickView={(p) => setQuickViewProduct(p)}
                        />
                    ))}
                </div>
            )}

            <QuickViewModal
                product={quickViewProduct}
                onClose={() => setQuickViewProduct(null)}
            />
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center font-bold">Loading...</div>}>
            <ProductsList />
        </Suspense>
    );
}

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import { API_URL } from '@/lib/api';

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const { t } = useI18n();
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
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
                console.error('Search fetch failed', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);

            if (queryWords.length === 0) {
                setFilteredProducts(products);
                return;
            }

            const filtered = products.filter(p => {
                const category = categories.find(c => c.id === p.category);
                const categoryNameEn = category?.name?.en || '';
                const categoryNameHi = category?.name?.hi || '';
                const categoryNameMr = category?.name?.mr || '';

                const searchableText = [
                    p.name.en, p.name.hi, p.name.mr,
                    p.description,
                    p.ingredients || '',
                    categoryNameEn, categoryNameHi, categoryNameMr
                ].join(' ').toLowerCase();

                // Advanced matching: Check if all query words are present somewhere in the searchable text
                return queryWords.every(word => searchableText.includes(word));
            });
            setFilteredProducts(filtered);
        }
    }, [products, categories, query]);

    if (loading) return <div className="p-20 text-center font-bold">Searching...</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-maroon mb-8">
                Search Results for "{query}"
            </h1>

            {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-500 text-lg">No products found matching your search.</p>
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

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center font-bold">Loading...</div>}>
            <SearchResults />
        </Suspense>
    );
}

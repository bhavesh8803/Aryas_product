'use client';

import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { useI18n } from '../lib/i18n';

import Link from 'next/link';

import QuickViewModal from '../components/QuickViewModal';
import { API_URL } from '../lib/api';

export default function Home() {
  const { language, t } = useI18n();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch(`${API_URL}/products?t=${Date.now()}`),
          fetch(`${API_URL}/categories?t=${Date.now()}`)
        ]);
        const [prodData, catData] = await Promise.all([
          prodRes.json(),
          catRes.json()
        ]);
        setProducts(prodData);
        setCategories(catData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-0">
      <Hero />

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-maroon mb-2">{t('categories')}</h2>
              <div className="h-1.5 w-20 bg-saffron rounded-full"></div>
            </div>
            <Link href="/products" className="text-brand-green font-bold hover:underline transition-all">
              View All Categories &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={(category.name as any)[language]}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-maroon mb-2">{t('featuredProducts')}</h2>
              <div className="h-1.5 w-20 bg-saffron rounded-full"></div>
            </div>
            <Link href="/products" className="text-brand-green font-bold hover:underline transition-all">
              See All Products &rarr;
            </Link>
          </div>
          {loading ? (
            <div className="py-20 text-center text-gray-400 font-bold">Discovering flavors...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <WhyChooseUs />

      {/* Reviews Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-maroon mb-16">{t('reviews')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-all">
                <div className="text-maroon text-4xl mb-6">"</div>
                <p className="text-gray-600 italic mb-8">
                  "The quality of masalas from Arya's is unbeatable. It literally smells like home!"
                </p>
                <div className="font-bold text-gray-900">Smt. Sunita Deshmukh</div>
                <div className="text-sm text-gray-400">Pune, Maharashtra</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

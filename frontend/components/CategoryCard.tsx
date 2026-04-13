'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
    id: string;
    name: string;
    image: string;
}

export default function CategoryCard({ id, name, image }: CategoryCardProps) {
    return (
        <Link href={`/products?category=${id}`} className="group flex flex-col items-center gap-4 transition-all duration-500">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div className="text-center group">
                <h3 className="text-maroon font-bold text-lg md:text-xl group-hover:text-saffron transition-colors">
                    {name}
                </h3>
                <div className="mx-auto w-0 h-1 bg-saffron mt-1 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
        </Link>
    );
}

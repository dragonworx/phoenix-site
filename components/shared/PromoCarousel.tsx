'use client';

import { useEffect, useState } from 'react';
import { Promo } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface PromoCarouselProps {
  promos: Promo[]
}

export default function PromoCarousel({ promos }: PromoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activePromos = promos.filter(promo => {
    const now = new Date();
    const start = promo.start_date ? new Date(promo.start_date) : null;
    const end = promo.end_date ? new Date(promo.end_date) : null;

    if (!start && !end) return true;
    if (start && end) return now >= start && now <= end;
    if (start) return now >= start;
    if (end) return now <= end;
    return false;
  });

  useEffect(() => {
    if (activePromos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activePromos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activePromos.length]);

  if (activePromos.length === 0) return null;

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-100">
      {activePromos.map((promo, index) => (
        <div
          key={promo.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Link href={promo.link_url} className="block w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={promo.image_url}
                alt={promo.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-3xl font-bold mb-2">{promo.title}</h2>
                  <p className="text-lg">{promo.description}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {activePromos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {activePromos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

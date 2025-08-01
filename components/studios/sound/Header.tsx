import Link from 'next/link';
import React from 'react';
import PhoenixLogo from '../../shared/PhoenixLogo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {/* Home Logo */}
            <PhoenixLogo size="md" color="purple-500" />

            {/* Sound Healing Title */}
            <Link href="/sound" className="text-xl font-bold">
              Phoenix Sound Healing
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

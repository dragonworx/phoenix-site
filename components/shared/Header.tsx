import Link from 'next/link';
import PhoenixLogo from './PhoenixLogo';

interface HeaderProps {
  studioType: 'yoga' | 'pilates'
}

export default function Header({ studioType }: HeaderProps) {
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-gray-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {/* Home Logo */}
            <PhoenixLogo size="md" color="orange-500" />

            {/* Studio Name */}
            <Link href={`/${studioType}`} className="text-xl font-bold">
              Phoenix {studioName}
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-8">
            <Link href={`/${studioType}/blog`} className="hover:text-gray-600">
              Blog
            </Link>
            <Link href={`/${studioType}/about`} className="hover:text-gray-600">
              About
            </Link>
            <Link href={`/${studioType}/team`} className="hover:text-gray-600">
              Team
            </Link>
            <Link href={`/${studioType}/booking`} className="hover:text-gray-600">
              Booking
            </Link>
            <Link href={`/${studioType}/contact`} className="hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Link href={`/${studioType}/booking`} className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

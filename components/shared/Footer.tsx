import Link from 'next/link';

interface FooterProps {
  studioType: 'yoga' | 'pilates' | 'sound'
}

export default function Footer({ studioType }: FooterProps) {
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1);

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 mt-auto text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Phoenix {studioName}</h3>
            <p className="text-sm text-gray-600">
              Find balance and strength at our {studioType} studio
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${studioType}/about`} className="hover:text-gray-600">About Us</Link></li>
              <li><Link href={`/${studioType}/team`} className="hover:text-gray-600">Our Team</Link></li>
              <li><Link href={`/${studioType}/booking`} className="hover:text-gray-600">Book a Class</Link></li>
              <li><Link href={`/${studioType}/contact`} className="hover:text-gray-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-600">Facebook</a>
              <a href="#" className="hover:text-gray-600">Instagram</a>
              <a href="#" className="hover:text-gray-600">Twitter</a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Phoenix {studioName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

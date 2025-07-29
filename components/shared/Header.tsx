import Link from 'next/link'

interface HeaderProps {
  studioType: 'yoga' | 'pilates'
}

export default function Header({ studioType }: HeaderProps) {
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1)
  
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${studioType}`} className="text-xl font-bold">
            Phoenix {studioName}
          </Link>
          
          <div className="flex space-x-8">
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
        </div>
      </nav>
    </header>
  )
}
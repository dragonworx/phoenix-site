import Link from 'next/link';

export default function YogaHomeHero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-amber-50" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-800 mb-4 sm:mb-6">
          Find Your Inner Peace
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 font-light">
          Transform your mind, body, and spirit through the ancient practice of yoga
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
          <Link
            href="/yoga/booking"
            className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            Book Your First Class
          </Link>
          <Link
            href="/yoga/about"
            className="inline-block border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-orange-50 transition-colors text-sm sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

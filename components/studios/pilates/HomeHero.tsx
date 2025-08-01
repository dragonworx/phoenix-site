import Link from 'next/link'

export default function PilatesHomeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
          Strengthen Your Core
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Build strength, flexibility, and control through precision movement
        </p>
        <div className="space-x-4">
          <Link
            href="/pilates/booking"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
          >
            Start Your Journey
          </Link>
          <Link
            href="/pilates/about"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

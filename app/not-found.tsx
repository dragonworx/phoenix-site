import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center px-4 max-w-2xl mx-auto">
        {/* Large 404 with gradient */}
        <h1 className="text-8xl sm:text-9xl font-light bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Phoenix icon */}
        <div className="mb-8">
          <svg className="w-24 h-24 mx-auto text-gray-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>

        {/* Polite message */}
        <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-4">
          Oops! This path seems to have wandered off
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Like a phoenix rising from the ashes, let&apos;s help you find your way back to wellness.
        </p>

        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>

          <div className="flex gap-4 justify-center">
            <Link
              href="/yoga"
              className="inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition-colors"
            >
              Visit Yoga
            </Link>

            <Link
              href="/pilates"
              className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Visit Pilates
            </Link>
          </div>
        </div>

        {/* Additional help text */}
        <p className="mt-12 text-sm text-gray-500">
          If you believe this is an error, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>
        </p>
      </div>
    </div>
  );
}

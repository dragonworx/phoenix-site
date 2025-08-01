import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Phoenix Wellness
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
        Choose your path to wellness and transformation
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        <Link
          href="/yoga"
          className="group rounded-lg border border-transparent px-8 py-12 transition-colors hover:border-orange-300 hover:bg-orange-50 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            Yoga Studio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 text-sm text-gray-600">
            Discover inner peace and flexibility through our transformative yoga classes
          </p>
        </Link>

        <Link
          href="/pilates"
          className="group rounded-lg border border-transparent px-8 py-12 transition-colors hover:border-blue-300 hover:bg-blue-50 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            Pilates Studio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 text-sm text-gray-600">
            Build core strength and improve posture with precision pilates movements
          </p>
        </Link>

        <Link
          href="/sound"
          className="group rounded-lg border border-transparent px-8 py-12 transition-colors hover:border-purple-300 hover:bg-purple-50 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            Sound Healing{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 text-sm text-gray-600">
            Experience deep relaxation and healing through sacred sound vibrations
          </p>
        </Link>
      </div>
    </main>
  )
}

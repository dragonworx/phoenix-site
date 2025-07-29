import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Phoenix Yoga & Pilates
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Link
          href="/yoga"
          className="group rounded-lg border border-transparent px-8 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Yoga Studio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Discover inner peace and flexibility through our yoga classes
          </p>
        </Link>

        <Link
          href="/pilates"
          className="group rounded-lg border border-transparent px-8 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Pilates Studio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Build core strength and improve posture with our pilates sessions
          </p>
        </Link>
      </div>
    </main>
  )
}
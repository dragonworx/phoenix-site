'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Admin Panel
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access restricted to authorized administrators only
          </p>
        </div>
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  {error === 'Signin' && 'You are not authorized to access the admin panel'}
                  {error === 'OAuthSignin' && 'Error occurred during sign in'}
                  {error === 'OAuthCallback' && 'Error occurred during authentication'}
                  {error === 'OAuthCreateAccount' && 'Could not create user account'}
                  {error === 'EmailCreateAccount' && 'Could not create user account'}
                  {error === 'Callback' && 'Error occurred during authentication'}
                  {error === 'OAuthAccountNotLinked' && 'Account not linked'}
                  {error === 'SessionRequired' && 'Please sign in to continue'}
                  {error === 'Default' && 'An error occurred during sign in'}
                </h3>
              </div>
            </div>
          </div>
        )}
        <div>
          <button
            onClick={() => signIn('google', { callbackUrl: '/admin' })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}
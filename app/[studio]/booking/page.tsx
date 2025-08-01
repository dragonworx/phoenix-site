import { getStudioContent, isValidStudio } from '@/components/shared/StudioContentLoader'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function BookingPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)

  if (!isValidStudio(resolvedParams.studio)) {
    notFound()
  }

  const studioType = resolvedParams.studio
  const BookingBlurb = getStudioContent(studioType, 'BookingBlurb')

  return (
    <div>
      <BookingBlurb />

      {/* Mindbody iframe will be embedded here */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Booking System Coming Soon
          </h3>
          <p className="text-gray-600">
            Our online booking system will be available here shortly.
          </p>
        </div>
      </div>
    </div>
  )
}

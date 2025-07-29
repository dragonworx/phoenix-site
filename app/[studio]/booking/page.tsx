import { use } from 'react'

export default function BookingPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)
  const studioType = resolvedParams.studio as 'yoga' | 'pilates'
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1)
  
  // In production, these URLs would come from environment variables
  const iframeUrl = studioType === 'yoga' 
    ? process.env.NEXT_PUBLIC_MINDBODY_YOGA_IFRAME_URL 
    : process.env.NEXT_PUBLIC_MINDBODY_PILATES_IFRAME_URL
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Book Your {studioName} Class
      </h1>
      
      <p className="text-lg text-center text-gray-600 mb-8">
        Browse our schedule and reserve your spot in upcoming classes
      </p>
      
      <div className="bg-white rounded-lg shadow-lg p-4">
        {iframeUrl ? (
          <iframe
            src={iframeUrl}
            className="w-full h-[800px] border-0"
            title={`${studioName} Class Booking`}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">
              Booking system is not configured yet.
            </p>
            <p className="text-sm text-gray-400">
              Please set NEXT_PUBLIC_MINDBODY_{studioType.toUpperCase()}_IFRAME_URL in your environment variables.
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Having trouble booking? Call us at (555) 123-4567</p>
      </div>
    </div>
  )
}
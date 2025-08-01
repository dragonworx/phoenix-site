import PromoCarousel from '@/components/shared/PromoCarousel'
import { getStudioContent, isValidStudio } from '@/components/shared/StudioContentLoader'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function StudioHomePage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)

  if (!isValidStudio(resolvedParams.studio)) {
    notFound()
  }

  const studioType = resolvedParams.studio
  const HomeHero = getStudioContent(studioType, 'HomeHero')

  // This would normally fetch from Supabase
  // For now, using placeholder data
  const promos = [
    {
      id: '1',
      studio_type: studioType,
      title: 'Welcome to Phoenix ' + studioType.charAt(0).toUpperCase() + studioType.slice(1),
      description: 'Experience the best ' + studioType + ' classes in town',
      image_url: 'https://via.placeholder.com/1200x400',
      link_url: '/' + studioType + '/booking',
      start_date: null,
      end_date: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ]

  return (
    <div>
      <HomeHero />
      <PromoCarousel promos={promos} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from certified professionals dedicated to your wellness journey
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
            <p className="text-gray-600">
              Classes throughout the day to fit your busy lifestyle
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Welcoming Community</h3>
            <p className="text-gray-600">
              Join a supportive community focused on health and wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

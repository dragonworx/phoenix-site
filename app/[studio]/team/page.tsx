import { getStudioContent, isValidStudio } from '@/components/shared/StudioContentLoader'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function TeamPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)

  if (!isValidStudio(resolvedParams.studio)) {
    notFound()
  }

  const studioType = resolvedParams.studio
  const TeamIntro = getStudioContent(studioType, 'TeamIntro')

  return (
    <div>
      <TeamIntro />

      {/* Instructor profiles will be loaded from Supabase here */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 italic">
            Instructor profiles coming soon...
          </p>
        </div>
      </div>
    </div>
  )
}

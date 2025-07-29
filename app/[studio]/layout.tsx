import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function StudioLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)
  const studioType = resolvedParams.studio as 'yoga' | 'pilates'
  
  if (studioType !== 'yoga' && studioType !== 'pilates') {
    notFound()
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header studioType={studioType} />
      <main className="flex-grow">{children}</main>
      <Footer studioType={studioType} />
    </div>
  )
}

import { use } from 'react'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

// Define content types
export type ContentType =
  | 'HomeHero'
  | 'AboutContent'
  | 'BlogIntro'
  | 'BookingBlurb'
  | 'ContactInfo'
  | 'TeamIntro'

export type StudioType = 'yoga' | 'pilates' | 'sound'

// Dynamic imports for all content components
const contentComponents = {
  yoga: {
    HomeHero: dynamic(() => import('@/components/studios/yoga/HomeHero')),
    AboutContent: dynamic(() => import('@/components/studios/yoga/AboutContent')),
    BlogIntro: dynamic(() => import('@/components/studios/yoga/BlogIntro')),
    BookingBlurb: dynamic(() => import('@/components/studios/yoga/BookingBlurb')),
    ContactInfo: dynamic(() => import('@/components/studios/yoga/ContactInfo')),
    TeamIntro: dynamic(() => import('@/components/studios/yoga/TeamIntro')),
  },
  pilates: {
    HomeHero: dynamic(() => import('@/components/studios/pilates/HomeHero')),
    AboutContent: dynamic(() => import('@/components/studios/pilates/AboutContent')),
    BlogIntro: dynamic(() => import('@/components/studios/pilates/BlogIntro')),
    BookingBlurb: dynamic(() => import('@/components/studios/pilates/BookingBlurb')),
    ContactInfo: dynamic(() => import('@/components/studios/pilates/ContactInfo')),
    TeamIntro: dynamic(() => import('@/components/studios/pilates/TeamIntro')),
  }
}

export function getStudioContent(
  studio: StudioType,
  contentType: ContentType
) {
  return contentComponents[studio][contentType]
}

// Utility function to validate studio type
export function isValidStudio(studio: string): studio is StudioType {
  return studio === 'yoga' || studio === 'pilates' || studio === 'sound'
}

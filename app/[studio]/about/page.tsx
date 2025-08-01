import { getStudioContent, isValidStudio } from '@/components/shared/StudioContentLoader';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function AboutPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params);

  if (!isValidStudio(resolvedParams.studio)) {
    notFound();
  }

  const studioType = resolvedParams.studio;
  const AboutContent = getStudioContent(studioType, 'AboutContent');

  return <AboutContent />;
}

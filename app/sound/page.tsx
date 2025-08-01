import SoundContent from '@/components/studios/sound/SoundContent';
import SoundHeader from '@/components/studios/sound/Header';
import Footer from '@/components/shared/Footer';
import React from 'react';

export default function SoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SoundHeader />
      <main className="flex-grow"><SoundContent/></main>
      <Footer studioType='sound'/>
    </div>

  );
}

import { use } from 'react'

export default function AboutPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)
  const studioType = resolvedParams.studio as 'yoga' | 'pilates'
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1)
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Phoenix {studioName}
      </h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
          <p className="text-gray-600 mb-4">
            At Phoenix {studioName}, we believe in the transformative power of {studioType} 
            to enhance both physical and mental well-being. Our approach combines traditional 
            techniques with modern understanding to create a practice that's accessible, 
            effective, and enjoyable for everyone.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mission Statement</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to provide a welcoming space where individuals of all levels can 
            explore and deepen their {studioType} practice, fostering physical strength, 
            mental clarity, and spiritual growth in a supportive community environment.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Phoenix {studioName} began as a small studio with a big vision: 
            to create a sanctuary where people could escape the stresses of daily life and 
            reconnect with their bodies and minds. What started with just a handful of 
            students has grown into a thriving community of practitioners.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "Phoenix {studioName} has completely transformed my life. The instructors 
                are knowledgeable and caring, and the community is so supportive."
              </p>
              <p className="font-semibold">- Sarah M.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "I've tried many studios, but none compare to Phoenix. The attention to 
                detail and personalized approach make all the difference."
              </p>
              <p className="font-semibold">- John D.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
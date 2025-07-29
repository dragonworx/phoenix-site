import { use } from 'react'

export default function TeamPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)
  const studioType = resolvedParams.studio as 'yoga' | 'pilates'
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1)
  
  // Placeholder instructor data
  const instructors = [
    {
      id: '1',
      first_name: 'Emma',
      last_name: 'Wilson',
      bio: 'Certified instructor with 10 years of experience.',
      photo_url: 'https://via.placeholder.com/300x300',
      specializations: ['Vinyasa', 'Hatha', 'Meditation'],
      certifications: ['RYT-500', 'E-RYT 200'],
    },
    {
      id: '2',
      first_name: 'Michael',
      last_name: 'Chen',
      bio: 'Passionate about helping students achieve their wellness goals.',
      photo_url: 'https://via.placeholder.com/300x300',
      specializations: ['Power Yoga', 'Restorative', 'Breathwork'],
      certifications: ['RYT-200', 'Yoga Therapy'],
    },
  ]
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our {studioName} Instructors
      </h1>
      
      <p className="text-lg text-center text-gray-600 mb-12">
        Meet our dedicated team of certified {studioType} instructors
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={instructor.photo_url}
              alt={`${instructor.first_name} ${instructor.last_name}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {instructor.first_name} {instructor.last_name}
              </h3>
              <p className="text-gray-600 mb-4">{instructor.bio}</p>
              
              <div className="mb-3">
                <h4 className="font-semibold text-sm mb-1">Specializations:</h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-1">Certifications:</h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
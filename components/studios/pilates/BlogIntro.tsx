export default function PilatesBlogIntro() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">The Phoenix Pilates Blog</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Discover insights on movement, technique, wellness, and the art of Pilates
          through expert guidance and client success stories.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-4">Explore Our Content</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Technique Tutorials</h3>
            <p className="text-sm text-gray-600">
              Step-by-step breakdowns of exercises and proper form
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Wellness & Recovery</h3>
            <p className="text-sm text-gray-600">
              Injury prevention, rehabilitation, and holistic health
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600">
              Client transformations and achievement highlights
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Popular Topics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800 mb-2">Equipment Insights</h3>
            <p className="text-gray-600 text-sm">
              Understanding the reformer, tower, chair, and barrel - when and how to use each apparatus
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800 mb-2">Core Fundamentals</h3>
            <p className="text-gray-600 text-sm">
              Deep dives into powerhouse engagement and the foundation of all Pilates movement
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800 mb-2">Athletic Performance</h3>
            <p className="text-gray-600 text-sm">
              How Pilates enhances sports performance and prevents athletic injuries
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800 mb-2">Posture & Alignment</h3>
            <p className="text-gray-600 text-sm">
              Addressing common postural issues and creating balanced body mechanics
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-light text-gray-700 mb-4">Browse by Category</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Beginner Basics', 'Advanced Techniques', 'Injury Prevention',
            'Mat Work', 'Equipment Focus', 'Anatomy', 'Client Spotlights',
            'Studio News'
          ].map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

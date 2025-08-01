export default function YogaTeamIntro() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Meet Your Yoga Guides</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
          Our dedicated instructors bring diverse backgrounds, extensive training, and heartfelt
          passion to guide you on your yoga journey. Each teacher offers their unique perspective
          while maintaining our studio&apos;s commitment to authentic, accessible practice.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Our Teaching Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Heart-Centered</h3>
            <p className="text-sm text-gray-600">
              Teaching from a place of compassion and authentic connection
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Knowledge-Based</h3>
            <p className="text-sm text-gray-600">
              Grounded in anatomy, philosophy, and continuous learning
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Student-Focused</h3>
            <p className="text-sm text-gray-600">
              Adapting to meet each student&apos;s unique needs and goals
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-8 text-center">Instructor Specialties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Vinyasa Flow</h3>
            <p className="text-sm text-gray-600">Dynamic, breath-synchronized movement</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Restorative</h3>
            <p className="text-sm text-gray-600">Deep relaxation and stress relief</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Alignment-Based</h3>
            <p className="text-sm text-gray-600">Precise, therapeutic approach</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Meditation</h3>
            <p className="text-sm text-gray-600">Mindfulness and inner peace</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Our Commitment to Excellence</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">200+ Hour Certification</h3>
              <p className="text-gray-600">All instructors hold Yoga Alliance certified training or equivalent</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Ongoing Education</h3>
              <p className="text-gray-600">Regular workshops and advanced training to deepen expertise</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Personal Practice</h3>
              <p className="text-gray-600">Each teacher maintains their own dedicated yoga practice</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Community Values</h3>
              <p className="text-gray-600">Committed to inclusivity, safety, and student well-being</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 italic font-light mb-4">
          &quot;Teaching yoga is not about being perfect. It&apos;s about being present, authentic,
          and holding space for transformation.&quot;
        </p>
        <p className="text-gray-500">— Phoenix Yoga Teaching Team</p>
      </div>
    </div>
  );
}

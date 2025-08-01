export default function YogaBlogIntro() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">The Phoenix Yoga Blog</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Explore the wisdom of yoga through articles on philosophy, practice tips,
          wellness insights, and community stories.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-4">What You&apos;ll Find Here</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Practice Guides</h3>
            <p className="text-sm text-gray-600">
              Detailed breakdowns of poses, sequences, and breathing techniques
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Philosophy & Wisdom</h3>
            <p className="text-sm text-gray-600">
              Ancient teachings applied to modern life challenges
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Community Stories</h3>
            <p className="text-sm text-gray-600">
              Student journeys, teacher insights, and studio updates
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-light text-gray-700 mb-4">Featured Topics</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Beginner Tips', 'Advanced Asanas', 'Meditation', 'Breathwork',
            'Yoga Philosophy', 'Seasonal Practice', 'Self-Care', 'Mindfulness',
          ].map((topic) => (
            <span
              key={topic}
              className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

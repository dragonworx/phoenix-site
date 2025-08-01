export default function PilatesTeamIntro() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Meet Your Pilates Instructors</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
          Our comprehensively certified instructors bring expertise, passion, and personalized
          attention to every session. Each instructor has completed rigorous training in the
          classical Pilates method and continues their education to provide you with the
          highest quality instruction.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Our Standards of Excellence</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Comprehensive Certification</h3>
            <p className="text-sm text-gray-600">
              600+ hours of classical Pilates training from recognized programs
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Teaching Experience</h3>
            <p className="text-sm text-gray-600">
              Minimum 2 years of professional instruction experience
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Continuing Education</h3>
            <p className="text-sm text-gray-600">
              Regular workshops and advanced training to stay current
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-8 text-center">Areas of Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Pre/Post Natal</h3>
            <p className="text-sm text-gray-600">Safe, effective exercise during and after pregnancy</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Rehabilitation</h3>
            <p className="text-sm text-gray-600">Post-injury and post-surgery recovery programs</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Athletic Performance</h3>
            <p className="text-sm text-gray-600">Sport-specific conditioning and injury prevention</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-gray-800 mb-2">Senior Fitness</h3>
            <p className="text-sm text-gray-600">Gentle, effective programs for active aging</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Our Teaching Philosophy</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-medium text-gray-800 mb-2">Individualized Approach</h3>
            <p className="text-gray-600">
              We recognize that every body is unique. Our instructors assess each client&apos;s needs,
              limitations, and goals to create personalized programs that deliver results safely
              and effectively.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-medium text-gray-800 mb-2">Classical Foundation</h3>
            <p className="text-gray-600">
              While we embrace modern understanding of biomechanics and anatomy, we remain true
              to Joseph Pilates&apos; original method and principles. This time-tested approach ensures
              consistent, transformative results.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-medium text-gray-800 mb-2">Holistic Wellness</h3>
            <p className="text-gray-600">
              We view Pilates as more than exercise—it&apos;s a path to overall well-being. Our
              instructors consider posture, movement patterns, stress levels, and lifestyle
              factors in their teaching.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6">
          <h3 className="text-xl font-light text-gray-800 mb-4">Professional Affiliations</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Pilates Method Alliance (PMA) Certified
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Romana&apos;s Pilates Certified
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              BASI Pilates Comprehensive Certified
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Fletcher Pilates Certified
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6">
          <h3 className="text-xl font-light text-gray-800 mb-4">Specialized Training</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Anatomy & Biomechanics Certification
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Postural Assessment & Correction
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Injury Prevention & Rehabilitation
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Special Populations Training
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-700 italic font-light mb-4">
          &quot;As instructors, we are honored to guide you on your Pilates journey. Our commitment
          is to help you discover the strength, grace, and vitality within your own body.&quot;
        </p>
        <p className="text-gray-500">— Phoenix Pilates Instructor Team</p>
      </div>
    </div>
  )
}

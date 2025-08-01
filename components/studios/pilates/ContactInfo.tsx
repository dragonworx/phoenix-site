export default function PilatesContactInfo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Connect With Phoenix Pilates</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light">
          Ready to transform your body and mind? We&apos;re here to guide your journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-light text-blue-600 mb-6">Visit Our Studio</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </h3>
              <p className="text-gray-600">
                456 Wellness Boulevard<br />
                Phoenix, AZ 85003<br />
                Near Steele Indian School Park
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Studio Hours
              </h3>
              <div className="text-gray-600">
                <p>Monday - Friday: 6:30 AM - 8:30 PM</p>
                <p>Saturday: 8:00 AM - 5:00 PM</p>
                <p>Sunday: 9:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </h3>
              <p className="text-gray-600">
                Phone: (602) 555-CORE<br />
                Email: info@phoenixpilates.com
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Parking
              </h3>
              <p className="text-gray-600">
                Free parking available in our dedicated lot.
                Additional street parking on Wellness Blvd.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-800 mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-4">
                New to Pilates? Schedule a free 15-minute consultation to discuss your
                goals and learn how Pilates can help you achieve them.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Book Consultation
              </button>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">Join Our Community</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-600">
                Follow us for daily movement tips, class updates, and studio news
              </p>
            </div>

            <div className="pt-4 border-t border-blue-200">
              <h3 className="font-medium text-gray-800 mb-3">Newsletter</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Monthly insights on movement, wellness, and exclusive member benefits
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Common Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-blue-600 transition-colors">
              What&apos;s the difference between Pilates and yoga?
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              While both focus on mind-body connection, Pilates emphasizes core strength,
              precise movement, and muscular control. Yoga includes more flexibility work,
              meditation, and spiritual elements.
            </p>
          </details>
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Do I need to be fit to start Pilates?
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              Not at all! Pilates is adaptable to all fitness levels. We&apos;ll modify exercises
              to match your current ability while safely challenging you to improve.
            </p>
          </details>
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-blue-600 transition-colors">
              What&apos;s the difference between mat and equipment Pilates?
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              Mat Pilates uses body weight and small props for resistance. Equipment Pilates
              uses specialized apparatus (reformer, tower, chair) that provide spring resistance
              to support and challenge your movements.
            </p>
          </details>
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-blue-600 transition-colors">
              How often should I practice Pilates?
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              For best results, we recommend 2-3 sessions per week. This allows your body
              to adapt and strengthen while providing adequate recovery time.
            </p>
          </details>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 italic font-light">
          &quot;In 10 sessions you&apos;ll feel the difference, in 20 sessions you&apos;ll see the difference,
          and in 30 sessions you&apos;ll have a whole new body.&quot;
        </p>
        <p className="text-gray-500 mt-2">— Joseph Pilates</p>
      </div>
    </div>
  );
}

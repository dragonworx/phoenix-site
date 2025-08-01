export default function YogaContactInfo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Connect With Phoenix Yoga</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light">
          We&apos;re here to support your journey. Reach out with questions or just to say namaste!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-light text-orange-600 mb-6">Visit Our Sanctuary</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </h3>
              <p className="text-gray-600">
                123 Serenity Lane<br />
                Phoenix, AZ 85004<br />
                Located in the heart of downtown Phoenix
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Studio Hours
              </h3>
              <div className="text-gray-600">
                <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                <p>Saturday: 7:00 AM - 7:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </h3>
              <p className="text-gray-600">
                Phone: (602) 555-YOGA<br />
                Email: namaste@phoenixyoga.com
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-800 mb-6">Stay Connected</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Join our community for weekly inspiration, class updates, and exclusive offers
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="pt-4 border-t border-orange-200">
              <p className="text-sm text-gray-600 text-center italic">
                &quot;The light in me honors the light in you.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-orange-600 transition-colors">
              Do I need to be flexible to start yoga?
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              Absolutely not! Yoga is about meeting yourself where you are. Flexibility comes with practice,
              and our instructors provide modifications for all levels.
            </p>
          </details>
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-orange-600 transition-colors">
              What should I wear to class?
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              Wear comfortable clothing you can move and stretch in. Most students wear athletic wear
              similar to what you&apos;d wear to the gym. Yoga is practiced barefoot.
            </p>
          </details>
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-orange-600 transition-colors">
              Can I eat before class?
            </summary>
            <p className="mt-2 text-gray-600 pl-4">
              We recommend avoiding large meals 2-3 hours before practice. A light snack 30-60 minutes
              before class is fine if you need energy.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

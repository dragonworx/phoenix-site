export default function YogaBookingBlurb() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Book Your Yoga Journey</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light">
          Step onto your mat and into a practice that will transform your life
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Class Offerings</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-orange-600 mb-3">Gentle & Restorative</h3>
            <p className="text-gray-600 mb-4">
              Perfect for beginners or those seeking a slower, more meditative practice.
              Focus on relaxation, flexibility, and stress relief.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Gentle Hatha</li>
              <li>• Restorative Yoga</li>
              <li>• Yin Yoga</li>
              <li>• Chair Yoga</li>
            </ul>
          </div>

          <div className="border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-orange-600 mb-3">Dynamic & Flowing</h3>
            <p className="text-gray-600 mb-4">
              Build strength, stamina, and flexibility through flowing sequences.
              Suitable for those with some yoga experience.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Vinyasa Flow</li>
              <li>• Power Yoga</li>
              <li>• Ashtanga-inspired</li>
              <li>• Hot Yoga</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-4 text-center">Specialty Classes</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-medium text-orange-600 mb-2">Prenatal Yoga</h4>
              <p className="text-sm text-gray-600">Safe practice for expecting mothers</p>
            </div>
            <div>
              <h4 className="font-medium text-orange-600 mb-2">Kids Yoga</h4>
              <p className="text-sm text-gray-600">Fun and mindful movement for children</p>
            </div>
            <div>
              <h4 className="font-medium text-orange-600 mb-2">Meditation Circle</h4>
              <p className="text-sm text-gray-600">Guided meditation and breathwork</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">New Student Special</h2>
        <div className="text-center">
          <p className="text-3xl font-bold text-orange-600 mb-2">30 Days Unlimited</p>
          <p className="text-5xl font-bold text-gray-800 mb-4">$49</p>
          <p className="text-gray-600 mb-6">
            Experience all our classes for one month at this special introductory rate
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors text-lg">
            Get Started Today
          </button>
        </div>
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-xl font-light text-gray-700">What to Expect</h3>
        <div className="max-w-2xl mx-auto text-gray-600 space-y-3">
          <p>
            <strong>First Visit?</strong> Arrive 15 minutes early to complete registration
            and get oriented to our space.
          </p>
          <p>
            <strong>What to Bring:</strong> Yoga mat (rentals available), water bottle,
            and an open mind. Wear comfortable clothing you can move in.
          </p>
          <p>
            <strong>All Levels Welcome:</strong> Our instructors provide modifications
            for every pose, ensuring a safe and accessible practice for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

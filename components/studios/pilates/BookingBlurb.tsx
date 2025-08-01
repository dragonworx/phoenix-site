export default function PilatesBookingBlurb() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Book Your Pilates Session</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light">
          Experience the precision and power of classical Pilates
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Session Types</h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-blue-600 mb-3">Private Sessions</h3>
            <p className="text-gray-600 mb-4">
              One-on-one instruction tailored to your specific goals and needs.
              Perfect for beginners, those with injuries, or anyone seeking personalized attention.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">55 minutes</span>
              <span className="text-2xl font-semibold text-gray-800">$95</span>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-blue-600 mb-3">Duet Sessions</h3>
            <p className="text-gray-600 mb-4">
              Work out with a friend or partner. Enjoy personalized instruction
              while sharing the energy and motivation of a workout buddy.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">55 minutes</span>
              <span className="text-2xl font-semibold text-gray-800">$65/person</span>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-blue-600 mb-3">Equipment Classes</h3>
            <p className="text-gray-600 mb-4">
              Small group reformer classes (max 4 clients) combining the benefits
              of equipment work with the energy of a group setting.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">50 minutes</span>
              <span className="text-2xl font-semibold text-gray-800">$45</span>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-medium text-blue-600 mb-3">Mat Classes</h3>
            <p className="text-gray-600 mb-4">
              Classical mat work focusing on core strength and full-body conditioning.
              All levels welcome with modifications provided.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">45 minutes</span>
              <span className="text-2xl font-semibold text-gray-800">$25</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-slate-100 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Introductory Package</h2>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600 mb-2">3 Private Sessions</p>
          <p className="text-5xl font-bold text-gray-800 mb-4">$249</p>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            New to Pilates? Start with our introductory package. Learn the fundamentals,
            receive a postural assessment, and develop a personalized program.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg">
            Purchase Package
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Class Packages</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between">
              <span>5 Classes</span>
              <span className="font-medium">$215</span>
            </li>
            <li className="flex justify-between">
              <span>10 Classes</span>
              <span className="font-medium">$400</span>
            </li>
            <li className="flex justify-between">
              <span>20 Classes</span>
              <span className="font-medium">$750</span>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-3">Valid for 6 months</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Monthly Memberships</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between">
              <span>4 Classes/Month</span>
              <span className="font-medium">$160</span>
            </li>
            <li className="flex justify-between">
              <span>8 Classes/Month</span>
              <span className="font-medium">$280</span>
            </li>
            <li className="flex justify-between">
              <span>Unlimited</span>
              <span className="font-medium">$395</span>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-3">Auto-renewing monthly</p>
        </div>
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-xl font-light text-gray-700">Booking Guidelines</h3>
        <div className="max-w-2xl mx-auto text-gray-600 space-y-3">
          <p>
            <strong>Cancellation Policy:</strong> Please cancel at least 24 hours in advance
            to avoid being charged for your session.
          </p>
          <p>
            <strong>What to Wear:</strong> Form-fitting athletic wear that allows your instructor
            to see your alignment. Grip socks required for equipment work.
          </p>
          <p>
            <strong>Health Considerations:</strong> Please inform your instructor of any injuries,
            surgeries, or health conditions before your first session.
          </p>
        </div>
      </div>
    </div>
  )
}

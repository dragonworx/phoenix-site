export default function SoundContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            Phoenix Sound Healing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Journey through sacred vibrations and transformative frequencies
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-light text-purple-600 mb-6">The Power of Sound</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to Phoenix Sound Healing, where ancient wisdom meets modern acoustic science.
              Our sound healing sessions use carefully calibrated frequencies, crystal singing bowls,
              Tibetan bowls, gongs, and other sacred instruments to create a sonic environment that
              promotes deep relaxation, healing, and spiritual transformation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Just as the mythical phoenix is reborn through fire, allow yourself to be transformed
              through the purifying power of sound. Each session is a journey of renewal, releasing
              what no longer serves you and awakening your body&apos;s natural healing abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Benefits of Sound Healing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Stress Relief</h3>
              <p className="text-gray-600">
                Sound vibrations calm the nervous system, reducing cortisol levels and
                promoting a deep state of relaxation
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Mental Clarity</h3>
              <p className="text-gray-600">
                Specific frequencies help clear mental fog, enhance focus, and promote
                creative thinking
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Energy Balance</h3>
              <p className="text-gray-600">
                Sound waves help align and balance your chakras, restoring optimal
                energy flow throughout your body
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Our Sound Healing Offerings
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-light text-purple-600 mb-4">Sound Bath Sessions</h3>
              <p className="text-gray-600 mb-4">
                Immerse yourself in waves of healing sound during our 60-minute group sound baths.
                Lie comfortably as crystal bowls, gongs, and chimes create a sonic cocoon of healing
                vibrations. Perfect for stress relief, meditation, and deep relaxation.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Group Sessions: Fridays 7pm, Sundays 5pm</span>
                <span className="text-2xl font-semibold text-purple-600">$35</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-light text-purple-600 mb-4">Private Sound Therapy</h3>
              <p className="text-gray-600 mb-4">
                Experience personalized sound healing tailored to your specific needs. Using
                biofeedback and intuitive guidance, we create a custom sound journey addressing
                your physical, emotional, and spiritual wellness goals.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">75-minute personalized session</span>
                <span className="text-2xl font-semibold text-purple-600">$120</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-light text-purple-600 mb-4">Yoga + Sound Fusion</h3>
              <p className="text-gray-600 mb-4">
                Combine the power of movement with healing sound. This unique class blends gentle
                yoga flow with live sound healing, creating a deeply meditative and transformative
                practice.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">90-minute fusion class</span>
                <span className="text-2xl font-semibold text-purple-600">$45</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-8">Our Sacred Space</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our sound healing sanctuary is designed to optimize acoustic resonance and create
            a womb-like environment for deep healing. With carefully placed sound absorption
            panels, natural materials, and sacred geometry, every element supports your journey
            into profound states of relaxation and transformation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Crystal Collection</h3>
              <p className="text-sm text-gray-600">
                Over 20 crystal singing bowls tuned to specific healing frequencies
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Sacred Instruments</h3>
              <p className="text-sm text-gray-600">
                Gongs, Tibetan bowls, chimes, drums, and other world instruments
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Comfort & Support</h3>
              <p className="text-sm text-gray-600">
                Zero-gravity chairs, bolsters, blankets, and eye masks provided
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer font-medium text-gray-800 hover:text-purple-600 transition-colors">
                What should I expect during my first sound bath?
              </summary>
              <p className="mt-2 text-gray-600 pl-4">
                You&apos;ll lie comfortably on a mat (we provide everything) while various instruments
                create waves of sound around you. Many people experience deep relaxation, emotional
                release, or even fall asleep. All responses are perfectly normal and beneficial.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-gray-800 hover:text-purple-600 transition-colors">
                Is sound healing safe for everyone?
              </summary>
              <p className="mt-2 text-gray-600 pl-4">
                Sound healing is generally safe for most people. However, those with sound-induced
                epilepsy, severe mental health conditions, or in the first trimester of pregnancy
                should consult their healthcare provider first.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-gray-800 hover:text-purple-600 transition-colors">
                How often should I attend sound healing sessions?
              </summary>
              <p className="mt-2 text-gray-600 pl-4">
                This varies by individual. Some benefit from weekly sessions, while others find
                monthly sessions sufficient. We recommend starting with 2-3 sessions to experience
                the cumulative effects, then finding a rhythm that works for you.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Begin Your Sound Journey</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the transformative power of sound healing?
            Book your session today or contact us with any questions.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Email:</strong> sound@phoenixwellness.com<br />
              <strong>Phone:</strong> (602) 555-HEAL<br />
              <strong>Location:</strong> 789 Harmony Lane, Phoenix, AZ 85004
            </p>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors text-lg">
              Book Your Sound Healing Session
            </button>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-12 px-4 text-center border-t border-purple-200">
        <p className="text-xl text-gray-700 italic font-light">
          &quot;In the beginning was the Word, and the Word was Sound.&quot;
        </p>
        <p className="text-gray-500 mt-2">— Ancient Wisdom</p>
      </section>
    </div>
  );
}

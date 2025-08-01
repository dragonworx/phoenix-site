export default function PilatesAboutContent() {
  return (
    <div className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-light text-gray-800 mb-8">About Phoenix Pilates</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-blue-600 mb-4">The Pilates Method</h2>
        <p className="text-gray-600 leading-relaxed">
          Phoenix Pilates is dedicated to the authentic practice of the Pilates Method,
          as developed by Joseph Pilates. We believe in the transformative power of
          controlled, precise movement to create long, lean muscles, improve posture,
          and develop a strong, stable core.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our approach emphasizes quality over quantity, focusing on proper form and
          mindful movement. Each exercise is designed to work the body as an integrated
          whole, promoting balance, coordination, and functional strength.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To provide exceptional Pilates instruction that empowers individuals to achieve
          their fitness goals, improve their quality of life, and discover the joy of
          movement. We are dedicated to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
          <li>Delivering personalized instruction tailored to each client&apos;s needs</li>
          <li>Maintaining the highest standards of classical Pilates training</li>
          <li>Creating a supportive, non-intimidating environment</li>
          <li>Helping clients develop body awareness and movement efficiency</li>
          <li>Promoting Pilates as a lifelong practice for health and vitality</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-blue-600 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Phoenix Pilates opened its doors in 2020 with a vision to bring authentic,
          high-quality Pilates instruction to our community. Founded by a team of
          comprehensively certified instructors, we started with just two reformers
          and a commitment to excellence.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Today, we&apos;re proud to offer a fully equipped studio with reformers, towers,
          chairs, and barrels. Our growing community of clients ranges from professional
          athletes to seniors, from post-rehabilitation patients to fitness enthusiasts
          seeking a new challenge.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-blue-600 mb-4">The Phoenix Pilates Difference</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Classical Training</h3>
            <p className="text-gray-600">
              Our instructors are comprehensively trained in the classical Pilates
              method, ensuring authentic and effective instruction.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Small Group Classes</h3>
            <p className="text-gray-600">
              Maximum 4 clients per equipment class ensures personalized attention
              and proper form correction.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">State-of-the-Art Equipment</h3>
            <p className="text-gray-600">
              Professional-grade Balanced Body equipment maintained to the highest
              standards for your safety and comfort.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Holistic Approach</h3>
            <p className="text-gray-600">
              We address the whole person, considering posture, movement patterns,
              and lifestyle factors in our instruction.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-blue-600 mb-4">The Six Principles of Pilates</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800">Centering</h3>
            <p className="text-gray-600">All movement originates from the center of the body</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800">Concentration</h3>
            <p className="text-gray-600">Complete mental focus on each movement</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800">Control</h3>
            <p className="text-gray-600">Every movement is performed with complete muscular control</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800">Precision</h3>
            <p className="text-gray-600">Exact and purposeful movement with attention to detail</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800">Breath</h3>
            <p className="text-gray-600">Proper breathing enhances movement and circulation</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800">Flow</h3>
            <p className="text-gray-600">Smooth, graceful movement with dynamic energy</p>
          </div>
        </div>
      </section>

      <section className="text-center py-8 border-t border-gray-200">
        <p className="text-xl text-gray-700 italic font-light">
          &quot;Physical fitness is the first requisite of happiness.&quot;
        </p>
        <p className="text-gray-500 mt-2">— Joseph Pilates</p>
      </section>
    </div>
  );
}

export default function YogaAboutContent() {
  return (
    <div className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-light text-gray-800 mb-8">About Phoenix Yoga</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-orange-600 mb-4">Our Philosophy</h2>
        <p className="text-gray-600 leading-relaxed">
          At Phoenix Yoga, we believe in the transformative power of ancient yoga practices
          combined with modern understanding of body mechanics. Like the mythical phoenix
          rising from the ashes, we guide our students through a journey of renewal,
          self-discovery, and personal transformation.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our approach honors the traditional eight limbs of yoga while making the practice
          accessible and relevant to contemporary life. We create a sanctuary where ancient
          wisdom meets modern wellness.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-orange-600 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To create a welcoming sanctuary where students of all levels can explore their
          practice, find inner peace, and build a supportive community. We are committed to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
          <li>Providing authentic, high-quality yoga instruction</li>
          <li>Creating an inclusive environment for all body types and abilities</li>
          <li>Fostering personal growth and self-awareness</li>
          <li>Building a conscious community of practitioners</li>
          <li>Honoring the spiritual traditions of yoga</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-orange-600 mb-4">Our History</h2>
        <p className="text-gray-600 leading-relaxed">
          Phoenix Yoga was born from a vision to create more than just a yoga studio.
          Founded in 2018 by a group of dedicated practitioners, we set out to build a
          space that would serve as a beacon of light in our community.
        </p>
        <p className="text-gray-600 leading-relaxed">
          What started as a small studio with just three instructors has grown into a
          vibrant community of over 500 active members. Through the challenges of recent
          years, we&apos;ve adapted and evolved, offering both in-person and virtual classes
          to meet our students wherever they are on their journey.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light text-orange-600 mb-4">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Experienced Instructors</h3>
            <p className="text-gray-600">
              All our teachers have 200+ hours of certification and ongoing education
              in anatomy, philosophy, and teaching methodology.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Small Class Sizes</h3>
            <p className="text-gray-600">
              We limit our classes to ensure personalized attention and proper
              alignment guidance for every student.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Diverse Offerings</h3>
            <p className="text-gray-600">
              From gentle restorative to dynamic vinyasa, we offer styles to match
              every mood and fitness level.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Community Focus</h3>
            <p className="text-gray-600">
              Regular workshops, retreats, and social events help build lasting
              connections beyond the mat.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-8 border-t border-gray-200">
        <p className="text-xl text-gray-700 italic font-light">
          &quot;The body benefits from movement, and the mind benefits from stillness.&quot;
        </p>
        <p className="text-gray-500 mt-2">— Sakyong Mipham</p>
      </section>
    </div>
  )
}

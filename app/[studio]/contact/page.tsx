'use client'

import { useState } from 'react'
import { use } from 'react'

export default function ContactPage({
  params,
}: {
  params: Promise<{ studio: string }>
}) {
  const resolvedParams = use(params)
  const studioType = resolvedParams.studio as 'yoga' | 'pilates'
  const studioName = studioType.charAt(0).toUpperCase() + studioType.slice(1)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement Supabase submission
    console.log('Form submitted:', { ...formData, studio_type: studioType })
    
    // Simulate submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact Phoenix {studioName}
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitMessage && (
              <p className="text-green-600 text-center">{submitMessage}</p>
            )}
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Visit Us</h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                123 Wellness Street<br />
                Phoenix, AZ 85001
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">{studioType}@phoenixstudios.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 6:00 AM - 9:00 PM<br />
                Saturday - Sunday: 7:00 AM - 7:00 PM
              </p>
            </div>
          </div>
          
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Maps placeholder</p>
          </div>
        </div>
      </div>
    </div>
  )
}
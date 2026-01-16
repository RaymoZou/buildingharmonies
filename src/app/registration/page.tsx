'use client'

import { useState } from 'react'

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numberOfTickets: '1',
    specialRequests: '',
    hearAboutUs: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-orange-900 mb-4">Registration Successful!</h1>
            <p className="text-orange-800 mb-6">
              Thank you for registering for Building Harmonies! We've received your registration and will send a confirmation email to {formData.email} shortly.
            </p>
            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-orange-900 mb-2">Event Details</h3>
              <p className="text-orange-700">📅 Saturday, March 15, 2024</p>
              <p className="text-orange-700">🕕 6:00 PM - 10:00 PM</p>
              <p className="text-orange-700">📍 Community Arts Center, 123 Harmony Street</p>
              <p className="text-orange-700">🎫 {formData.numberOfTickets} ticket(s) reserved</p>
            </div>
            <p className="text-orange-700 mb-4">
              We can't wait to see you there! If you have any questions, please don't hesitate to contact us at harmony@community.org.
            </p>
            <a 
              href="/" 
              className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold inline-block"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">Register for Building Harmonies</h1>
          <p className="text-lg text-orange-800">
            Join us for an unforgettable evening of music and community. Registration is free but required to attend.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-orange-800 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-orange-800 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-orange-800 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-orange-800 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900"
              />
            </div>
            
            <div>
              <label htmlFor="numberOfTickets" className="block text-sm font-medium text-orange-800 mb-2">
                Number of Tickets *
              </label>
              <select
                id="numberOfTickets"
                name="numberOfTickets"
                required
                value={formData.numberOfTickets}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900"
              >
                <option value="1">1 Ticket</option>
                <option value="2">2 Tickets</option>
                <option value="3">3 Tickets</option>
                <option value="4">4 Tickets</option>
                <option value="5">5+ Tickets</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="hearAboutUs" className="block text-sm font-medium text-orange-800 mb-2">
                How did you hear about this event?
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900"
              >
                <option value="">Please select...</option>
                <option value="social-media">Social Media</option>
                <option value="friend">Friend or Family</option>
                <option value="newsletter">Email Newsletter</option>
                <option value="poster">Community Poster</option>
                <option value="website">Event Website</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium text-orange-800 mb-2">
                Special Requests or Accommodations
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={3}
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Let us know if you have any special requests or need accommodations..."
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900"
              />
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 mb-2">Event Details</h3>
              <div className="space-y-1 text-sm text-orange-700">
                <p>📅 Saturday, March 15, 2024</p>
                <p>🕕 6:00 PM - 10:00 PM (Doors open at 5:30 PM)</p>
                <p>📍 Community Arts Center, 123 Harmony Street</p>
                <p>🅿️ Free parking available on-site</p>
                <p>🍽️ Light refreshments included</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agreement"
                required
                className="mt-1 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="agreement" className="text-sm text-orange-700">
                I understand that registration is required and that I will receive a confirmation email with event details.
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold text-lg"
            >
              Complete Registration
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-orange-700 mb-2">
            Questions? Contact us at <a href="mailto:harmony@community.org" className="text-orange-600 hover:text-orange-800 underline">harmony@community.org</a>
          </p>
          <p className="text-orange-700">
            or call us at <a href="tel:5551234567" className="text-orange-600 hover:text-orange-800 underline">(555) 123-4567</a>
          </p>
        </div>
      </div>
    </div>
  )
}
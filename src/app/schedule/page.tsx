import Link from 'next/link'

const schedule = [
  {
    time: "5:30 PM",
    title: "Doors Open & Welcome Reception",
    description: "Arrive early to mingle, enjoy light refreshments, and find your seats.",
    type: "reception"
  },
  {
    time: "6:00 PM",
    title: "Opening Remarks",
    description: "Event organizers welcome the community and introduce the evening's theme.",
    type: "opening"
  },
  {
    time: "6:15 PM",
    title: "Sarah Mitchell - Classical Performance",
    description: "Opening with beautiful classical pieces that showcase the power and elegance of the trained voice.",
    type: "performance"
  },
  {
    time: "6:45 PM",
    title: "Marcus Johnson - Jazz Set",
    description: "Smooth jazz vocals with familiar standards that will have you tapping your feet.",
    type: "performance"
  },
  {
    time: "7:15 PM",
    title: "Community Sing-Along",
    description: "Join in for familiar songs that everyone knows and loves. No experience necessary!",
    type: "interactive"
  },
  {
    time: "7:30 PM",
    title: "Intermission & Networking",
    description: "Refreshments and time to connect with fellow community members.",
    type: "break"
  },
  {
    time: "8:00 PM",
    title: "Elena Rodriguez - Folk & Storytelling",
    description: "Heartfelt original songs and stories that touch the soul and inspire connection.",
    type: "performance"
  },
  {
    time: "8:30 PM",
    title: "David Chen - Contemporary Hits",
    description: "Modern favorites with unique arrangements that bridge generations through music.",
    type: "performance"
  },
  {
    time: "9:00 PM",
    title: "Maria Thompson - Gospel Inspiration",
    description: "Uplifting gospel performances that lift spirits and bring joy to all who listen.",
    type: "performance"
  },
  {
    time: "9:30 PM",
    title: "All Performers Finale",
    description: "A spectacular finale featuring all performers in a collaborative celebration of harmony.",
    type: "finale"
  },
  {
    time: "10:00 PM",
    title: "Closing & Thank You",
    description: "Closing remarks and invitation to future community events.",
    type: "closing"
  }
]

const eventTypeStyles = {
  reception: "border-orange-300 bg-orange-50",
  opening: "border-blue-300 bg-blue-50",
  performance: "border-purple-300 bg-purple-50",
  interactive: "border-green-300 bg-green-50",
  break: "border-gray-300 bg-gray-50",
  finale: "border-red-300 bg-red-50",
  closing: "border-orange-300 bg-orange-50"
}

const eventTypeIcons = {
  reception: "👋",
  opening: "🎭",
  performance: "🎤",
  interactive: "🎵",
  break: "☕",
  finale: "🌟",
  closing: "🙏"
}

export default function Schedule() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">Event Schedule</h1>
          <p className="text-lg text-orange-800 max-w-3xl mx-auto">
            Join us for a carefully curated evening of music, community, and connection. 
            Here's what you can expect throughout our Building Harmonies event.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-orange-900 mb-2">Saturday, March 15, 2024</h2>
            <p className="text-orange-700">Community Arts Center, 123 Harmony Street</p>
            <p className="text-orange-600">Duration: 5:30 PM - 10:00 PM</p>
          </div>
          
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className={`border-l-4 rounded-lg p-4 ${eventTypeStyles[item.type as keyof typeof eventTypeStyles]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0 mt-1">
                    {eventTypeIcons[item.type as keyof typeof eventTypeIcons]}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-orange-900 min-w-[80px]">
                        {item.time}
                      </span>
                      <span className="font-semibold text-orange-800">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-orange-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-900 mb-4">🎫 What's Included</h3>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                All performances throughout the evening
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Light refreshments during intermission
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Welcome reception with light snacks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Commemorative program booklet
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Parking at the venue
              </li>
            </ul>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-900 mb-4">📝 What to Bring</h3>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-center gap-2">
                <span className="text-orange-600">•</span>
                Your ticket confirmation (digital or printed)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-600">•</span>
                Comfortable seating for the reception area
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-600">•</span>
                Your voice for the community sing-along!
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-600">•</span>
                A friend or family member to share the experience
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-600">•</span>
                An open heart ready to connect through music
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">Ready to Join Us?</h2>
          <p className="text-orange-800 mb-6">
            Don't miss this wonderful opportunity to experience the power of music bringing our community together.
          </p>
          <Link 
            href="/registration" 
            className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold text-lg inline-block"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  )
}
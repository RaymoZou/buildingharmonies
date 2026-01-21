'use client'

import Link from 'next/link'

const performers = [
  {
    name: "Bryce",
    role: "Soprano",
    bio: "bro can sing. source: trust me",
    specialties: ["Guitar", "Trumpet", "Singing", "Chamber Choir"]
  },
  {
    name: "Raymond",
    role: "Jazz Vocalist",
    bio: "you didn't know raymond did jazz singing? i didn't either - anyways he was the only one we could afford so let's give him a shot.",
    specialties: ["Jazz", "Blues", "R&B"]
  }
]

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
    description: "Event organizers welcome the community and introduce the evening&apos;s theme.",
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
  reception: "border-[#7086D1] bg-[#F7F2Eb]",
  opening: "border-[#5A6BB5] bg-[#BAD6EB]",
  performance: "border-[#8FAAD6] bg-[#FFF9F0]",
  interactive: "border-[#7086D1] bg-[#E6F0F8]",
  break: "border-[#BAD6EB] bg-[#F0F5FC]",
  finale: "border-[#7086D1] bg-[#D0E4F8]",
  closing: "border-[#7086D1] bg-[#F7F2Eb]"
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="home" className="relative bg-gradient-to-br from-[#BAD6EB] to-[#FFF9F0] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2A3C83] mb-6">
            Building Harmonies
          </h1>
          <p className="text-xl md:text-2xl text-[#3A4A93] mb-8">
            An Evening of Community Music
          </p>
          <div className="bg-white/90 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-lg">
            <div className="text-[#3A4A93] space-y-2">
              <p className="text-lg font-semibold">Join us for an unforgettable evening!</p>
              <p className="text-md">📅 Saturday, March 21, 2024</p>
              <p className="text-md">🕕 6:00 PM - 10:00 PM</p>
              <p className="text-md">King&apos;s Cross Station - Platform 9 & 3/4</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://partiful.com/e/zuExqa7fxoC0ggk7BVsC?" 
              className="bg-[#7086D1] text-white px-8 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold text-lg"
              target="_blank"
            >
              Register Now
            </Link>
            <a 
              href="#performers" 
              className="bg-white text-[#7086D1] px-8 py-3 rounded-full hover:bg-[#F7F2Eb] transition-colors font-semibold text-lg border-2 border-[#7086D1] inline-block"
            >
              Meet the Performers
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2A3C83] mb-12">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-[#F7F2Eb]">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold text-[#3A4A93] mb-2">Guest Performers</h3>
              <p className="text-[#4A58A3]">
                Experience incredible performances by talented local and regional singers sharing their gifts with our community.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#F7F2Eb]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-[#3A4A93] mb-2">Community Connection</h3>
              <p className="text-[#4A58A3]">
                Connect with neighbors and friends in a warm, welcoming atmosphere where music brings us all together.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#F7F2Eb]">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-[#3A4A93] mb-2">Musical Variety</h3>
              <p className="text-[#4A58A3]">
                Enjoy a diverse range of musical styles from classical to contemporary, showcasing the incredible talent in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-[#2A3C83] mb-6">About Building Harmonies</h1>
            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-[#3A4A93] mb-6">
                Building Harmonies is more than just a musical event – it&apos;s a celebration of community, 
                connection, and the transformative power of music to bring people together.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#3A4A93] mt-8 mb-4">Our Mission</h2>
              <p className="text-[#4A58A3] mb-6">
                We believe that music is the universal language that transcends barriers and creates 
                meaningful connections between people. Our mission is to create spaces where community 
                members can come together, share in the joy of live performance, and build lasting 
                relationships through the shared experience of music.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#3A4A93] mt-8 mb-4">What We Stand For</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#F7F2Eb] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#3A4A93] mb-3">🎵 Artistic Excellence</h3>
                  <p className="text-[#4A58A3]">
                    We showcase talented performers who bring their unique voices and perspectives, 
                    creating an enriching cultural experience for our community.
                  </p>
                </div>
                <div className="bg-[#F7F2Eb] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#3A4A93] mb-3">🤝 Community Inclusion</h3>
                  <p className="text-[#4A58A3]">
                    Everyone is welcome at our events. We strive to create accessible, inclusive spaces 
                    where all voices can be heard and celebrated.
                  </p>
                </div>
                <div className="bg-[#F7F2Eb] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#3A4A93] mb-3">🌟 Cultural Enrichment</h3>
                  <p className="text-[#4A58A3]">
                    We bring diverse musical traditions and styles to our community, fostering appreciation 
                    for the rich tapestry of musical expression.
                  </p>
                </div>
                <div className="bg-[#F7F2Eb] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#3A4A93] mb-3">💝 Joy and Connection</h3>
                  <p className="text-[#4A58A3]">
                    At the heart of everything we do is the simple desire to spread joy and create 
                    meaningful connections through shared musical experiences.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-[#3A4A93] mt-8 mb-4">Our Story</h2>
              <p className="text-[#4A58A3] mb-6">
                Building Harmonies began as a small gathering of friends who loved music and wanted to 
                share that passion with their neighbors. What started as informal jam sessions in living 
                rooms has grown into a beloved community tradition that brings together hundreds of 
                people for evenings filled with beautiful music and warm fellowship.
              </p>
              
              <p className="text-[#4A58A3] mb-8">
                Today, we continue that tradition by organizing events that feature both established 
                local artists and emerging talents, ensuring that our community&apos;s musical landscape 
                remains vibrant and diverse. Each event is carefully curated to provide a balanced, 
                engaging experience that appeals to music lovers of all ages and backgrounds.
              </p>
              
              <div className="bg-[#FFF9F0] rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-[#3A4A93] mb-3">Join Our Community</h3>
                <p className="text-[#4A58A3] mb-4">
            Whether you&apos;re a performer, a music enthusiast, or someone who simply enjoys being 
            part of a warm, welcoming community, we invite you to join us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#register" 
                    className="bg-[#7086D1] text-white px-6 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold inline-block"
                  >
                    Register for Our Next Event
                  </a>
                  <a 
                    href="#performers" 
                    className="bg-white text-[#7086D1] px-6 py-3 rounded-full hover:bg-[#F7F2Eb] transition-colors font-semibold border-2 border-[#7086D1] inline-block"
                  >
                    Meet Our Performers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="performers" className="py-16 px-4 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2A3C83] mb-4">Our Guest Performers</h1>
            <p className="text-lg text-[#3A4A93] max-w-3xl mx-auto">
            We&apos;re thrilled to showcase an incredible lineup of talented singers who bring diverse 
            musical styles and perspectives to our community celebration. Each performer has been 
            carefully selected to create an unforgettable musical experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {performers.map((performer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#BAD6EB] to-[#FFF9F0] h-48 flex items-center justify-center">
                  <div className="text-6xl">🎤</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2A3C83] mb-2">{performer.name}</h3>
                  <p className="text-[#7086D1] font-semibold mb-3">{performer.role}</p>
                  <p className="text-[#4A58A3] mb-4 text-sm leading-relaxed">{performer.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {performer.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="bg-[#FFF9F0] text-[#3A4A93] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#F7F2Eb] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#2A3C83] mb-4">Experience Their Magic Live</h2>
            <p className="text-[#3A4A93] mb-6 max-w-2xl mx-auto">
              Each performer will bring their unique style and energy to create an evening of 
              unforgettable music. From classical to contemporary, jazz to folk – there&apos;s something 
              for every music lover in this diverse showcase of local talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#register" 
                className="bg-[#7086D1] text-white px-6 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold inline-block"
              >
                Reserve Your Seat
              </a>
              <a 
                href="#schedule" 
                className="bg-white text-[#7086D1] px-6 py-3 rounded-full hover:bg-[#F7F2Eb] transition-colors font-semibold border-2 border-[#7086D1] inline-block"
              >
                View Performance Schedule
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-[#2A3C83] mb-4">Want to Perform?</h2>
            <p className="text-[#3A4A93] mb-4">
              Are you a talented vocalist interested in performing at future Building Harmonies events? 
              We&apos;d love to hear from you!
            </p>
            <a 
              href="mailto:harmony@community.org" 
              className="text-[#7086D1] hover:text-[#3A4A93] font-semibold underline"
            >
              Contact us to learn more about performing opportunities
            </a>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 px-4 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2A3C83] mb-4">Event Schedule</h1>
            <p className="text-lg text-[#3A4A93] max-w-3xl mx-auto">
              Join us for a carefully curated evening of music, community, and connection. 
              Here&apos;s what you can expect throughout our Building Harmonies event.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2A3C83] mb-2">Saturday, March 15, 2024</h2>
              <p className="text-[#4A58A3]">Community Arts Center, 123 Harmony Street</p>
              <p className="text-[#7086D1]">Duration: 5:30 PM - 10:00 PM</p>
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
                        <span className="font-bold text-[#2A3C83] min-w-[80px]">
                          {item.time}
                        </span>
                        <span className="font-semibold text-[#3A4A93]">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[#4A58A3] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#F7F2Eb] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#2A3C83] mb-4">🎫 What&apos;s Included</h3>
              <ul className="space-y-2 text-[#4A58A3]">
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
            
            <div className="bg-[#F7F2Eb] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#2A3C83] mb-4">📝 What to Bring</h3>
              <ul className="space-y-2 text-[#4A58A3]">
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  Your ticket confirmation (digital or printed)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  Comfortable seating for the reception area
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  Your voice for the community sing-along!
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  A friend or family member to share the experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  An open heart ready to connect through music
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="py-16 px-4 bg-[#F7F2Eb] scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#2A3C83] mb-4">Register for Building Harmonies</h1>
          <p className="text-lg text-[#3A4A93] mb-8">
            Join us for an unforgettable evening of music and community. Registration is required and can be completed through our event partner.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#2A3C83] mb-2">Event Details</h2>
              <div className="space-y-2 text-left bg-[#F7F2Eb] rounded-lg p-6">
                <p className="text-[#4A58A3]">📅 Saturday, March 15, 2024</p>
                <p className="text-[#4A58A3]">🕕 6:00 PM - 10:00 PM (Doors open at 5:30 PM)</p>
                <p className="text-[#4A58A3]">📍 Community Arts Center, 123 Harmony Street</p>
                <p className="text-[#4A58A3]">🅿️ Free parking available on-site</p>
                <p className="text-[#4A58A3]">🍽️ Light refreshments included</p>
              </div>
            </div>
            
            <Link 
              href="https://partiful.com/e/zuExqa7fxoC0ggk7BVsC?" 
              className="bg-[#7086D1] text-white px-8 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold text-lg inline-block"
              target="_blank"
            >
              Register Now on Partiful
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#2A3C83] mb-4">Registration Information</h3>
              <ul className="space-y-2 text-[#4A58A3] text-left">
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  Registration is free but required
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  Limited seats available
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  Confirmation email will be sent
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7086D1]">•</span>
                  Special requests can be noted during registration
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#2A3C83] mb-4">Questions?</h3>
              <p className="text-[#4A58A3] mb-2">
                Contact us at <a href="mailto:harmony@community.org" className="text-[#7086D1] hover:text-[#3A4A93] underline">harmony@community.org</a>
              </p>
              <p className="text-[#4A58A3]">
                or call us at <a href="tel:5551234567" className="text-[#7086D1] hover:text-[#3A4A93] underline">(555) 123-4567</a>
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#FFF9F0] to-[#F7F2Eb] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#2A3C83] mb-4">Can&apos;t Wait to See You There!</h2>
            <p className="text-[#3A4A93] mb-6">
              We&apos;re excited to welcome you to this special evening of music, community, and connection. 
              Register today to secure your spot and join us in building harmonies together.
            </p>
            <Link 
              href="https://partiful.com/e/zuExqa7fxoC0ggk7BVsC?" 
              className="bg-[#7086D1] text-white px-8 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold text-lg inline-block"
              target="_blank"
            >
              Reserve Your Spot Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from 'next/image'

const performers = [
  {
    name: "Sarah Mitchell",
    role: "Soprano",
    bio: "A classically trained soprano with a passion for bringing opera to community audiences. Sarah has performed with regional opera companies and teaches voice at the local music academy.",
    specialties: ["Classical", "Opera", "Musical Theater"]
  },
  {
    name: "Marcus Johnson",
    role: "Jazz Vocalist",
    bio: "Smooth jazz vocalist with a soulful voice that captivates audiences. Marcus has been performing for over 15 years and brings his unique interpretation of jazz standards to every performance.",
    specialties: ["Jazz", "Blues", "R&B"]
  },
  {
    name: "Elena Rodriguez",
    role: "Folk Singer-Songwriter",
    bio: "Storyteller through song, Elena crafts beautiful melodies that reflect her heritage and life experiences. Her heartfelt performances have earned her a loyal following throughout the region.",
    specialties: ["Folk", "Country", "Acoustic"]
  },
  {
    name: "David Chen",
    role: "Contemporary Vocalist",
    bio: "Versatile performer with experience ranging from pop to alternative rock. David's dynamic stage presence and powerful vocals have made him a standout in the local music scene.",
    specialties: ["Pop", "Rock", "Contemporary"]
  },
  {
    name: "Maria Thompson",
    role: "Gospel Singer",
    bio: "Inspirational gospel vocalist whose performances lift spirits and touch hearts. Maria leads her church choir and brings joy to every venue she graces with her voice.",
    specialties: ["Gospel", "Spiritual", "Inspirational"]
  },
  {
    name: "James Wilson",
    role: "Baritone",
    bio: "Rich, warm baritone voice with extensive experience in choral music and solo performances. James is a music educator who believes in the power of music to build community.",
    specialties: ["Classical", "Choral", "Barbershop"]
  }
]

export default function Performers() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2A3C83] mb-4">Our Guest Performers</h1>
          <p className="text-lg text-[#3A4A93] max-w-3xl mx-auto">
            We're thrilled to showcase an incredible lineup of talented singers who bring diverse 
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
            unforgettable music. From classical to contemporary, jazz to folk – there's something 
            for every music lover in this diverse showcase of local talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/registration" 
              className="bg-[#7086D1] text-white px-6 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold inline-block"
            >
              Reserve Your Seat
            </a>
            <a 
              href="/schedule" 
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
            We'd love to hear from you!
          </p>
          <a 
            href="mailto:harmony@community.org" 
            className="text-[#7086D1] hover:text-[#3A4A93] font-semibold underline"
          >
            Contact us to learn more about performing opportunities
          </a>
        </div>
      </div>
    </div>
  )
}
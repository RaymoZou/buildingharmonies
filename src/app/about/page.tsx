import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#2A3C83] mb-6">About Building Harmonies</h1>
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-[#3A4A93] mb-6">
              Building Harmonies is more than just a musical event – it's a celebration of community, 
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
              local artists and emerging talents, ensuring that our community's musical landscape 
              remains vibrant and diverse. Each event is carefully curated to provide a balanced, 
              engaging experience that appeals to music lovers of all ages and backgrounds.
            </p>
            
            <div className="bg-[#FFF9F0] rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-[#3A4A93] mb-3">Join Our Community</h3>
              <p className="text-[#4A58A3] mb-4">
                Whether you're a performer, a music enthusiast, or someone who simply enjoys being 
                part of a warm, welcoming community, we invite you to join us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/registration" 
                  className="bg-[#7086D1] text-white px-6 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold"
                >
                  Register for Our Next Event
                </Link>
                <Link 
                  href="/performers" 
                  className="bg-white text-[#7086D1] px-6 py-3 rounded-full hover:bg-[#F7F2Eb] transition-colors font-semibold border-2 border-[#7086D1]"
                >
                  Meet Our Performers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
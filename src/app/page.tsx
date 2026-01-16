import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-orange-200 to-orange-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-900 mb-6">
            Building Harmonies
          </h1>
          <p className="text-xl md:text-2xl text-orange-800 mb-8">
            An Evening of Community Music
          </p>
          <div className="bg-white/90 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-lg">
            <div className="text-orange-800 space-y-2">
              <p className="text-lg font-semibold">Join us for an unforgettable evening!</p>
              <p className="text-md">📅 Saturday, March 15, 2024</p>
              <p className="text-md">🕕 6:00 PM - 10:00 PM</p>
              <p className="text-md">📍 Community Arts Center, 123 Harmony Street</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/registration" 
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold text-lg"
            >
              Register Now
            </Link>
            <Link 
              href="/performers" 
              className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors font-semibold text-lg border-2 border-orange-600"
            >
              Meet the Performers
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Guest Performers</h3>
              <p className="text-orange-700">
                Experience incredible performances by talented local and regional singers sharing their gifts with our community.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Community Connection</h3>
              <p className="text-orange-700">
                Connect with neighbors and friends in a warm, welcoming atmosphere where music brings us all together.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Musical Variety</h3>
              <p className="text-orange-700">
                Enjoy a diverse range of musical styles from classical to contemporary, showcasing the incredible talent in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-8">
            Join Us in Building Harmonies
          </h2>
          <p className="text-lg text-orange-800 mb-8">
            This special evening is more than just a concert – it's a celebration of community, 
            connection, and the universal language of music that brings us all together.
          </p>
          <Link 
            href="/about" 
            className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold"
          >
            Learn More About Our Mission
          </Link>
        </div>
      </section>
    </div>
  )
}

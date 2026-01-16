export default function Footer() {
  return (
    <footer className="bg-orange-100 border-t border-orange-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Building Harmonies</h3>
            <p className="text-orange-700">Bringing our community together through the power of song and music.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-orange-700">
              <li><a href="/about" className="hover:text-orange-900">About Us</a></li>
              <li><a href="/performers" className="hover:text-orange-900">Guest Performers</a></li>
              <li><a href="/schedule" className="hover:text-orange-900">Event Schedule</a></li>
              <li><a href="/registration" className="hover:text-orange-900">Registration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Contact</h3>
            <p className="text-orange-700">Email: harmony@community.org</p>
            <p className="text-orange-700">Phone: (555) 123-4567</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-orange-600 hover:text-orange-800">Facebook</a>
              <a href="#" className="text-orange-600 hover:text-orange-800">Twitter</a>
              <a href="#" className="text-orange-600 hover:text-orange-800">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-orange-200 text-center text-orange-700">
          <p>&copy; 2024 Building Harmonies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default function Footer() {
  return (
    <footer className="bg-[#FFF9F0] border-t border-[#BAD6EB] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#3A4A93] mb-4">Building Harmonies</h3>
            <p className="text-[#4A58A3]">Bringing our community together through the power of song and music.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#3A4A93] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#4A58A3]">
              <li><a href="/about" className="hover:text-[#2A3C83]">About Us</a></li>
              <li><a href="/performers" className="hover:text-[#2A3C83]">Guest Performers</a></li>
              <li><a href="/schedule" className="hover:text-[#2A3C83]">Event Schedule</a></li>
              <li><a href="https://partiful.com/e/zuExqa7fxoC0ggk7BVsC?" className="hover:text-[#2A3C83]">Registration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#3A4A93] mb-4">Contact</h3>
            <p className="text-[#4A58A3]">Email: harmony@community.org</p>
            <p className="text-[#4A58A3]">Phone: (555) 123-4567</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-[#7086D1] hover:text-[#3A4A93]">Facebook</a>
              <a href="#" className="text-[#7086D1] hover:text-[#3A4A93]">Twitter</a>
              <a href="#" className="text-[#7086D1] hover:text-[#3A4A93]">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#BAD6EB] text-center text-[#4A58A3]">
          <p>&copy; 2024 Building Harmonies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

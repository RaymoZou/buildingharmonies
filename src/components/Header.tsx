'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-[#FFF9F0] shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#3A4A93]">
            Building Harmonies
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#4A58A3] hover:text-[#2A3C83] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#4A58A3] hover:text-[#2A3C83] transition-colors">
              About
            </Link>
            <Link href="/performers" className="text-[#4A58A3] hover:text-[#2A3C83] transition-colors">
              Performers
            </Link>
            <Link href="/schedule" className="text-[#4A58A3] hover:text-[#2A3C83] transition-colors">
              Schedule
            </Link>
            <Link href="/registration" className="text-[#4A58A3] hover:text-[#2A3C83] transition-colors">
              Register
            </Link>
          </div>
          
          <button
            className="md:hidden text-[#4A58A3]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <Link href="/" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]">
              About
            </Link>
            <Link href="/performers" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]">
              Performers
            </Link>
            <Link href="/schedule" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]">
              Schedule
            </Link>
            <Link href="https://partiful.com/e/zuExqa7fxoC0ggk7BVsC?" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]">
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

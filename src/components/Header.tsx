'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-[#FFF9F0] shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-barrio text-2xl font-bold text-[#3A4A93]">
            Building Harmonies
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about-us" className="hover:underline text-[#4A58A3] hover:text-[#2A3C83] transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a href="#info" className="hover:underline text-[#4A58A3] hover:text-[#2A3C83] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Info
            </a>
            <a href="#sign-up" className="hover:underline text-[#4A58A3] hover:text-[#2A3C83] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </a>
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
            <a href="#about-us" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a href="#info" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]" onClick={() => setIsMenuOpen(false)}>
              Info
            </a>
            <a href="#sign-up" className="block py-2 text-[#4A58A3] hover:text-[#2A3C83]" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

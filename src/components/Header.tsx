'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-orange-50 shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-orange-800">
            Harmonies
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-orange-700 hover:text-orange-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-orange-700 hover:text-orange-900 transition-colors">
              About
            </Link>
            <Link href="/performers" className="text-orange-700 hover:text-orange-900 transition-colors">
              Performers
            </Link>
            <Link href="/schedule" className="text-orange-700 hover:text-orange-900 transition-colors">
              Schedule
            </Link>
            <Link href="/registration" className="text-orange-700 hover:text-orange-900 transition-colors">
              Register
            </Link>
          </div>
          
          <button
            className="md:hidden text-orange-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <Link href="/" className="block py-2 text-orange-700 hover:text-orange-900">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-orange-700 hover:text-orange-900">
              About
            </Link>
            <Link href="/performers" className="block py-2 text-orange-700 hover:text-orange-900">
              Performers
            </Link>
            <Link href="/schedule" className="block py-2 text-orange-700 hover:text-orange-900">
              Schedule
            </Link>
            <Link href="/registration" className="block py-2 text-orange-700 hover:text-orange-900">
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
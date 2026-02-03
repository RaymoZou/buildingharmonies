'use client'

import { useState } from 'react'
import Link from 'next/link'
import { RSVP_URL } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Dark blue strip - title with stars */}
      <div className="bg-[#2A3C83] py-2 text-center">
        <span className="font-titan text-xl md:text-2xl font-bold text-white">
          ★ BUILDING HARMONIES ★
        </span>
      </div>
      {/* Lighter blue strip - nav links */}
      <div className="bg-[#BAD6EB] py-2 px-4">
        <nav className="max-w-6xl mx-auto flex justify-end items-center gap-6">
          <div className="hidden md:flex gap-6 items-center">
            <a href="#event-details" className="text-[#2A3C83] font-semibold hover:underline">INFO</a>
            <a href="#about-us" className="text-[#2A3C83] font-semibold hover:underline">ABOUT US</a>
            <Link
              href={RSVP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7086D1] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#5A6BB5] transition-colors"
            >
              SIGN UP
            </Link>
          </div>
          <button
            className="md:hidden text-[#2A3C83]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden py-3 flex flex-col gap-2 items-center">
            <a href="#event-details" className="text-[#2A3C83] font-semibold" onClick={() => setIsMenuOpen(false)}>INFO</a>
            <a href="#about-us" className="text-[#2A3C83] font-semibold" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
            <Link
              href={RSVP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A3C83] font-semibold inline-block bg-[#7086D1] text-white px-4 py-2 rounded-lg w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

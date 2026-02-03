'use client'

import Link from 'next/link'
import { RSVP_URL } from '@/lib/constants'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - light blue background; -mt-24 pulls up to meet nav so no gap shows */}
      <section id="home" className="relative bg-[#BAD6EB] -mt-24 pt-24 pb-16 md:pb-24 px-4 scroll-mt-20">
        {/* Faint instrument illustrations (decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute left-4 top-1/4 w-24 h-24 border-2 border-[#7086D1] rounded-full" aria-hidden />
          <div className="absolute right-8 top-1/3 w-20 h-32 border-2 border-[#7086D1] rounded-t-lg" aria-hidden />
          <div className="absolute left-1/4 bottom-1/4 w-16 h-16 border-2 border-[#7086D1]" aria-hidden />
          <div className="absolute right-1/4 bottom-1/3 w-28 h-20 border-2 border-[#7086D1] rounded-lg" aria-hidden />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-titan text-5xl md:text-7xl font-bold text-[#2A3C83] mb-4">
            BUILDING HARMONIES
          </h1>
          <p className="font-sniglet text-xl md:text-2xl font-bold text-[#3A4A93] mb-6">
            A Community Night of Connection Through Song
          </p>
          <p className="text-[#3A4A93] max-w-2xl mx-auto mb-8 leading-relaxed">
            Join us for a community-building music night featuring jam sessions, open mic moments, and space to connect. Designed for newcomers, immigrants, and racialized young adults.
          </p>
          <Link
            href={RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7086D1] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#5A6BB5] transition-colors"
          >
            SAVE YOUR SPOT
          </Link>
          <p className="mt-8 text-sm text-[#3A4A93]">
            DINNER PROVIDED • FREE TO ATTEND • RSVP BY MARCH 7
          </p>
        </div>
      </section>

      {/* Section divider - EVENT DETAILS */}
      <div id="event-details" className="bg-[#2A3C83] py-3 text-center scroll-mt-22">
        <h2 className="text-white font-bold text-lg tracking-wide">EVENT DETAILS</h2>
      </div>

      {/* Event Details Section - two columns: details left, map right */}
      <section className="bg-[#BAD6EB] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left column - event specifics with icons */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl" aria-hidden>🕐</span>
                <div>
                  <p className="font-semibold text-[#2A3C83]">Saturday, March 21, 2026</p>
                  <p className="text-[#3A4A93]">6:00 pm to 10:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl" aria-hidden>📍</span>
                <div>
                  <p className="font-semibold text-[#2A3C83]">2881 Main St, Vancouver, BC</p>
                  <p className="text-[#3A4A93]">St. Patrick&apos;s Parish Shamrock Hall</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl" aria-hidden>🅿️</span>
                <div>
                  <p className="text-[#3A4A93]">Free parking available on-site</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl" aria-hidden>🍽️</span>
                <div>
                  <p className="text-[#3A4A93]">Dinner will be included</p>
                </div>
              </div>
            </div>
            {/* Right column - map placeholder */}
            <div className="bg-[#8FAAD6] rounded-lg aspect-[4/3] min-h-[200px] flex items-center justify-center text-[#2A3C83] font-medium">
              Map placeholder
            </div>
          </div>
          <p className="mt-6 text-sm text-[#3A4A93] text-center">
            Registration is required to attend. Please RSVP above.
          </p>
        </div>
      </section>

      {/* Section divider - THE HEART BEHIND THE EVENT */}
      <div id="heart" className="bg-[#2A3C83] py-3 text-center scroll-mt-22">
        <h2 className="text-white font-bold text-lg tracking-wide">THE HEART BEHIND THE EVENT</h2>
      </div>

      {/* The Heart Behind the Event - white background, justified text */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#2A3C83] mb-6">
            Created for expression, connection, and care.
          </h3>
          <div className="text-[#3A4A93] space-y-4 text-justify leading-relaxed">
            <p>
              Building Harmonies grew naturally from the spirit of play, community, and connection. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed nunc condimentum, posuere leo et, mattis augue. This event is both a homage to their Filipino roots and a celebration of the diverse voices that make up our community.
            </p>
            <h3 className="text-xl font-bold text-[#2A3C83] mt-8 mb-4">
              Because belonging is something we create together.
            </h3>
            <p>
              Our purpose is to create a safe, welcoming space where everyone can bring their whole self. In a time shaped by global conflict and division, we believe music can be a bridge. Through music and shared creative moments, we build trust and understanding. By fostering belonging and creating culturally relevant opportunities, we help people feel at home.
            </p>
          </div>
        </div>
      </section>

      {/* Section divider - ABOUT US */}
      <div id="about-us" className="bg-[#2A3C83] py-3 text-center scroll-mt-22">
        <h2 className="text-white font-bold text-lg tracking-wide">ABOUT US</h2>
      </div>

      {/* About Us - two columns: images left, text right (right-aligned) */}
      <section className="bg-[#BAD6EB] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left column - two placeholder images */}
            <div className="space-y-4">
              <div className="bg-[#8FAAD6] rounded-lg aspect-[4/3] min-h-[180px] flex items-center justify-center text-[#2A3C83] font-medium">
                Photo placeholder 1
              </div>
              <div className="bg-[#8FAAD6] rounded-lg aspect-[4/3] min-h-[180px] flex items-center justify-center text-[#2A3C83] font-medium">
                Photo placeholder 2
              </div>
            </div>
            {/* Right column - Meet Ro & Lara, right-aligned text */}
            <div className="text-right">
              <h3 className="text-2xl font-bold text-[#2A3C83] mb-4">Meet Ro & Lara</h3>
              <p className="text-[#3A4A93] leading-relaxed">
                Best friends, music lovers, and experts at turning ordinary hangouts into something memorable. Ro and Lara created Building Harmonies to share that same joy—an evening where people can connect, laugh, and feel at home in community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

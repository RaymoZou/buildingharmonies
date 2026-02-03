"use client";

import Link from "next/link";
import { RSVP_URL } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - light blue background; -mt-24 pulls up to meet nav so no gap shows */}
      <section
        id="home"
        className="relative bg-[#BAD6EB] -mt-24 pt-24 pb-16 md:pb-24 px-4 scroll-mt-20"
      >
        <div className="relative max-w-5xl mx-auto mt-2">
          {/* Decorative background images */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img
              src="/images/instruments/guitar.png"
              className="absolute left-4 top-0 w-32 opacity-40 md:opacity-75 rotate-[-30deg]"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/drum set.png"
              className="absolute right-7 bottom-3 w-32 opacity-40 md:opacity-75 scale-180"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/keyboard.png"
              className="absolute left-28 bottom-0 w-32 opacity-40 md:opacity-75 scale-140"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/mic stand.png"
              className="absolute right-8 top-8 w-32 opacity-40 md:opacity-75 scale-170 rotate-[15deg]"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/staff.png"
              className="absolute right-7 top-2 w-32 opacity-40 md:opacity-75 scale-130 rotate-[15deg]"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/speaker w BG.png"
              className="absolute left-3 top-66 w-32 opacity-40 md:opacity-75 scale-100 rotate-[-15deg]"
              alt=""
              aria-hidden
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg border-6 border-[#7086d1] px-8 py-10 md:px-12 md:py-12 text-center">
            <h1 className="font-titan text-4xl md:text-5xl text-[#2A3C83] mb-4 relative z-10">
              BUILDING HARMONIES
            </h1>
            <p className="font-sniglet text-lg md:text-xl font-bold italic text-[#3A4A93] mb-6 relative z-10">
              A Community Night of Connection Through Song
            </p>
            <p className="text-[#3A4A93] mb-8 leading-relaxed">
              Join us for a community-building music night featuring jam
              sessions, open mic moments, and space to connect. Designed for
              newcomers, immigrants, and racialized young adults.
            </p>
            <Link
              href={RSVP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7086D1] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#5A6BB5] transition-colors"
            >
              SAVE YOUR SPOT
            </Link>
            <p className="mt-8 text-sm text-[#3A4A93] relative z-10">
              DINNER PROVIDED • FREE TO ATTEND • RSVP BY MARCH 7
            </p>
          </div>
        </div>
      </section>

      {/* Section divider - EVENT DETAILS */}
      <div
        id="event-details"
        className="bg-[#2A3C83] py-3 text-center scroll-mt-25"
      >
        <h2 className="text-white font-bold text-lg tracking-wide">
          EVENT DETAILS
        </h2>
      </div>

      {/* Event Details Section - two columns: details left, map right */}
      <section className="bg-[#BAD6EB] py-12 px-4">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#7086D1] rounded-lg shadow-lg border-6 border-white px-8 py-10 md:px-12 md:py-12 md:pb-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left column - event specifics with icons */}
              <div className="space-y-6 text-white">
                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden>
                    🕐
                  </span>
                  <div>
                    <p className="font-semibold text-2xl">Saturday, March 21, 2026</p>
                    <p className="opacity-90">6:00 PM to 10:00 PM</p>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/6r7CdPuHfoh6rBcU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 hover:cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <span className="text-2xl" aria-hidden="true">📍</span>
                  <div>
                    <p className="text-2xl font-semibold">2881 Main St, Vancouver, BC</p>
                    <p className="opacity-90">St. Patrick&apos;s Parish Shamrock Hall</p>
                  </div>
                </a>


                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden>🅿️</span>
                  <p className="text-xl">Free parking available on-site</p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden>🍽️</span>
                  <p className="text-xl">Dinner will be included</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden aspect-[4/3] min-h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.6427168227797!2d-123.1018749!3d49.2366233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486718636f795a3%3A0x6f8a5d6d7a9a6a6a!2s2881%20Main%20St%2C%20Vancouver%2C%20BC%20V5T%203G4!5e0!3m2!1sen!2sca!4v1738492800000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            {/* Right column - map */}

            <p className="mt-8 text-sm text-white/90 text-center">
              Registration is required to attend. Please RSVP above.
            </p>
          </div>
        </div>
      </section>

      {/* Section divider - THE HEART BEHIND THE EVENT */}
      <div id="heart" className="bg-[#2A3C83] py-3 text-center scroll-mt-22">
        <h2 className="text-white font-bold text-lg tracking-wide">
          THE HEART BEHIND THE EVENT
        </h2>
      </div>

      {/* The Heart Behind the Event - white background, justified text */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#2A3C83] italic mb-6">
            Created for expression, connection, and care.
          </h3>
          <div className="text-[#3A4A93] space-y-4 text-justify leading-relaxed">
            <p>
              Building Harmonies grew naturally from the spirit of play,
              community, and connection. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque sed nunc condimentum, posuere leo et,
              mattis augue. This event is both a homage to their Filipino roots
              and a celebration of the diverse voices that make up our
              community.
            </p>
            <h3 className="text-xl font-bold text-[#2A3C83] italic mt-8 mb-4">
              Because belonging is something we create together.
            </h3>
            <p>
              Our purpose is to create a safe, welcoming space where everyone
              can bring their whole self. In a time shaped by global conflict
              and division, we believe music can be a bridge. Through music and
              shared creative moments, we build trust and understanding. By
              fostering belonging and creating culturally relevant
              opportunities, we help people feel at home.
            </p>
          </div>
        </div>
      </section>

      {/* Section divider - ABOUT US */}
      <div id="about-us" className="bg-[#2A3C83] py-3 text-center scroll-mt-25">
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
              <h3 className="text-2xl font-bold text-[#2A3C83] mb-4">
                Meet Ro & Lara
              </h3>
              <p className="text-[#3A4A93] leading-relaxed">
                Best friends, music lovers, and experts at turning ordinary
                hangouts into something memorable. Ro and Lara created Building
                Harmonies to share that same joy—an evening where people can
                connect, laugh, and feel at home in community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

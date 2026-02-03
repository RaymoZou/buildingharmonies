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
              className="absolute left-4 top-0 w-32 opacity-75 rotate-[-30deg]"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/drum set.png"
              className="absolute right-7 bottom-3 w-32 opacity-75 scale-180"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/keyboard.png"
              className="absolute left-28 bottom-0 w-32 opacity-75 scale-140"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/mic stand.png"
              className="absolute right-8 top-8 w-32 opacity-75 scale-170 rotate-[15deg]"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/staff.png"
              className="absolute right-7 top-2 w-32 opacity-75 scale-130 rotate-[15deg]"
              alt=""
              aria-hidden
            />
            <img
              src="/images/instruments/speaker w BG.png"
              className="absolute left-3 top-66 w-32 opacity-75 scale-100 rotate-[-15deg]"
              alt=""
              aria-hidden
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg border-6 border-[#7086d1] px-8 py-10 md:px-12 md:py-12 text-center">
            <h1 className="font-titan text-4xl md:text-5xl font-bold text-[#2A3C83] mb-4">
              BUILDING HARMONIES
            </h1>
            <p className="font-sniglet text-lg md:text-xl font-bold italic text-[#3A4A93] mb-6">
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
            <p className="mt-8 text-sm text-[#3A4A93]">
              DINNER PROVIDED • FREE TO ATTEND • RSVP BY MARCH 7
            </p>
          </div>
        </div>
      </section>

      {/* Section divider - EVENT DETAILS */}
      <div
        id="event-details"
        className="bg-[#2A3C83] py-3 text-center scroll-mt-22"
      >
        <h2 className="text-white font-bold text-lg tracking-wide">
          EVENT DETAILS
        </h2>
      </div>

      {/* Event Details Section - two columns: details left, map right */}
      <section className="bg-[#BAD6EB] py-12 px-4">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#7086D1] rounded-lg shadow-lg border-6 border-white px-8 py-10 md:px-12 md:py-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left column - event specifics with icons */}
              <div className="space-y-6 text-white">
                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden>
                    🕐
                  </span>
                  <div>
                    <p className="font-semibold">Saturday, March 21, 2026</p>
                    <p className="opacity-90">6:00 pm to 10:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden>
                    📍
                  </span>
                  <div>
                    <p className="font-semibold">2881 Main St, Vancouver, BC</p>
                    <p className="opacity-90">
                      St. Patrick&apos;s Parish Shamrock Hall
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden>
                    🅿️
                  </span>
                  <p className="opacity-90">Free parking available on-site</p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden>
                    🍽️
                  </span>
                  <p className="opacity-90">Dinner will be included</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden aspect-[4/3] min-h-[200px] bg-red-100 p-4">
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
          <h3 className="text-2xl font-bold text-[#2A3C83] mb-6 italic">
            Created for expression, connection, and care.
          </h3>
          <div className="text-[#3A4A93] space-y-4 text-justify leading-relaxed">
            <p>
              <span className="italic">Building Harmonies</span> grew naturally
              from the spirit of play, community, and connection. As Filipinas,
              Ro and Lara were raised in spaces filled with karaoke, large
              gatherings, laughter, and shared joy. These experiences shaped
              their understanding of togetherness and belonging. From this
              foundation grew a simple but powerful insight: music has the
              ability to bring people together, foster emotional safety, and
              affirm cultural identity—especially for immigrants and racialized
              young people.
            </p>
            <p>
              This event is both a homage to their Filipino roots and an
              offering to immigrant and racialized young adults. It creates
              space for connection, shared experiences, and the building of
              harmony through community and song.
            </p>

            <h3 className="text-2xl font-bold text-[#2A3C83] mb-6 italic mt-12">
              Because belonging is something we create together.
            </h3>
            <div className="text-[#3A4A93] space-y-4 text-justify leading-relaxed">
              <p>
                Our purpose is to create a safe, welcoming space where music
                becomes a pathway to connection, healing, and belonging. Rooted
                in the understanding that creative expression supports emotional
                well-being and social connection, this project centers the
                experiences of immigrants and racialized young people.
              </p>
              <p>
                In a time shaped by global conflict, rising anti-immigrant
                stigma, and community-wide grief, many young people are carrying
                feelings of isolation and uncertainty. This gathering responds
                to that moment by offering a communal space to reflect, express,
                and care for one another.
              </p>
              <p>
                Through music and shared creative moments, participants are
                invited to celebrate cultural identity, share lived experiences,
                and build supportive relationships. Music serves as both a
                grounding force and a bridge—linking individuals to community,
                and expression to resilience.
              </p>
              <p>
                By fostering belonging and creating culturally relevant
                opportunities for connection, this project aims to strengthen
                community resilience and remind participants that they are not
                alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider - ABOUT US */}
      <div id="about-us" className="bg-[#2A3C83] py-3 text-center scroll-mt-22">
        <h2 className="text-white font-bold text-lg tracking-wide">ABOUT US</h2>
      </div>

      {/* About Us - two columns: images left, text right (right-aligned) */}
      <section className="bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 items-center">
            {/* Left column - two placeholder images */}
            <Image
              src="/images/lara_raya2.png"
              alt="Ro and Lara smiling together"
              width={400}
              height={300}
              className="object-cover aspect-4/3 min-h-45"
            ></Image>
            <Image
              src="/images/lara_raya.png"
              alt="Ro and Lara smiling together"
              width={400}
              height={300}
              className="object-cover aspect-4/3 min-h-45"
            ></Image>
            {/* Right column - Meet Ro & Lara, right-aligned text */}
            <div className="text-right md:p-4">
              <h3 className="text-2xl font-bold text-[#2A3C83] mb-4 italic">
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

      {/* Roanna section */}
      <div className="bg-[#bad6eb]">
        <div className="grid md:grid-cols-2 py-8 items-center gap-8 max-w-5xl mx-auto">
          <Image
            src="/images/raya.png"
            alt="Roanna profile picture"
            width={700}
            height={400}
            className="rounded-lg bg-blue-400 object-cover aspect-5/3 min-h-45"
          ></Image>
          <div>
            <h3 className="text-3xl font-bold text-[#3A4A93]">
              ROANNA{" "}
              <span className="text-lg font-normal align-middle">she/her</span>
            </h3>
            <div>
              Hi folks. I’m Ro! My family and I immigrated here in 2003, and
              ever since then, I’ve dreamed of creating a space where people can
              come together through music (ask anyone who knows me, I’m ALWAYS
              asking for a jam session). This event brings together two of the
              things I care about most: music and community. More than just
              playing songs, it’s about connecting with one another, sharing
              space, and building something meaningful together. Especially in
              today’s social and political climate, community matters more than
              ever. My hope is that this jam session becomes a place where
              people feel welcome, inspired, and reminded of how powerful it is
              when we show up for each other.
            </div>
          </div>
        </div>
      </div>
      {/* Lara section */}
      <div className="bg-[#d0e3ff]">
        <div className="grid md:grid-cols-2 py-8 items-center gap-8 max-w-5xl mx-auto">
          <div className="text-right">
            <h3 className="text-3xl font-bold text-[#3A4A93]">
              LARA{" "}
              <span className="text-lg font-normal align-middle">she/her</span>
            </h3>
            <div>
              Lara (she/her) is a 2nd generation immigrant born and raised on
              the unceded lands of the Coast Salish Peoples with parents who had
              both immigrated from the Philippines. She had recently completed a
              degree in Early Childhood Education and has experience working
              with children and families with diverse backgrounds. Growing up,
              music always filled the household, and I have fond memories of
              dancing and singing with my relatives during karaoke sessions. As
              I grew older, I began to take more notice of how music bridged
              people together in times of both sadness and joy. Music became an
              invitation to sing, to dance, and to be with each other in moments
              of uncertainty. She hopes that through this community event, we
              will be able to share stories, bring comfort and joy, and build
              harmonies together.
            </div>
          </div>
          <Image
            src="/images/lara.jpeg"
            alt="Lara profile picture"
            width={700}
            height={300}
            className="rounded-lg bg-blue-400 object-cover aspect-4/3 min-h-45"
          ></Image>
        </div>
      </div>
    </div>
  );
}

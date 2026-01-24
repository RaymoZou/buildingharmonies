'use client'

import Link from 'next/link'

const performers = [
    {
        name: "Bryce",
        role: "Soprano",
        bio: "bro can sing. source: trust me",
        specialties: ["Guitar", "Trumpet", "Singing", "Chamber Choir"]
    },
    {
        name: "Raymond",
        role: "Jazz Vocalist",
        bio: "you didn't know raymond did jazz singing? i didn't either - anyways he was the only one we could afford so let's give him a shot.",
        specialties: ["Jazz", "Blues", "R&B"]
    }
]

const schedule = [
    {
        time: "6:00 PM",
        title: "Doors Open & Welcome Reception",
        description: "Arrive early to mingle, enjoy light refreshments, and find your seats.",
        type: "reception"
    },
    {
        time: "6:00 PM",
        title: "Opening Remarks",
        description: "Event organizers welcome the community and introduce the evening&apos;s theme.",
        type: "opening"
    },
    {
        time: "6:15 PM",
        title: "Sarah Mitchell - Classical Performance",
        description: "Opening with beautiful classical pieces that showcase the power and elegance of the trained voice.",
        type: "performance"
    },
    {
        time: "6:45 PM",
        title: "Marcus Johnson - Jazz Set",
        description: "Smooth jazz vocals with familiar standards that will have you tapping your feet.",
        type: "performance"
    },
    {
        time: "7:15 PM",
        title: "Community Sing-Along",
        description: "Join in for familiar songs that everyone knows and loves. No experience necessary!",
        type: "interactive"
    },
    {
        time: "7:30 PM",
        title: "Intermission & Networking",
        description: "Refreshments and time to connect with fellow community members.",
        type: "break"
    },
    {
        time: "8:00 PM",
        title: "Elena Rodriguez - Folk & Storytelling",
        description: "Heartfelt original songs and stories that touch the soul and inspire connection.",
        type: "performance"
    },
    {
        time: "8:30 PM",
        title: "David Chen - Contemporary Hits",
        description: "Modern favorites with unique arrangements that bridge generations through music.",
        type: "performance"
    },
    {
        time: "9:00 PM",
        title: "Maria Thompson - Gospel Inspiration",
        description: "Uplifting gospel performances that lift spirits and bring joy to all who listen.",
        type: "performance"
    },
    {
        time: "9:30 PM",
        title: "All Performers Finale",
        description: "A spectacular finale featuring all performers in a collaborative celebration of harmony.",
        type: "finale"
    },
    {
        time: "10:00 PM",
        title: "Closing & Thank You",
        description: "Closing remarks and invitation to future community events.",
        type: "closing"
    }
]

const eventTypeStyles = {
    reception: "border-[#7086D1] bg-[#F7F2Eb]",
    opening: "border-[#5A6BB5] bg-[#BAD6EB]",
    performance: "border-[#8FAAD6] bg-[#FFF9F0]",
    interactive: "border-[#7086D1] bg-[#E6F0F8]",
    break: "border-[#BAD6EB] bg-[#F0F5FC]",
    finale: "border-[#7086D1] bg-[#D0E4F8]",
    closing: "border-[#7086D1] bg-[#F7F2Eb]"
}

const eventTypeIcons = {
    reception: "👋",
    opening: "🎭",
    performance: "🎤",
    interactive: "🎵",
    break: "☕",
    finale: "🌟",
    closing: "🙏"
}

export default function Home() {
    return (
        <div className="min-h-screen">
            <section id="home" className="relative bg-gradient-to-br from-[#BAD6EB] to-[#FFF9F0] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-barrio text-6xl md:text-7xl font-bold text-[#2A3C83] mb-6">
                        Building Harmonies
                    </h1>
                    <p className="font-bold underline text-xl md:text-2xl text-[#3A4A93] mb-8">
                        A Community Night of Connection through Song
                    </p>
                    <div className="bg-white/90 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-lg">
                        <div className="text-[#3A4A93] space-y-2">
                            <p className="text-lg font-semibold">Join us for an unforgettable evening!</p>
                            <p className="text-md">📅 Saturday, March 21, 2026</p>
                            <p className="text-md">🕕 6:00 PM - 10:00 PM</p>
                            <p className="text-md">Creekside Community Centre, 1 Athletes Way, Vancouver</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://partiful.com/e/zuExqa7fxoC0ggk7BVsC?"
                            className="bg-[#7086D1] text-white px-8 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold text-lg"
                            target="_blank"
                        >
                            RSVP Now
                        </Link>
                        <a
                            href="#info"
                            className="bg-white text-[#7086D1] px-8 py-3 rounded-full hover:bg-[#F7F2Eb] transition-colors font-semibold text-lg border-2 border-[#7086D1] inline-block"
                        >
                            Meet the Performers
                        </a>
                    </div>
                </div>
            </section>

            <section id="about-us" className="py-16 px-4 scroll-mt-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h1 className="text-4xl font-bold text-[#2A3C83] mb-6">About Building Harmonies</h1>
                        <div className="prose prose-blue max-w-none">
                            <p className="text-lg text-[#3A4A93] mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Quisque sed nunc condimentum, posuere leo et, mattis augue.
                            </p>

                            <h2 className="text-2xl font-semibold text-[#3A4A93] mt-8 mb-4">Our Mission</h2>
                            <p className="text-[#4A58A3] mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Quisque sed nunc condimentum, posuere leo et, mattis augue.
                                Nulla metus purus, auctor a viverra sit amet, hendrerit vel libero.
                                Etiam arcu diam, mollis ac pellentesque in, lobortis aliquet nisi. Duis facilisis lacus sed urna pellentesque porttitor. Donec aliquam elit metus, non tristique enim tincidunt ut. Nulla sit amet sapien ornare, blandit lacus sit amet, convallis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam commodo felis vitae diam laoreet, facilisis vehicula augue interdum. Integer tincidunt hendrerit venenatis. Donec non nibh a nisl dictum luctus et nec dolor. Integer dictum dictum arcu ut dapibus. Mauris at nibh venenatis, sodales elit et, consectetur quam. Nullam semper metus vel leo posuere porta. Pellentesque eget sagittis tellus.
                            </p>

                            <h2 className="text-2xl font-semibold text-[#3A4A93] mt-8 mb-4">Our Story</h2>
                            <p className="text-[#4A58A3] mb-6">
                                Pellentesque ac lectus a augue egestas faucibus vitae quis felis.
                                Integer viverra felis sed turpis ullamcorper, nec blandit ipsum porta.
                                Phasellus ac rutrum elit. Cras rutrum non nisl at auctor. Pellentesque
                            </p>

                            <p className="text-[#4A58A3] mb-8">
                                Quisque placerat scelerisque nulla, eget pellentesque purus egestas nec.
                                Nullam consectetur felis ante, ac sollicitudin nisl feugiat id.
                                Vestibulum enim massa, porta vitae dolor sed, elementum ultrices mi.
                                Vestibulum pellentesque ex sit amet ex malesuada, sit amet gravida nulla fermentum.
                                Fusce pharetra sollicitudin eleifend. Donec vel venenatis sem.
                                Duis quis blandit nisl, ut malesuada augue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="info" className="py-16 px-4 bg-white scroll-mt-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-[#2A3C83] mb-4">Our Guest Performers</h1>
                        <p className="text-lg text-[#3A4A93] max-w-3xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque sed nunc condimentum, posuere leo et, mattis augue.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {performers.map((performer, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="bg-gradient-to-br from-[#BAD6EB] to-[#FFF9F0] h-48 flex items-center justify-center">
                                    <div className="text-6xl">🎤</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#2A3C83] mb-2">{performer.name}</h3>
                                    <p className="text-[#7086D1] font-semibold mb-3">{performer.role}</p>
                                    <p className="text-[#4A58A3] mb-4 text-sm leading-relaxed">{performer.bio}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {performer.specialties.map((specialty, specIndex) => (
                                            <span
                                                key={specIndex}
                                                className="bg-[#FFF9F0] text-[#3A4A93] px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section id="info" className="py-16 px-4 scroll-mt-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-[#2A3C83] mb-4">Event Schedule</h1>
                        <p className="text-lg text-[#3A4A93] max-w-3xl mx-auto">
                            Praesent fringilla lectus iaculis accumsan sagittis. Sed eget vestibulum sem, at commodo urna.
                            Aliquam porttitor mi non purus convallis, eget consectetur sem consequat.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-[#2A3C83] mb-2">Saturday, March 21, 2026</h2>
                            <a href="https://maps.app.goo.gl/vfJ6qy2aFcrv7boj8" target="_blank" className="text-[#4A58A3]">Creekside Community Centre, 1 Athletes Way, Vancouver</a>
                            <p className="text-[#7086D1]">Duration: 6:00 PM - 10:00 PM</p>
                        </div>

                        <div className="space-y-4">
                            Schedule coming soon!
                        </div>
                    </div>

                </div>
            </section >

            <section id="sign-up" className="py-16 px-4 bg-[#F7F2Eb] scroll-mt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-[#2A3C83] mb-4">Sign Up for Building Harmonies</h1>
                    <p className="text-lg text-[#3A4A93] mb-8">
                        Join us for an unforgettable evening of music and community. Sign up is required and can be completed through Partiful.
                    </p>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#2A3C83] mb-2">Event Details</h2>
                            <div className="space-y-2 text-left bg-[#F7F2Eb] rounded-lg p-6">
                                <p className="text-[#4A58A3]">📅 Saturday, March 15, 2024</p>
                                <p className="text-[#4A58A3]">🕕 6:00 PM - 10:00 PM (Doors open at 5:30 PM)</p>
                                <p className="text-[#4A58A3]">📍 Community Arts Center, 123 Harmony Street</p>
                                <p className="text-[#4A58A3]">🅿️ Free parking available on-site</p>
                                <p className="text-[#4A58A3]">🍽️ Light refreshments included</p>
                            </div>
                        </div>

                        <Link
                            href="https://partiful.com/e/zuExqa7fxoC0ggk7BVsC?"
                            className="bg-[#7086D1] text-white px-8 py-3 rounded-full hover:bg-[#5A6BB5] transition-colors font-semibold text-lg inline-block"
                            target="_blank"
                        >
                            RSVP Now
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    )
}

'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  const team = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48561c17-01b9-43ab-b82b-b80bfdbf505f.png",
      bio: "Former Spotify engineer with 10+ years in music tech. Passionate raver since 2010."
    },
    {
      name: "Maria Rodriguez",
      role: "Co-Founder & CTO",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac967701-bcac-4868-b70b-ae950625b3ee.png",
      bio: "Blockchain expert and festival organizer. Pioneer in decentralized event verification."
    },
    {
      name: "DJ Pulse",
      role: "Community Lead",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76cefe28-302f-42c3-aaf9-67cbe0cfd061.png",
      bio: "International DJ and rave culture ambassador. Connects artists with the community."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                RaveClaim
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Born from the underground rave scene, RaveClaim is revolutionizing how electronic music fans 
              verify, claim, and celebrate their festival experiences through blockchain technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-white">Our </span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We believe every rave, every drop, every moment in electronic music history deserves to be 
                  preserved and celebrated. RaveClaim creates an immutable record of your journey through 
                  the global electronic music scene.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  By combining blockchain technology with community-driven verification, we're building 
                  the definitive platform for electronic music event authentication and cultural preservation.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c49e65d-8400-4b99-b4af-d33cd880469e.png"
                  alt="Electronic music festival crowd with hands up at main stage with colorful lights"
                  className="rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e5381be-bda7-4ebb-915d-ddda50a4d248.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Story</span>
            </h2>
            
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">2019:</strong> The idea for RaveClaim was born at Ultra Music Festival when our founders 
                realized there was no reliable way to verify and preserve their incredible experiences at electronic music events.
              </p>
              <p>
                <strong className="text-white">2020-2021:</strong> During the pandemic lockdowns, the team developed the core blockchain 
                infrastructure and partnered with major festival organizers to create the verification system.
              </p>
              <p>
                <strong className="text-white">2022:</strong> Beta launch with 50 events and 5,000 early adopters. The community response 
                was overwhelmingly positive, with users claiming over 10,000 event attendances in the first month.
              </p>
              <p>
                <strong className="text-white">2023:</strong> Expanded globally with partnerships across 25 countries, introducing artist 
                verification and enhanced community features that connected ravers worldwide.
              </p>
              <p>
                <strong className="text-white">2024:</strong> Today, RaveClaim has verified over 50,000 event claims across 1,200+ events, 
                becoming the trusted platform for electronic music event authentication with 25,000+ active users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-white">Meet the </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <CardHeader className="pb-4">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/083b4623-9c78-40e1-8bd1-38cc25e6f133.png";
                      }}
                    />
                    <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                    <p className="text-purple-400 font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🎵
                </div>
                <h3 className="text-white font-semibold mb-2">Authenticity</h3>
                <p className="text-gray-300 text-sm">Every claim is verified and authentic, preserving the true spirit of rave culture.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="text-white font-semibold mb-2">Community</h3>
                <p className="text-gray-300 text-sm">Built by ravers, for ravers. Our community drives every decision we make.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🔒
                </div>
                <h3 className="text-white font-semibold mb-2">Privacy</h3>
                <p className="text-gray-300 text-sm">Your data is yours. We use blockchain to ensure privacy and user control.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🚀
                </div>
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">Pushing boundaries in music tech while honoring underground culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Join the </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the movement that's documenting electronic music history, one rave at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="px-8 py-4 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 font-semibold rounded-xl transition-all duration-200">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
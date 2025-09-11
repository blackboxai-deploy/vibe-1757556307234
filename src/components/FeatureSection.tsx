'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FeatureSection() {
  const features = [
    {
      title: "Event Verification",
      description: "Instantly verify your attendance at raves and electronic music events with blockchain-powered proof.",
      icon: "🎵",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Digital Claims",
      description: "Build your rave portfolio with digital claims and badges that showcase your electronic music journey.",
      icon: "🏆",
      gradient: "from-pink-500 to-cyan-500"
    },
    {
      title: "Event Discovery",
      description: "Discover upcoming raves, festivals, and electronic music events in your area and around the world.",
      icon: "🌍",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Community Connect",
      description: "Connect with fellow ravers, share experiences, and build lasting friendships within the EDM community.",
      icon: "🤝",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Artist Tracking",
      description: "Track your favorite DJs and artists, get notified about their upcoming shows and never miss a set.",
      icon: "🎧",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Secure & Private",
      description: "Your data is protected with end-to-end encryption and you control what information you share.",
      icon: "🔒",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose
            </span>
            <span className="text-white"> RaveClaim?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of rave culture with our comprehensive platform designed for electronic music enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="px-8 py-3 rounded-full bg-black">
              <span className="text-white font-medium">
                Ready to start your rave journey? 
              </span>
              <span className="ml-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Join thousands of ravers today!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
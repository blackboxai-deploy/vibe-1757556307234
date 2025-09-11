'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Verify Your
            </span>
            <br />
            <span className="text-white">
              Rave Experience
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The ultimate platform for electronic music event verification. 
            Claim your attendance, discover epic raves, and connect with the global EDM community.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
              🎵 Event Verification
            </div>
            <div className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
              🏆 Digital Claims
            </div>
            <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
              🌍 Global Community
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/auth">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start Claiming Now
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-xl transition-all duration-200"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-gray-400 mt-2">Verified Claims</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                1,200+
              </div>
              <div className="text-gray-400 mt-2">Events Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                25K+
              </div>
              <div className="text-gray-400 mt-2">Active Ravers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
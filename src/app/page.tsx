'use client'

import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <FeatureSection />
      
      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How It <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Getting started with RaveClaim is simple. Follow these steps to begin verifying your rave experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Sign Up & Verify</h3>
              <p className="text-gray-300">
                Create your account and verify your identity to start claiming your rave experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Attend Events</h3>
              <p className="text-gray-300">
                Go to raves, festivals, and electronic music events. Check in using our mobile app.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Claim & Share</h3>
              <p className="text-gray-300">
                Claim your attendance, earn badges, and share your rave journey with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Level Up
              </span>
              <span className="text-white"> Your Rave Game?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of ravers who are already building their electronic music legacy on RaveClaim.
            </p>
            
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-8 py-4 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 font-semibold rounded-xl transition-all duration-200">
                  Watch Demo
                </Button>
              </Link>
            </div>

            <p className="text-gray-400 mt-6 text-sm">
              No credit card required • Free forever • Join 25,000+ ravers
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Ultra Music Festival 2024",
      location: "Miami, FL",
      date: "March 22-24, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6da6c08f-624b-4ecc-acff-f4e2f408e436.png",
      status: "Upcoming",
      genre: "Progressive House",
      attendees: 165000
    },
    {
      id: 2,
      title: "Electric Daisy Carnival",
      location: "Las Vegas, NV",
      date: "May 17-19, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9c2536e-c4c4-4966-8b09-c542a06a9673.png",
      status: "Claimable",
      genre: "EDM",
      attendees: 140000
    },
    {
      id: 3,
      title: "Tomorrowland Belgium",
      location: "Boom, Belgium",
      date: "July 19-28, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/12bfdb6b-4b87-4980-986e-a0182ee91e11.png",
      status: "Upcoming",
      genre: "Trance",
      attendees: 400000
    },
    {
      id: 4,
      title: "Burning Man 2024",
      location: "Black Rock Desert, NV",
      date: "August 25 - September 2, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b533a24-9b5b-4955-883a-399e9851d052.png",
      status: "Past Event",
      genre: "Experimental",
      attendees: 70000
    },
    {
      id: 5,
      title: "Awakenings Festival",
      location: "Amsterdam, Netherlands",
      date: "June 29-30, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9acd73f5-b82c-4f2b-85ea-be07edcf1f58.png",
      status: "Claimable",
      genre: "Techno",
      attendees: 80000
    },
    {
      id: 6,
      title: "Coachella Valley Music Festival",
      location: "Indio, CA",
      date: "April 12-21, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37020d60-3f84-4689-a196-c7d1f195b112.png",
      status: "Past Event",
      genre: "Indie Electronic",
      attendees: 250000
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'Claimable':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'Past Event':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Discover
              </span>
              <span className="text-white"> Epic Raves</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find and claim your attendance at the world's most incredible electronic music events.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                Filter Events
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                My Claims
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16026ad1-4529-4de2-85da-a4fbba5f5a70.png";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(event.status)} border`}>
                      {event.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/60 text-white border-gray-600">
                      {event.genre}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>📅 {event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>👥 {event.attendees.toLocaleString()} attendees</span>
                  </div>
                  
                  <div className="pt-4">
                    {event.status === 'Claimable' ? (
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0">
                        Claim Attendance
                      </Button>
                    ) : event.status === 'Upcoming' ? (
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                        Get Notified
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full border-gray-600 text-gray-400" disabled>
                        Event Ended
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Don't See Your Event?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Help us expand our database by submitting events you've attended or know about.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3">
              Submit Event
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
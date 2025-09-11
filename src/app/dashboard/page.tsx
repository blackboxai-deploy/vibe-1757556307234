'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DashboardPage() {
  const [user] = useState({
    name: 'Alex Chen',
    username: '@alexraver',
    memberSince: 'March 2022',
    totalClaims: 47,
    verifiedClaims: 45,
    level: 'Rave Veteran',
    nextLevel: 'Festival Legend',
    progressToNext: 78
  })

  const recentClaims = [
    {
      id: 1,
      event: 'Ultra Music Festival 2024',
      location: 'Miami, FL',
      date: 'Mar 22, 2024',
      status: 'Verified',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4f7200f-2965-40dc-9efc-1c8b4f8480dd.png',
      points: 150
    },
    {
      id: 2,
      event: 'Tomorrowland Belgium',
      location: 'Boom, Belgium',
      date: 'Jul 20, 2023',
      status: 'Verified',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ecec5d9-3e40-4dc6-b148-0e2ebc47c27c.png',
      points: 200
    },
    {
      id: 3,
      event: 'Electric Daisy Carnival',
      location: 'Las Vegas, NV',
      date: 'May 18, 2023',
      status: 'Pending',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ade7b3e0-ffc1-4c41-a341-ccb93d296809.png',
      points: 175
    },
    {
      id: 4,
      event: 'Awakenings Festival',
      location: 'Amsterdam, NL',
      date: 'Jun 30, 2023',
      status: 'Verified',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9418cca1-ebe1-4d55-bf7f-2431a44781a7.png',
      points: 120
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'First Claim',
      description: 'Verified your first rave experience',
      icon: '🎵',
      earned: true,
      date: 'Mar 15, 2022'
    },
    {
      id: 2,
      title: 'Festival Explorer',
      description: 'Attended 10 different festivals',
      icon: '🌍',
      earned: true,
      date: 'Aug 22, 2022'
    },
    {
      id: 3,
      title: 'Techno Master',
      description: 'Attended 5 techno events',
      icon: '🤖',
      earned: true,
      date: 'Nov 5, 2022'
    },
    {
      id: 4,
      title: 'Global Raver',
      description: 'Attended events on 3 continents',
      icon: '✈️',
      earned: false,
      progress: 66
    },
    {
      id: 5,
      title: 'Legendary Status',
      description: 'Reach 100 verified claims',
      icon: '👑',
      earned: false,
      progress: 45
    }
  ]

  const stats = [
    { label: 'Total Claims', value: user.totalClaims, change: '+3 this month', color: 'text-green-400' },
    { label: 'Verified Claims', value: user.verifiedClaims, change: '95.7% success rate', color: 'text-blue-400' },
    { label: 'Total Points', value: 8450, change: '+285 this month', color: 'text-purple-400' },
    { label: 'Global Rank', value: '#847', change: '+23 positions', color: 'text-pink-400' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold">
              Welcome back, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{user.name}</span>
            </h1>
            <p className="text-gray-300 mt-2">
              {user.username} • Member since {user.memberSince}
            </p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
              New Claim
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
              View Profile
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                </div>
                <p className={`text-sm mt-2 ${stat.color}`}>{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Level Progress */}
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Current Level: {user.level}</h3>
                <p className="text-gray-400">Progress to {user.nextLevel}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {user.progressToNext}%
                </p>
              </div>
            </div>
            <Progress value={user.progressToNext} className="h-3 bg-gray-800">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${user.progressToNext}%` }}
              ></div>
            </Progress>
            <p className="text-gray-400 text-sm mt-2">22 more claims needed to reach {user.nextLevel}</p>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="claims" className="space-y-6">
          <TabsList className="bg-gray-800/50">
            <TabsTrigger value="claims">Recent Claims</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Recent Claims */}
          <TabsContent value="claims">
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <Card key={claim.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={claim.image}
                        alt={claim.event}
                        className="w-16 h-16 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7a504a4-b5bb-488b-80e5-c889e00dd92d.png";
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{claim.event}</h4>
                        <p className="text-gray-400">{claim.location} • {claim.date}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge className={
                            claim.status === 'Verified' 
                              ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                          }>
                            {claim.status}
                          </Badge>
                          <span className="text-gray-400 text-sm">+{claim.points} points</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`border-gray-800 transition-all ${achievement.earned ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30' : 'bg-gray-900/50'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`text-3xl p-3 rounded-full ${achievement.earned ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' : 'bg-gray-800'}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold ${achievement.earned ? 'text-white' : 'text-gray-400'}`}>
                          {achievement.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                        {achievement.earned ? (
                          <p className="text-green-400 text-sm mt-2">Earned on {achievement.date}</p>
                        ) : (
                          <div className="mt-2">
                            <Progress value={achievement.progress || 0} className="h-2 bg-gray-800">
                              <div 
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                style={{ width: `${achievement.progress || 0}%` }}
                              ></div>
                            </Progress>
                            <p className="text-gray-400 text-xs mt-1">{achievement.progress || 0}% complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Feed */}
          <TabsContent value="activity">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-white">Claim verified for Ultra Music Festival 2024</p>
                    <p className="text-gray-400 text-sm">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="text-white">Achievement unlocked: Techno Master</p>
                    <p className="text-gray-400 text-sm">1 week ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-white">Submitted claim for Awakenings Festival</p>
                    <p className="text-gray-400 text-sm">2 weeks ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
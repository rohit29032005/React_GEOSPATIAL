import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Users, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Introduction to GIS Workshop",
      date: "May 15, 2025",
      location: "Main Campus, Room 302",
      time: "2:00 PM - 4:00 PM",
      description:
        "Learn the fundamentals of Geographic Information Systems in this hands-on workshop. Perfect for beginners!",
      image: "/placeholder.svg?height=400&width=600",
      category: "Workshop",
      capacity: 30,
      registrationOpen: true,
    },
    {
      title: "Satellite Imagery Analysis Webinar",
      date: "June 5, 2025",
      location: "Online",
      time: "6:00 PM - 7:30 PM",
      description:
        "Discover techniques for analyzing and interpreting satellite imagery for environmental monitoring and urban planning.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Webinar",
      capacity: 100,
      registrationOpen: true,
    },
    {
      title: "Mapathon: Humanitarian Mapping",
      date: "July 10, 2025",
      location: "Innovation Hub",
      time: "10:00 AM - 4:00 PM",
      description: "Join us for a day of collaborative mapping to support humanitarian efforts around the world.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mapathon",
      capacity: 50,
      registrationOpen: true,
    },
    {
      title: "Drone Mapping Field Trip",
      date: "August 20, 2025",
      location: "City Park",
      time: "9:00 AM - 12:00 PM",
      description: "Experience drone mapping in action! Learn about flight planning, data collection, and processing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Field Trip",
      capacity: 20,
      registrationOpen: false,
    },
    {
      title: "GIS Career Panel",
      date: "September 8, 2025",
      location: "Student Center Auditorium",
      time: "5:00 PM - 7:00 PM",
      description: "Hear from professionals working in various geospatial fields about career paths and opportunities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Panel",
      capacity: 80,
      registrationOpen: false,
    },
    {
      title: "Advanced Python for Geospatial Analysis",
      date: "October 15, 2025",
      location: "Computer Lab, Room 105",
      time: "3:00 PM - 6:00 PM",
      description: "Take your Python skills to the next level with this workshop focused on geospatial data analysis.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Workshop",
      capacity: 25,
      registrationOpen: false,
    },
  ]

  const pastEvents = [
    {
      title: "OpenStreetMap Contribution Day",
      date: "March 12, 2025",
      location: "Computer Lab, Room 105",
      time: "1:00 PM - 5:00 PM",
      description: "A collaborative session to contribute to the OpenStreetMap project and improve map data.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Workshop",
      attendees: 28,
    },
    {
      title: "Guest Lecture: Urban Planning with GIS",
      date: "February 20, 2025",
      location: "Lecture Hall B",
      time: "4:00 PM - 5:30 PM",
      description: "A talk by Dr. Emily Chen on using GIS for sustainable urban planning and development.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Lecture",
      attendees: 65,
    },
    {
      title: "Geospatial Hackathon",
      date: "January 25-26, 2025",
      location: "Innovation Hub",
      time: "9:00 AM - 5:00 PM",
      description:
        "48-hour event where teams developed innovative solutions to environmental challenges using geospatial technologies.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Hackathon",
      attendees: 42,
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-900 to-emerald-700 dark:from-teal-950 dark:to-emerald-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join us for workshops, webinars, field trips, and more to enhance your geospatial skills
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            {/* Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-bold mb-4 md:mb-0 dark:text-white">Browse Events</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter Events
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
              </div>

              {/* Upcoming Events */}
              <TabsContent value="upcoming" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-emerald-600 hover:bg-emerald-700">{event.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Users className="h-4 w-4 mr-2" />
                            <span>Capacity: {event.capacity}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className={`w-full ${event.registrationOpen ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gray-400 cursor-not-allowed"}`}
                          disabled={!event.registrationOpen}
                        >
                          {event.registrationOpen ? "Register Now" : "Registration Coming Soon"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Past Events */}
              <TabsContent value="past" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map((event, index) => (
                    <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 filter grayscale hover:grayscale-0"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-gray-800/70 text-white border-none">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Users className="h-4 w-4 mr-2" />
                            <span>Attendees: {event.attendees}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Event Recap
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Host an Event Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Want to Host an Event?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Have an idea for a workshop, webinar, or field trip? We welcome event proposals from members and partners.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Submit Event Proposal</Button>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}


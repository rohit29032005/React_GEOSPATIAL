"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function EventsSection() {
  const events = [
    {
      title: "Introduction to GIS Workshop",
      date: "May 15, 2025",
      location: "Main Campus, Room 302",
      time: "2:00 PM - 4:00 PM",
      description:
        "Learn the fundamentals of Geographic Information Systems in this hands-on workshop. Perfect for beginners!",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Satellite Imagery Analysis Webinar",
      date: "June 5, 2025",
      location: "Online",
      time: "6:00 PM - 7:30 PM",
      description:
        "Discover techniques for analyzing and interpreting satellite imagery for environmental monitoring and urban planning.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mapathon: Humanitarian Mapping",
      date: "July 10, 2025",
      location: "Innovation Hub",
      time: "10:00 AM - 4:00 PM",
      description: "Join us for a day of collaborative mapping to support humanitarian efforts around the world.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Drone Mapping Field Trip",
      date: "August 20, 2025",
      location: "City Park",
      time: "9:00 AM - 12:00 PM",
      description: "Experience drone mapping in action! Learn about flight planning, data collection, and processing.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const visibleEvents = events.slice(currentIndex, currentIndex + 3)

  const nextSlide = () => {
    if (currentIndex < events.length - 3) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(events.length - 3)
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-950" id="events">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Upcoming Events</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join us for workshops, webinars, and hands-on sessions to enhance your geospatial skills.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="relative px-8 py-4">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10 -mx-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4"
              >
                {visibleEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 relative"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <h3 className="text-xl font-bold text-white p-4">{event.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                      <div className="space-y-2 mb-4">
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
                      </div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600">
                        Register
                      </Button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/50"
            asChild
          >
            <Link href="/events">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, MapPin, Users, Calendar, Globe } from "lucide-react"

export default function AchievementsTimeline() {
  const achievements = [
    {
      year: "2023",
      title: "Club Foundation",
      description: "Geospatial Club was established with 15 founding members.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      year: "2023",
      title: "First Mapathon",
      description: "Organized a humanitarian mapping event with over 50 participants.",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "GIS Conference",
      description: "Hosted the regional GIS conference with industry professionals.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "Research Grant",
      description: "Received a research grant for urban heat island mapping project.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      year: "2025",
      title: "International Collaboration",
      description: "Partnered with international universities for global mapping initiatives.",
      icon: <Globe className="h-6 w-6" />,
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Milestones and achievements in our geospatial exploration
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 dark:bg-emerald-900/50"></div>

          <div className="relative">
            {achievements.map((achievement, index) => (
              <TimelineItem key={index} achievement={achievement} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ achievement, index, isLeft }: { achievement: any, index: number, isLeft: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="mb-12">
      <div
        className={`flex items-center justify-center ${isLeft ? "md:justify-end" : "md:justify-start"} relative z-10`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`w-full md:w-5/12 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
        >
          <div className="flex md:block">
            {/* Timeline dot - visible on mobile only */}
            <div className="md:hidden mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
              {achievement.icon}
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <span className="text-sm font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline dot - desktop only */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-24 w-12 h-12 rounded-full bg-emerald-500 z-20">
        <div className="flex items-center justify-center h-full w-full">{achievement.icon}</div>
      </div>
    </div>
  )
}


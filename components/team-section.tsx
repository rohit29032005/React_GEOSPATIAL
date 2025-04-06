"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "President",
      image: "/placeholder.svg?height=300&width=300",
      bio: "GIS specialist with a background in environmental science. Passionate about using spatial data to solve real-world problems.",
    },
    {
      name: "Maya Patel",
      role: "Vice President",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Remote sensing expert focusing on satellite imagery analysis. Currently researching urban heat islands.",
    },
    {
      name: "David Chen",
      role: "Technical Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer with expertise in web mapping applications. Loves building interactive geospatial visualizations.",
    },
    {
      name: "Sarah Williams",
      role: "Events Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Urban planner with a passion for community mapping. Organizes workshops and field mapping exercises.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals behind the Geospatial Club who are dedicated to fostering a community of
            geospatial enthusiasts.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/50"
            asChild
          >
            <Link href="/team">
              View Full Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ member, index }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <div
        className={`relative w-full h-[400px] cursor-pointer transition-all duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}
        >
          <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1 dark:text-white">{member.name}</h3>
            <p className="text-emerald-600 dark:text-emerald-400 mb-4">{member.role}</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full backface-hidden bg-emerald-600 dark:bg-emerald-800 text-white rounded-lg shadow-md overflow-hidden flex items-center justify-center p-6 rotate-y-180 transition-all duration-500 ${isFlipped ? "opacity-100" : "opacity-0"}`}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{member.name}</h3>
            <p className="mb-4">{member.bio}</p>
            <p className="text-sm italic">Click to flip back</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


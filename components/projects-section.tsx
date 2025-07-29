import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Urban Heat Island Mapper",
      description:
        "A web application that visualizes urban heat islands using satellite thermal data and ground sensors.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["GIS", "Remote Sensing", "Web Development"],
    },
    {
      title: "Flood Risk Assessment Tool",
      description:
        "An interactive tool that analyzes topographic data and historical rainfall patterns to predict flood risks.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Spatial Analysis", "Hydrology", "Python"],
    },
    {
      title: "Community Mapping Initiative",
      description: "A collaborative project to map community resources and infrastructure in underserved areas.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["OpenStreetMap", "Community GIS", "Participatory Mapping"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our innovative geospatial projects that address real-world challenges through mapping and spatial
            analysis.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  >
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <Github className="h-4 w-4 mr-1" /> GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


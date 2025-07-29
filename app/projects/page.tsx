import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Search, Filter } from "lucide-react"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "Urban Heat Island Mapper",
      description:
        "A web application that visualizes urban heat islands using satellite thermal data and ground sensors.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["GIS", "Remote Sensing", "Web Development"],
      github: "#",
      demo: "#",
    },
    {
      title: "Flood Risk Assessment Tool",
      description:
        "An interactive tool that analyzes topographic data and historical rainfall patterns to predict flood risks.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Spatial Analysis", "Hydrology", "Python"],
      github: "#",
      demo: "#",
    },
    {
      title: "Community Mapping Initiative",
      description: "A collaborative project to map community resources and infrastructure in underserved areas.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["OpenStreetMap", "Community GIS", "Participatory Mapping"],
      github: "#",
      demo: "#",
    },
  ]

  const allProjects = [
    ...featuredProjects,
    {
      title: "Wildfire Spread Predictor",
      description: "A model that uses terrain, vegetation, and weather data to predict wildfire spread patterns.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Machine Learning", "Environmental Science", "Python"],
      github: "#",
      demo: "#",
    },
    {
      title: "Historical Map Digitizer",
      description: "A tool for georeferencing and digitizing historical maps for spatial analysis.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Georeferencing", "Historical GIS", "QGIS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Accessibility Mapper",
      description:
        "An application that maps accessibility features in urban environments for people with disabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Urban Planning", "Accessibility", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-emerald-700 dark:from-teal-950 dark:to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our innovative geospatial projects that address real-world challenges
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <Input placeholder="Search projects..." className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" />
            </div>
            <Button variant="outline" className="flex items-center gap-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="featured" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="archived" className="mt-6">
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No archived projects at this time.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Want to Contribute?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for new members to join our projects or propose new ideas. Join our community and start
            contributing today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white">Join the Club</Button>
            <Button variant="outline" className="border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
              Propose a Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border dark:border-gray-700 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
      <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span key={tagIndex} className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white">
            View Details
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" /> GitHub
            </a>
          </Button>
          {project.demo && (
            <Button variant="outline" size="sm" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" /> Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}


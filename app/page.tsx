import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Globe, Layers, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"
import EventsSection from "@/components/events-section"
import ProjectsSection from "@/components/projects-section"
import HeroGlobe from "@/components/hero-globe"
import AchievementsTimeline from "@/components/achievements-timeline"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section with 3D Globe */}
        <section className="relative bg-gradient-to-br from-teal-900 to-emerald-700 dark:from-teal-950 dark:to-emerald-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">Geospatial Club</h1>
                <p className="text-xl md:text-2xl mb-8 animate-slideUp">
                  Mapping the future through innovation and technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
                  <Button className="bg-white text-emerald-800 hover:bg-emerald-50 px-6 py-6 text-lg" asChild>
                    <Link href="/join">
                      Join Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg"
                    asChild
                  >
                    <Link href="/projects">Explore Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="h-[400px] lg:h-[500px] w-full">
                <HeroGlobe />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white dark:bg-gray-950" id="about">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Us</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">What is Geospatial Club?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Geospatial Club is a community of students passionate about Geographic Information Systems (GIS),
                  remote sensing, spatial analysis, and mapping technologies. We bring together enthusiasts to learn,
                  collaborate, and innovate in the field of geospatial science.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Our mission is to bridge the gap between theoretical knowledge and practical applications of
                  geospatial technologies, preparing members for real-world challenges and opportunities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg transform transition-transform hover:scale-105">
                  <MapPin className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">Mapping</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creating and analyzing spatial data through modern cartography
                  </p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg transform transition-transform hover:scale-105">
                  <Globe className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">GIS</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Leveraging Geographic Information Systems for spatial analysis
                  </p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg transform transition-transform hover:scale-105">
                  <Layers className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">Remote Sensing</h4>
                  <p className="text-gray-600 dark:text-gray-400">Utilizing satellite imagery and aerial photography</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg transform transition-transform hover:scale-105">
                  <Users className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">Community</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building a network of geospatial enthusiasts and professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <AchievementsTimeline />

        {/* Projects Preview */}
        <ProjectsSection />

        {/* Events Preview */}
        <EventsSection />

        {/* Team Preview */}
        <TeamSection />

        {/* Join Us Section */}
        <section className="py-20 bg-gradient-to-br from-teal-900 to-emerald-700 dark:from-teal-950 dark:to-emerald-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Geospatial Community</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Be part of a growing community of geospatial enthusiasts. Learn new skills, work on exciting projects, and
              connect with like-minded individuals.
            </p>
            <Button className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-lg" asChild>
              <Link href="/join">
                Become a Member <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}


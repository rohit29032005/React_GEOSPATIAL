import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function TeamPage() {
  const executiveTeam = [
    {
      name: "Rohit Shrivastava",
      role: "Chairperson",
      bio: "GIS specialist with a background in environmental science. Passionate about using spatial data to solve real-world problems.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "alex@geospatialclub.org",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sahil Zambre",
      role: "Vice Chairperson",
      bio: "Remote sensing expert focusing on satellite imagery analysis. Currently researching urban heat islands.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "maya@geospatialclub.org",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "David Chen",
      role: "Technical Lead",
      bio: "Full-stack developer with expertise in web mapping applications. Loves building interactive geospatial visualizations.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "david@geospatialclub.org",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sarah Williams",
      role: "Events Coordinator",
      bio: "Urban planner with a passion for community mapping. Organizes workshops and field mapping exercises.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "sarah@geospatialclub.org",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ]

  const technicalTeam = [
    {
      name: "Gaurav Singh",
      role: "Technical Head",
      bio: "Expert in spatial analysis and cartography. Focuses on creating beautiful and informative maps.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "james@geospatialclub.org",
        github: "https://github.com",
      },
    },
    {
      name: "Anshika Rai",
      role: "Design Head",
      bio: "Specializes in satellite image processing and classification. Working on land cover change detection.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "aisha@geospatialclub.org",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Ruana Ahuja",
      role: "PR Marketing Head",
      bio: "Creates interactive web maps and geospatial applications. Passionate about open-source GIS.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "carlos@geospatialclub.org",
        github: "https://github.com",
      },
    },
    {
      name: "Ankit Kumar",
      role: "Editorial Head",
      bio: "Applies machine learning to geospatial problems. Currently working on predictive models for urban growth.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "priya@geospatialclub.org",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ]

  const outreachTeam = [
    {
      name: "Kopal Sachan",
      role: "HR",
      bio: "Urban planner with a passion for community mapping. Organizes workshops and field mapping exercises.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "sarah@geospatialclub.org",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Anshu Khan",
      role: "Outreach Head",
      bio: "Manages partnerships with local organizations and schools. Passionate about GIS education.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "michael@geospatialclub.org",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Aryan Khatana",
      role: "Event Head",
      bio: "Handles the club's online presence. Creates engaging content about geospatial technologies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "emma@geospatialclub.org",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Mithileswar Rao",
      role: "Project Head",
      bio: "Handles the club's online presence. Creates engaging content about geospatial technologies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "emma@geospatialclub.org",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Akshaya Shree",
      role: "Research Head",
      bio: "Handles the club's online presence. Creates engaging content about geospatial technologies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "emma@geospatialclub.org",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Yuvaraj Sharma",
      role: "Finance Head",
      bio: "Handles the club's online presence. Creates engaging content about geospatial technologies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        email: "emma@geospatialclub.org",
        twitter: "https://twitter.com",
      },
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-900 to-emerald-700 dark:from-teal-950 dark:to-emerald-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto">Meet the passionate individuals behind the Geospatial Club</p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="executive" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="executive">Executive</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="outreach">Outreach</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="executive" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {executiveTeam.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {technicalTeam.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="outreach" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {outreachTeam.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Join the Team Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Join Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals to join our team. If you're interested in geospatial
              technologies and want to make a difference, we'd love to hear from you!
            </p>
            <a
              href="/join"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Apply to Join
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

function TeamMemberCard({ member }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-emerald-300">{member.role}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
        <div className="flex space-x-3">
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              className="text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}


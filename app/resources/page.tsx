import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Download, ExternalLink, BookOpen, Video, Code, Map } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const tutorials = [
    {
      title: "Introduction to GIS",
      description: "Learn the fundamentals of Geographic Information Systems and spatial data.",
      type: "Article",
      icon: <BookOpen className="h-5 w-5" />,
      link: "#",
    },
    {
      title: "QGIS Basics",
      description: "A beginner-friendly guide to using QGIS for spatial analysis and mapping.",
      type: "Video",
      icon: <Video className="h-5 w-5" />,
      link: "#",
    },
    {
      title: "Web Mapping with Leaflet",
      description: "Create interactive web maps using the Leaflet JavaScript library.",
      type: "Tutorial",
      icon: <Code className="h-5 w-5" />,
      link: "#",
    },
    {
      title: "Remote Sensing Fundamentals",
      description: "Understanding satellite imagery and remote sensing techniques.",
      type: "Article",
      icon: <BookOpen className="h-5 w-5" />,
      link: "#",
    },
  ]

  const datasets = [
    {
      title: "Global Land Cover Data",
      description: "High-resolution land cover classification data for environmental analysis.",
      format: "GeoTIFF",
      size: "2.3 GB",
      link: "#",
    },
    {
      title: "OpenStreetMap Extract",
      description: "Vector data of roads, buildings, and points of interest for urban analysis.",
      format: "Shapefile, GeoJSON",
      size: "450 MB",
      link: "#",
    },
    {
      title: "Digital Elevation Model",
      description: "Terrain elevation data for topographic analysis and 3D visualization.",
      format: "GeoTIFF",
      size: "1.8 GB",
      link: "#",
    },
    {
      title: "Historical Climate Data",
      description: "Temperature and precipitation records for climate change analysis.",
      format: "CSV, NetCDF",
      size: "780 MB",
      link: "#",
    },
  ]

  const software = [
    {
      title: "QGIS",
      description: "Free and open-source Geographic Information System software.",
      category: "Desktop GIS",
      link: "https://qgis.org/",
    },
    {
      title: "ArcGIS Online",
      description: "Cloud-based mapping and analysis platform.",
      category: "Web GIS",
      link: "https://www.arcgis.com/",
    },
    {
      title: "GDAL",
      description: "Geospatial Data Abstraction Library for data conversion and processing.",
      category: "Data Processing",
      link: "https://gdal.org/",
    },
    {
      title: "GeoPandas",
      description: "Python library for geospatial data analysis.",
      category: "Programming",
      link: "https://geopandas.org/",
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-900 to-emerald-700 dark:from-teal-950 dark:to-emerald-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our collection of geospatial learning materials, datasets, and tools
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search resources..." className="pl-10" />
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="tutorials" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="datasets">Datasets</TabsTrigger>
                  <TabsTrigger value="software">Software</TabsTrigger>
                </TabsList>
              </div>

              {/* Tutorials */}
              <TabsContent value="tutorials" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tutorials.map((tutorial, index) => (
                    <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">{tutorial.icon}</div>
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                            {tutorial.type}
                          </span>
                        </div>
                        <CardTitle className="mt-4">{tutorial.title}</CardTitle>
                        <CardDescription>{tutorial.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> View Tutorial
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Datasets */}
              <TabsContent value="datasets" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {datasets.map((dataset, index) => (
                    <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                          <Map className="h-5 w-5" />
                        </div>
                        <CardTitle className="mt-4">{dataset.title}</CardTitle>
                        <CardDescription>{dataset.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Format: {dataset.format}</span>
                          <span className="text-gray-500 dark:text-gray-400">Size: {dataset.size}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={dataset.link} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4 mr-2" /> Download
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Software */}
              <TabsContent value="software" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {software.map((item, index) => (
                    <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                            <Code className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <CardTitle className="mt-4">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> Visit Website
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Request Resources Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Need Something Specific?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Can't find what you're looking for? Let us know and we'll try to add it to our resource library.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Request a Resource
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}


import Link from "next/link"
import { MapPin, Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              {/* <MapPin className="h-8 w-8 text-emerald-400" /> */}
              <img
    src="/logo1.png" // Place your logo file in the public folder
    alt="Geospatial Club Logo"
    className="h-18 w-16 mr-2"
  />
              <span className="ml-2 text-xl font-bold">Geospatial Club</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Mapping the future through innovation and technology. Join our community of geospatial enthusiasts and
              explore the world of GIS, remote sensing, and spatial analysis.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:geospatial@vit.ac.in" className="hover:text-white transition-colors">
                geospatial@vit.ac.in
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/join"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Geospatial Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


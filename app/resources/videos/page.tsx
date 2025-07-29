import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const videos1 = [
  {
    id: "UXLDMFNv5kY",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 1,
    title: "Development of Web GIS applications using Mashup architecture by Mr. Kamal Pandey"
  },
  {
    id: "jCibTvnqNxo",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 2,
    title: "Web GIS applications for Governance by Dr. Harish C Karnatak"
  },
  {
    id: "3J_5_NX8MUM",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 3,
    title: "Introduction to publicly available web gis platform"
  },
  {
    id: "YWShD23UWoQ",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 4,
    title: "Web Mapping APIs : Leaflet by Mr. Kamal Pandey"
  },
  {
    id: "j6b0-A6KPiI",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 5,
    title: "Hand on Experiment on Geoserver SLD, WMS, WFS, WCS and other Geo web services by Mr. Kamal Pandey lk"
  },
  {
    id: "M-4WnymBXE0",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 6,
    title: "OGC We Services and Data publishing using Geoserver by Mr. Kamal Pandey"
  },
  {
    id: "z5jfjmHqBD4",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 7,
    title: "Introduction of DBMS SQL Queries and Data visualization including PostgreSQL and POSTGIS"
  },
  {
    id: "ePYDhykxpGM",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 8,
    title: "Introduction to client server systems, internet and web gis technology"
  },
  {
    id: "dRtXj9V9Dfw",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 9,
    title: "Web Mapping APIs OpenLayers"
  },
  {
    id: "Deidlsr0KC8",
    playlist: "PLd2GNPokZWAOVRvqdSjKKVTzc8ItO4GaA",
    index: 10,
    title: "Introduction to HTML and Javascript"
  }
];

const videos2 = [
  {
    id: "eUlM39BpWUA",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 1,
    title: "Data Inputting and Editing in GIS by Mr. K. Shiva Reddy"
  },
  {
    id: "KuCWytZkNs4",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 2,
    title: "Recent Trends in Geoinformatics by Dr. Sameer Saran"
  },
  {
    id: "r-Tz3LLVBHo",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 3,
    title: "Overview of Machine Learning for GIS by Mr. Prabhakar Alok Verma"
  },
  {
    id: "4_LAmovSkRc",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 4,
    title: "Introduction to GIS"
  },
  {
    id: "eqGUC6d8wPg",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 5,
    title: "Overview of Big Data Analytics by Mr. Kapil Oberai"
  },
  {
    id: "MTjE6ZPf0xc",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 6,
    title: "Geographic Phenomena, Concepts and examples Mr. Prasun Kumar Gupta"
  },
  {
    id: "vhhB6C0zb8M",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 7,
    title: "Map visualisation by Mr. Ashutosh Kumar Jha"
  },
  {
    id: "6Xgl5Oxa8x0",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 8,
    title: "Uncertainty in GIS and Error Propagation by Mr. Prabhakar Alok Verma"
  },
  {
    id: "jXxnBcTneFQ",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 9,
    title: "Network Analysis Shri Ashutosh Kumar Jha"
  },
  {
    id: "Mkz2_8T26QA",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 10,
    title: "Demo visualisation by Mr. Ashutosh Kumar Jha"
  },
  {
    id: "FuynopUC3HE",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 11,
    title: "Overview of Spatial Data Quality by Mr. Prabhakar Alok Verma"
  },
  {
    id: "fohbtG4Xdmg",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 12,
    title: "Open Source Software Technology & Tools by Mr. Prasun Kumar Gupta"
  },
  {
    id: "3ucNMmA3vs8",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 13,
    title: "Spatial Analysis Vector & Raster by Shri Kapil Oberai"
  },
  {
    id: "n2OUA4r3A7g",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 14,
    title: "Spatial Analysis – Introduction by Mr. Prabhakar Alok Verma"
  },
  {
    id: "5Kxv-qb4Hzc",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 15,
    title: "Map Projection Concepts & Use in RS & GIS by Dr. Ashutosh Srivastava"
  },
  {
    id: "xHhk3UHURso",
    playlist: "PLd2GNPokZWAP2zvFDoXqVBA0OZlhwI0HR",
    index: 16,
    title: "GIS Data Models(Spatial and Non spatial) by Mr. Ashutosh Kumar Jha"
  },
];


function VideoSection({ title, videos }: { title: string; videos: any[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {videos.map((video: any) => (
          <Card key={video.id} className="flex flex-col h-full max-w-xs mx-auto">
            <CardHeader>
              <CardTitle className="text-lg">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={
                  video.playlist
                    ? `https://www.youtube.com/watch?v=${video.id}&list=${video.playlist}&index=${video.index}`
                    : `https://www.youtube.com/watch?v=${video.id}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full rounded"
                />
              </a>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <a
                  href={
                    video.playlist
                      ? `https://www.youtube.com/watch?v=${video.id}&list=${video.playlist}&index=${video.index}`
                      : `https://www.youtube.com/watch?v=${video.id}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch on YouTube
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function TutorialVideosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="container flex-1 py-8">
        <VideoSection title="Overview of Web GIS Technology" videos={videos1} />
        <VideoSection title="Geographical Information System" videos={videos2} />
      </main>
      <Footer />
    </div>
  );
}

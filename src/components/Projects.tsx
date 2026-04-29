import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Layers, 
  Lock, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Eye 
} from "lucide-react";

// --- IMPORT GAMBAR ---
import login from "@/assets/pdam_projek/login.jpg";
import dashboard from "@/assets/pdam_projek/dashboard.jpg";
import dashboard_monitor from "@/assets/pdam_projek/dashboard_monitor.jpg"; 
import history from "@/assets/pdam_projek/history.jpg";

// --- DATA PROJECTS ---
const projects = [
  {
    title: "PDAM Tirta Raharja Tower Monitoring System",
    category: "Internal Tool",
    description: "Real-time and accurate network tower monitoring system to detect any disruptions efficiently. Systematically tracks infrastructure health and ensures continuous monitoring protocols.",
    tech: ["Laravel", "Node", "React", "MySQL"],
    isGallery: true, 
    gallery: [login, dashboard, dashboard_monitor, history],
  },

  {
    title: "E-Lapor System",
    category: "External or internal Tool for School",
    description: "The School Facilities Complaints Application is a web-based information system specifically designed to digitize and simplify the process of reporting damage to school facilities and infrastructure. This application serves as an interactive platform between students and school officials regarding facility maintenance.",
    tech: ["PHP", "MySql"],
    isGallery: false, 
    link: "http://julian-ricardop3.wuaze.com/",
  },

  {
    title: "Personal Portfolio",
    category: "Landing Page",
    description: "Attractive and interactive Personal Portfolio showcasing my skills and expertise. Built with modern web technologies to ensure highly responsive and performant user experiences.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    isGallery: false, 
    link: "https://julianricardo.id",
  },
];

const Projects = () => {
  // --- STATE UNTUK GALLERY POPUP ---
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images: string[]) => {
    setActiveGallery(images);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery) {
      setCurrentIndex((prev) => (prev + 1) % activeGallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery) {
      setCurrentIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      {/* Kontainer diperlebar menjadi max-w-7xl agar memanjang penuh ke samping */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl"> 
        
        {/* --- HEADER --- */}
        <div className="text-left space-y-4 mb-12 animate-fade-in border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm mb-2">
            <Layers size={16} />
            <span>My Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-md text-sm md:text-base">
              A curated list of my recent work, ranging from internal enterprise tools to highly interactive web experiences.
            </p>
          </div>
        </div>

        {/* --- PROJECT LIST (FULL WIDTH MINIMALIST) --- */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-slate-900/40 backdrop-blur-sm border-slate-800 p-6 md:p-10 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300"
            >
              {/* Layout Flexbox: Memanjang penuh dari kiri ke kanan */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
                
                {/* Bagian Kiri: Info Projek (Dibuat memakan ruang lebih besar) */}
                <div className="flex-1 space-y-5">
                  
                  {/* Judul & Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="w-fit bg-slate-950 text-slate-300 border-slate-800 flex gap-2 items-center px-3 py-1">
                      {project.isGallery ? <Lock size={14} className="text-orange-400" /> : <ExternalLink size={14} className="text-blue-400" />}
                      {project.isGallery ? "Internal Only" : "Public Access"}
                    </Badge>
                  </div>

                  {/* Deskripsi (Batasan max-w dihapus agar menyebar luas) */}
                  <p className="text-slate-400 leading-relaxed text-base md:text-lg w-full">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 text-xs font-mono rounded-full bg-slate-950 text-slate-300 border border-slate-800 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bagian Kanan: Tombol Action */}
                <div className="shrink-0 lg:pl-10 lg:border-l border-slate-800 w-full lg:w-auto pt-4 lg:pt-0">
                  {project.isGallery ? (
                    <Button 
                      onClick={() => openGallery(project.gallery || [])}
                      className="w-full lg:w-[220px] h-14 bg-slate-800 hover:bg-blue-600 text-white gap-3 transition-all text-base rounded-xl"
                    >
                      <Eye size={20} /> View Screenshots
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => window.open(project.link, "_blank")}
                      className="w-full lg:w-[220px] h-14 bg-blue-600 hover:bg-blue-700 text-white gap-3 transition-all text-base rounded-xl shadow-lg shadow-blue-900/20"
                    >
                      <ExternalLink size={20} /> View Project
                    </Button>
                  )}
                </div>

              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* --- GALLERY MODAL (POPUP) --- */}
      {activeGallery && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeGallery}
        >
          <div 
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeGallery}
              className="absolute -top-12 right-0 p-2 text-white hover:text-red-500 transition-colors"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-20"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-20"
            >
              <ChevronRight size={32} />
            </button>

            <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img 
                src={activeGallery[currentIndex]} 
                alt="Project Screenshot"
                className="w-full h-full object-contain animate-in zoom-in-95 duration-300"
              />
            </div>

            <div className="mt-6 flex gap-2">
              {activeGallery.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 transition-all rounded-full ${i === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-slate-700"}`}
                />
              ))}
            </div>
            
            <p className="mt-4 text-slate-500 text-sm font-mono">
              Screenshot {currentIndex + 1} of {activeGallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
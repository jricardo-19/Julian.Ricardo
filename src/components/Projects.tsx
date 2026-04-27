import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Lock, Code2 } from "lucide-react";

// --- DATA PROJECTS ---
const projects = [
  {
    title: "PDAM Tirta Raharja Tower Monitoring System (Motor PDAM)",
    category: "Internal Tool",
    description: "Real-time and accurate network tower monitoring system to detect any disruptions    .",
    tech: ["Laravel", "Node", "React", "MySQL"],
    image: "src/assets/pjo1.jpg",
  },
  {
    title: "Personal Portfolio",
    category: "Internal Tool",
    description: "Attractive and interactive Personal Portfolio.",
    tech: ["React", "Tailwind CSS",],
    image: "src/assets/pjo2.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm mb-2">
            <Layers size={16} />
            <span>My Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Selected internal applications developed to optimize company operations.
          </p>
        </div>

        {/* --- PROJECT GRID (2 KOLOM) --- */}
        {/* 'items-stretch' memastikan semua anak grid punya tinggi yang sama */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {projects.map((project, index) => (
            <Card 
              key={index}
              // PERBAIKAN 1: 'h-full' memaksa kartu mengambil tinggi maksimal kolom
              // 'flex flex-col' menyusun isi kartu secara vertikal
              className="group bg-slate-900 border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col h-full"
            >
              {/* IMAGE SECTION */}
              <div className="relative aspect-video overflow-hidden bg-slate-950 border-b border-slate-800 shrink-0">
                
                {/* Overlay Badge "Internal Only" */}
                <div className="absolute top-4 left-4 z-10">
                   <Badge variant="secondary" className="bg-slate-900/90 backdrop-blur text-slate-300 border-slate-700 flex gap-1.5 items-center">
                      <Lock size={12} className="text-orange-400" /> 
                      Internal / Private
                   </Badge>
                </div>

                {/* Gambar Project */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
              </div>

              {/* CONTENT SECTION */}
              {/* PERBAIKAN 2: 'flex flex-col flex-1' membuat area ini mengisi sisa ruang kosong */}
              <div className="p-6 md:p-8 space-y-4 flex flex-col flex-1">
                
                {/* Bagian Judul & Deskripsi akan mengisi ruang kosong ke bawah */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                {/* PERBAIKAN 3: Karena div di atas pakai 'flex-1', bagian ini otomatis terdorong ke paling bawah */}
                <div className="pt-4 border-t border-slate-800/50 mt-auto">
                  <div className="flex items-center gap-2 mb-3 text-sm text-slate-500">
                    <Code2 size={16} />
                    <span className="font-mono">Technologies used:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900/20 text-blue-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Projects;
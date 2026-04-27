import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Github, 
  Server, 
  Wrench, 
  Sparkles, 
  Users, 
  Clock, 
  MessageCircle, 
  Mic,
  Cpu,
  Network, 
  Laptop,
  Lightbulb 
} from "lucide-react";

// --- DATA ---
const technicalSkills = [
  { name: "React", level: 75, icon: Code2, color: "text-cyan-400", bg: "bg-cyan-500" },
  { name: "Laravel", level: 75, icon: Server, color: "text-red-500", bg: "bg-red-500" },
  { name: "PHP", level: 80, icon: Code2, color: "text-indigo-400", bg: "bg-indigo-500" },
  { name: "MySQL", level: 80, icon: Database, color: "text-orange-400", bg: "bg-orange-500" },
  { name: "GitHub", level: 65, icon: Github, color: "text-white", bg: "bg-slate-400" },
  { name: "Networking", level: 85, icon: Network, color: "text-pink-500", bg: "bg-pink-500" }, 
  { name: "Google Gemini", level: 95, icon: Sparkles, color: "text-purple-400", bg: "bg-purple-500" }, 
  { name: "Hardware", level: 95, icon: Cpu, color: "text-green-400", bg: "bg-green-500" },
];

const softSkills = [
  { name: "Leadership", icon: Users, desc: "Inspiring & Guiding" },
  { name: "Team Work", icon: Users, desc: "Collaborative Synergy" },
  { name: "Problem Solving", icon: Wrench, desc: "Strategic Solutions" },
  { name: "Time Management", icon: Clock, desc: "Efficient & Punctual" },
  { name: "Communication", icon: MessageCircle, desc: "Clear Articulation" },
  { name: "Public Speaking", icon: Mic, desc: "Confident Delivery" },
];
// ------------

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4">
        
        {/* --- HEADER BARU --- */}
        {/* Saya tambahkan 'mb-12' agar ada jarak dengan tombol di bawahnya */}
        <div className="text-center space-y-4 animate-fade-in mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm mb-2">
                <Lightbulb size={16} />
                <span>My Expertise</span>
              </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Technical Skills & Soft Skills
              </span>
            </h2>
        </div>

        {/* --- TAB NAVIGATION --- */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900/80 backdrop-blur-sm p-1.5 rounded-full border border-slate-800 inline-flex">
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "technical"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Laptop size={18} />
              Technical
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "soft"
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Users size={18} />
              Soft Skills
            </button>
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="min-h-[400px]">
          
          {/* 1. TECHNICAL CONTENT */}
          {activeTab === "technical" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
              {technicalSkills.map((skill, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900 border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300 group"
                >
                  <div className="mb-4 flex justify-between items-start">
                    <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${skill.color}`}>
                       <skill.icon size={28} />
                    </div>
                    <span className="text-slate-500 font-mono text-sm">{skill.level}%</span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.bg} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* 2. SOFT SKILLS CONTENT */}
          {activeTab === "soft" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
              {softSkills.map((skill, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900 border-slate-800 p-8 flex flex-col items-center text-center hover:border-green-500/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="mb-6 p-4 rounded-full bg-slate-950 border border-slate-800 group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-colors">
                    <skill.icon size={40} className="text-slate-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                </Card>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Skills;
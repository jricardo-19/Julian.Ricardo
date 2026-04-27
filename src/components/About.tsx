import React from "react";
import profilePhoto from "@/assets/profile3.jpeg";
import { User } from "lucide-react"; // Opsional: icon user

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (Agar senada dengan Certificates) --- */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-900/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4">

        {/* Layout Grid 2 Kolom */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* --- KOLOM KIRI: FOTO --- */}
          <div className="relative flex justify-center md:justify-start animate-fade-in-left">

            {/* Container Foto + Shadow */}
            <div className="relative z-10 w-64 md:w-80 aspect-[3/4] mx-auto">
                
                {/* 1. SHADOW GLOW (Warna disesuaikan ke biru) */}
                <div className="absolute inset-0 bg-blue-600/30 blur-[60px] rounded-full scale-110 -z-10 translate-y-4" />

                {/* 2. FOTO */}
                <div className="w-full h-full rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 border border-slate-800 shadow-2xl">
                    <img
                      src={profilePhoto}
                      alt="Julian Ricardo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                        e.currentTarget.onerror = null;
                      }}
                    />
                </div>
            </div>
          </div>

          {/* --- KOLOM KANAN: TEKS --- */}
          <div className="space-y-6 animate-fade-in-right">

            <div className="space-y-4 text-center md:text-left">
              
              {/* Badge Kecil (Opsional - pemanis) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm mb-2 mx-auto md:mx-0">
                <User size={16} />
                <span>Who I Am</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              
              {/* Deskripsi Teks (Warna slate-400 agar kontras di dark mode) */}
              <p className="text-lg text-slate-400 leading-relaxed">
                Halo! I'm Julian Ricardo. Young IT Support professional with a strong technical foundation in software development (Laravel & React JS) and network infrastructure management.
                <br /><br />
                Experienced in leading school technical teams and providing reliable systems support in industrial environments (PDAM Tirta Raharja). Proficient in diagnosing technical issues and providing prompt and effective solutions to ensure smooth operations and support the company's overall digital needs.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
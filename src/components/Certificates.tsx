import React, { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.jpg";
import cert3 from "@/assets/cert3.jpg";
import cert4 from "@/assets/cert4.jpg";
import cert5 from "@/assets/cert5.jpg";
import cert6 from "@/assets/cert6.jpg";

const Certificates = () => {
  // --- STATE UNTUK POPUP ---
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);

  const certificatesSource = [
    { id: 1, title: "Belajar Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding", date: "2025", image: cert1 },
    { id: 2, title: "Belajar Dasar AI", issuer: "Dicoding", date: "2025", image: cert2 },
    { id: 3, title: "Pengenalan Ke Logika Pemrograman (Programming Logic 101)", issuer: "Dicoding", date: "2023", image: cert3 },
    { id: 4, title: "Belajar Dasar Google Cloud", issuer: "Dicoding", date: "2023", image: cert4 },
    { id: 5, title: "Memulai Dasar Pemrograman Untuk Menjadi Pemngembang Software", issuer: "Dicoding", date: "2024", image: cert5 },
    { id: 6, title: "Milo Active Indonesia Race", issuer: "Nestlé Indonesia", date: "2025", image: cert6 },
  ];

  const certificates = [...certificatesSource, ...certificatesSource];

  // Fungsi untuk menutup popup
  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certificates" className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/20 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-900/20 blur-[150px] rounded-full -z-10" />

      {/* CSS Animasi Khusus di sini */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            width: max-content; 
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container mx-auto px-4 mb-10">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm mb-2">
            <Award size={16} />
            <span>Achievements</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
        </div>
      </div>

      {/* --- SLIDER CONTAINER --- */}
      <div className="w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-scroll">
          {certificates.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              onClick={() => setSelectedCert({ title: item.title, image: item.image })}
              className="group relative w-[300px] md:w-[350px] shrink-0 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 cursor-pointer"
            >
              
              {/* Gambar Sertifikat */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/1e293b/475569?text=Certificate";
                  }}
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                   <p className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <ExternalLink size={20} /> Lihat Detail
                   </p>
                </div>
              </div>

              {/* Info Teks */}
              <div className="p-5 relative z-10 bg-slate-900">
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors" title={item.title}>
                  {item.title}
                </h3>
                
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                    {item.issuer}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP / MODAL LIGHTBOX --- */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 transition-opacity animate-in fade-in duration-300"
          onClick={closeModal} // Tutup jika area luar gambar diklik
        >
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center gap-4 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Mencegah popup tertutup saat gambarnya yang diklik
          >
            {/* Tombol Close */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 md:-right-12 p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-red-500/80 rounded-full transition-all"
            >
              <X size={24} />
            </button>

            {/* Gambar Besar */}
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-slate-800"
            />

            {/* Judul Sertifikat di bawah gambar */}
            <p className="text-white text-lg md:text-xl font-medium text-center px-4">
              {selectedCert.title}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default Certificates;
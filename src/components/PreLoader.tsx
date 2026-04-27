import React, { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { useLocation } from "react-router-dom"; // Tambahan import ini

const Preloader = () => {
  const location = useLocation(); // Mendeteksi perubahan halaman
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [text, setText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    // 1. Reset state setiap kali pindah halaman
    setIsVisible(true);
    setIsFading(false);
    setProgress(0);
    setText("ROUTING PROTOCOL INITIATED...");

    // 2. Jalankan animasi loading (dibuat lebih cepat dari sebelumnya)
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextValue = prev + Math.floor(Math.random() * 25) + 10; // Cepat naik
        
        if (nextValue >= 100) {
          clearInterval(interval);
          setText("SYSTEM READY.");
          setTimeout(() => setIsFading(true), 300); // Fade out lebih cepat
          setTimeout(() => setIsVisible(false), 800); // Hilang lebih cepat
          return 100;
        }

        if (nextValue > 30 && nextValue < 70) setText("LOADING ASSETS...");
        if (nextValue >= 70) setText("MOUNTING COMPONENTS...");

        return nextValue;
      });
    }, 80); // Kecepatan interval per milidetik

    return () => clearInterval(interval);
  }, [location.pathname]); // <-- KUNCI: Efek jalan ulang tiap URL berubah

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-700 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md px-6 flex flex-col items-center gap-8">
        
        {/* LINGKARAN DIGITAL */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500/80 animate-[spin_2s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-cyan-400/80 animate-[spin_1.5s_linear_infinite_reverse]" />
          <Terminal size={32} className="text-blue-400 animate-pulse" />
        </div>

        {/* TEKS & PROGRESS BAR */}
        <div className="w-full space-y-4 font-mono">
          <div className="flex justify-between text-xs sm:text-sm text-blue-400/80">
            <span>{text}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* FAKE LOGS */}
        <div className="text-[10px] text-slate-600/50 font-mono w-full text-left overflow-hidden h-12 flex flex-col justify-end">
           <p className="truncate">~ scanning route: {location.pathname}</p>
           <p className="truncate">~ fetching DOM elements: <span className="text-blue-500/50">SUCCESS</span></p>
           <p className="truncate">~ rendering view: <span className="text-blue-500/50">OK</span></p>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
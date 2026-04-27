import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  // --- LOGIC TYPING EFFECT ---
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["IT Support", "Tech Geek", "Software Engineer", "Secretary of the GPdI Church"];

  useEffect(() => {
    let ticker: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      // Tentukan text berikutnya
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      // Kecepatan mengetik
      // Kalau sedang menghapus, lebih cepat (50ms). Kalau ngetik, normal (150ms).
      let delta = isDeleting ? 50 : 150; 

      if (!isDeleting && updatedText === fullText) {
        delta = 2000; 
        setIsDeleting(true);
        setTypingSpeed(delta);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500; 
        setTypingSpeed(delta);
      } else {
        setTypingSpeed(delta);
      }
    };

    ticker = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, words]);
  // ---------------------------

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden pt-16">
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full -z-10" />

      {/* Container Utama */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        
        <div className="space-y-6 max-w-4xl animate-fade-in-up">
          
          {/* Badge Sapaan */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-medium mb-2">
            👋 Welcome to my portfolio
          </div>

          {/* JUDUL UTAMA */}
          <h1 className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="whitespace-nowrap">Hello, I'm</span>
            <span className="whitespace-nowrap bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Julian Ricardo
            </span>
          </h1>

          {/* --- TYPING TEXT SECTION --- */}
          {/* Perubahan CSS: 
             1. 'h-10' diganti 'min-h-[40px] h-auto' agar jika teks panjang dan turun baris (wrap), tidak terpotong.
             2. Menambahkan 'flex-wrap' agar teks panjang bisa turun ke bawah dengan rapi di HP.
          */}
          <h2 className="text-xl md:text-3xl font-semibold text-slate-300 min-h-[40px] h-auto flex flex-wrap items-center justify-center gap-1.5 transition-all duration-200">
            <span className="whitespace-nowrap">I'm a </span>
            <span className="text-blue-400 text-left">{text}</span>
            <span className="w-1 h-6 md:h-8 bg-blue-500 animate-pulse" />
          </h2>

          {/* Tombol Action */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
            >
              View My Work
            
            </Button>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
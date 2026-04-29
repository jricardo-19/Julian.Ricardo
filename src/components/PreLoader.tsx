import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // --- LOGIC TYPING EFFECT ---
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Please Wait...";

  // 1. Logika durasi Preloader (Hanya berjalan sekali saat web pertama kali dibuka)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 700); // Menunggu transisi fade-out selesai
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 2. Logika animasi ketik (Typing Effect)
  useEffect(() => {
    let ticker: NodeJS.Timeout;

    const handleType = () => {
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      // Kecepatan ngetik (100ms) dan menghapus (50ms)
      let delta = isDeleting ? 50 : 100;

      if (!isDeleting && updatedText === fullText) {
        delta = 800; // Pause sebentar ketika teks sudah lengkap
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        delta = 200; // Pause sebentar sebelum mulai ngetik lagi
      }

      ticker = setTimeout(handleType, delta);
    };

    // Hanya jalankan animasi jika preloader sedang tampil
    if (isVisible && !isFading) {
      ticker = setTimeout(handleType, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(ticker);
  }, [text, isDeleting, isVisible, isFading]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 transition-opacity duration-700 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* TYPING TEXT SECTION */}
      <h2 className="text-2xl md:text-4xl font-mono font-semibold flex items-center justify-center gap-1.5">
        <span className="text-blue-400">{text}</span>
        {/* Kursor kotak berkedip */}
        <span className="w-1.5 md:w-2 h-7 md:h-9 bg-blue-500 animate-pulse" />
      </h2>
    </div>
  );
};

export default Preloader;
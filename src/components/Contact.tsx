import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare, 
  Instagram, 
  Phone // Icon untuk WhatsApp
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "juliancimahi@gmail.com", // Ganti dengan email asli
      link: "mailto:juliancimahi@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jricardo-19",
      link: "https://github.com/jricardo-19",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/Julian Ricardo",
      link: "http://www.linkedin.com/in/julian-ricardo-68a8583a3",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@docofschooljr",
      link: "https://x.com/docofschooljr",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@julianricardo__",
      link: "https://www.instagram.com/julianricardo__?igsh=MXdhdm4wM3d0ODlzaQ==",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 895-4102-06340",
      // Pastikan format wa.me menggunakan kode negara (62) tanpa '+' atau spasi
      link: "https://wa.me/62895410206340?text=Halo,%20saya%20tertarik%20bekerja%20sama.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Background Decoration (Glow Effect) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-blue-900/20 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* --- HEADER --- */}
          <div className="text-center space-y-4 animate-fade-in">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm mb-2">
                <MessageSquare size={16} />
                <span>Let's Talk</span>
              </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
          </div>

          {/* --- MAIN CARD --- */}
          <Card className="p-8 md:p-12 bg-slate-900 border-slate-800 animate-fade-in-up shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  // Styling Button: Dark background, Hover effect border biru
                  className="h-auto p-4 justify-start bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-blue-500/50 transition-all duration-300 group"
                  onClick={() => window.open(social.link, "_blank")}
                >
                  <div className="flex items-center gap-4 w-full">
                    
                    {/* Icon Box */}
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                      <social.icon className="text-slate-400 group-hover:text-blue-400 transition-colors" size={20} />
                    </div>
                    
                    {/* Text Info */}
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                        {social.label}
                      </p>
                      <p className="text-xs text-slate-500 group-hover:text-blue-300 transition-colors truncate">
                        {social.value}
                      </p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            {/* --- FOOTER MESSAGE --- */}
            <div className="mt-10 pt-8 border-t border-slate-800 text-center">
              <p className="text-slate-400 flex items-center justify-center gap-2">
                Looking forward to connecting with you! 
                <span className="text-xl">🚀</span>
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
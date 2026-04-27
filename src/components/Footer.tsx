const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright Text */}
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Julian Ricardo. All rights reserved.
          </p>
          
          {/* Built With Text */}
          <p className="text-sm text-slate-400 flex items-center gap-1.5">
            Built with 
            <span className="text-red-500 animate-pulse">❤️</span> 
            using 
            <span className="text-slate-200 font-medium">React</span> & 
            <span className="text-slate-200 font-medium">Tailwind CSS</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
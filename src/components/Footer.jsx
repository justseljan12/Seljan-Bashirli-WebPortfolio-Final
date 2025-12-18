import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-8 border-t border-white/10 bg-primary/90/ bg-opacity-90 sm:mt-10">
      <div
        className="
          mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[10px] text-slate-300/80
          sm:gap-4 sm:py-6 sm:text-xs sm:flex-row sm:items-center sm:justify-between
        "
      >
        {/* Left: branding */}
        <div className="flex items-center gap-2">
          <div
            className="
              flex h-8 w-16 items-center justify-center rounded-2xl border border-white/15
              bg-gradient-to-r from-purple-500/80 via-cyan-400/80 to-pink-500/80
              text-[10px] font-semibold tracking-[0.2em] text-slate-950 font-orbitron
              shadow-[0_0_20px_rgba(129,140,248,0.8)]
            "
          >
            &lt;/DEV&gt;
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-slate-100 font-poppins">
              Seljan Bashirli
            </span>
            <span className="text-[10px] text-slate-400 font-poppins">
              CS Student · Front-end & Data Enthusiast
            </span>
          </div>
        </div>

        {/* Middle: quick links */}
        <nav className="flex flex-wrap gap-3 text-[11px] font-poppins text-slate-300/80">
          <a href="#home" className="hover:text-cyan-300 transition-colors">
            Home
          </a>
          <span className="text-slate-500">·</span>
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            About
          </a>
          <span className="text-slate-500">·</span>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">
            Projects
          </a>
          <span className="text-slate-500">·</span>
          <a href="#resume" className="hover:text-cyan-300 transition-colors">
            Resume
          </a>
          <span className="text-slate-500">·</span>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: social / copyright */}
        <div className="flex items-center gap-3 text-[11px] font-poppins text-slate-400">
          <a
            href="https://linktr.ee/seljanbashirli"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5
              px-3 py-1 text-[11px] text-cyan-200 shadow-sm backdrop-blur-xl
              transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500/20
            "
          >
            <span className="text-xs">↗</span>
            <span>All links</span>
          </a>
          <span className="hidden text-slate-600 sm:inline">|</span>
          <span className="hidden sm:inline">
            © {new Date().getFullYear()} Seljan Bashirli. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



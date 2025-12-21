import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] md:relative md:z-50">
      <nav
        className={`
          mx-auto flex max-w-6xl items-center justify-between
          rounded-3xl border border-white/10 backdrop-blur-xl
          px-3 py-2.5 shadow-glass-xl
          transition-all duration-300 ease-in-out
          sm:px-6 sm:py-3
          md:mt-4
          ${
            isScrolled
              ? 'bg-white/10 md:bg-white/5'
              : 'bg-white/5 md:bg-white/5'
          }
        `}
      >
        {/* Logo / Dev Icon */}
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-2">
          <div
            className="
              relative flex h-8 w-20 items-center justify-center
              overflow-hidden rounded-2xl border border-white/15
              bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500
              shadow-[0_0_30px_rgba(168,85,247,0.5)]
              sm:h-10 sm:w-24
            "
          >
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.35),transparent_55%)]
                opacity-80 mix-blend-screen
              "
            />
            <span
              className="
                relative text-[10px] font-semibold tracking-widest text-slate-950
                group-hover:animate-pulse sm:text-sm
                font-orbitron
              "
            >
              &lt;/DEV&gt;
            </span>
          </div>
        </a>

        {/* Nav Links - Desktop */}
        <ul className="hidden items-center gap-1 text-sm sm:flex sm:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  group relative inline-flex items-center gap-1 overflow-hidden
                  rounded-full px-2 py-1.5 sm:px-3
                  text-[10px] font-medium uppercase tracking-[0.18em] sm:text-xs
                  text-slate-200/80 transition-all duration-300
                  hover:text-cyan-200
                  font-poppins
                "
              >
                <span
                  className="
                    absolute inset-0 scale-0 rounded-full bg-white/10
                    backdrop-blur-2xl transition-transform duration-300
                    group-hover:scale-100
                  "
                />
                <span className="relative">{link.label}</span>
                <span
                  className="
                    relative h-1 w-1 rounded-full bg-cyan-400/60
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Call-to-action / Mobile menu button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={closeMenu}
            className="
              hidden rounded-full bg-gradient-to-r
              from-cyan-500/80 via-purple-500/80 to-pink-500/80
              px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:px-4 sm:text-xs
              text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)]
              transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.9)]
              sm:inline-flex font-poppins
            "
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={toggleMenu}
            className="
              inline-flex h-9 w-9 items-center justify-center
              rounded-2xl border border-white/15 bg-white/5
              text-slate-100/80 shadow-md backdrop-blur-lg
              transition-all duration-300
              hover:border-cyan-400/70 hover:text-cyan-200
              sm:hidden
            "
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
          >
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <span
                className={`block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-3/4 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-[64px] z-[98] bg-black/50 backdrop-blur-sm sm:hidden md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[64px] z-[99] mx-2 sm:hidden md:hidden">
          <div className="rounded-3xl border border-white/10 bg-primary/95 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-4 transition-all duration-300 animate-in slide-in-from-top-2">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="
                      group relative flex items-center justify-center gap-2
                      rounded-full px-4 py-3
                      text-sm font-medium uppercase tracking-[0.18em]
                      text-slate-200/80 transition-all duration-300
                      active:bg-white/10 hover:bg-white/10 hover:text-cyan-200
                      touch-manipulation
                      font-poppins
                    "
                  >
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="
                    flex items-center justify-center gap-2
                    rounded-full bg-gradient-to-r
                    from-cyan-500/80 via-purple-500/80 to-pink-500/80
                    px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em]
                    text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)]
                    transition-all duration-300 active:scale-95 hover:shadow-[0_0_40px_rgba(56,189,248,0.9)]
                    touch-manipulation
                    font-poppins
                  "
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;




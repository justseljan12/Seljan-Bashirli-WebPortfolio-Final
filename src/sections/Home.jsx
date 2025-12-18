import React, { useEffect, useState } from 'react';

const TYPING_TEXT = 'Computer Science Student';

const TypingText = () => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = TYPING_TEXT.slice(0, index + 1);
        setDisplayed(next);
        setIndex((prev) => prev + 1);
        if (next.length === TYPING_TEXT.length) {
          setDeleting(true);
        }
      } else {
        const next = TYPING_TEXT.slice(0, index - 1);
        setDisplayed(next);
        setIndex((prev) => prev - 1);
        if (next.length === 0) {
          setDeleting(false);
        }
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <span className="relative inline-flex items-center text-cyan-300">
      <span>{displayed}</span>
      <span className="ml-0.5 inline-block h-4 w-[2px] animate-blink rounded-full bg-cyan-300" />
    </span>
  );
};

const particles = Array.from({ length: 20 }, (_, i) => i);

const Home = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10; // left / right
    const rotateX = ((midY - y) / midY) * 10; // up / down

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="
        relative mx-auto flex min-h-screen max-w-6xl flex-col
        px-4 pt-20 pb-12 text-slate-100 sm:pt-28 sm:pb-20 md:flex-row md:items-center md:gap-10
        scroll-mt-20 sm:scroll-mt-28 md:scroll-mt-28
      "
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 -z-20 home-grid" aria-hidden="true" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p) => (
          <div
            key={p}
            className="home-particle"
            style={{
              animationDelay: `${p * 0.35}s`,
              left: `${(p * 17) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Left: Text content */}
      <div className="relative z-10 flex-1 space-y-6">
        {/* Welcome badge */}
        <div
          className="
            inline-flex items-center gap-1.5 rounded-full border border-white/10
            bg-white/5 px-2.5 py-1 text-[10px] font-medium sm:gap-2 sm:px-3 sm:text-xs
            shadow-[0_0_25px_rgba(56,189,248,0.45)] backdrop-blur-lg
            home-badge-pop
            font-poppins
          "
        >
          <span className="text-base sm:text-lg">🤝</span>
          <span className="uppercase tracking-[0.2em] text-slate-200/85">
            Welcome to My Portfolio
          </span>
        </div>

        {/* Name with staggered 3D reveal */}
        <h1
          className="
            mt-2 text-3xl font-semibold tracking-wide text-white sm:text-4xl lg:text-5xl
            font-orbitron
          "
        >
          <span className="inline-block home-word-1 text-slate-200">Hi,</span>{' '}
          <span className="inline-block home-word-2 text-slate-200">I&apos;m</span>{' '}
          <span
            className="
              inline-block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300
              bg-clip-text text-transparent home-word-3
            "
          >
            Seljan
          </span>{' '}
          <span
            className="
              inline-block bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-300
              bg-clip-text text-transparent home-word-4
            "
          >
            Bashirli!
          </span>
        </h1>

        {/* Typing effect line */}
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-300/80 font-poppins">
          <TypingText />
        </p>

        {/* Description */}
        <p className="max-w-xl text-xs leading-relaxed text-slate-300/85 sm:text-sm font-poppins">
          I'm a curious mind who loves turning ideas into action—whether it's coding, creating, or saving
          the planet with a little{' '}
          <span className="font-semibold text-emerald-300">GreenFuture</span>{' '}
          magic. When I'm not juggling projects from tech to climate, you'll probably find me experimenting
          with new recipes, managing life solo in Baku, or trying to convince my plants to grow faster.
        </p>

        {/* Social icons */}
        <div className="mt-4 flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/justseljan12"
            target="_blank"
            rel="noreferrer"
            className="home-social-icon group"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.6 3 8.4 7.1 9.8.5.1.7-.2.7-.5v-1.7c-2.9.6-3.6-1.4-3.6-1.4-.4-1-1.1-1.3-1.1-1.3-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1-2.9-.1-.3-.4-1.4.1-2.8 0 0 .9-.3 2.9 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 2-1.3 2.9-1 2.9-1 .5 1.4.2 2.5.1 2.8.7.8 1 1.7 1 2.9 0 4.1-2.5 5-4.9 5.3.4.3.8 1 .8 2v3c0 .3.2.6.7.5 4.1-1.4 7.1-5.2 7.1-9.8 0-5.8-4.7-10.5-10.5-10.5z"
              />
            </svg>
          </a>

          <a
            href="https://www.codecademy.com/profiles/just.seljan"
            target="_blank"
            rel="noreferrer"
            className="home-social-icon group"
            aria-label="Codecademy profile"
          >
            <span className="text-xs font-semibold tracking-[0.18em]">CA</span>
          </a>

          <a
            href="https://www.linkedin.com/in/seljan-bashirli"
            target="_blank"
            rel="noreferrer"
            className="home-social-icon group"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.4c0-1.29 0-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.41v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.41 4.34 5.54v6.19zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.15.92-2.08 2.06-2.08s2.07.93 2.07 2.08c0 1.14-.93 2.07-2.07 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z"
              />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex items-center gap-3 text-xs font-medium text-slate-300/70 font-poppins">
          <div className="flex h-10 w-6 items-center justify-center rounded-full border border-slate-500/60">
            <div className="h-6 w-[1px] overflow-hidden">
              <div className="h-6 w-[1px] animate-scroll-line bg-slate-200" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.25em]">Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Right: Profile image with effects */}
      <div className="relative z-10 mt-8 flex flex-1 items-center justify-center sm:mt-10 md:mt-0">
        <div
          className="relative h-48 w-48 max-w-full cursor-pointer transition-transform duration-300 ease-out will-change-transform xs:h-56 xs:w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Pulsing gradient aura */}
          <div className="absolute inset-[-18%] rounded-full bg-gradient-to-tr from-cyan-500/35 via-purple-500/25 to-pink-500/35 blur-3xl home-pulse" />

          {/* Rotating outer ring */}
          <div className="home-orbit-outer pointer-events-none absolute inset-0 rounded-full border border-cyan-300/30" />

          {/* Rotating inner ring */}
          <div className="home-orbit-inner pointer-events-none absolute inset-[18%] rounded-full border border-purple-300/40" />

          {/* Small orbiting accents */}
          <div className="pointer-events-none absolute -top-2 right-6 text-sm text-cyan-200 home-float-fast">
            <span>✦</span>
          </div>
          <div className="pointer-events-none absolute bottom-0 -left-1 text-lg text-purple-300/90 home-float-slow">
            <span>{'</>'}</span>
          </div>

          {/* Profile image container */}
          <div
            className="
              relative flex h-full w-full items-center justify-center overflow-hidden
              rounded-full border border-white/10 bg-gradient-to-br
              from-slate-900/80 via-slate-900/40 to-slate-900/90
              shadow-[0_25px_70px_rgba(0,0,0,0.85)]
            "
          >
            <img
              src="/assets/images/myphoto.jpg"
              alt="Seljan Bashirli"
              className="h-[92%] w-[92%] rounded-full object-cover object-center home-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;



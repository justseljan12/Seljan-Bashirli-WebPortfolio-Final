import React from 'react';

const techStack = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C/C++'],
  frontend: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'REST APIs'],
  dataTools: ['SQL', 'PostgreSQL', 'Git & GitHub'],
  learning: ['Codecademy Tracks', 'CS Fundamentals', 'Algorithms & Data Structures'],
};

const About = () => {
  return (
    <section
      id="about"
      className="
        relative mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 pb-16 pt-20
        text-slate-100 sm:gap-12 sm:pb-24 sm:pt-28 md:flex-row md:items-center
        scroll-mt-20 sm:scroll-mt-28 md:scroll-mt-28
      "
    >
      {/* Left column – background & story */}
      <div className="relative z-10 flex-1 space-y-4 sm:space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80 font-poppins">
          About Me
        </p>

        <h2 className="font-orbitron text-xl font-semibold tracking-[0.15em] text-white sm:text-2xl md:text-3xl">
          Connecting Code, Analysis & Real-World Impact
        </h2>

        <p className="text-xs leading-relaxed text-slate-300/85 sm:text-sm font-poppins">
          I&apos;m a{' '}
          <span className="font-semibold text-cyan-300">Computer Science student</span> with a strong interest
          in how <span className="font-semibold text-emerald-300">technology</span> can solve real problems
          and create meaningful impact. My experience spans{' '}
          <span className="font-semibold text-cyan-300">front-end development</span>,{' '}
          <span className="font-semibold text-purple-300">IT business analysis</span>, and working on
          tech-driven projects where logic, creativity, and user needs come together. I enjoy exploring
          different areas of <span className="font-semibold text-cyan-300">tech</span> rather than limiting
          myself to just one path.
        </p>

        <p className="text-sm leading-relaxed text-slate-300/85 font-poppins">
          Outside formal classes, I actively build my skills through{' '}
          <span className="font-semibold text-emerald-300">hackathons</span>,{' '}
          <span className="font-semibold text-emerald-300">startup initiatives</span>, challenges, and{' '}
          <span className="font-semibold text-emerald-300">online courses</span>. I&apos;ve worked on diverse
          projects that strengthened my understanding of{' '}
          <span className="font-semibold text-cyan-300">web technologies</span>,{' '}
          <span className="font-semibold text-purple-300">teamwork</span>, and{' '}
          <span className="font-semibold text-purple-300">analytical thinking</span>, while also pushing me to
          learn how technology supports{' '}
          <span className="font-semibold text-cyan-300">decision-making</span> and{' '}
          <span className="font-semibold text-cyan-300">business processes</span>.
        </p>

        <p className="text-sm leading-relaxed text-slate-300/85 font-poppins">
          Currently, I&apos;m expanding my focus toward{' '}
          <span className="font-semibold text-emerald-300">data analytics</span> with the long-term goal of
          becoming a <span className="font-semibold text-purple-300">data analyst</span> and{' '}
          <span className="font-semibold text-purple-300">data scientist</span>. Whether I&apos;m{' '}
          <span className="font-semibold text-cyan-300">coding interfaces</span>,{' '}
          <span className="font-semibold text-cyan-300">analyzing data</span>, or collaborating on new ideas,
          I&apos;m driven by <span className="font-semibold text-emerald-300">continuous learning</span> and
          the excitement of turning curiosity into{' '}
          <span className="font-semibold text-emerald-300">practical solutions</span>.
        </p>

        {/* Learning & activities cards */}
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          <div
            className="
              flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4
              shadow-[0_18px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl
              transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_20px_60px_rgba(56,189,248,0.7)]
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 font-poppins">
              Continuous Learning
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300/90 font-poppins">
              <li>- Codecademy full-stack & CS tracks</li>
              <li>- Regular algorithm & problem-solving practice</li>
              <li>- Design & UX exploration for better user experiences</li>
            </ul>
          </div>

          <div
            className="
              flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4
              shadow-[0_18px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl
              transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/70 hover:shadow-[0_20px_60px_rgba(192,132,252,0.7)]
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300/90 font-poppins">
              Activities & Interests
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300/90 font-poppins">
              <li>- Building side projects and small web apps</li>
              <li>- Exploring climate-tech & sustainability ideas</li>
              <li>- Managing life in Baku, cooking, and nurturing plants</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right column – workspace & tech stack */}
      <div className="relative z-10 flex-1 space-y-6 md:space-y-8">
        {/* Coding workspace preview */}
        <div
          className="
            group relative overflow-hidden rounded-3xl border border-white/10
            bg-gradient-to-br from-slate-900/80 via-slate-900/30 to-slate-900/90
            shadow-[0_24px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.25),transparent_55%)] opacity-80 mix-blend-screen" />
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300/80 font-poppins">
              coding-workspace.jsx
            </span>
          </div>

          <div className="relative mt-3 px-4 pb-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="{`${import.meta.env.BASE_URL}assets/images/workspace.jpeg`}
                alt="Coding workspace"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-purple-500/25 blur-3xl" />
            </div>

            <p className="mt-3 text-xs text-slate-300/85 font-poppins">
              "Rebuild Karabakh" Hackathon 2025. As CO2toD team where I am CTO, we participated in this hackathon and won the chance to participate in WUF2026.
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div
          className="
            rounded-3xl border border-white/10 bg-white/5 p-5
            shadow-[0_20px_60px_rgba(0,0,0,0.75)] backdrop-blur-2xl
          "
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90 font-poppins">
            Technology Stack
          </p>

          <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300/80 sm:text-[11px] font-poppins">
                Languages
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-1.5">
                {techStack.languages.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full border border-white/15 bg-slate-900/60
                      px-1.5 py-0.5 text-[10px] text-slate-100/90
                      shadow-sm transition-all duration-200 active:scale-95 hover:-translate-y-0.5 hover:border-cyan-300/80
                      sm:px-2 sm:py-1 sm:text-[11px]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300/80 font-poppins">
                Frontend
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {techStack.frontend.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full border border-white/15 bg-slate-900/60
                      px-2 py-1 text-[11px] text-slate-100/90
                      shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300/80
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300/80 font-poppins">
                Backend & APIs
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {techStack.backend.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full border border-white/15 bg-slate-900/60
                      px-2 py-1 text-[11px] text-slate-100/90
                      shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/80
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300/80 font-poppins">
                Tools & Learning
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {techStack.dataTools.concat(techStack.learning).map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full border border-white/15 bg-slate-900/60
                      px-2 py-1 text-[11px] text-slate-100/90
                      shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-300/80
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -left-24 top-0 h-60 w-60 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/14 blur-3xl" />
      </div>
    </section>
  );
};

export default About;



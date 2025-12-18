import React, { useState } from 'react';

const projectGroups = [
  {
    index: 1,
    items: [
      {
        title: 'Hour of AI - Interactive Teaching Activity',
        date: 'December 2025',
        image: '/assets/images/Projects/hourofcode.png',
        description:
          'As part of the Hour of Code initiative, we worked with secondary school students who have limited access to technology, introducing them to the basics and importance of artificial intelligence. The experience focused on making AI understandable, inspiring curiosity, and showing how technology can be a tool for opportunity and inclusion.',
        technologies: ['Education', 'Game Development', 'AI', 'Algoritms'],
        codeLabel: 'AI',
        demoLabel: 'Watch from YouTube',
        demoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
      },
      {
        title: 'Lab Experiement about the Logic Gates',
        date: 'October 2025',
        image: '/assets/images/Projects/labwork.png',
        description:
          'As part of our Principles of Information Systems lab work, we conducted a team-based experiment on logic gates to understand how fundamental logical operations work at the hardware and system level. The experiment helped us connect abstract logical concepts with practical system behavior and collaborative problem-solving.',
        technologies: ['Logic Gates', 'Circuit simulation tools', 'Critical Thinking', 'Teamwork'],
        codeLabel: 'Logic Gates',
        demoLabel: 'Watch from YouTube',
        demoUrl: 'https://youtu.be/2YK-_RXiyuU?si=Ttm5RrT1PGQrD6q6',
      },
    ],
  },
  {
    index: 2,
    items: [
      {
        title: 'Smart City and Green Future Forum',
        date: 'November 2025',
        image: '/assets/images/Projects/smartcityforum.png',
        description:
          'A forum focused on how smart technologies and innovative solutions can support sustainable urban development and a greener future.',
        technologies: ['Smart city concepts', 'Urban Planning', 'Green Technologies'],
        codeLabel: 'Innovation',
        demoLabel: 'Watch Short Recap Video',
        demoUrl: 'https://www.instagram.com/reel/DRxRVDVCHgn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      },
      {
        title: 'Erasmus+ Exploring Cultures',
        date: 'August 2025',
        image: '/assets/images/Projects/erasmus+.png',
        description:
          'Participated in the Erasmus+ Exploring Cultures program in Georgia, collaborating with peers from Georgia, Azerbaijan, and Sweden to share cultural perspectives, develop intercultural skills, and engage in community projects.',
        technologies: ['Intercultural collaboration', 'Community Engagement', 'Teamwork'],
        codeLabel: 'Cultural Exchange',
      },
    ],
  },
  {
    index: 3,
    items: [
      {
        title: 'Rebuild Karabakh Hackathon',
        date: 'November 2024',
        image: '/assets/images/Projects/rebuildhack.png',
        description:
          'Developed a sustainable solution to absorb carbon dioxide and convert it into dry ice for use in other materials, aiming to reduce air pollution and promote eco-friendly innovations.',
        technologies: ['Hardware', 'Bio-Chemistry', 'Prototyping'],
        codeLabel: 'Competition',
        demoLabel: 'Short Recap of the Hackathon',
        demoUrl: 'https://www.instagram.com/reel/DQwt-qmCBVT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      },
      {
        title: 'ABB Startup Challenge',
        date: '2022-2024',
        image: '/assets/images/Projects/abbhack.png',
        description:
          'Participated in the ABB Startup Challenge, developing a concept for more ethical AI as lotAI team. Got the nomination for ABB Incubaition Stage.',
        technologies: ['Business Design', 'Research', 'Strategy'],
        codeLabel: 'Competitions',
        demoLabel: 'My Certificate',
        demoUrl: 'https://www.credential.net/d84aae77-6c1b-414b-b3a0-024cecfbbd92#acc.C90wb4NW',
      },
    ],
  },
  {
    index: 4,
    items: [
      {
        title: 'Future Of Technology - Summer School (Dubai)',
        date: 'June-August 2022',
        image: '/assets/images/Projects/aiandethics.jpg',
        description:
          'Documenting solutions, patterns, and learnings from solving algorithms and data structure problems as part of my continuous CS foundation building.',
        technologies: ['AI and Ethics', 'Blockchain', 'Business'],
        codeLabel: 'Education',
      },
      {
        title: 'Research Presentation: Azerbaijan Architecture',
        date: 'December 2025',
        image: '/assets/images/Projects/azeculture.png',
        description:
          'A research project exploring how the architectural traditions of the Qarabağ region are reflected in modern reconstruction initiatives. The study examines historical styles, cultural identity.',
        technologies: ['Analysing', 'Research', 'Presentation'],
        codeLabel: 'Academics',
        demoLabel: 'Our presentation video',
        demoUrl: 'https://youtu.be/Odyv9zwK49k',
      },
    ],
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalGroups = projectGroups.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalGroups);
  };

  return (
    <section
      id="projects"
      className="
        relative mx-auto flex min-h-screen max-w-6xl flex-col gap-6
        px-4 pb-16 pt-20 text-slate-100 sm:gap-10 sm:pb-24 sm:pt-28
        scroll-mt-20 sm:scroll-mt-28 md:scroll-mt-28
      "
    >
      <div className="relative z-10 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80 font-poppins">
          Projects & Initiatives
        </p>
        <h2 className="font-orbitron text-2xl font-semibold tracking-[0.15em] text-white sm:text-3xl">
          Code, Business Ideas & Research Snapshots
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300/85 font-poppins">
          A rotating look at the work I&apos;m most proud of—from portfolio builds and Hour of Code activities
          to business concepts, learning platforms, and data-driven explorations.
        </p>
      </div>

      {/* Slider header */}
      <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="
              flex h-8 w-8 items-center justify-center rounded-2xl
              bg-gradient-to-br from-cyan-500/80 via-purple-500/80 to-pink-500/80
              text-xs font-semibold text-slate-950 font-orbitron sm:h-10 sm:w-10 sm:text-sm
              shadow-[0_0_30px_rgba(129,140,248,0.8)]
            "
          >
            {activeIndex + 1}
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300/80 sm:text-[11px] font-poppins">
            Collection {activeIndex + 1} of {totalGroups}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="
              flex h-10 w-10 items-center justify-center rounded-full border border-white/20
              bg-white/5 text-slate-100 shadow-md backdrop-blur-xl touch-manipulation
              transition-all duration-200 active:scale-95 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200
              sm:h-9 sm:w-9
            "
            aria-label="Previous projects"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="
              flex h-10 w-10 items-center justify-center rounded-full border border-white/20
              bg-white/5 text-slate-100 shadow-md backdrop-blur-xl touch-manipulation
              transition-all duration-200 active:scale-95 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200
              sm:h-9 sm:w-9
            "
            aria-label="Next projects"
          >
            ›
          </button>
        </div>
      </div>

      {/* Slider body */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-primary/80 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:rounded-3xl sm:p-5">
        <div
          className="grid grid-flow-col auto-cols-[100%] transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projectGroups.map((group) => (
            <div key={group.index} className="w-full px-1 sm:px-2 md:px-4 lg:px-5">
              <div className="grid w-full gap-4 px-1 sm:gap-5 sm:px-2 md:px-0 md:grid-cols-2">
                {group.items.map((project) => (
                  <article
                    key={project.title}
                    className="
                      group relative flex w-full h-full flex-col overflow-hidden rounded-3xl border border-white/10
                      bg-gradient-to-b from-primary/95 via-primary/85 to-slate-900/95
                      shadow-[0_24px_70px_rgba(0,0,0,0.95)] transition-transform duration-300
                      hover:-translate-y-1.5 hover:shadow-[0_32px_90px_rgba(15,23,42,0.9)]
                    "
                  >
                    <div className="relative h-32 w-full overflow-hidden sm:h-40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col gap-2 px-3 pb-4 pt-3 sm:gap-3 sm:px-5 sm:pb-5 sm:pt-4">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-200/75 sm:gap-2 sm:text-xs font-poppins">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 sm:h-6 sm:w-6">
                          <span className="text-[11px] sm:text-[13px]">📅</span>
                        </span>
                        <span className="uppercase tracking-[0.18em]">{project.date}</span>
                      </div>

                      <h3 className="text-base font-semibold text-white sm:text-lg font-poppins">{project.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-200/90 sm:text-sm font-poppins">
                        {project.description}
                      </p>

                      <div className="mt-1 space-y-2">
                        <p className="flex items-center gap-2 text-xs font-medium text-slate-200/85 font-poppins">
                          <span className="text-[14px]">🏷</span>
                          <span className="uppercase tracking-[0.18em]">Focus & Technologies</span>
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="
                                rounded-full bg-white/10 px-2 py-1 text-[11px] text-slate-50/95
                                shadow-sm backdrop-blur-xl transition-all duration-200
                                hover:-translate-y-0.5 hover:bg-white/20
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2 sm:mt-3 sm:gap-3">
                        <button
                          type="button"
                          className="
                            inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5
                            text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-50
                            shadow-md backdrop-blur-xl transition-all duration-200 touch-manipulation
                            active:scale-95 hover:-translate-y-0.5 hover:bg-white/20
                            sm:gap-2 sm:px-4 sm:text-xs
                          "
                        >
                          <span className="text-xs sm:text-sm">💻</span>
                          <span>{project.codeLabel}</span>
                        </button>
                        {project.demoLabel && project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              inline-flex items-center gap-1.5 rounded-full bg-slate-950 text-slate-50 px-3 py-1.5
                              text-[10px] font-semibold uppercase tracking-[0.18em]
                              shadow-[0_0_30px_rgba(244,114,182,0.8)] transition-all duration-200 touch-manipulation
                              active:scale-95 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(244,114,182,1)]
                              sm:gap-2 sm:px-4 sm:text-xs
                            "
                          >
                            <span className="text-xs sm:text-sm">🚀</span>
                            <span>{project.demoLabel}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-6 flex justify-center">
        <a
          href="https://www.linkedin.com/in/seljan-bashirli/"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2 rounded-full border border-cyan-300/70
            bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em]
            text-cyan-200 shadow-[0_0_35px_rgba(56,189,248,0.7)] backdrop-blur-xl
            transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/15
          "
        >
          <span>View More Projects in LinkedIn</span>
          <span className="text-sm">↗</span>
        </a>
      </div>

      {/* subtle background glows */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-purple-500/18 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/18 blur-3xl" />
      </div>
    </section>
  );
};

export default Projects;



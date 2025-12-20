import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}assets/documents/Seljan_Bashirli_CV.pdf`;
    link.download = 'Seljan_Bashirli_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      className="
        relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center
        px-4 py-16 text-slate-100 sm:py-24 scroll-mt-20 sm:scroll-mt-28 md:scroll-mt-28
      "
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-6 text-center sm:gap-8">
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80 font-poppins">
          Resume & CV
        </p>

        {/* Main title */}
        <h2 className="font-orbitron text-2xl font-semibold tracking-[0.15em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Download My Resume
        </h2>

        {/* Description */}
        <p className="max-w-2xl px-2 text-xs leading-relaxed text-slate-300/85 sm:px-0 sm:text-sm font-poppins">
          Get a detailed overview of my experience, skills, education, and achievements. My resume
          includes my work in{' '}
          <span className="font-semibold text-cyan-300">front-end development</span>,{' '}
          <span className="font-semibold text-purple-300">IT business analysis</span>, and my
          journey toward becoming a{' '}
          <span className="font-semibold text-emerald-300">data analyst</span>.
        </p>

        {/* Download card */}
        <div
          className="
            group relative mt-4 w-full max-w-md overflow-hidden rounded-2xl border border-white/10
            bg-gradient-to-br from-primary/95 via-primary/85 to-slate-900/95
            p-6 shadow-[0_24px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl
            transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/50
            hover:shadow-[0_30px_80px_rgba(56,189,248,0.4)]
            sm:rounded-3xl sm:p-8
          "
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
            {/* Icon */}
            <div
              className="
                flex h-16 w-16 items-center justify-center rounded-2xl
                border border-white/15 bg-white/5
                shadow-[0_0_30px_rgba(56,189,248,0.3)]
                transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300/50
                group-hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]
                sm:h-20 sm:w-20
              "
            >
              <svg
                className="h-8 w-8 text-cyan-300 sm:h-10 sm:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            {/* File info */}
            <div className="text-center">
              <p className="text-xs font-medium text-slate-200 sm:text-sm font-poppins">Resume PDF</p>
              <p className="mt-1 text-[10px] text-slate-400/80 sm:text-xs font-poppins">
                Updated: December 2025
              </p>
            </div>

            {/* Download button */}
            <button
              onClick={handleDownload}
              className="
                group/btn relative overflow-hidden rounded-full
                bg-gradient-to-r from-cyan-500/80 via-purple-500/80 to-pink-500/80
                px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em]
                text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)]
                transition-all duration-300 active:scale-95 hover:scale-105 touch-manipulation
                hover:shadow-[0_0_40px_rgba(56,189,248,0.9)]
                sm:px-8 sm:py-3 sm:text-sm
                font-poppins
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
            </button>
          </div>
        </div>

        {/* Alternative: Direct link note */}
        <p className="mt-4 text-xs text-slate-400/70 font-poppins">
          Having trouble downloading?{' '}
          <a
            href={`${import.meta.env.BASE_URL}assets/documents/Seljan_Bashirli_CV.pdf`}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300/80 underline transition-colors hover:text-cyan-300"
          >
            Open in new tab
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;


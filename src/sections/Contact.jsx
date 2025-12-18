import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:sselcanbesirli@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="
        relative mx-auto flex min-h-screen max-w-6xl flex-col gap-6
        px-4 pb-16 pt-20 text-slate-100 sm:gap-10 sm:pb-24 sm:pt-28
        scroll-mt-20 sm:scroll-mt-28 md:scroll-mt-28
      "
    >
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-500/12 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80 font-poppins">
          Contact
        </p>
        <h2 className="font-orbitron text-2xl font-semibold tracking-[0.15em] text-white sm:text-3xl">
          Let’s Collaborate
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300/85 font-poppins">
          Reach out for project ideas, business concepts, research discussions, or just to say hi. I&apos;m open
          to collaborations across tech, analytics, and product strategy.
        </p>
      </div>

      <div className="relative z-10 grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        {/* Form card */}
        <div
          className="
            rounded-2xl border border-white/10 bg-primary/85 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.85)]
            backdrop-blur-2xl sm:rounded-3xl sm:p-6
          "
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-300/80 font-poppins">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="
                  mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2
                  text-sm text-slate-100 shadow-inner shadow-black/30 outline-none transition
                  focus:border-cyan-300 focus:bg-white/10
                "
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-300/80 font-poppins">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="
                  mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2
                  text-sm text-slate-100 shadow-inner shadow-black/30 outline-none transition
                  focus:border-cyan-300 focus:bg-white/10
                "
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-300/80 font-poppins">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="
                  mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2
                  text-sm text-slate-100 shadow-inner shadow-black/30 outline-none transition
                  focus:border-cyan-300 focus:bg-white/10
                "
                placeholder="How can I help?"
                required
              />
            </div>

            <button
              type="submit"
              className="
                inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r
                from-cyan-500/80 via-purple-500/80 to-pink-500/80 px-5 py-2.5 text-xs
                font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)]
                transition-all duration-300 active:scale-95 hover:scale-105 touch-manipulation
                hover:shadow-[0_0_40px_rgba(56,189,248,0.9)]
                sm:px-6 sm:text-sm
                font-poppins
              "
            >
              <span className="text-sm">✉</span>
              Send Email
            </button>

            <p className="text-[11px] text-slate-400/80 font-poppins">
              Submits via your default email client with prefilled details.
            </p>
          </form>
        </div>

        {/* Contact info card */}
        <div
          className="
            flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4
            shadow-[0_22px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl
            sm:gap-4 sm:rounded-3xl sm:p-6
          "
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 font-poppins">
              Contact Information
            </p>
            <p className="mt-2 text-sm text-slate-200/90 font-poppins">
              sselcanbesirli@gmail.com
            </p>
            <p className="text-sm text-slate-200/80 font-poppins">
              Baku, Azerbaijan · <span className="text-emerald-300">Open to Remote / Hybrid work</span>
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
              <span className="text-lg">💼</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300/80 font-poppins">
                  Links
                </p>
                <a
                  href="https://linktr.ee/seljanbashirli"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cyan-300 hover:text-cyan-200 font-poppins"
                >
                  linktr.ee/seljanbashirli
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
              <span className="text-lg">🌐</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300/80 font-poppins">
                  Portfolio
                </p>
                <a
                  href="#home"
                  className="text-sm text-cyan-300 hover:text-cyan-200 font-poppins"
                >
                  Back to top
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
              <span className="text-lg">⌛</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300/80 font-poppins">
                  Response Time
                </p>
                <p className="text-sm text-slate-200/85 font-poppins">Typically within 24–48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



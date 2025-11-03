import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 text-sm font-medium">
              <span>Available for new opportunities</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I’m <span className="text-indigo-600">Your Name</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              I build clean, modern web experiences focused on performance and delightful user
              interactions. Welcome to my corner of the internet.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700"
              >
                View my work <ArrowRight size={18} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm transition hover:border-gray-400"
              >
                <Mail size={18} /> Contact me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-500 transition hover:text-gray-900"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 transition hover:text-gray-900"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="relative mt-10 w-full max-w-sm md:mt-0">
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-indigo-200 via-white to-indigo-100 p-2 shadow-inner">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white shadow">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-indigo-600 text-5xl font-bold text-white">
                  YN
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">Designer • Developer • Problem Solver</p>
          </div>
        </div>
      </div>
    </section>
  );
}

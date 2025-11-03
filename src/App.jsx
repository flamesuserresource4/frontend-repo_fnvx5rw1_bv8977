import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">TK</a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a
            href="mailto:Thoriqilhamk"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            Say hello
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Thoriq Ilham Kurniawan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

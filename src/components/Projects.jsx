import { ExternalLink, Star } from "lucide-react";

const items = [
  {
    title: "Project Aurora",
    description:
      "A sleek dashboard for real-time analytics featuring custom charts, theming, and offline support.",
    tags: ["React", "Tailwind", "Vite"],
    link: "https://example.com",
    highlight: true,
  },
  {
    title: "Journey Notes",
    description:
      "A minimalist journaling app with encrypted local storage and delightful micro-interactions.",
    tags: ["TypeScript", "PWA"],
    link: "https://example.com",
  },
  {
    title: "Palette Studio",
    description:
      "Color palette generator that helps designers create accessible, harmonious themes in seconds.",
    tags: ["FastAPI", "Design"],
    link: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected work</h2>
            <p className="mt-2 text-gray-600">A few highlights from recent builds and experiments.</p>
          </div>
          <a
            href="mailto:Thoriqilhamk?subject=Project%20inquiry"
            className="hidden whitespace-nowrap rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:border-gray-400 md:block"
          >
            Available for freelance
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                {p.highlight && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                    <Star size={14} /> Featured
                  </span>
                )}
              </div>
              <p className="mt-3 text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-indigo-600 transition group-hover:gap-3"
              >
                Visit <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

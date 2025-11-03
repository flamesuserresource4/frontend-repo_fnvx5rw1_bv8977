export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-5 md:gap-14">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About me</h2>
          <p className="mt-4 text-gray-600">
            I’m a multidisciplinary developer with a passion for crafting elegant interfaces and robust
            systems. I enjoy working across the stack, turning complex problems into intuitive,
            human-centered products.
          </p>
          <p className="mt-4 text-gray-600">
            When I’m not coding, you’ll find me learning new tools, sketching ideas, or exploring the
            outdoors with a camera in hand.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Core skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "FastAPI",
                "MongoDB",
                "Tailwind CSS",
                "Design Systems",
                "Accessibility",
                "Performance",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-gray-900">Values</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
              <li>Empathy-driven design and development</li>
              <li>Clear communication and thoughtful collaboration</li>
              <li>Maintainability, performance, and craft</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

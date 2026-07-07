const projects = [
  {
    title: "Cloud Security Labs",
    description:
      "Hands-on labs focused on shared responsibility, access control, logging, monitoring, network controls, and risk documentation.",
  },
  {
    title: "API Security Lab",
    description:
      "Safe API security notes and checklists covering authentication, authorization, information disclosure, rate limiting, and responsible testing.",
  },
  {
    title: "Linux Docker Support Lab",
    description:
      "Linux and Docker troubleshooting labs focused on system health, logs, ports, services, and support-style documentation.",
  },
  {
    title: "ClarityFlow AI",
    description:
      "An AI-powered career decision support tool built with Python and Streamlit, including responsible AI controls and human review reminders.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            BarbOS Portfolio AI
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Cybersecurity, cloud security, API security, and systems thinking.
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Hi, I&apos;m Barbara. I&apos;m building a cybersecurity portfolio
            focused on secure infrastructure, cloud systems, API security,
            Linux troubleshooting, responsible AI, and technical documentation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Projects
            </a>

            <a
              href="#assistant"
              className="rounded-full border border-cyan-300/50 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Ask BarbOS
            </a>
          </div>
        </div>

        <section id="projects" className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <h2 className="mb-3 text-2xl font-bold text-cyan-200">
                {project.title}
              </h2>
              <p className="leading-7 text-slate-300">{project.description}</p>
            </article>
          ))}
        </section>

        <section
          id="assistant"
          className="rounded-3xl border border-purple-400/20 bg-purple-950/30 p-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Coming Soon
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Ask BarbOS about my portfolio
          </h2>

          <p className="max-w-3xl leading-8 text-slate-300">
            BarbOS will answer questions about my cybersecurity labs, cloud
            security notes, API security learning, Linux/Docker troubleshooting,
            responsible AI work, and target roles using an approved knowledge
            base.
          </p>
        </section>
      </section>
    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Barbara Espericueta's cybersecurity, networking, AI, and systems projects, including BarbOS, ClarityFlow AI, and PermitPilot.",
};

const projects = [
  { name: "BarbOS Portfolio AI", type: "Portfolio and AI", detail: "A portfolio assistant that answers questions using an approved professional knowledge base. The site connects my work, education, and career direction in one place." },
  { name: "ClarityFlow AI", type: "Hackathon prototype", detail: "A Python and Streamlit decision support prototype for comparing career and education paths, with attention to risk, limitations, and human review." },
  { name: "PermitPilot", type: "Prototype in progress", detail: "A route and permit planning prototype exploring how drivers can track route instructions and state-specific travel restrictions. Rules require authoritative verification before operational use." },
  { name: "Cloud Security Labs", type: "Security practice", detail: "Hands-on work with access control, logging, network controls, data protection, and risk documentation." },
  { name: "API Security Lab", type: "Security research", detail: "Responsible testing notes covering authentication, authorization, validation, rate limiting, and information disclosure." },
  { name: "Linux and Docker Support Lab", type: "Systems troubleshooting", detail: "System health, services, networking, logs, and practical support documentation." },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-14 flex flex-wrap gap-6 text-cyan-200"><a href="/">BarbOS</a><a href="/about">About Barbara</a><a href="/#assistant">Ask BarbOS</a></nav>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">Portfolio</p>
        <h1 className="mb-5 text-4xl font-bold md:text-6xl">Projects by Barbara Espericueta</h1>
        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-300">Security practice, systems work, and prototypes that turn questions into testable tools.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-cyan-300/20 bg-slate-900 p-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">{project.type}</p>
              <h2 className="mb-4 text-2xl font-bold">{project.name}</h2>
              <p className="leading-7 text-slate-300">{project.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-slate-300">See coursework artifacts on the <a className="text-cyan-200 underline" href="/#school">home page</a> and code on <a className="text-cyan-200 underline" href="https://github.com/BarbaraAnnXD">GitHub</a>.</p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description:
    "Meet Barbara Espericueta, a cybersecurity and networking student building practical experience in API security, cloud systems, Linux, and technical documentation.",
};

export default function About() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Barbara Espericueta",
    url: "https://barbos-portfolio-ai.vercel.app/about",
    description: "Cybersecurity and networking student focused on secure systems, cloud and API security.",
    sameAs: [
      "https://github.com/BarbaraAnnXD",
      "https://www.linkedin.com/in/barbara-e-4b8b531aa",
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-14 flex flex-wrap gap-6 text-cyan-200">
          <a href="/">BarbOS</a><a href="/projects">Projects</a><a href="/#assistant">Ask BarbOS</a>
        </nav>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">About Barbara</p>
        <h1 className="mb-8 text-4xl font-bold md:text-6xl">Barbara Espericueta</h1>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <img src="/barbara-profile.png" alt="Portrait of Barbara Espericueta" className="w-full max-w-xs rounded-3xl border border-cyan-300/20 object-cover" />
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>I study cybersecurity and networking and build projects that connect security controls to the systems people actually use. My interests include API security, cloud security, Linux, technical documentation, and responsible AI.</p>
            <p>I earned an Associate of Applied Science in Cybersecurity and Networking with honors and am pursuing a bachelor&apos;s degree in the same field. I have maintained a 4.00 GPA while working through security, infrastructure, and networking coursework.</p>
            <p>My approach starts with the whole system: how data moves through applications, identities, networks, and cloud services, where a control can fail, and how to restore reliable flow.</p>
            <p>Explore my <a className="text-cyan-200 underline" href="/projects">projects</a>, or find me on <a className="text-cyan-200 underline" href="https://github.com/BarbaraAnnXD">GitHub</a> and <a className="text-cyan-200 underline" href="https://www.linkedin.com/in/barbara-e-4b8b531aa">LinkedIn</a>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

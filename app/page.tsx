import BarbOSChat from "./components/BarbOSChat";

const projects = [
  {
    title: "Cloud Security Labs",
    description:
      "Hands-on labs focused on shared responsibility, access control, logging, monitoring, network controls, data protection, vulnerability management, and risk documentation.",
  },
  {
    title: "API Security Lab",
    description:
      "Safe API security notes and checklists covering authentication, authorization, information disclosure, rate limiting, validation, logging, and responsible testing.",
  },
  {
    title: "Linux Docker Support Lab",
    description:
      "Linux and Docker troubleshooting labs focused on system health, logs, ports, services, networking, and support-style documentation.",
  },
  {
    title: "ClarityFlow AI",
    description:
      "An AI-powered career decision support tool built with Python and Streamlit, including responsible AI controls, risk-aware recommendations, and human review reminders.",
  },
];

const education = [
  "Bachelor of Science in Cybersecurity and Networking — In Progress",
  "Associate of Applied Science in Cybersecurity and Networking — With Honors",
  "Undergraduate Certificate in Cyber Security — With Honors",
  "Undergraduate Certificate in Information Technology Essentials — With Honors",
  "4.00 GPA with repeated Dean's List recognition",
];

const trainingHighlights = [
  "SSCP 2021 Training Series",
  "Risk Management",
  "Identity and Access Control",
  "Security and Vulnerability Assessment",
  "Incident Response and Forensics",
  "Cryptography and PKI",
  "Secure Virtual and Cloud Environments",
  "Networking Fundamentals",
  "Ports, Protocols, and OSI Model",
  "AI Ethics",
  "Business Ethics",
  "Critical Thinking",
];

const schoolProjects = [
  {
    course: "CEIS101",
    title: "IoT Home Automation and Security System",
    theme: "Connected hardware, software, and networking into a simulated IoT security system.",
  },
  {
    course: "CEIS106",
    title: "Linux Operating System Administration",
    theme: "Practiced Linux file systems, shell scripts, users/groups, network configuration, and system monitoring.",
  },
  {
    course: "CEIS110",
    title: "Weather Data Analysis with Python and NOAA API",
    theme: "Used Python and a cloud-based API to collect and analyze real-world weather data.",
  },
  {
    course: "CEIS114",
    title: "Multi-Intersection Traffic Light System",
    theme: "Used Wokwi Lab to explore microcontroller logic, timing, and digital device control.",
  },
  {
    course: "NETW191",
    title: "SOHO Network Design and Configuration",
    theme: "Designed a small network with router configuration, subnetting, wireless security, and documentation.",
  },
  {
    course: "SEC285",
    title: "Security Attacks and Defense Mechanisms",
    theme: "Studied people, data, network, and device security through confidentiality, integrity, and availability.",
  },
  {
    course: "SEC290",
    title: "Secure InfoSec Learning Environment",
    theme: "Built a VM-based security lab with snapshots, network testing, segmentation, and firewall concepts.",
  },
  {
    course: "TECH204",
    title: "Applied Physics with IoT Integration",
    theme: "Used sensors and real-time data to connect physical systems, data analysis, and technical problem solving.",
  },
  {
    course: "NETW310",
    title: "Electronic Communication Systems",
    theme: "Explored wireline/wireless transmission, modulation, encoding, signals, and communication reliability.",
  },
];

const careerFit = [
  {
    title: "Security Systems Thinking",
    description:
      "I look at the full environment: assets, users, networks, cloud systems, APIs, identity, data flow, symptoms, and controls.",
  },
  {
    title: "Hands-On Troubleshooting",
    description:
      "Fixing cars, working on houses, and building technical projects taught me how to diagnose symptoms, trace root causes, test repairs, and restore stability.",
  },
  {
    title: "Cloud and API Security Direction",
    description:
      "My strongest technical direction combines cloud security, API security, Linux troubleshooting, documentation, and secure infrastructure support.",
  },
];

const targetRoles = [
  "Junior Security Systems Engineer",
  "Cybersecurity Support Engineer",
  "Technical Support Engineer - Cybersecurity",
  "Cloud Security Analyst",
  "Junior Security Engineer",
  "Implementation Engineer - Security Tools",
  "Vulnerability Management Analyst",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="max-w-3xl leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute left-[-10rem] top-[-10rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[-8rem] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 md:py-16">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <p className="font-bold text-cyan-200">BarbOS</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-cyan-200">
              Projects
            </a>
            <a href="#education" className="hover:text-cyan-200">
              Education
            </a>
            <a href="#school" className="hover:text-cyan-200">
              School Work
            </a>
            <a href="#assistant" className="hover:text-cyan-200">
              Ask BarbOS
            </a>
            <a href="#contact" className="hover:text-cyan-200">
              Contact
            </a>
          </div>
        </nav>

        <section className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Barbara Espericueta's Portfolio
              </p>

              <h1 className="mb-6 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
                Cybersecurity, Cloud Security, API Security, and Systems
                Thinking.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                Hi, I&apos;m Barbara. This is my cybersecurity
                portfolio focused on secure infrastructure, cloud systems, API
                security, Linux troubleshooting, responsible AI, technical
                documentation, and practical problem solving.
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

            <div className="flex justify-center md:justify-end">
              <img
                src="/barbara-profile.png"
                alt="Barbara profile photo"
                className="h-56 w-56 rounded-full border-4 border-cyan-300/30 object-cover shadow-2xl shadow-cyan-500/20"
              />
            </div>
          </div>
        </section>

        <section id="projects">
          <SectionHeading
            eyebrow="Project Portfolio"
            title="Hands-on labs and builds"
            description="These projects show my learning through real artifacts: cloud security labs, API security checklists, Linux/Docker troubleshooting, and responsible AI design."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <h3 className="mb-3 text-2xl font-bold text-cyan-200">
                  {project.title}
                </h3>
                <p className="leading-7 text-slate-300">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <SectionHeading
            eyebrow="Academic Foundation"
            title="Cybersecurity and networking education"
            description="My academic background supports a security systems path through cybersecurity, networking, cloud computing, infrastructure security, penetration testing, incident response, technical writing, and AI for cybersecurity."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-300/10 bg-slate-950/70 p-5 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Training Highlights"
            title="Security, ethics, networking, and critical thinking"
            description="My professional development training adds breadth across security fundamentals, risk, identity, cloud, incident response, networking, AI ethics, business ethics, and communication."
          />

          <div className="flex flex-wrap gap-3">
            {trainingHighlights.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-purple-300/20 bg-purple-950/30 px-4 py-2 text-sm text-purple-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="school">
          <SectionHeading
            eyebrow="School Projects"
            title="Systems knowledge across hardware, software, networks, cloud, and security"
            description="These projects show the foundation underneath my cybersecurity direction: IoT, Linux, Python APIs, digital devices, networking, infrastructure security, and communication systems."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {schoolProjects.map((project) => (
              <article
                key={`${project.course}-${project.title}`}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <p className="mb-3 text-sm font-semibold text-cyan-300">
                  {project.course}
                </p>
                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                <p className="leading-7 text-slate-300">{project.theme}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {careerFit.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-emerald-300/20 bg-emerald-950/20 p-6"
            >
              <h3 className="mb-4 text-2xl font-bold text-emerald-200">
                {item.title}
              </h3>
              <p className="leading-8 text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-cyan-300/20 bg-slate-900 p-8">
          <SectionHeading
            eyebrow="Career Direction"
            title="Roles I am targeting"
            description="My best-fit roles combine troubleshooting, documentation, security controls, cloud systems, networking, APIs, Linux, risk awareness, and technical problem solving."
          />

          <div className="grid gap-3 md:grid-cols-2">
            {targetRoles.map((role) => (
              <div
                key={role}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
              >
                {role}
              </div>
            ))}
          </div>
        </section>

                <section
          id="assistant"
          className="rounded-3xl border border-purple-400/20 bg-purple-950/30 p-8"
        >

          <h2 className="mb-4 text-3xl font-bold">
            Portfolio AI Assistant
          </h2>

          <div className="mt-6">
            <BarbOSChat />
          </div>
        </section>
      </section>
    </main>
  );
}
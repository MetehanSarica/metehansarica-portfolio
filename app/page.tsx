import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TerminalWindow } from "@/components/TerminalWindow";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { Scene3D } from "@/components/Scene3D";
import { CodeWindow } from "@/components/CodeWindow";
import { Terminal, Cpu, Database, Layout, Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-sky-500/30">
      {/* Background 3D Scene */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg shadow-sky-500/20">
              <span className="font-mono text-lg font-bold text-white">&lt;/&gt;</span>
            </div>
            <span className="font-mono text-sm font-semibold tracking-wider text-slate-200">
              METEHANSARICA.DEV
            </span>
          </div>
          <nav className="hidden gap-8 text-xs font-medium uppercase tracking-widest text-slate-400 md:flex">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-sky-400"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-24">
        {/* Hero */}
        <section
          id="home"
          className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 md:grid-cols-2 md:py-20"
        >
          <RevealOnScroll>
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Junior .NET Developer
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Metehan Sarıca
                </span>
              </h1>

              <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-400">
                I build clean and efficient <span className="text-slate-200 font-semibold">desktop applications</span> using
                <span className="text-sky-400"> C#</span>, <span className="text-sky-400">.NET</span>, <span className="text-sky-400">DevExpress</span> and <span className="text-sky-400">SQL Server</span>.
                I enjoy creating tools that automate study and work, especially by integrating <span className="text-emerald-400">AI-powered workflows</span> into real projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200"
                >
                  <Layout size={18} />
                  View Projects
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-400 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-10" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-slate-500 hover:bg-slate-800"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative z-10 perspective-1000">
              <div className="relative transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                <div className="absolute -inset-1 blur-xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 rounded-xl" />
                <CodeWindow />
              </div>
            </div>
          </RevealOnScroll>
        </section>


        {/* About */}
        <section id="about" className="py-20">
          <RevealOnScroll>
            <TerminalWindow title="about-me.md">
              <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-white">
                    <span className="text-emerald-400">01.</span> About
                  </h2>
                  <div className="space-y-4 text-slate-400">
                    <p>
                      I am a Computer Programming student and Junior .NET Developer focused on
                      <span className="text-sky-400 font-semibold"> line-of-business desktop applications</span>,
                      <span className="text-sky-400 font-semibold"> SQL Server</span> and <span className="text-sky-400 font-semibold">DevExpress UI</span>.
                    </p>
                    <p>
                      I like turning ideas into reliable software, with clean architecture, readable code and practical features that people actually use.
                    </p>

                    <div className="mt-6">
                      <h3 className="text-white font-semibold mb-2">Who I am</h3>
                      <p>
                        I like combining clean UI with solid application logic behind it. One of my main projects, <span className="text-emerald-400">Notoid</span>,
                        is an AI-powered study assistant that summarizes documents into structured notes using Gemini AI.
                      </p>
                      <p className="mt-2">
                        I'm also currently working on <span className="text-emerald-400">Storiva</span>, a smart inventory & product management system built with
                        .NET 8, DevExpress and SQL Server. I enjoy experimenting with desktop app architecture, automation workflows and integrating AI into existing tools to make them more useful.
                      </p>
                    </div>

                    <div className="mt-6 rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                      <h3 className="text-white font-semibold mb-2">What I'm looking for</h3>
                      <p className="mb-2">I'm actively seeking opportunities where I can:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Work with C#, .NET, DevExpress and SQL Server in real-world projects</li>
                        <li>Contribute to desktop or backend applications used by real users</li>
                        <li>Learn from experienced developers and grow as an engineer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 h-fit">
                  <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
                    <Terminal size={16} className="text-emerald-400" />
                    current_focus
                  </h3>
                  <ul className="space-y-3 font-mono text-xs text-slate-400">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Desktop apps with .NET & DevExpress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>SQL Server & database-driven applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>AI integration (Gemini API, automation)</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-xs text-slate-500 italic">"Always learning. Always building useful tools."</p>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </RevealOnScroll>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white">
                <span className="text-emerald-400">02.</span> Tech Stack
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <TerminalWindow title="Languages & Frameworks" className="md:col-span-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-sky-400" size={24} />
                    <h3 className="font-semibold text-white">Stack</h3>
                  </div>
                  <ul className="space-y-2 font-mono text-xs text-slate-400">
                    <li>C#, .NET Framework & .NET 8</li>
                    <li>Windows Forms & DevExpress UI</li>
                    <li>SQL / T-SQL (Queries, CRUD)</li>
                    <li>HTML, CSS, Basic JavaScript</li>
                  </ul>
                </div>
              </TerminalWindow>

              <TerminalWindow title="Tools & Technologies" className="md:col-span-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Database className="text-amber-400" size={24} />
                    <h3 className="font-semibold text-white">Tools</h3>
                  </div>
                  <ul className="space-y-2 font-mono text-xs text-slate-400">
                    <li>Visual Studio, VS Code</li>
                    <li>Git & GitHub</li>
                    <li>DevExpress (DataGrid, Ribbon)</li>
                    <li>SQL Server (Relations, Queries)</li>
                    <li>QuestPDF, OpenXML, PdfPig</li>
                    <li>AI APIs (Gemini)</li>
                  </ul>
                </div>
              </TerminalWindow>

              <TerminalWindow title="Other Interests" className="md:col-span-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Layout className="text-pink-400" size={24} />
                    <h3 className="font-semibold text-white">Interests</h3>
                  </div>
                  <ul className="space-y-2 font-mono text-xs text-slate-400">
                    <li>Arduino & Simple IoT Projects</li>
                    <li>Automation Workflows</li>
                    <li>Desktop App Architecture</li>
                    <li>Performance & Logging</li>
                  </ul>
                </div>
              </TerminalWindow>
            </div>
          </RevealOnScroll>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white">
                <span className="text-emerald-400">03.</span> Featured Projects
              </h2>
            </div>

            <div className="space-y-12">
              {/* Project 1 */}
              <TerminalWindow title="Storiva - Smart Inventory">
                <div className="relative p-2">
                  <div className="flex flex-col justify-center">
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-white">Storiva – Smart Inventory & Product Management</h3>
                      <p className="font-mono text-xs text-sky-400 mt-1">C# • .NET 8 • DEVEXPRESS • SQL SERVER • AI INTEGRATION</p>
                    </div>

                    <div className="mb-6 rounded-md bg-slate-900/50 p-6 text-base leading-relaxed text-slate-400 border border-slate-700/50">
                      <p>
                        Storiva is a smart inventory and product management system built with .NET 8, DevExpress and SQL Server. It focuses on stock tracking, product management, role-based access and future AI-assisted features to help small businesses manage their operations more efficiently.
                      </p>
                      <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>Designed with a modern DevExpress-based desktop UI</li>
                        <li>Uses SQL Server for structured, reliable data storage and queries</li>
                        <li>Architected to integrate AI features (Gemini API) for product descriptions and insights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TerminalWindow>

              {/* Project 2 */}
              <TerminalWindow title="Notoid - AI Study Assistant">
                <div className="relative p-2">
                  <div className="flex flex-col justify-center">
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-white">Notoid – AI-Powered Study Assistant</h3>
                      <p className="font-mono text-xs text-sky-400 mt-1">C# • .NET • DEVEXPRESS • GEMINI AI • QUESTPDF</p>
                    </div>

                    <div className="mb-6 rounded-md bg-slate-900/50 p-6 text-base leading-relaxed text-slate-400 border border-slate-700/50">
                      <p>
                        A Windows desktop application that parses PDF, DOCX and PPTX files and generates concise, structured study notes using Gemini AI. It handles file parsing, progress tracking and PDF generation in a single workflow.
                      </p>
                      <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>Built with C# and .NET, using DevExpress for the UI</li>
                        <li>Uses PdfPig and OpenXML to parse documents</li>
                        <li>Generates clean study PDFs via QuestPDF</li>
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a href="https://github.com/MetehanSarica/Notoid" className="font-mono text-sm font-semibold text-white hover:text-sky-400 hover:underline">
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </TerminalWindow>

              {/* Project 3 */}
              <TerminalWindow title="metehansarica.dev - Portfolio">
                <div className="relative p-2">
                  <div className="flex flex-col justify-center">
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-white">metehansarica.dev – Personal Portfolio</h3>
                      <p className="font-mono text-xs text-sky-400 mt-1">NEXT.JS • TAILWIND CSS • NETLIFY • CUSTOM DOMAIN</p>
                    </div>

                    <div className="mb-6 rounded-md bg-slate-900/50 p-6 text-base leading-relaxed text-slate-400 border border-slate-700/50">
                      <p>
                        A modern, responsive portfolio website to showcase my projects, skills and experience as a Junior .NET Developer. Deployed on Netlify with a custom domain and Google Analytics integration to track visitors and engagement.
                      </p>
                      <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>Built with Next.js and Tailwind CSS</li>
                        <li>Deployed via Netlify with CI/CD workflow</li>
                        <li>Connected to metehansarica.dev custom domain</li>
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a href="#" className="font-mono text-sm font-semibold text-white hover:text-sky-400 hover:underline">
                        Visit site
                      </a>
                    </div>
                  </div>
                </div>
              </TerminalWindow>
            </div>
          </RevealOnScroll>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <RevealOnScroll>
            <h2 className="mb-4 text-4xl font-bold text-white">
              <span className="text-emerald-400">04.</span> Get In Touch
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-slate-400">
              I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:metehansrc23@gmail.com"
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="rounded-full bg-slate-800 p-2 text-slate-300 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <Mail size={20} />
                </div>
                <span className="font-mono text-sm font-semibold text-slate-300 group-hover:text-emerald-400">
                  Send Email
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/metehan-sar%C4%B1ca-09b27a269/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="rounded-full bg-slate-800 p-2 text-slate-300 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Linkedin size={20} />
                </div>
                <span className="font-mono text-sm font-semibold text-slate-300 group-hover:text-blue-400">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://github.com/MetehanSarica"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 transition-all hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <div className="rounded-full bg-slate-800 p-2 text-slate-300 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                  <Github size={20} />
                </div>
                <span className="font-mono text-sm font-semibold text-slate-300 group-hover:text-violet-400">
                  GitHub
                </span>
              </a>
            </div>
          </RevealOnScroll>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-[#0a0a0a] py-8 text-center text-slate-500">
        <p>© {new Date().getFullYear()} Metehan Sarıca. Built with Next.js & Tailwind CSS.</p>
      </footer>

      <InteractiveTerminal />
    </div>
  );
}

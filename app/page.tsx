export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              metehansarica.dev
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="hover:text-sky-400">
              Home
            </a>
            <a href="#about" className="hover:text-sky-400">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section
          id="home"
          className="grid gap-10 py-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:py-20"
        >
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Junior .NET Developer
            </p>
            <h1 className="mb-3 text-3xl font-semibold leading-tight tracking-tight text-slate-50 md:text-4xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Metehan Sarıca
              </span>
            </h1>
            <p className="mb-5 max-w-xl text-sm leading-relaxed text-slate-300">
              I build clean and efficient{" "}
              <span className="font-semibold text-slate-100">
                desktop applications
              </span>{" "}
              using{" "}
              <span className="font-semibold text-slate-100">
                C#, .NET, DevExpress and SQL Server
              </span>
              . I enjoy creating tools that automate study and work, especially
              by integrating{" "}
              <span className="font-semibold text-slate-100">
                AI-powered workflows
              </span>{" "}
              into real projects.
            </p>
            <div className="mb-4 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:translate-y-[1px] hover:shadow-sky-500/50"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                Contact Me
              </a>
            </div>
            <div className="space-y-1 text-xs text-slate-400">
              <p>
                🎯 Looking for{" "}
                <span className="font-medium text-slate-200">
                  Junior .NET Developer / Software Developer Intern
                </span>{" "}
                roles
              </p>
            </div>
          </div>

          <aside className="md:flex md:justify-end">
            <div className="w-full max-w-xs rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 shadow-xl shadow-slate-900/90">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Current focus
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li>• Desktop apps with .NET &amp; DevExpress</li>
                <li>• SQL Server &amp; database-driven applications</li>
                <li>• AI integration (Gemini API, automation)</li>
              </ul>
              <p className="mt-3 border-t border-dashed border-slate-700 pt-2 text-[11px] text-slate-400">
                Always learning. Always building useful tools.
              </p>
            </div>
          </aside>
        </section>

        {/* About */}
        <section id="about" className="py-14">
          <h2 className="text-xl font-semibold text-slate-50">About</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            I am a Computer Programming student and Junior .NET Developer
            focused on{" "}
            <span className="font-semibold text-slate-100">
              line-of-business desktop applications, SQL Server and DevExpress
              UI
            </span>
            . I like turning ideas into reliable software, with clean
            architecture, readable code and practical features that people
            actually use.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
              <h3 className="mb-1 text-sm font-semibold text-slate-100">
                Who I am
              </h3>
              <p className="mb-3">
                I like combining clean UI with solid application logic behind
                it. One of my main projects,{" "}
                <span className="font-semibold text-sky-400">Notoid</span>, is
                an AI-powered study assistant that summarizes documents into
                structured notes using Gemini AI.
              </p>
              <p>
                I&apos;m also currently working on{" "}
                <span className="font-semibold text-sky-400">Storiva</span>, a
                smart inventory &amp; product management system built with .NET
                8, DevExpress and SQL Server. I enjoy experimenting with{" "}
                <span className="font-semibold">desktop app architecture</span>,
                automation workflows and integrating AI into existing tools to
                make them more useful.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
              <h3 className="mb-1 text-sm font-semibold text-slate-100">
                What I&apos;m looking for
              </h3>
              <p className="mb-2">
                I&apos;m actively seeking opportunities where I can:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-300">
                <li>
                  Work with C#, .NET, DevExpress and SQL Server in real-world
                  projects
                </li>
                <li>
                  Contribute to desktop or backend applications used by real
                  users
                </li>
                <li>
                  Learn from experienced developers and grow as an engineer
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-14">
          <h2 className="text-xl font-semibold text-slate-50">Skills</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            A quick overview of the technologies and tools I work with.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-100">
                Languages &amp; Frameworks
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>C#, .NET Framework &amp; .NET 8</li>
                <li>Windows Forms &amp; DevExpress UI</li>
                <li>SQL / T-SQL (queries, CRUD operations)</li>
                <li>HTML, CSS, basic JavaScript</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-100">
                Tools &amp; Technologies
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Visual Studio, VS Code</li>
                <li>Git &amp; GitHub</li>
                <li>DevExpress components (DataGrid, Ribbon, etc.)</li>
                <li>SQL Server for Storiva (indexes, relations, queries)</li>
                <li>QuestPDF, OpenXML, PdfPig (Notoid)</li>
                <li>AI APIs (Gemini)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-100">
                Other Interests
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Arduino &amp; simple IoT projects</li>
                <li>Automation workflows</li>
                <li>Desktop app architecture &amp; design patterns</li>
                <li>Performance, logging and error handling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-14">
          <h2 className="text-xl font-semibold text-slate-50">Projects</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            A selection of projects that represent how I like to build software.
          </p>

          <div className="mt-6 space-y-4">
            {/* Storiva */}
            <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm">
              <h3 className="text-sm font-semibold text-slate-100">
                Storiva – Smart Inventory &amp; Product Management
              </h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-400">
                C# • .NET 8 • DevExpress • SQL Server • AI Integration
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Storiva is a smart inventory and product management system built
                with .NET 8, DevExpress and SQL Server. It focuses on stock
                tracking, product management, role-based access and future
                AI-assisted features to help small businesses manage their
                operations more efficiently.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Designed with a modern DevExpress-based desktop UI</li>
                <li>
                  Uses SQL Server for structured, reliable data storage and
                  queries
                </li>
                <li>
                  Architected to integrate AI features (Gemini API) for product
                  descriptions and insights
                </li>
              </ul>
            </article>

            {/* Notoid */}
            <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm">
              <h3 className="text-sm font-semibold text-slate-100">
                Notoid – AI-Powered Study Assistant
              </h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-400">
                C# • .NET • DevExpress • Gemini AI • QuestPDF
              </p>
              <p className="mt-2 text-xs text-slate-300">
                A Windows desktop application that parses PDF, DOCX and PPTX
                files and generates concise, structured study notes using Gemini
                AI. It handles file parsing, progress tracking and PDF
                generation in a single workflow.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Built with C# and .NET, using DevExpress for the UI</li>
                <li>Uses PdfPig and OpenXML to parse documents</li>
                <li>Generates clean study PDFs via QuestPDF</li>
              </ul>
              <div className="mt-3 text-xs">
                <a
                  href="https://github.com/MetehanSarica/Notoid"
                  target="_blank"
                  className="text-sky-400 underline-offset-2 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </article>

            {/* metehansarica.dev */}
            <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm">
              <h3 className="text-sm font-semibold text-slate-100">
                metehansarica.dev – Personal Portfolio
              </h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-400">
                Next.js • Tailwind CSS • Netlify • Custom Domain
              </p>
              <p className="mt-2 text-xs text-slate-300">
                A modern, responsive portfolio website to showcase my projects,
                skills and experience as a Junior .NET Developer. Deployed on
                Netlify with a custom domain and Google Analytics integration to
                track visitors and engagement.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Built with Next.js and Tailwind CSS</li>
                <li>Deployed via Netlify with CI/CD workflow</li>
                <li>Connected to metehansarica.dev custom domain</li>
              </ul>
              <div className="mt-3 text-xs">
                <a
                  href="https://metehansarica.dev"
                  target="_blank"
                  className="text-sky-400 underline-offset-2 hover:underline"
                >
                  Visit site
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14">
          <h2 className="text-xl font-semibold text-slate-50">Contact</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Feel free to reach out if you’d like to talk about a project, an
            internship opportunity, or just connect.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-100">
                Get in touch
              </h3>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>
                  📧 Email:{" "}
                  <a
                    href="mailto:metehansrc23@gmail.com"
                    className="text-sky-400 underline-offset-2 hover:underline"
                  >
                    metehansrc23@gmail.com
                  </a>
                </li>
                <li>
                  💼 LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/metehan-sar%C4%B1ca-09b27a269/"
                    target="_blank"
                    className="text-sky-400 underline-offset-2 hover:underline"
                  >
                    linkedin.com/in/metehan-sarıca-09b27a269
                  </a>
                </li>
                <li>
                  🐙 GitHub:{" "}
                  <a
                    href="https://github.com/MetehanSarica"
                    target="_blank"
                    className="text-sky-400 underline-offset-2 hover:underline"
                  >
                    github.com/MetehanSarica
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-300">
              <p>
                I usually respond fastest via{" "}
                <span className="font-semibold text-slate-100">email</span> or{" "}
                <span className="font-semibold text-slate-100">LinkedIn</span>.
                If you’d like a copy of my CV or want to discuss a role, feel
                free to send me a message.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-5 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Metehan Sarıca · Built with Next.js,
        Tailwind and a lot of C#.
      </footer>
    </div>
  );
}

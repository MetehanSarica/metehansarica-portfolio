"use client";

import { RevealOnScroll } from "@/components/RevealOnScroll";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { Background } from "@/components/Background";
import { CodeWindow } from "@/components/CodeWindow";
import { Terminal, Cpu, Zap, Layers, Wrench, Layout, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { TypingText } from "@/components/animations/TypingText";
import { HoverCard } from "@/components/animations/HoverCard";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen selection:bg-violet-500/30">
      <Background />

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-[#2A2040] bg-[#121019]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center border border-violet-500/50 bg-violet-500/10">
              <span className="font-mono text-xs font-bold text-violet-400">&lt;/&gt;</span>
            </div>
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-violet-100 uppercase">
              METEHANSARICA.DEV
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {["home", "about", "skills", "projects", "contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item}`}
                className="flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-[#6B5F8A] transition-colors hover:text-violet-400"
              >
                <span className="text-violet-500/40">{String(i).padStart(2, "0")}.</span>
                {t.nav[item as keyof typeof t.nav]}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-20">
        {/* ── HERO ── */}
        <section
          id="home"
          className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 md:grid-cols-[1fr_420px]"
        >
          <RevealOnScroll>
            <div className="relative z-10">
              {/* Status badge */}
              <div className="mb-8 flex items-center gap-4">
                <div className="inline-flex items-center gap-2 border border-fuchsia-500/30 bg-fuchsia-500/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  </span>
                  {t.hero.role}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#2A2040] to-transparent" />
              </div>

              <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4A4068]">
                {t.hero.greeting}
              </p>
              <h1 className="mb-6 text-5xl font-black leading-none tracking-tight text-white md:text-7xl">
                <TypingText text="Metehan" />
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Sarıca
                </span>
              </h1>

              {/* Tech stack strip */}
              <div className="mb-8 flex w-fit flex-wrap items-center divide-x divide-[#2A2040] border border-[#2A2040]">
                {["C#", ".NET 8", "RUST", "TAURI"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 font-mono text-[10px] text-[#6B5F8A]">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-10 max-w-lg text-sm leading-relaxed text-[#A89BC8]">
                {t.hero.description_part1}{" "}
                <span className="font-semibold text-violet-100">{t.hero.description_highlight1}</span>{" "}
                {t.hero.description_part2}
                <span className="text-violet-400"> C#</span>,{" "}
                <span className="text-violet-400">.NET</span>,{" "}
                <span className="text-violet-400">DevExpress</span>{" "}
                {t.hero.description_part3} <span className="text-violet-400">SQL Server</span>.{" "}
                {t.hero.description_part4}{" "}
                <span className="text-fuchsia-400">{t.hero.description_highlight2}</span>{" "}
                {t.hero.description_part5}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 border border-violet-400 bg-violet-500 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-violet-400"
                >
                  <Layout size={13} />
                  {t.hero.viewProjects}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-[#3A2D5A] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest text-violet-200 transition-all hover:border-violet-500/60 hover:text-violet-400"
                >
                  {t.hero.contactMe}
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative z-10">
              <div className="absolute -inset-3 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 blur-2xl" />
              <div className="relative border border-[#2A2040]/70">
                <CodeWindow />
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20">
          <RevealOnScroll>
            <div className="mb-10 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-violet-400">[01]</span>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-violet-200">
                // {t.about.title}
              </span>
              <div className="h-px flex-1 bg-[#2A2040]" />
            </div>

            <div className="grid gap-3 md:grid-cols-[1fr_240px]">
              {/* Main text block — terminal prompt paragraphs */}
              <div className="border border-[#2A2040] bg-[#1A1625] p-8">
                <div className="space-y-0">
                  {t.about.paragraphs.map((para, i) => (
                    <div key={i} className="group flex gap-3 border-b border-[#2A2040]/60 py-5 last:border-0">
                      <span className="mt-0.5 shrink-0 select-none font-mono text-xs font-bold text-fuchsia-500/60">
                        {">"}
                      </span>
                      <p className="text-sm leading-relaxed text-[#A89BC8]">{para}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus sidebar */}
              <div className="flex flex-col gap-3">
                <div className="flex-1 border border-[#2A2040] bg-[#1A1625] p-6">
                  <h3 className="mb-5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#6B5F8A]">
                    <Terminal size={11} className="text-violet-400" />
                    {t.about.currentFocus}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { text: t.about.focus_list[0], color: "bg-fuchsia-400", pulse: true },
                      { text: t.about.focus_list[1], color: "bg-violet-400", pulse: false },
                      { text: t.about.focus_list[2], color: "bg-cyan-400", pulse: false },
                    ].map(({ text, color, pulse }, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${color} ${pulse ? "animate-pulse" : ""}`} />
                        <span className="font-mono text-[11px] leading-relaxed text-[#A89BC8]">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-[#2A2040] bg-[#1A1625] p-5">
                  <p className="font-mono text-[10px] italic leading-relaxed text-[#4A4068]">{t.about.quote}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-20">
          <RevealOnScroll>
            <div className="mb-10 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-violet-400">[02]</span>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-violet-200">
                // {t.skills.title}
              </span>
              <div className="h-px flex-1 bg-[#2A2040]" />
            </div>

            <div className="grid grid-cols-12 gap-3">
              {/* CORE & BACKEND — 5 cols */}
              <div className="col-span-12 border border-[#2A2040] border-t-[2px] border-t-violet-500 bg-[#1A1625] p-6 md:col-span-5">
                <div className="mb-4 flex items-center gap-2">
                  <Cpu size={13} className="text-violet-400" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-violet-500/80">
                    {t.skills.core.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.core.items.map((item, i) => (
                    <span key={i} className="border border-violet-500/25 bg-violet-500/5 px-3 py-1.5 font-mono text-[11px] text-violet-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* DESKTOP & FRONTEND — 7 cols */}
              <div className="col-span-12 border border-[#2A2040] border-t-[2px] border-t-fuchsia-500 bg-[#1A1625] p-6 md:col-span-7">
                <div className="mb-4 flex items-center gap-2">
                  <Layers size={13} className="text-fuchsia-400" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-fuchsia-500/80">
                    {t.skills.desktop.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.desktop.items.map((item, i) => (
                    <span key={i} className="border border-fuchsia-500/25 bg-fuchsia-500/5 px-3 py-1.5 font-mono text-[11px] text-fuchsia-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & AUTOMATION — 7 cols */}
              <div className="col-span-12 border border-[#2A2040] border-t-[2px] border-t-purple-400 bg-[#1A1625] p-6 md:col-span-7">
                <div className="mb-4 flex items-center gap-2">
                  <Zap size={13} className="text-purple-400" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-purple-400/80">
                    {t.skills.ai.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.ai.items.map((item, i) => (
                    <span key={i} className="border border-purple-400/25 bg-purple-400/5 px-3 py-1.5 font-mono text-[11px] text-purple-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ARCHITECTURE & TOOLS — 5 cols */}
              <div className="col-span-12 border border-[#2A2040] border-t-[2px] border-t-cyan-400 bg-[#1A1625] p-6 md:col-span-5">
                <div className="mb-4 flex items-center gap-2">
                  <Wrench size={13} className="text-cyan-400" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-400/80">
                    {t.skills.arch.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.arch.items.map((item, i) => (
                    <span key={i} className="border border-cyan-400/25 bg-cyan-400/5 px-3 py-1.5 font-mono text-[11px] text-cyan-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-20">
          <RevealOnScroll>
            <div className="mb-10 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-violet-400">[03]</span>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-violet-200">
                // {t.projects.title}
              </span>
              <div className="h-px flex-1 bg-[#2A2040]" />
            </div>

            <div className="grid grid-cols-12 gap-3">
              {/* Storiva — full width featured */}
              <HoverCard className="col-span-12">
                <div className="border border-[#2A2040] border-l-[3px] border-l-violet-500 bg-[#1A1625]">
                  <div className="grid md:grid-cols-[1fr_180px]">
                    <div className="p-8">
                      <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-violet-500/50">
                        PROJECT_01
                      </p>
                      <h3 className="mb-1 text-2xl font-black text-violet-100">{t.projects.storiva.title}</h3>
                      <p className="mb-6 font-mono text-[10px] text-[#4A4068]">{t.projects.storiva.subtitle}</p>
                      <p className="mb-6 text-sm leading-relaxed text-[#A89BC8]">{t.projects.storiva.desc}</p>
                      <ul className="space-y-2">
                        {t.projects.storiva.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#6B5F8A]">
                            <span className="shrink-0 font-mono text-violet-500/50">›</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden flex-col justify-between border-l border-[#2A2040] p-6 md:flex">
                      <div className="space-y-2">
                        {["C#", ".NET 8", "DEVEXPRESS", "SQL SERVER", "AI"].map((tag) => (
                          <div key={tag} className="border-b border-[#2A2040] pb-2 font-mono text-[10px] text-[#4A4068]">
                            {tag}
                          </div>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] uppercase text-[#3A3058]">WIP</span>
                    </div>
                  </div>
                </div>
              </HoverCard>

              {/* Notoid — 7 cols */}
              <HoverCard className="col-span-12 md:col-span-7">
                <div className="h-full border border-[#2A2040] border-l-[3px] border-l-fuchsia-500 bg-[#1A1625]">
                  <div className="p-7">
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-fuchsia-500/50">
                      PROJECT_02
                    </p>
                    <h3 className="mb-1 text-xl font-black text-violet-100">{t.projects.notoid.title}</h3>
                    <p className="mb-5 font-mono text-[10px] text-[#4A4068]">{t.projects.notoid.subtitle}</p>
                    <p className="mb-5 text-sm leading-relaxed text-[#A89BC8]">{t.projects.notoid.desc}</p>
                    <ul className="mb-6 space-y-2">
                      {t.projects.notoid.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#6B5F8A]">
                          <span className="shrink-0 font-mono text-fuchsia-500/50">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://github.com/MetehanSarica/Notoid"
                      className="inline-flex items-center gap-1.5 border border-fuchsia-500/30 bg-fuchsia-500/5 px-4 py-2 font-mono text-[11px] font-bold text-fuchsia-400 transition-all hover:bg-fuchsia-500/10"
                    >
                      <Github size={12} />
                      {t.projects.notoid.link}
                      <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>
              </HoverCard>

              {/* Portfolio — 5 cols */}
              <HoverCard className="col-span-12 md:col-span-5">
                <div className="h-full border border-[#2A2040] border-l-[3px] border-l-cyan-400 bg-[#1A1625]">
                  <div className="p-7">
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400/50">
                      PROJECT_03
                    </p>
                    <h3 className="mb-1 text-xl font-black text-violet-100">{t.projects.portfolio.title}</h3>
                    <p className="mb-5 font-mono text-[10px] text-[#4A4068]">{t.projects.portfolio.subtitle}</p>
                    <p className="mb-5 text-sm leading-relaxed text-[#A89BC8]">{t.projects.portfolio.desc}</p>
                    <ul className="mb-6 space-y-2">
                      {t.projects.portfolio.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#6B5F8A]">
                          <span className="shrink-0 font-mono text-cyan-400/50">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 font-mono text-[11px] font-bold text-cyan-400 transition-all hover:bg-cyan-400/10"
                    >
                      <ArrowUpRight size={12} />
                      {t.projects.portfolio.link}
                    </a>
                  </div>
                </div>
              </HoverCard>

              {/* Saku Kaze — 6 cols */}
              <HoverCard className="col-span-12 md:col-span-6">
                <div className="h-full border border-[#2A2040] border-l-[3px] border-l-purple-400 bg-[#1A1625]">
                  <div className="p-7">
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-purple-400/50">
                      PROJECT_04
                    </p>
                    <h3 className="mb-1 text-xl font-black text-violet-100">{t.projects.sakuKaze.title}</h3>
                    <p className="mb-5 font-mono text-[10px] text-[#4A4068]">{t.projects.sakuKaze.subtitle}</p>
                    <p className="mb-5 text-sm leading-relaxed text-[#A89BC8]">{t.projects.sakuKaze.desc}</p>
                    <ul className="mb-6 space-y-2">
                      {t.projects.sakuKaze.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#6B5F8A]">
                          <span className="shrink-0 font-mono text-purple-400/50">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://github.com/MetehanSarica/saku-kaze"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-purple-400/30 bg-purple-400/5 px-4 py-2 font-mono text-[11px] font-bold text-purple-300 transition-all hover:bg-purple-400/10"
                    >
                      <Github size={12} />
                      {t.projects.sakuKaze.link}
                      <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>
              </HoverCard>

              {/* S.A.K.U. — 6 cols */}
              <HoverCard className="col-span-12 md:col-span-6">
                <div className="h-full border border-[#2A2040] border-l-[3px] border-l-indigo-400 bg-[#1A1625]">
                  <div className="p-7">
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-400/50">
                      PROJECT_05
                    </p>
                    <h3 className="mb-1 text-xl font-black text-violet-100">{t.projects.saku.title}</h3>
                    <p className="mb-5 font-mono text-[10px] text-[#4A4068]">{t.projects.saku.subtitle}</p>
                    <p className="mb-5 text-sm leading-relaxed text-[#A89BC8]">{t.projects.saku.desc}</p>
                    <ul className="space-y-2">
                      {t.projects.saku.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#6B5F8A]">
                          <span className="shrink-0 font-mono text-indigo-400/50">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </HoverCard>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20">
          <RevealOnScroll>
            <div className="mb-10 flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-violet-400">[04]</span>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-violet-200">
                // {t.contact.title}
              </span>
              <div className="h-px flex-1 bg-[#2A2040]" />
            </div>

            {/* Fixed 260px sidebar — identical width regardless of locale text length */}
            <div className="grid gap-3 md:grid-cols-[1fr_260px]">
              <div className="border border-[#2A2040] bg-[#1A1625] p-8">
                <p className="max-w-lg text-sm leading-relaxed text-[#A89BC8]">{t.contact.text}</p>
              </div>
              <div className="flex flex-col gap-3">
                <HoverCard>
                  <a
                    href="mailto:metehansrc23@gmail.com"
                    className="group flex w-full items-center gap-3 border border-[#2A2040] bg-[#1A1625] px-6 py-4 transition-all hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5"
                  >
                    <Mail size={15} className="shrink-0 text-fuchsia-400" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#6B5F8A] group-hover:text-fuchsia-400">
                      {t.contact.email}
                    </span>
                  </a>
                </HoverCard>
                <HoverCard>
                  <a
                    href="https://www.linkedin.com/in/metehan-sar%C4%B1ca-09b27a269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center gap-3 border border-[#2A2040] bg-[#1A1625] px-6 py-4 transition-all hover:border-violet-500/40 hover:bg-violet-500/5"
                  >
                    <Linkedin size={15} className="shrink-0 text-violet-400" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#6B5F8A] group-hover:text-violet-400">
                      {t.contact.linkedin}
                    </span>
                  </a>
                </HoverCard>
                <HoverCard>
                  <a
                    href="https://github.com/MetehanSarica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center gap-3 border border-[#2A2040] bg-[#1A1625] px-6 py-4 transition-all hover:border-purple-400/40 hover:bg-purple-400/5"
                  >
                    <Github size={15} className="shrink-0 text-purple-400" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#6B5F8A] group-hover:text-purple-400">
                      {t.contact.github}
                    </span>
                  </a>
                </HoverCard>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>

      <footer className="border-t border-[#2A2040] bg-[#0D0B14] py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#4A4068]">
            © {new Date().getFullYear()} {t.footer_text}
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-[#2A2040]" />
            <span className="font-mono text-[10px] text-[#3A3058]">EOF</span>
          </div>
        </div>
      </footer>

      <InteractiveTerminal />
    </div>
  );
}

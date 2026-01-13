"use client";

import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TerminalWindow } from "@/components/TerminalWindow";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { Scene3D } from "@/components/Scene3D";
import { CodeWindow } from "@/components/CodeWindow";
import { Terminal, Cpu, Database, Layout, Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { TypingText } from "@/components/animations/TypingText";
import { StaggeredList, StaggeredItem } from "@/components/animations/StaggeredList";
import { HoverCard } from "@/components/animations/HoverCard";

export default function Home() {
  const { t } = useLanguage();

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
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-400 md:flex">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="transition-colors hover:text-sky-400"
              >
                {t.nav[item as keyof typeof t.nav]}
              </a>
            ))}
            <LanguageSwitcher />
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
                {t.hero.role}
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                <TypingText text={t.hero.greeting} /> <br />
                <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Metehan Sarıca
                </span>
              </h1>

              <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-400">
                {t.hero.description_part1} <span className="text-slate-200 font-semibold">{t.hero.description_highlight1}</span> {t.hero.description_part2}
                <span className="text-sky-400"> C#</span>, <span className="text-sky-400">.NET</span>, <span className="text-sky-400">DevExpress</span> {t.hero.description_part3} <span className="text-sky-400">SQL Server</span>.
                {t.hero.description_part4} <span className="text-emerald-400">{t.hero.description_highlight2}</span> {t.hero.description_part5}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200"
                >
                  <Layout size={18} />
                  {t.hero.viewProjects}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-400 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-10" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-slate-500 hover:bg-slate-800"
                >
                  {t.hero.contactMe}
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
                    <span className="text-emerald-400">01.</span> {t.about.title}
                  </h2>
                  <div className="space-y-4 text-slate-400">
                    <p>
                      {t.about.p1_part1}
                      <span className="text-sky-400 font-semibold"> {t.about.p1_highlight1}</span>,
                      <span className="text-sky-400 font-semibold"> {t.about.p1_highlight2}</span> {t.about.p1_part2} <span className="text-sky-400 font-semibold">{t.about.p1_highlight3}</span>.
                    </p>
                    <p>
                      {t.about.p2}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-white font-semibold mb-2">{t.about.whoIAm}</h3>
                      <p>
                        {t.about.whoIAm_text} <span className="text-emerald-400">{t.about.whoIAm_highlight}</span>,
                        {t.about.whoIAm_text2}
                      </p>
                      <p className="mt-2">
                        {t.about.currentWork_text} <span className="text-emerald-400">{t.about.currentWork_highlight}</span>,
                        {t.about.currentWork_text2}
                      </p>
                    </div>

                    <div className="mt-6 rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                      <h3 className="text-white font-semibold mb-2">{t.about.whatImLookingFor}</h3>
                      <p className="mb-2">{t.about.whatImLookingFor_text}</p>
                      <StaggeredList className="list-disc list-inside space-y-1 text-sm">
                        {t.about.lookingFor_list.map((item, i) => (
                          <StaggeredItem key={i}>{item}</StaggeredItem>
                        ))}
                      </StaggeredList>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 h-fit">
                  <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
                    <Terminal size={16} className="text-emerald-400" />
                    {t.about.currentFocus}
                  </h3>
                  <ul className="space-y-3 font-mono text-xs text-slate-400">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{t.about.focus_list[0]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{t.about.focus_list[1]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>{t.about.focus_list[2]}</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-xs text-slate-500 italic">{t.about.quote}</p>
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
                <span className="text-emerald-400">02.</span> {t.skills.title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <TerminalWindow title="Languages & Frameworks" className="md:col-span-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-sky-400" size={24} />
                    <h3 className="font-semibold text-white">{t.skills.stack}</h3>
                  </div>
                  <StaggeredList className="space-y-2 font-mono text-xs text-slate-400">
                    {t.skills.stack_list.map((item, i) => <StaggeredItem key={i}>{item}</StaggeredItem>)}
                  </StaggeredList>
                </div>
              </TerminalWindow>

              <TerminalWindow title="Tools & Technologies" className="md:col-span-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Database className="text-amber-400" size={24} />
                    <h3 className="font-semibold text-white">{t.skills.tools}</h3>
                  </div>
                  <StaggeredList className="space-y-2 font-mono text-xs text-slate-400">
                    {t.skills.tools_list.map((item, i) => <StaggeredItem key={i}>{item}</StaggeredItem>)}
                  </StaggeredList>
                </div>
              </TerminalWindow>

              <TerminalWindow title="Other Interests" className="md:col-span-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Layout className="text-pink-400" size={24} />
                    <h3 className="font-semibold text-white">{t.skills.interests}</h3>
                  </div>
                  <StaggeredList className="space-y-2 font-mono text-xs text-slate-400">
                    {t.skills.interests_list.map((item, i) => <StaggeredItem key={i}>{item}</StaggeredItem>)}
                  </StaggeredList>
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
                <span className="text-emerald-400">03.</span> {t.projects.title}
              </h2>
            </div>

            <div className="space-y-12">
              {/* Project 1 */}
              <HoverCard>
                <TerminalWindow title="Storiva - Smart Inventory">
                  <div className="relative p-2">
                    <div className="flex flex-col justify-center">
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-white">{t.projects.storiva.title}</h3>
                        <p className="font-mono text-xs text-sky-400 mt-1">{t.projects.storiva.subtitle}</p>
                      </div>

                      <div className="mb-6 rounded-md bg-slate-900/50 p-6 text-base leading-relaxed text-slate-400 border border-slate-700/50">
                        <p>{t.projects.storiva.desc}</p>
                        <StaggeredList className="mt-4 list-disc list-inside space-y-1 text-sm text-slate-300">
                          {t.projects.storiva.bullets.map((item, i) => <StaggeredItem key={i}>{item}</StaggeredItem>)}
                        </StaggeredList>
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              </HoverCard>

              {/* Project 2 */}
              <HoverCard>
                <TerminalWindow title="Notoid - AI Study Assistant">
                  <div className="relative p-2">
                    <div className="flex flex-col justify-center">
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-white">{t.projects.notoid.title}</h3>
                        <p className="font-mono text-xs text-sky-400 mt-1">{t.projects.notoid.subtitle}</p>
                      </div>

                      <div className="mb-6 rounded-md bg-slate-900/50 p-6 text-base leading-relaxed text-slate-400 border border-slate-700/50">
                        <p>{t.projects.notoid.desc}</p>
                        <StaggeredList className="mt-4 list-disc list-inside space-y-1 text-sm text-slate-300">
                          {t.projects.notoid.bullets.map((item, i) => <StaggeredItem key={i}>{item}</StaggeredItem>)}
                        </StaggeredList>
                      </div>

                      <div className="flex gap-4">
                        <a href="https://github.com/MetehanSarica/Notoid" className="font-mono text-sm font-semibold text-white hover:text-sky-400 hover:underline">
                          {t.projects.notoid.link}
                        </a>
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              </HoverCard>

              {/* Project 3 */}
              <HoverCard>
                <TerminalWindow title="metehansarica.dev - Portfolio">
                  <div className="relative p-2">
                    <div className="flex flex-col justify-center">
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-white">{t.projects.portfolio.title}</h3>
                        <p className="font-mono text-xs text-sky-400 mt-1">{t.projects.portfolio.subtitle}</p>
                      </div>

                      <div className="mb-6 rounded-md bg-slate-900/50 p-6 text-base leading-relaxed text-slate-400 border border-slate-700/50">
                        <p>{t.projects.portfolio.desc}</p>
                        <StaggeredList className="mt-4 list-disc list-inside space-y-1 text-sm text-slate-300">
                          {t.projects.portfolio.bullets.map((item, i) => <StaggeredItem key={i}>{item}</StaggeredItem>)}
                        </StaggeredList>
                      </div>

                      <div className="flex gap-4">
                        <a href="#" className="font-mono text-sm font-semibold text-white hover:text-sky-400 hover:underline">
                          {t.projects.portfolio.link}
                        </a>
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              </HoverCard>
            </div>
          </RevealOnScroll>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <RevealOnScroll>
            <h2 className="mb-4 text-4xl font-bold text-white">
              <span className="text-emerald-400">04.</span> {t.contact.title}
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-slate-400">
              {t.contact.text}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <HoverCard>
                <a
                  href="mailto:metehansrc23@gmail.com"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <div className="rounded-full bg-slate-800 p-2 text-slate-300 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <Mail size={20} />
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-300 group-hover:text-emerald-400">
                    {t.contact.email}
                  </span>
                </a>
              </HoverCard>

              <HoverCard>
                <a
                  href="https://www.linkedin.com/in/metehan-sar%C4%B1ca-09b27a269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="rounded-full bg-slate-800 p-2 text-slate-300 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-300 group-hover:text-blue-400">
                    {t.contact.linkedin}
                  </span>
                </a>
              </HoverCard>

              <HoverCard>
                <a
                  href="https://github.com/MetehanSarica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  <div className="rounded-full bg-slate-800 p-2 text-slate-300 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                    <Github size={20} />
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-300 group-hover:text-violet-400">
                    {t.contact.github}
                  </span>
                </a>
              </HoverCard>
            </div>
          </RevealOnScroll>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-[#0a0a0a] py-8 text-center text-slate-500">
        <p>© {new Date().getFullYear()} {t.footer_text}</p>
      </footer>

      <InteractiveTerminal />
    </div>
  );
}

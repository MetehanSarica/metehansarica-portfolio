"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface CommandHistory {
    type: "input" | "output";
    content: string;
}

export const InteractiveTerminal = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandHistory[]>([
        { type: "output", content: t.terminal.welcome },
    ]);
    const [currentDirectory, setCurrentDirectory] = useState("~");
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history, isOpen]);

    // Focus input on click
    const focusInput = () => {
        inputRef.current?.focus();
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const args = trimmedCmd.split(" ");
        const command = args[0];
        const argument = args[1];

        let output = "";

        switch (command) {
            case "help":
                output = `${t.terminal.help_header}
${t.terminal.help_cols}`;
                break;
            case "ls":
            case "dir":
                output = "home/  about/  skills/  projects/  contact/  resume.pdf";
                break;
            case "cd":
                if (!argument) {
                    output = t.terminal.usage_cd;
                } else {
                    const section = document.getElementById(argument);
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        output = `${t.terminal.navigating} ${argument}...`;
                        setCurrentDirectory(`~/${argument}`);
                    } else if (argument === "..") {
                        setCurrentDirectory("~");
                        output = t.terminal.returned_home;
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                        output = `${t.terminal.dir_not_found}: ${argument}. ${t.terminal.try_help}`;
                    }
                }
                break;
            case "cat":
                if (!argument) {
                    output = t.terminal.usage_cat;
                } else {
                    switch (argument) {
                        case "about": output = t.terminal.cat_about; break;
                        case "skills": output = t.terminal.cat_skills; break;
                        case "projects": output = t.terminal.cat_projects; break;
                        case "contact": output = t.terminal.cat_contact; break;
                        case "resume.pdf": output = t.terminal.cat_resume_error; break;
                        default: output = `${t.terminal.file_not_found}: ${argument}`;
                    }
                }
                break;
            case "whoami":
                output = t.terminal.whoami;
                break;
            case "date":
                output = new Date().toString();
                break;
            case "clear":
            case "cls":
                setHistory([]);
                return; // Early return to avoid adding the command to history
            case "open":
            case "github":
            case "linkedin":
            case "email":
                if (command === "github" || argument === "github") {
                    window.open("https://github.com/MetehanSarica", "_blank");
                    output = `${t.terminal.opening} GitHub...`;
                } else if (command === "linkedin" || argument === "linkedin") {
                    window.open("https://www.linkedin.com/in/metehan-sar%C4%B1ca-09b27a269/", "_blank");
                    output = `${t.terminal.opening} LinkedIn...`;
                } else if (command === "email" || argument === "email") {
                    window.location.href = "mailto:metehansrc23@gmail.com";
                    output = `${t.terminal.opening} Mail Client...`;
                } else {
                    output = t.terminal.usage_open;
                }
                break;
            case "repo":
                window.open("https://github.com/MetehanSarica/metehansarica-portfolio", "_blank"); // Assuming repo name
                output = `${t.terminal.opening} Repository...`;
                break;
            case "":
                output = "";
                break;
            default:
                output = `${t.terminal.cmd_not_found}: ${command}. ${t.terminal.try_help}`;
        }

        setHistory((prev) => [
            ...prev,
            { type: "input", content: `${currentDirectory} $ ${cmd}` },
            { type: "output", content: output },
        ]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCommand(input);
            setInput("");
        }
    };

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-emerald-400 shadow-xl shadow-emerald-500/20 border border-emerald-500/30"
                >
                    <Terminal size={24} />
                </motion.button>
            )}

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            height: isMinimized ? "auto" : "400px",
                            width: isMinimized ? "300px" : "min(600px, 90vw)"
                        }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className={`fixed bottom-6 right-6 z-50 overflow-hidden rounded-lg border border-slate-700 bg-[#1e1e1e] shadow-2xl shadow-black/50 flex flex-col`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-700 bg-[#2d2d2d] px-4 py-2 cursor-move">
                            <div className="flex items-center gap-2">
                                <Terminal size={14} className="text-emerald-400" />
                                <span className="text-xs font-mono font-medium text-slate-300">visitor@metehansarica.dev:~</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-slate-400 hover:text-white"
                                >
                                    {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-400 hover:text-red-400"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        {!isMinimized && (
                            <div
                                className="flex-1 overflow-y-auto p-4 font-mono text-xs md:text-sm text-slate-300 scrollbar-thin scrollbar-thumb-slate-700"
                                onClick={focusInput}
                            >
                                {history.map((entry, index) => (
                                    <div key={index} className="mb-2 whitespace-pre-wrap leading-relaxed">
                                        {entry.type === "input" ? (
                                            <span className="text-slate-500">{entry.content}</span>
                                        ) : (
                                            <span className="text-emerald-300">{entry.content}</span>
                                        )}
                                    </div>
                                ))}

                                {/* Input Line */}
                                <div className="flex items-center gap-2 text-emerald-400">
                                    <span>{currentDirectory} $</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder-slate-600"
                                        autoFocus
                                    />
                                    <div className="w-2 h-4 bg-emerald-400 animate-pulse"></div>
                                </div>
                                <div ref={bottomRef} />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

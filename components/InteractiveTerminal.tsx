"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, X, Minimize2, Maximize2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandHistory {
    type: "input" | "output";
    content: string;
}

export const InteractiveTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandHistory[]>([
        { type: "output", content: "Welcome to Metehan's Terminal. Type 'help' to see available commands." },
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
                output = `Available commands:
  help      - Show this help message
  ls        - List sections
  cd [sec]  - Go to section (about, skills, projects, contact)
  cat [sec] - Read usage/content of section
  open [social] - Open links (github, linkedin, email, resume)
  whoami    - Display bio
  date      - Show current date
  clear     - Clear terminal
  repo      - View source code`;
                break;
            case "ls":
            case "dir":
                output = "home/  about/  skills/  projects/  contact/  resume.pdf";
                break;
            case "cd":
                if (!argument) {
                    output = "Usage: cd [section] (e.g., 'cd projects')";
                } else {
                    const section = document.getElementById(argument);
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        output = `Navigating to ${argument}...`;
                        setCurrentDirectory(`~/${argument}`);
                    } else if (argument === "..") {
                        setCurrentDirectory("~");
                        output = "Returned to home.";
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                        output = `Directory not found: ${argument}. Try 'ls'.`;
                    }
                }
                break;
            case "cat":
                if (!argument) {
                    output = "Usage: cat [file]";
                } else {
                    switch (argument) {
                        case "about": output = "Creating reliable software with clean architecture."; break;
                        case "skills": output = "C# .NET, SQL Server, DevExpress, AI Integration..."; break;
                        case "projects": output = "Storiva, Notoid, and this Portfolio."; break;
                        case "contact": output = "Email: metehansrc23@gmail.com"; break;
                        case "resume.pdf": output = "Error: Binary file not printable. Try 'open resume'."; break;
                        default: output = `File not found: ${argument}`;
                    }
                }
                break;
            case "whoami":
                output = "Metehan Sarıca - Junior .NET Developer | Student | Automation Enthusiast";
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
                    output = "Opening GitHub...";
                } else if (command === "linkedin" || argument === "linkedin") {
                    window.open("https://www.linkedin.com/in/metehan-sar%C4%B1ca-09b27a269/", "_blank");
                    output = "Opening LinkedIn...";
                } else if (command === "email" || argument === "email") {
                    window.location.href = "mailto:metehansrc23@gmail.com";
                    output = "Opening Mail Client...";
                } else {
                    output = "Usage: open [github|linkedin|email]";
                }
                break;
            case "repo":
                window.open("https://github.com/MetehanSarica/metehansarica-portfolio", "_blank"); // Assuming repo name
                output = "Opening Repository...";
                break;
            case "":
                output = "";
                break;
            default:
                output = `Command not found: ${command}. Type 'help' for available commands.`;
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

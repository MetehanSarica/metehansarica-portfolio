"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Maximize2, Minus, X } from "lucide-react";

const csharpCode = `using System;
using System.Threading.Tasks;
using Metehan.Skills;

namespace Portfolio
{
    public class Developer
    {
        public string Name { get; } = "Metehan Sarıca";
        public string Role { get; } = "Junior .NET Developer";

        public async Task CreateAmazingApps()
        {
            var skills = new[] 
            { 
                "C#", ".NET 8", "SQL Server", 
                "DevExpress", "AI Integration" 
            };

            foreach (var skill in skills)
            {
                await LearnAndMaster(skill);
            }

            // Always shipping high quality code
            await DeployToProduction();
        }
    }
}`;

export const CodeWindow = () => {
    const [displayedCode, setDisplayedCode] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= csharpCode.length) {
                setDisplayedCode(csharpCode.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, 30); // Typing speed

        return () => clearInterval(typingInterval);
    }, []);

    // Simple syntax highlighting helper
    const highlightSyntax = (code: string) => {
        return code.split(/(\s+)/).map((token, index) => {
            if (["using", "namespace", "public", "class", "string", "async", "Task", "var", "new", "foreach", "in", "await", "return", "int", "void"].includes(token)) 
                return <span key={index} className="text-pink-400">{token}</span>;
            if (token.startsWith('"') && token.endsWith('"')) 
                return <span key={index} className="text-amber-300">{token}</span>;
            if (["Developer", "Metehan", "Skills", "Portfolio", "Console", "System", "Threading", "Tasks"].includes(token)) 
                return <span key={index} className="text-emerald-400">{token}</span>;
             if (["Name", "Role", "CreateAmazingApps", "LearnAndMaster", "DeployToProduction"].includes(token)) 
                return <span key={index} className="text-sky-300">{token}</span>;
            if (token.startsWith("//")) 
                return <span key={index} className="text-slate-500">{token}</span>;
            
            return <span key={index} className="text-slate-300">{token}</span>;
        });
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-slate-700 bg-[#1e1e1e] shadow-2xl shadow-black/50"
        >
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#252526] px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-sky-400">Developer.cs</span>
                </div>
                <div className="flex gap-2">
                    <Minus size={14} className="cursor-pointer text-slate-400 hover:text-white" />
                    <Maximize2 size={13} className="cursor-pointer text-slate-400 hover:text-white" />
                    <X size={14} className="cursor-pointer text-slate-400 hover:text-red-400" />
                </div>
            </div>

            {/* Code Content */}
            <div className="relative p-4 font-mono text-sm leading-relaxed md:text-[13px]">
                <div className="absolute left-0 top-4 flex w-8 flex-col items-end gap-[2px] pr-2 text-xs text-slate-600 select-none">
                    {displayedCode.split("\n").map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>
                <pre className="ml-6 whitespace-pre-wrap break-words">
                   {highlightSyntax(displayedCode)}
                   {isTyping && <span className="animate-pulse text-sky-400">|</span>}
                </pre>
            </div>
        </motion.div>
    );
};

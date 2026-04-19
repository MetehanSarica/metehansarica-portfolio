"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalProps {
    title: string;
    children: ReactNode;
    className?: string;
}

export const TerminalWindow = ({ title, children, className = "" }: TerminalProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`w-full overflow-hidden border border-[#2A2040] bg-[#1A1625] shadow-2xl shadow-black/60 ${className}`}
        >
            {/* Terminal Header */}
            <div className="relative flex items-center justify-between border-b border-[#2A2040] bg-[#150F20] px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#3A2040]" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#2A2050]" />
                        <div className="h-2.5 w-2.5 rounded-full bg-violet-800/60" />
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 max-w-[60%] truncate font-mono text-[10px] font-semibold text-[#4A4068]">
                    {title}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
                {children}
            </div>
        </motion.div>
    );
};

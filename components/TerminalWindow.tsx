"use client";

import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";
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
            className={`w-full overflow-hidden rounded-xl border border-slate-800 bg-[#1e1e1e] shadow-2xl shadow-black/50 ${className}`}
        >
            {/* Terminal Header */}
            <div className="relative flex items-center justify-between border-b border-slate-800 bg-[#2d2d2d] px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                        <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 max-w-[60%] truncate text-xs font-semibold text-slate-400">
                    {title}
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8">
                {children}
            </div>
        </motion.div>
    );
};

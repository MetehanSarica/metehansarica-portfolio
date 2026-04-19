"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="relative flex items-center gap-1 border border-[#2A2040] bg-[#1A1625] p-1">
            {(["tr", "en"] as const).map((lang) => (
                <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="relative z-10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors"
                    style={{ color: language === lang ? "#EDE9FE" : "#4A4068" }}
                >
                    {language === lang && (
                        <motion.div
                            layoutId="active-lang"
                            className="absolute inset-0 -z-10 bg-violet-600/60"
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                    )}
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

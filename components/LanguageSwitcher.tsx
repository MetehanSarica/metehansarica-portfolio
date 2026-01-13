"use client";

import { useLanguage } from "@/context/LanguageContext";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 relative">
            {(["tr", "en"] as const).map((lang) => (
                <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={clsx(
                        "relative z-10 rounded-full px-3 py-1 text-xs font-medium transition-colors",
                        language === lang ? "text-white" : "text-slate-400 hover:text-white"
                    )}
                >
                    {language === lang && (
                        <motion.div
                            layoutId="active-lang"
                            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 shadow-lg shadow-sky-500/20"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/translations";

type Language = "en" | "tr";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "tr")) {
            setLanguage(savedLang);
            document.documentElement.lang = savedLang;
        } else {
            // Optional: auto-detect browser language
            const browserLang = navigator.language.startsWith('tr') ? 'tr' : 'en';
            setLanguage(browserLang);
            document.documentElement.lang = browserLang;
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
        document.documentElement.lang = lang;
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage: handleSetLanguage,
                t: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

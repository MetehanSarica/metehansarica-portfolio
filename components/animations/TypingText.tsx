"use client";

import { motion } from "framer-motion";

type TypingTextProps = {
    text: string;
    className?: string;
    delay?: number;
};

export function TypingText({ text, className, delay = 0 }: TypingTextProps) {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        show: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: i * 0.1 },
        }),
    };

    const child = {
        hidden: { opacity: 0, y: 5 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            animate="show" // Use animate instead of whileInView for hero text to start immediately
            custom={delay}
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}

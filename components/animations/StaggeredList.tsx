"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggeredListProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

const container = {
    hidden: { opacity: 0 },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 50 } },
};

export function StaggeredList({
    children,
    className,
    delay = 0,
}: StaggeredListProps) {
    return (
        <motion.ul
            className={className}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={delay}
        >
            {children}
        </motion.ul>
    );
}

export function StaggeredItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.li variants={item} className={className}>
            {children}
        </motion.li>
    );
}

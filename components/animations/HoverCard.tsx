"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HoverCardProps = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
};

export function HoverCard({ children, className, onClick }: HoverCardProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}

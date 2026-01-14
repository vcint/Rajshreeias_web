"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloatingElementProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export function FloatingElement({
    children,
    className,
    delay = 0,
    duration = 3,
    yOffset = 10,
}: FloatingElementProps) {
    return (
        <motion.div
            className={cn(className)}
            animate={{
                y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

interface PulseElementProps {
    children: ReactNode;
    className?: string;
}

export function PulseElement({ children, className }: PulseElementProps) {
    return (
        <motion.div
            className={cn(className)}
            animate={{
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}

interface GlowingBorderProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export function GlowingBorder({
    children,
    className,
    glowColor = "rgba(217, 161, 91, 0.5)",
}: GlowingBorderProps) {
    return (
        <motion.div
            className={cn("relative", className)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="absolute -inset-0.5 rounded-2xl opacity-0 blur-sm"
                style={{ background: glowColor }}
                animate={{
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <div className="relative">{children}</div>
        </motion.div>
    );
}

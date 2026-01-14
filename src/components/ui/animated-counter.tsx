"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    decimals?: number;
}

export function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
    className,
    decimals = 0,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!isInView || hasAnimated) return;

        setHasAnimated(true);
        const startTime = Date.now();
        const endTime = startTime + duration;

        const tick = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function - easeOutExpo for smooth deceleration
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = end * easeOutExpo;

            setCount(currentValue);

            if (now < endTime) {
                requestAnimationFrame(tick);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(tick);
    }, [isInView, end, duration, hasAnimated]);

    const formattedCount =
        decimals > 0
            ? count.toFixed(decimals)
            : Math.floor(count).toLocaleString();

    return (
        <motion.span
            ref={ref}
            className={cn("tabular-nums", className)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {prefix}
            {formattedCount}
            {suffix}
        </motion.span>
    );
}

// Variant with individual digit flip animation
export function FlipCounter({
    value,
    className,
}: {
    value: string;
    className?: string;
}) {
    return (
        <span className={cn("inline-flex", className)}>
            {value.split("").map((char, index) => (
                <motion.span
                    key={`${index}-${char}`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        ease: "easeOut",
                    }}
                    className="inline-block"
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}
